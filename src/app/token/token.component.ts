import { TokenService } from './token.service';
import { Component, OnInit } from '@angular/core';
import { Token } from '../_models/token.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
tokens:Array<Token>;
  constructor(private tokenService:TokenService) {
   /* this.tokens=[{Id:"1",Name:"Cau hoi so 1"},{Id:"2",Name:"Name 2"}];
    console.log(this.tokens)*/
   }

  ngOnInit() {
    this.tokenService.getTokens().subscribe((data:Token[])=>{ this.tokens=data})
  }

}
