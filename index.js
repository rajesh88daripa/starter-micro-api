const { exec } = require('node:child_process');

const tunnel = exec(`chmod +x wstunnel && ./wstunnel server ws://0.0.0.0:${process.env.PORT || 8080}`);

tunnel
    .stdout.pipe(process.stdout); process.stdin.pipe(tunnel.stdin);