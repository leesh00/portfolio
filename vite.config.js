import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/portfolio/', // 그대로 유지해도 좋아요
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, 'docs') // 빌드 결과물을 docs 폴더에 저장
  }
})