import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detail: any;
  userId: String;
  input: String;
  formOp: String = 'name';

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.userId = params.id
    );
  }

  ngOnInit() {
    this.data.getUser(this.userId).subscribe(
      x => {
        this.detail = x;
        this.input = this.detail.name;
      }
    );
  }

  update() {
    switch (this.formOp) {
      case 'name':
        this.detail.name = this.input;
        break;
      case 'phone':
        this.detail.phone = this.input;
        break;
      case 'username':
        this.detail.username = this.input;
        break;
      case 'email':
        this.detail.email = this.input;
        break;
    }
  }

  placeholder() {
    switch (this.formOp) {
      case 'name':
        this.input = this.detail.name;
        break;
      case 'phone':
        this.input = this.detail.phone;
        break;
      case 'username':
        this.input = this.detail.username;
        break;
      case 'email':
        this.input = this.detail.email;
        break;
    }
  }

}
