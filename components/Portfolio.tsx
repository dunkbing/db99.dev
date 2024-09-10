import IconMapPin from "tabler_icons_tsx/map-pin.tsx";
import IconBrandInstagram from "tabler_icons_tsx/brand-instagram.tsx";
import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import IconBrandTiktok from "tabler_icons_tsx/brand-tiktok.tsx";
import IconLink from "tabler_icons_tsx/link.tsx";
import { ComponentChildren } from "preact/src/index.js";

function IconWrapper(
  { children, url }: { children: ComponentChildren; url: string },
) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-gray-300"
    >
      {children}
    </a>
  );
}

type Project = { url: string; name: string; desc: string };

function LinkItem({ name, desc, url }: Project) {
  return (
    <a
      target="_blank"
      href={url}
      className="bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-2 hover:bg-gray-200"
    >
      <div>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <span className="text-sm text-gray-600">{desc}</span>
      </div>
      <IconLink className="text-gray-500 w-6 h-6" />
    </a>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      url: "https://text2audio.cc",
      name: "Text2Audio",
      desc: "A simple web app that helps convert text to speech",
    },
    {
      url: "https://tinyimg.cc",
      name: "TinyIMG",
      desc: "Online image compressor",
    },
    {
      url: "https://m33t.deno.dev",
      name: "M33t",
      desc:
        "A peer-to-peer, group video call web app, built with Deno and WebRTC.",
    },
  ];
  const skills = ["👨‍💻 Code", "🎹 Piano", "🎮 Games"];

  return (
    <div className="flex flex-col items-center min-h-screen font-mono">
      <div className="w-full max-w-md overflow-hidden">
        <div className="flex flex-col items-center p-8">
          <img
            src="/profile.jpg"
            alt="Avatar"
            width={200}
            height={200}
            className="rounded-full mb-6 border-4 border-gray-200 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Dunkbing</h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full font-medium text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center mb-6 text-gray-600">
            <IconMapPin className="mr-2" />
            <span>Hanoi, Vietnam</span>
          </div>
          <a
            target="_blank"
            href="https://github.com/dunkbing/dunkbing"
            className="bg-gray-800 text-white px-6 py-2 rounded-full mb-6 hover:bg-gray-700 transition-colors duration-300"
          >
            README.md
          </a>
          <div className="flex space-x-4 mb-2">
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
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
            My Projects
          </h2>
          {projects.map((project) => (
            <LinkItem
              key={project.name}
              name={project.name}
              url={project.url}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
