import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor() {}
  add(a, b) {
    return a + b;
  }
}
