import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/galeria-de-fotos/",
  plugins: [react()]
});