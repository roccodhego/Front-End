import { Component } from '@angular/core';
import { PolutionData, TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-poluicao',
  templateUrl: './poluicao.component.html',
  styleUrls: ['./poluicao.component.css']
})
export class PoluicaoComponent {
  /*poluicao!: IPoluicao;*/
  displayedColumns: string[] = ['demo-name', 'demo-weight', 'demo-symbol'];
  polutionData?: PolutionData


  constructor(tempoService: TempoService) {
    tempoService.poluicaoAtual.subscribe(data => this.polutionData = data);
  }


}
