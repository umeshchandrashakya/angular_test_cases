import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: LoginComponent
        },
        {
          path: "about",
          component: AboutComponent
        }
      ],
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
