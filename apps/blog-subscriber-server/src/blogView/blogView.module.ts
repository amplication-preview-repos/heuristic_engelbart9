import { Module } from "@nestjs/common";
import { BlogViewModuleBase } from "./base/blogView.module.base";
import { BlogViewService } from "./blogView.service";
import { BlogViewController } from "./blogView.controller";
import { BlogViewResolver } from "./blogView.resolver";

@Module({
  imports: [BlogViewModuleBase],
  controllers: [BlogViewController],
  providers: [BlogViewService, BlogViewResolver],
  exports: [BlogViewService],
})
export class BlogViewModule {}
