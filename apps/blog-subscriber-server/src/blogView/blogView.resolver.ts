import * as graphql from "@nestjs/graphql";
import { BlogViewResolverBase } from "./base/blogView.resolver.base";
import { BlogView } from "./base/BlogView";
import { BlogViewService } from "./blogView.service";

@graphql.Resolver(() => BlogView)
export class BlogViewResolver extends BlogViewResolverBase {
  constructor(protected readonly service: BlogViewService) {
    super(service);
  }
}
