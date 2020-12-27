import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  form:FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      text:['']
    })
   }

  ngOnInit(): void {
  }

  push() {
    console.log(this.form.value)
  }

}
