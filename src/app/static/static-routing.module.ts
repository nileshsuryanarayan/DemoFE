import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const staticRoutes: Routes = [
  { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

@NgModule({
  imports: [RouterModule.forChild(staticRoutes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
