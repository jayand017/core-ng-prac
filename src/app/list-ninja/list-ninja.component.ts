import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-ninja',
  templateUrl: './list-ninja.component.html',
  styleUrls: ['./list-ninja.component.css']
})
export class ListNinjaComponent implements OnInit {

  @Input() ninja;

  constructor() { }

  ngOnInit() {
  }

}
