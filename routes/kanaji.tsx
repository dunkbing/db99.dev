import { define } from "../utils.ts";
import { Head } from "fresh/runtime";
import IconBrandGooglePlay from "tabler_icons_tsx/brand-google-play.tsx";
import IconBrandApple from "tabler_icons_tsx/brand-apple.tsx";

const seo = {
  title: "Kanaji - Learn Japanese Kanji | Free App for iOS & Android",
  description:
    "Master Japanese Kanji with Kanaji. Features stroke-by-stroke practice, JLPT-organized study sets, SRS flashcards, and beautiful SVG rendering. Free, no ads, no tracking.",
  url: "https://db99.dev/kanaji",
  image: "https://db99.dev/kanaji-og.png",
  keywords:
    "japanese, kanji, learn japanese, jlpt, kanji study, japanese learning app, hiragana, katakana, stroke order, flashcards",
  appStoreId: "6746691565",
  playStoreId: "kanaji.db99.dev",
};

const colors = {
  primary: "#4A7C59",
  primaryLight: "#E8F5E9",
  primaryDark: "#2E5A3A",
  tertiary: "#C17F59",
  tertiaryLight: "#FDEEE6",
  background: "#F9F6F0",
  surface: "#FFFFFF",
  surfaceVariant: "#F3EFE7",
  text: "#3D3D3D",
  textMuted: "#6B6B6B",
  border: "#D4CFC4",
};

const screenshots = [
  { src: "1", caption: "Random kanji with readings & example sentences" },
  { src: "2", caption: "Track progress with stats & calendar" },
  { src: "3", caption: "Browse radicals by stroke count" },
  { src: "4", caption: "Search by JLPT level or stroke count" },
  { src: "5", caption: "Stroke-by-stroke writing practice" },
  { src: "6", caption: "Study decks with SRS status tracking" },
  { src: "7", caption: "Draw kanji with visual feedback" },
  { src: "8", caption: "Master stroke order naturally" },
];

// Seeded random for consistent positions across renders
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const kanjiChars = [
  "学",
  "日",
  "本",
  "語",
  "読",
  "書",
  "漢",
  "字",
  "愛",
  "心",
  "友",
  "花",
  "空",
  "山",
  "水",
  "火",
  "風",
  "木",
  "月",
  "星",
  "雨",
  "雪",
  "光",
  "夢",
  "道",
  "力",
  "人",
  "大",
  "生",
  "時",
  "見",
  "言",
  "思",
  "知",
  "行",
  "来",
  "出",
  "年",
  "国",
  "世",
];

// Pre-calculate grid positions to avoid overlap
const cols = 8;
const rows = 5;
const cellWidth = 100 / cols;
const cellHeight = 100 / rows;

const kanjiPositions = kanjiChars.map((char, i) => {
  const seed = i * 137;
  const col = i % cols;
  const row = Math.floor(i / cols);
  // Add some randomness within each cell
  const offsetX = seededRandom(seed) * (cellWidth * 0.5);
  const offsetY = seededRandom(seed + 1) * (cellHeight * 0.5);
  const top = row * cellHeight + offsetY + 2;
  const left = col * cellWidth + offsetX + 2;
  const sizes = ["text-5xl", "text-6xl", "text-7xl", "text-8xl"];
  const size = sizes[Math.floor(seededRandom(seed + 2) * sizes.length)];
  const color = seededRandom(seed + 3) > 0.5 ? colors.primary : colors.tertiary;
  // Lower opacity for characters near center
  const isNearCenter = top > 25 && top < 75 && left > 20 && left < 80;
  const opacity = isNearCenter
    ? `0${Math.floor(seededRandom(seed + 4) * 3) + 3}`
    : `${Math.floor(seededRandom(seed + 4) * 8) + 12}`;

  return { char, top, left, size, color, opacity };
});

