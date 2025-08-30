import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../../cardapio.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  capaUrl: string = '';

  constructor(
    private cardapioService: CardapioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardapioService.getCardapio().subscribe((data) => {
      const capa = data.find((item: any) => item.titulo === 'Capa');
      this.capaUrl = capa?.foto || '';
    });

    document.addEventListener('click', this.handleClick);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this,this.router.navigate(['/menu']);
  }
}
