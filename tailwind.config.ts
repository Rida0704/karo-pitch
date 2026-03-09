import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070A",
        panel: "#0F1117",
        panel2: "#161A22",
        text: "#D9E1F2",
        muted: "#8C94A8",
        accent: "#FF6A00",
        accent2: "#FF8C1A",
        gold: "#F6C56B",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.04), 0 10px 50px rgba(255,106,0,0.18)",
        soft: "0 10px 30px rgba(0,0,0,0.24)",
      },
      backgroundImage: {
        "hero-mesh": "radial-gradient(circle at 20% 20%, rgba(255,106,0,.25), transparent 30%), radial-gradient(circle at 80% 20%, rgba(246,197,107,.15), transparent 30%), radial-gradient(circle at 50% 80%, rgba(82, 120, 255, .10), transparent 35%)",
        noise: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"%3E%3Cfilter id=\"n\" x=\"0\" y=\"0\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"0.04\"/%3E%3C/svg%3E')"
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 8s ease-in-out infinite",
        glowpulse: "glowpulse 3s ease-in-out infinite",
        sheen: "sheen 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        glowpulse: {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(255,106,0,0.18)" },
          "50%": { boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 15px 60px rgba(255,106,0,0.32)" },
        },
        sheen: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
