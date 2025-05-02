"use client"
import React, { useEffect, useState, FC } from "react";

interface MovingBannerProps {
  text?: string;
  speed?: number;
}

const MovingBanner: FC<MovingBannerProps> = ({
  text = "Kitchen renovations • Bathroom makeovers • Home additions • Full house remodels • Free consultations",
  speed = 1,
}) => {
  const [position, setPosition] = useState<number>(0);

  const repeatedText = text.repeat(3);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate);

    function animate(): void {
      setPosition((prevPosition: number) => {
        if (prevPosition <= -text.length * 8) {
          return 0;
        }
        return prevPosition - speed; // Move text to the left
      });
      requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [text.length, speed]);

  return (
    <div
      className={`w-full bg-black text-white uppercase overflow-hidden py-3`}
    >
      <div
        className="whitespace-nowrap text-xl"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default MovingBanner;
