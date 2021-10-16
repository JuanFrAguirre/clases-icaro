import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl('Juan', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.email,
    ]),
    age: new FormControl(0, [Validators.max(99), Validators.min(18)]),
    mailingList: new FormControl(true),
    address: new FormGroup({
      street: new FormControl('San Martin'),
      number: new FormControl(''),
      zipCode: new FormControl(''),
    }),
  });

  userName() {
    return this.formData.get('name');
  }
  userEmail() {
    return this.formData.get('email');
  }
  userAddress() {
    return this.formData.get('address');
  }
  userStreet() {
    return this.userAddress()?.get('street');
  }

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    // if (this.formData.valid) console.log(this.formData);
    // else alert('Faltan datos en el formulario');
    console.log(this.userEmail());
  }

  resetAddress() {
    this.userAddress()?.setValue({
      street: 'Buenos Aires',
      number: '1500',
      zipCode: '5000',
    });
  }
}
