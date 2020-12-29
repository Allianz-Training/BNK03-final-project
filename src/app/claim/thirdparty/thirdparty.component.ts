import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-thirdparty',
  templateUrl: './thirdparty.component.html',
  styleUrls: ['./thirdparty.component.css']
})
export class ThirdpartyComponent implements OnInit {
  file1!: File;
  file1Base64: any;
  file2!: File;
  file2Base64: any;

  form: FormGroup;

  constructor(private builder:FormBuilder, private dataService : DataService) { 
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

  next() {
    this.dataService.hasThirdParty = true;
    let formData =this.form.value;
    formData.carRegistrationImage = this.file1Base64;
    formData.licenseImage = this.file2Base64; 
    
    this.dataService.caseDetail.thirdPartyDetail=formData
  }

  async getFile1(fileInput: any){
    this.file1 = fileInput.target.files[0];
     this.file1Base64 = await this.toBase64(this.file1);
  }
  async getFile2(fileInput: any){
    this.file2 = fileInput.target.files[0];
     this.file2Base64 = await this.toBase64(this.file2);
  }

  toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
}
