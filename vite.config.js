import { defineConfig } from 'vite'

export default defineConfig({
    base: process.env.VERCEL || process.env.NETLIFY ? './' : '/01-profile-readme/',
})
