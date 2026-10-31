import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 800,
  },
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self' https://www.intellimark.ai https://intellimark.ai; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.intellimark.ai https://intellimark.ai; style-src 'self' 'unsafe-inline' https://www.intellimark.ai https://intellimark.ai; img-src 'self' data: blob: https://www.googletagmanager.com https://images.pexels.com https://upload.wikimedia.org https://vectorseek.com https://cdn.worldvectorlogo.com https://i.ytimg.com https://img.youtube.com https://www.intellimark.ai https://intellimark.ai; font-src 'self' data:; connect-src 'self' ws://localhost:* ws://127.0.0.1:* http://localhost:* http://127.0.0.1:* https://vitals.vercel-insights.com https://www.intellimark.ai https://intellimark.ai; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; worker-src 'self' blob:; frame-ancestors 'none';",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'Access-Control-Allow-Origin': '*'
    }
  }
});
