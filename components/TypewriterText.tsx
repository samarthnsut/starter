"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypewriterText({
  text,
  speed = 35,
  className = "",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    const timeout = window.setTimeout(() => {
      let index = 0;

      const interval = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);

      return () => window.clearInterval(interval);
    }, 800);

    return () => window.clearTimeout(timeout);
  }, [text, speed]);

  return (
    <span className={`${className} ${done ? "" : "typewriter-cursor"}`}>
      {displayed}
    </span>
  );
}
