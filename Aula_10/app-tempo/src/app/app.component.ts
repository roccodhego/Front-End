import { Component, Input } from '@angular/core';
import { ITempoAtual } from './itempo-atual';
import { TempoService } from './tempo/tempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempo';

  tempoAtual!: ITempoAtual;


  /*constructor(private tempoService: TempoService) {

 }

realizarBusca(valorBusca: string) {
   console.log("realizar Busca :  " + valorBusca);
   const valorDoInputDebusca = valorBusca.split(',').map((letra: string) => letra.trim());
   this.tempoService.buscarTempoAtual(
     valorDoInputDebusca[0],
     valorDoInputDebusca.length > 1 ? valorDoInputDebusca[1] : '')
     .subscribe(data => {
       console.log("realizar Busca :  " + data)
       this.tempoAtual = data
     })
 }*/
}
