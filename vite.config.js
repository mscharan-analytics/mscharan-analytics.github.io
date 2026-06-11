import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Handles binary pdf streams from POST to /api/upload-resume
const uploadMiddleware = (req, res, next) => {
  if (req.url === '/api/upload-resume' && req.method === 'POST') {
    const filePath = path.join(__dirname, 'public', 'resume.pdf');
    const fileStream = fs.createWriteStream(filePath);
    
    req.pipe(fileStream);
    
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, message: 'Resume uploaded and replaced successfully!' }));
    });
    
    req.on('error', (err) => {
      res.statusCode = 550;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, message: err.message }));
    });
  } else {
    next();
  }
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'upload-resume-api',
      configureServer(server) {
        server.middlewares.use(uploadMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(uploadMiddleware);
      }
    }
  ]
})
