import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Base relativa: funciona em github.io/nome-do-repositorio/ e também em domínio próprio.
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [".manus.computer", "localhost"],
  },
});
