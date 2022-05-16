import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {

  inputValue = ''; // initialize to empty string

  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(value: any){
    this.inputValue = value;
  }

}
