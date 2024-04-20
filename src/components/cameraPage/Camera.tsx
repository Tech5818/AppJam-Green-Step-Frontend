import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useResult } from "../../store/Result";

export const Camera: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const { setData } = useResult();

  const { mutate } = useMutation({
    mutationFn: async (blob: Blob) => {
      const formData = new FormData();
      formData.append("file", blob, "photo.jpg"); // "file"은 백엔드에서 기대하는 이름이고, "photo.jpg"는 파일 이름입니다.

      const response = await axios.post(
        "http://172.16.20.120:5000/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 올바른 Content-Type
          },
        }
      );

      console.log(response.data.encoded_image);
      setData(response.data.encoded_image);
      navigate("/result");
    },
  });

  useEffect(() => {
    // 컴포넌트가 마운트되면 카메라를 활성화
    getMedia();
  }, []);

  const getMedia = async () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (error) {
      console.error("카메라에 접근할 수 없습니다.", error);
    }
  };

  const takePhoto = () => {
    if (!stream || !videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    }

    canvas.toBlob((blob) => {
      if (blob) {
        mutate(blob); // 백엔드로 파일을 업로드
      }
    }, "image/jpeg"); // JPEG로 변환
  };

  return (
    <Container>
      <Video ref={videoRef} autoPlay playsInline></Video>
      <ButtonContainer>
        <TakePhoto onClick={takePhoto} />
      </ButtonContainer>
    </Container>
  );
};

// 스타일링
const Container = styled.div`
  padding: 20px;
`;

const Video = styled.video`
  width: 100%;
  height: 500px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TakePhoto = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #5ec570;
`;
