import { Injectable, NestMiddleware } from "@nestjs/common";
import type { Request, Response, NextFunction } from "express";

@Injectable()
export class HelloMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("=== hello middleware ===");

    next();
  }
}
