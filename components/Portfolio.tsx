import IconMapPin from "tabler_icons_tsx/map-pin.tsx";
import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import IconBrandTiktok from "tabler_icons_tsx/brand-tiktok.tsx";
import IconBrandThreads from "tabler_icons_tsx/brand-threads.tsx";
import IconBrandIg from "tabler_icons_tsx/brand-instagram.tsx";
import IconLink from "tabler_icons_tsx/link.tsx";
import type { ComponentChildren } from "preact";

function IconWrapper({
  children,
  url,
}: {
  children: ComponentChildren;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-gray-300"
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
      class="bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-2 hover:bg-gray-200"
    >
      <div>
        <p class="text-lg font-semibold text-gray-800">{name}</p>
        <span class="text-sm text-gray-600">{desc}</span>
      </div>
      <IconLink class="text-gray-500 w-6 h-6" />
    </a>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      url:
        "https://apps.apple.com/app/apple-store/id6727017255?pt=127348166&ct=db99&mt=8",
      name: "Tikim",
      desc: "Personal expense tracker iOS app",
    },
    {
      url: "https://db99.dev/kanaji",
      name: "Kanaji - Kanji Learning",
      desc:
        "A kanji learning app for iOS, featuring spaced repetition and quizzes.",
    },
    {
      url:
        "https://apps.apple.com/app/keystaff/id6753950371?pt=127348166&ct=db99&mt=8",
      name: "KeyStaff",
      desc: "A simple iOS app to learn reading music notes",
    },
  ];
  const skills = ["👨‍💻 Code", "🎹 Piano", "🎮 Games"];

  return (
    <div class="flex flex-col items-center min-h-screen font-mono">
      <div class="w-full max-w-md overflow-hidden">
        <div class="flex flex-col items-center p-8">
          <h1 class="text-4xl font-bold mb-4 text-gray-800">Dunkbing</h1>
          <div class="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                class="bg-gray-200 px-3 py-1 rounded-full font-medium text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
          <div class="flex items-center mb-6 text-gray-600">
            <IconMapPin class="mr-2" />
            <span>Hanoi, Vietnam</span>
          </div>
          <a
            target="_blank"
            href="https://github.com/dunkbing/dunkbing"
            class="bg-gray-800 text-white px-6 py-2 rounded-full mb-6 hover:bg-gray-700 transition-colors duration-300"
          >
            README.md
          </a>
          <div class="flex space-x-4 mb-2">
            <IconWrapper url="https://www.instagram.com/dunkbingg/">
              <IconBrandIg />
            </IconWrapper>
            <IconWrapper url="https://www.threads.net/@dunkbingg">
              <IconBrandThreads />
            </IconWrapper>
            <IconWrapper url="https://github.com/dunkbing">
              <IconBrandGithub />
            </IconWrapper>
          </div>
        </div>
        <div class="w-full">
          <h2 class="text-xl font-bold mb-4 text-gray-800 text-center">
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
