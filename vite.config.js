import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tailwindScrollbar from "tailwind-scrollbar";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./src/**/*.{,js,jsx,ts,tsx}", "./public/index.html"],

      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Merriweather", "serif"],
            mono: ["Fira Code", "monospace"],
          },
        },
      },
      plugins: [tailwindScrollbar],
    }),
  ],
});
