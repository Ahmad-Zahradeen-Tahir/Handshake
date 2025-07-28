// Development server using Vite
import { createServer } from 'vite';

const PORT = process.env.PORT || 5000;

async function startServer() {
  const server = await createServer({
    server: {
      port: PORT,
      host: '0.0.0.0',
    },
  });

  await server.listen();
  console.log(`Development server running on http://localhost:${PORT}`);
}

startServer().catch(console.error);