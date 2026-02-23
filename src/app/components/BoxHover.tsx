import React, { useEffect, useRef } from "react";

const BoxHover = () => {
  const splineRef = useRef<any>(null);

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

  // Prevent click redirects
  useEffect(() => {
    const viewer = splineRef.current;
    if (!viewer) return;

    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault(); // blocks the LinkedIn link redirect
      console.log("Click blocked");
    };

    viewer.addEventListener("click", handleClick);
    return () => {
      viewer.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen absolute">
        <spline-viewer
          ref={splineRef}
          url="https://prod.spline.design/9X5M4mvywk5QDmzq/scene.splinecode"
          className="w-full h-screen"
        ></spline-viewer>
      </div>
      <div className="w-full h-15 bottom-0 z-20 bg-black absolute"></div>
    </div>
  );
};

export default BoxHover;