import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {gte} from "./gta.validator";
import {validationReemail} from "./reemail.validator";

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Hàn Quốc'},
    {id: 3, name: 'Nhật Bản'}
  ]
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    reemail: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl(''),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, gte]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required])
    })
  })

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get age() {
    return this.contactForm.get('age');
  }

  get reemail() {
    return this.contactForm.get('reemail');
  }



  constructor() { }

  ngOnInit(): void {
  }

  onSubimit() {
    console.log(this.contactForm.value);
  }

  checkEmailMatch(): void {
    if (this.contactForm.get('email')?.value !== this.contactForm.get('reemail')?.value) {
      this.contactForm.get('reemail')?.setErrors({ notSame: true });
    }
  }
}
