// import { Html } from "@react-three/drei";
import React from "react";
import { FaGithub, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

interface Props {
  type: "light" | "dark";
}

export function Origin({ type }: Props) {
  const colorClasses = {
    light: "text-white",
    dark: "text-black",
  };

  const colorClass = colorClasses[type] ?? "text-black";

  return (
    <div className="absolute top-0 left-0 grow">
      <div className="fixed left-24 -bottom-8 origin-left rotate-90 whitespace-nowrap text-right font-bold">
        <div className="grid gap-4">
          <a aria-label="Go to github" href="https://github.com/Kyuuari">
            <FaGithub
              size={24}
              className={`-rotate-90 ${colorClass} hover:text-opacity-40`}
            />
          </a>

          <a
            aria-label="Go to instagram"
            href="https://www.instagram.com/kyuuari/"
          >
            <FaInstagram
              size={24}
              className={`-rotate-90 ${colorClass} hover:text-opacity-40`}
            />
          </a>

          <a
            aria-label="Go to behance"
            href="https://www.behance.net/chestercari"
          >
            <FaBehance
              size={24}
              className={`-rotate-90 ${colorClass} hover:text-opacity-40`}
            />
          </a>

          <a
            aria-label="Go to linkedin"
            href="https://www.linkedin.com/in/chestercari/"
          >
            <FaLinkedin
              size={24}
              className={`-rotate-90 ${colorClass} hover:text-opacity-40`}
            />
          </a>
          {/* <FaLinkedin className="-rotate-90" /> */}
        </div>
      </div>

      <p
        className={`fixed bottom-0 right-4 origin-right rotate-90 whitespace-nowrap text-right ${colorClass} font-semibold`}
        // style={{
        //   transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
        // }}
      >
        Chester Cari &nbsp;&nbsp;&nbsp; ┓
      </p>
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
}
export default function Overlay() {
  return (
    <div className="sticky z-[100] mix-blend-difference">
      <Origin type="light" />
    </div>
  );
}

export function OverlayLight() {
  return (
    <div className="sticky z-[100]">
      <Origin type="light" />
    </div>
  );
}

export function OverlayDark() {
  return (
    <div className="sticky z-[100]">
      <Origin type="dark" />
    </div>
  );
}
