import { Injectable } from "@nestjs/common";
import { Hello } from "./interfaces/hello.interface";

@Injectable()
export class HelloService {
  private readonly hellos: Hello[] = [];

  create(hello: Hello) {
    this.hellos.push(hello);
  }

  findAll(): Hello[] {
    return this.hellos;
  }
}
