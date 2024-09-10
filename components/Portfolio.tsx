import IconMapPin from "tabler_icons_tsx/map-pin.tsx";
import IconBrandInstagram from "tabler_icons_tsx/brand-instagram.tsx";
import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import IconBrandTiktok from "tabler_icons_tsx/brand-tiktok.tsx";
import { ComponentChildren } from "preact/src/index.js";

function IconWrapper(
  { children, url }: { children: ComponentChildren; url: string },
) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-24">
      <div className="w-full max-w-md overflow-hidden">
        <div className="flex flex-col items-center p-8">
          <img
            src="/profile.jpg"
            alt="Avatar"
            width={200}
            height={200}
            className="rounded-lg mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Dunkbing</h1>
          <div className="flex space-x-2 mb-4 font-semibold">
            <span>👨‍💻 Code</span>
            <span>🎹 Piano</span>
            <span>🎮 Games</span>
          </div>
          <div className="flex items-center mb-6 text-gray-500">
            <IconMapPin />
            <span>Hanoi, Vietnam</span>
          </div>
          <a
            target="_blank"
            href="https://github.com/dunkbing/dunkbing"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mb-6"
          >
            README.md
          </a>
          <div className="flex space-x-4 mb-6">
            <IconWrapper url="https://github.com/dunkbing">
              <IconBrandGithub />
            </IconWrapper>
            <IconWrapper url="https://www.instagram.com/dunkbingg/">
              <IconBrandInstagram />
            </IconWrapper>
            <IconWrapper url="https://www.tiktok.com/@dunkbing">
              <IconBrandTiktok />
            </IconWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
