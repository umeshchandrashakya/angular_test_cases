import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { element, by } from "protractor";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should render title in p tag", () => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain("login works!");
  });

  it("should check first input field type to be email", () => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    let inputEl = fixture.debugElement.query(By.css('input[ng-model="email"]'))!
      .nativeElement;
    expect(inputEl.type).toBe("email");
  });

  it("should check second input field type to be password", () => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    let inputEl = fixture.debugElement.query(By.css('input[ng-model="pass"]'))!
      .nativeElement;
    expect(inputEl.type).toBe("password");
  });

  it("should check value enter on input field", () => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    let inputEl = fixture.debugElement.query(By.css('input[ng-model="pass"]'))!
      .nativeElement;
    inputEl.value = "Updated Task";
    inputEl.dispatchEvent(new Event("input"));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(inputEl.value).toEqual("Updated Task");
    });
  });
});
