import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'sign-in-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  test:any=[];
  
  form: FormGroup;

  constructor(private router: Router, private dataService: DataService, private builder: FormBuilder) {
    this.form = this.builder.group({
      email: ['',[Validators.required]],
      temporaryPassword: ['',[Validators.required]]
   })}

  ngOnInit(): void {

  }

  home(){
      

    let formData = this.form.value;
    let status = this.dataService
      .post('/accounts/login', formData, {})
      .subscribe((data: any) => {
        console.log(data);
        
        if(data.status == "200"){
        // do
        this.router.navigate(["home"])
        console.log(this.form.value)
     
        } 
        else {alert("Incorrect Email or Password");}
    });

    
  }
}
