import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogViewService } from "./blogView.service";
import { BlogViewControllerBase } from "./base/blogView.controller.base";

@swagger.ApiTags("blogViews")
@common.Controller("blogViews")
export class BlogViewController extends BlogViewControllerBase {
  constructor(protected readonly service: BlogViewService) {
    super(service);
  }
}
