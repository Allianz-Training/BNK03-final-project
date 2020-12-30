import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
})
export class OwnerComponent implements OnInit {
  file1!: File;
  file1Base64: any;
  file2!: File;
  file2Base64: any;

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.form = this.builder.group({
      text: [''],
    });
  }

  ngOnInit(): void {}

  back() {
    console.log(this.dataService.hasThirdParty);
    if (this.dataService.hasThirdParty === true) {
      this.dataService.hasThirdParty = false;
      this.router.navigate(['thirdparty']);
    } else {
      this.router.navigate(['home']);
    }
  }

  finish() {
    let formData = this.form.value;
    formData.ownerImage1 = this.file1Base64;
    formData.ownerImage2 = this.file2Base64;

    this.dataService.caseDetail.customerCaseDetail = formData;
    console.log(this.dataService.caseDetail);

    this.dataService
      .post('/claim/case', this.dataService.caseDetail, {})
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  async getFile1(fileInput: any) {
    this.file1 = fileInput.target.files[0];
    this.file1Base64 = await this.toBase64(this.file1);
  }
  async getFile2(fileInput: any) {
    this.file2 = fileInput.target.files[0];
    this.file2Base64 = await this.toBase64(this.file2);
  }

  toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
}
