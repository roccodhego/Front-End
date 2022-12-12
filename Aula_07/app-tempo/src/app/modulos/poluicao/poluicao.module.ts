import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoluicaoRoutingModule } from './poluicao-routing.module';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    PoluicaoHomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    PoluicaoRoutingModule
  ]
})
export class PoluicaoModule { }
