import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/PokeDex-Your-Ultimate-Pokemon-Information-Hub",
  plugins: [react()],
})
