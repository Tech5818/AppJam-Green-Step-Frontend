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
      const response = await axios.post("/", {
        file: blob,
      });
      console.log(response);

      // navigate("/result");
    },
  });

  useEffect(() => {
    // 컴포넌트가 마운트되면 바로 전면 카메라를 활성화
    getMedia();
  }, []);

  const getMedia = async () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
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
    ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      // 여기에서 추가적으로 백엔드로 사진을 전송하거나 다른 처리
      // 예: axios.post('YOUR_BACKEND_ENDPOINT', { file: blob });
      mutate(blob);
    });
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
