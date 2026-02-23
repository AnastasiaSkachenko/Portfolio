// src/components/SplineScene.tsx
import React, { useEffect } from "react";

const SplineScene: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <spline-viewer
        hint
        url="https://prod.spline.design/Kcstk0kpo29jKzvE/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default SplineScene;