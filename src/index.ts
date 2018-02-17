import * as express from 'express';

class Server {
  port: number | string;
  app: express.Express;
  constructor(port: number | string) {
    this.port = port;
    this.app = express();
  }

  start() {
    this.app.listen(this.port);
    console.log('Express server listening on port', this.port);
  }
}

function main() {
  console.log('- Typescript + NodeJS + Webpack Starter Kit -');
  const server = new Server(5000);
  server.start();
}

main();
