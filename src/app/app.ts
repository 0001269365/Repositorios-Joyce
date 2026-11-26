import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoCard } from './components/produto-card/produto-card';
import { Botao } from './components/botao/botao';



@Component({
  imports: [RouterOutlet, ProdutoCard, Botao],
  selector: 'app-root',
  standalone:true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Usando_GitHub');
}
