// Vercel serverless function wrapper
import('../dist/index.js').then(module => {
  module.default || module;
}).catch(err => {
  console.error('Failed to load server:', err);
});