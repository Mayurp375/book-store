import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-page',
  templateUrl: './fetch-page.component.html',
  styleUrls: ['./fetch-page.component.css']
})
export class FetchPageComponent implements OnInit {

  @Input() hero :any;
 // addToCart: any ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fadd-to-cart&psig=AOvVaw1Cv20kJbsu1KUvg8jR9iuX&ust=1690279786900000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMjP6Y-Np4ADFQAAAAAdAAAAABAD';
  ngOnInit() {};

}
