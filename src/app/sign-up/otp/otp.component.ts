import { Component, OnInit,Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  move(previoustxt:any, fromtxt: any, totxt: any) {
    var length = fromtxt.value.length;

    var maxlength: string = fromtxt.getAttribute("maxlength");

    if (length == maxlength) {
      totxt.focus();
    }
    else if(length<maxlength){
      previoustxt.focus();
    }
    if(this.otpValue1 != "" && this.otpValue2 != "" && this.otpValue3 != "" && this.otpValue4 != ""){
      console.log("do something");
      
    }
    
  }
}
