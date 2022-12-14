import { Component, Input } from '@angular/core';
import { ITempoAtual } from '../itempo-atual';
import { TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.css']
})
export class TempoAtualComponent {

  //@Input() tempoAtual!: ITempoAtual;
  tempoAtual!: ITempoAtual;

  /*constructor() {//tempoService: TempoService) {
    //tempoService.buscarTempoAtual("Florianopolis", "Brasil").subscribe(data => this.tempoAtual = data);
  }*/

  constructor(tempoService: TempoService) {
    tempoService.tempoAtual.subscribe(data => this.tempoAtual = data);
  }
}
