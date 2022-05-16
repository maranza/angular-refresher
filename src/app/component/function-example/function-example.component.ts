import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-example',
  templateUrl: './function-example.component.html',
  styleUrls: ['./function-example.component.css']
})
export class FunctionExampleComponent implements OnInit {

  private var !: string;

  constructor() {
    // this.var = "test";
  }

  ngOnInit(): void {
  }

  showAlert(num: Number | number | string | boolean){
    alert(num);
  }

}
