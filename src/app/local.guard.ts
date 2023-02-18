import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LocalGuard implements CanMatch {
  private isLoggined = false;

  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isLoggined;
  }

  loginSuccess() {
    this.isLoggined = true;
  }
}