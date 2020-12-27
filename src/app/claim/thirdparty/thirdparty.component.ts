import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-thirdparty',
  templateUrl: './thirdparty.component.html',
  styleUrls: ['./thirdparty.component.css']
})
export class ThirdpartyComponent implements OnInit {

  form: FormGroup;

  constructor(private builder:FormBuilder) { 
    this.form=this.builder.group({
      firstname:[''],
      lastName:[''],
      carRegistNum:[''],
      phoneNum:[''],
      date:[''],
      time:['']
    })
  }

  ngOnInit(): void {
  }

  push() {
    console.log(this.form.value)
  }
}
