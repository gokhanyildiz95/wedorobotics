module.exports = {
  apps: [
    {
      name: 'perino-flex',
      script: './server/app.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
