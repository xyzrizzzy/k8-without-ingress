import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: [
      'frontend-k8.aztree.xyz',
      'frontend.frontend-space.svc.cluster.local',
    ],
  },
})
