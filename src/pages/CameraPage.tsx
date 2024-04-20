import { Mobile } from "../Responsive";

export default function CameraPage() {
  return (
    <>
      <Mobile>
        <Camera />
      </Mobile>
    </>
  );
}

import React, { useState, useRef } from "react";
import { Button } from "@chakra-ui/react";

export const Camera: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getMedia = async (camera: "user" | "environment") => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: camera },
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
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "photo.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
      <Button onClick={() => getMedia("user")}>전면 카메라</Button>
      <Button onClick={() => getMedia("environment")}>후면 카메라</Button>
      <Button onClick={takePhoto}>사진 찍기</Button>
    </div>
  );
};