function FloatingKanji() {
  return (
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      {kanjiPositions.map((item, i) => (
        <span
          key={i}
          class={`absolute font-serif ${item.size}`}
          style={`top: ${item.top}%; left: ${item.left}%; color: ${item.color}${item.opacity};`}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}

export default define.page(function Kanaji() {
  return (
    <div class="min-h-screen" style={`background: ${colors.background};`}>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:site_name" content="Kanaji" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        {/* App Store Smart Banner (iOS) */}
        <meta name="apple-itunes-app" content={`app-id=${seo.appStoreId}`} />

        {/* Google Play */}
        <meta
          name="google-play-app"
          content={`app-id=${seo.playStoreId}`}
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="db99" />
        <meta name="application-name" content="Kanaji" />
        <meta name="theme-color" content={colors.primary} />
      </Head>

      {/* Header */}
      <header
        class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={`background: ${colors.surface}cc; border-bottom: 1px solid ${colors.border};`}
      >
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/kanaji" class="flex items-center gap-3">
            <img
              src="/kanaji-icon.png"
              alt="Kanaji"
              class="w-10 h-10 rounded-xl"
            />
            <span class="text-xl font-bold" style={`color: ${colors.text};`}>
              Kanaji
            </span>
          </a>
          <nav class="flex items-center gap-6">
            <a
              href="/policies/kanaji"
              class="font-medium transition-colors hover:opacity-80"
              style={`color: ${colors.textMuted};`}
            >
              Privacy
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <FloatingKanji />

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Logo */}
          <div class="mb-8 flex justify-center">
            <img
              src="/kanaji-icon.png"
              alt="Kanaji"
              class="w-28 h-28 rounded-3xl"
            />
          </div>

          {/* App Name */}
          <h1
            class="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            style={`color: ${colors.text};`}
          >
            Kanaji
          </h1>
          <p
            class="text-xl md:text-2xl font-medium mb-6"
            style={`color: ${colors.primary};`}
          >
            Learn Japanese Kanji
          </p>

          {/* Tagline */}
          <p
            class="text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
            style={`color: ${colors.textMuted};`}
          >
            A helpful and easy-to-use app for mastering Japanese Kanji
          </p>
          <p
            class="text-base mb-10 max-w-xl mx-auto"
            style={`color: ${colors.textMuted};`}
          >
            Study, practice, and master kanji with beautifully rendered
            characters, stroke guides, and organized study sets.
          </p>

          {/* CTA Buttons */}
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/app/id6746691565"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={`background: ${colors.text};`}
            >
              <IconBrandApple class="w-6 h-6" />
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=kanaji.db99.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={`background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});`}
            >
              <IconBrandGooglePlay class="w-6 h-6" />
              Get it on Google Play
            </a>
          </div>

          {/* Scroll Indicator */}
          <div class="mt-20 animate-bounce">
            <svg
              class="w-6 h-6 mx-auto"
              style={`color: ${colors.textMuted};`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section
        id="screenshots"
        class="py-24 px-6"
        style={`background: ${colors.surfaceVariant};`}
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2
              class="text-4xl font-bold mb-4"
              style={`color: ${colors.text};`}
            >
              See it in action
            </h2>
            <p
              class="text-lg max-w-2xl mx-auto"
              style={`color: ${colors.textMuted};`}
            >
              Beautiful, intuitive design for an enjoyable learning experience
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {screenshots.map((item) => (
              <div key={item.src} class="flex flex-col gap-4">
                <div
                  class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={`background: ${colors.surface};`}
                >
                  <img
                    src={`/kanaji_sc/${item.src}.webp`}
                    alt={item.caption}
                    class="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p
                  class="text-sm text-center font-medium leading-snug"
                  style={`color: ${colors.textMuted};`}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section - Calcifer warm gradient */}
      <section
        class="py-24 px-6"
        style={`background: linear-gradient(135deg, ${colors.primaryLight}, ${colors.tertiaryLight});`}
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6" style={`color: ${colors.text};`}>
            Start your Kanji journey today
          </h2>
          <p
            class="text-lg mb-10 max-w-xl mx-auto"
            style={`color: ${colors.textMuted};`}
          >
            Join thousands of learners who are mastering Japanese kanji with
            Kanaji. Free to download, no ads, no tracking.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/app/id6746691565"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 text-white px-7 py-3 rounded-full font-semibold shadow-xl hover:opacity-90 transition-all duration-300"
              style={`background: ${colors.text};`}
            >
              <IconBrandApple class="w-5 h-5" />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=kanaji.db99.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 text-white px-7 py-3 rounded-full font-semibold shadow-xl hover:opacity-90 transition-all duration-300"
              style={`background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});`}
            >
              <IconBrandGooglePlay class="w-5 h-5" />
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        class="py-12 px-6"
        style={`background: ${colors.surface}; border-top: 1px solid ${colors.border};`}
      >
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
            <img
              src="/kanaji-icon.png"
              alt="Kanaji"
              class="w-10 h-10 rounded-xl"
            />
            <span class="text-lg font-bold" style={`color: ${colors.text};`}>
              Kanaji
            </span>
          </div>
          <nav class="flex items-center gap-6">
            <a
              href="/policies/kanaji"
              class="transition-colors hover:opacity-80"
              style={`color: ${colors.textMuted};`}
            >
              Privacy Policy
            </a>
            <a
              href="/"
              class="transition-colors hover:opacity-80"
              style={`color: ${colors.textMuted};`}
            >
              Developer
            </a>
          </nav>
          <p class="text-sm" style={`color: ${colors.textMuted};`}>
            Made with love for Japanese learners
          </p>
        </div>
      </footer>
    </div>
  );
});
