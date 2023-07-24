import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-page',
  templateUrl: './fetch-page.component.html',
  styleUrls: ['./fetch-page.component.css']
})
export class FetchPageComponent implements OnInit {

  @Input() hero :any;
  ngOnInit() {};

}
