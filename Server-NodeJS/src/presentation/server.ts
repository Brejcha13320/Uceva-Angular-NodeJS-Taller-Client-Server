import express, { Router } from "express";
import path from "path";
import cors from "cors";

interface Options {
  port: number;
  publicPath: string;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, publicPath, routes } = options;
    this.port = port;
    this.publicPath = publicPath;
    this.routes = routes;
  }

  async start() {
    //* Middlewares
    this.app.use(cors());
    this.app.use(express.json());

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

    //* SPA
    this.app.use((req, res) => {
      res.sendFile(
        path.join(__dirname, `../../${this.publicPath}/index.html`)
      );
    });

    this.app.listen(this.port, () => {
      console.log(`Server Running on Port ${this.port}`);
    });
  }
}