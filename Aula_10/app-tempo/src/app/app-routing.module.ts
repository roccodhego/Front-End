import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'poluicao', loadChildren: () =>
      import('./modulos/poluicao/poluicao.module').then(m =>
        m.PoluicaoModule)
  },
  { path: '', component: TempoAtualComponent },
  { path: 'tempo', component: TempoAtualComponent },
  { path: 'busca', component: BuscaCidadeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //Passado Array de Rotas. Importanto e criando as rotas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
