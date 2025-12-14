import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

function FaceReader() {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState(null);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    async function loadModel() {
      await tf.ready();
      const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
      const detector = await faceLandmarksDetection.createDetector(model, {
        runtime: 'tfjs',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/face-landmarks-detection',
      });

      detectEmotion(detector);
    }

    loadModel();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera error: ", error);
    }
  };

  const handleVideoLoaded = () => {
    const video = videoRef.current;
    if (video) {
      setVideoSize({
        width: video.videoWidth,
        height: video.videoHeight,
      });
    }
  };

  async function detectEmotion(detector) {
    const video = videoRef.current;

    const detect = async () => {
      if (video && detector) {
        if (video instanceof HTMLVideoElement && video.videoWidth > 0 && video.videoHeight > 0) {
          // videoRef.currentがHTMLVideoElementかどうかを再確認
          const tensor = tf.browser.fromPixels(video); // fromPixelsに渡す前に確認
          const predictions = await detector.estimateFaces({
            input: tensor,
          });

          if (predictions.length > 0) {
            const emotionResult = analyzeEmotion(predictions);
            setEmotion(emotionResult);
          }
        } else {
          console.error("Video not loaded or invalid size.");
        }

        requestAnimationFrame(detect);
      }
    };

    detect();
  }

  function analyzeEmotion(predictions) {
    const firstFace = predictions[0];
    if (firstFace) {
      const distanceBetweenEyes = Math.abs(firstFace.keypoints[2].x - firstFace.keypoints[1].x);
      if (distanceBetweenEyes > 20) {
        return "Happy";
      }
    }
    return "Neutral";
  }

  useEffect(() => {
    startCamera(); // コンポーネントがマウントされた時にカメラを開始
  }, []);

  return (
    <div>
      <h2>Emotion Detection</h2>
      <video
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
        muted
        onLoadedData={handleVideoLoaded} // ビデオが読み込まれた時にサイズを設定
      />
      <div>
        <h3>Detected Emotion: {emotion}</h3>
        <p>Video Size: {videoSize.width} x {videoSize.height}</p>
      </div>
    </div>
  );
}

export default FaceReader;
