import { FaGithub, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

interface Props {
  type: "light" | "dark";
}

export function Socials({ type }: Props) {
  const colorClasses = {
    light: "text-white",
    dark: "text-black",
  };

  const colorClass = colorClasses[type] ?? "text-black";
  return (
    <div className="absolute top-0 left-0 grow">
      <div
        className={`fixed bottom-8 left-5 whitespace-nowrap ${colorClass} font-semibold`}
      >
        <div className="flex gap-2 flex-col">
          <p> ✦ &nbsp;&nbsp;&nbsp; Chester Cari</p>
          <div className="whitespace-nowrap font-bold">
            <div className="grid gap-4 grid-cols-4">
              <a aria-label="Go to github" href="https://github.com/Kyuuari">
                <FaGithub
                  size={24}
                  className={`${colorClass} hover:text-opacity-40`}
                />
              </a>

              <a
                aria-label="Go to instagram"
                href="https://www.instagram.com/kyuuari/"
              >
                <FaInstagram
                  size={24}
                  className={`${colorClass} hover:text-opacity-40`}
                />
              </a>

              <a
                aria-label="Go to behance"
                href="https://www.behance.net/chestercari"
              >
                <FaBehance
                  size={24}
                  className={`${colorClass} hover:text-opacity-40`}
                />
              </a>

              <a
                aria-label="Go to linkedin"
                href="https://www.linkedin.com/in/chestercari/"
              >
                <FaLinkedin
                  size={24}
                  className={`${colorClass} hover:text-opacity-40`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function SocialsOverlay() {
  return (
    <div className="sticky z-[100] mix-blend-difference">
      <Socials type="light" />
    </div>
  );
}
