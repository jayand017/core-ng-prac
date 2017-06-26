import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ninja',
  templateUrl: './add-ninja.component.html',
  styleUrls: ['./add-ninja.component.css']
})
export class AddNinjaComponent implements OnInit {

  @Input() ninja;
  @Output() onGetName = new EventEmitter<String>(false);
  @Output() onGetBelt = new EventEmitter<String>(false);

  onSetName(val)
  {
    this.onGetName.emit(val)
  }

  onSetBelt(val)
  {
    this.onGetBelt.emit(val)
  }

  constructor() { }

  ngOnInit() {
  }

}
