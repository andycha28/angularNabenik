import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mozilla',
  templateUrl: './mozilla.component.html',
  styleUrls: ['./mozilla.component.css']
})
export class MozillaComponent implements OnInit {

  name: string;
  constructor(private route: ActivatedRoute) {
    this.name = 'Juan';
    route.params.subscribe (
      p => this.name = p['name']
    );
   }

  ngOnInit() {
  }

}
