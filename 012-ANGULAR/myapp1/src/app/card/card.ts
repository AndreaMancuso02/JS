import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // nomeCard: string = "Card";
  // descrizione: string = "Questa è una prova";
  // imgPath: string = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8Mg%3D%3D";

  @Input() id !: string;
  @Input() nome !: string;
  @Input() cognome !: string;
  @Input() materie !: string[];

}
