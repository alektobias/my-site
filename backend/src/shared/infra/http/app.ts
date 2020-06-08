import express from 'express';
import routes from './routes';



class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.routes();
  }
  public middlewares() {
    this.server.use(express.json());
  }

  public routes() {
    this.server.use(routes)
  }
}

export default new App().server