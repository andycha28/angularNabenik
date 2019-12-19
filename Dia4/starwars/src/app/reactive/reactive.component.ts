import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm: FormGroup;

    constructor(fb:FormBuilder) {
      this.myForm = fb.group({
        name: ['Anakin ',Validators.required],
        lastname: ['Skywalker', Validators.required]
      });
     }

  ngOnInit() {
  }

  onSubmit(info: any) {
    console.log(info);
    

  }

}
