import path from "node:path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, "./src/app"),
            pages: path.resolve(__dirname, "./src/pages"),
            features: path.resolve(__dirname, "./src/features"),
            shared: path.resolve(__dirname, "./src/shared"),
            widgets: path.resolve(__dirname, "./src/widgets"),
            entities: path.resolve(__dirname, "./src/entities")
        }
    }
})
