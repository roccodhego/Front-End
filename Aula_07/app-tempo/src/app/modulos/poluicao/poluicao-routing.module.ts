import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/poluicao/home', pathMatch: 'full' },
  { path: 'home', component: PoluicaoHomeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoluicaoRoutingModule { }
