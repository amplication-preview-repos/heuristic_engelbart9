import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogViewServiceBase } from "./base/blogView.service.base";

@Injectable()
export class BlogViewService extends BlogViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
