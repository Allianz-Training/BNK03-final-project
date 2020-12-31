import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  @Input()
  otpValue1:string="";
  @Input()
  otpValue2:string="";
  @Input()
  otpValue3:string="";
  @Input()
  otpValue4:string="";
  // otpValue: string[]=[];
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  move(previoustxt:any, fromtxt: any, totxt: any) {
    let length = fromtxt.value.length;

    let maxlength: string = fromtxt.getAttribute("maxlength");

    if (length == maxlength) {
      totxt.focus();
    }
    else if(length<maxlength){
      previoustxt.focus();
    }
    if(this.otpValue1 != "" && this.otpValue2 != "" && this.otpValue3 != "" && this.otpValue4 != ""){
      console.log("do something");
      let otp: string = this.otpValue1+this.otpValue2+this.otpValue3+this.otpValue4;
      alert(otp)
      this.router.navigate(["home"])
      this.dataService
      .put('/accounts/register/otp', otp, {})
      .subscribe((data: any) => {
        console.log(data);
      });
    }
    
  }
}
