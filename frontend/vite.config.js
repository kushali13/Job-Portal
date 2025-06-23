import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// ✅ FIXED: Removed tailwindcss() from plugins
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
