import { NgModule } from '@angular/core';
import { StaticRoutingModule } from './static-routing.module';
import { SocialIcons } from './socialicons/socialicons.component';

@NgModule({
  imports: [StaticRoutingModule],
  exports: [SocialIcons],
  declarations: [SocialIcons],
  providers: []
})
export class StaticModule {}
