const { Server, Socket } = require('node:net');

const XMRig = new Server(async Worker => {
    let Server; Worker
        .addListener('data', async data => {
            parsed = JSON.parse(data.toString()); switch (parsed.method) {
                case 'login':
                    let { login } = parsed.params;
                    Server = new Socket()
                        .addListener('connect', async () => Server.write(`${data}\n`))

                        .addListener('data', async data => { Worker.write(`${data}\n`); });

                    let [host, port] = login.split(':'); Server
                        .connect(Number(port), host).addListener('end', async () => Worker.end()).addListener('close', async () => Worker.destroy());

                default:
                    Server
                        .write(`${data}\n`);
            };
        });

    Worker
        .addListener('end', async () => Server.end())
        .addListener('close', async () => Server.destroy());

}).addListener('listening', async () => console.log(`Listening.....`)).listen(process.env.PORT || 8080);