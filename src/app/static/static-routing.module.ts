import { NgModule } from "@angular/core";
import { ContactUsComponent } from "./contactus/contactus.component";
import { StaticComponent } from "./static.component";
import { Routes, RouterModule } from "@angular/router";

const staticRoutes: Routes = [
  // { path: 'contact-us', component: ContactUsComponent },
  // { path: '', redirectTo: 'contact-us', pathMatch: 'full' },
  {
    path: "",
    component: StaticComponent,
    children: [
      { path: "contact-us", component: ContactUsComponent },
      { path: "", component: ContactUsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(staticRoutes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
