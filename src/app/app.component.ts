import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  valor = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getValue()
      .subscribe(valor => this.valor = valor);
  }

  salvar() {
    const atual = this.valor += this.valor;
    this.appService.setValue(atual)
      .subscribe(retornoAtual => this.valor = retornoAtual);
  }

}
