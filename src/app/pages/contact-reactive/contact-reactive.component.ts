import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss'],
})
export class ContactReactiveComponent implements OnInit {
  loading = false;

  formData = this.fb.group({
    name: ['Juan', Validators.required],
    email: [
      '',
      [Validators.required, Validators.minLength(10), Validators.email],
    ],
    age: [0, [Validators.max(99), Validators.min(18)]],
    mailingList: [true],
    address: this.fb.group({
      street: ['San Martin'],
      number: [''],
      zipCode: [''],
    }),
    shirtSize: [],
  });

  // Estos datos nos deberian llegar de un servicio --> del back-end
  shirtDataModel = [
    {
      matColumnDef: 'description',
      matHeaderCellDef: 'Description',
      matCellDef: 'desc',
    },
    {
      matColumnDef: 'quantity',
      matHeaderCellDef: 'Quantity',
      matCellDef: 'quantity',
    },
    {
      matColumnDef: 'abbreviation',
      matHeaderCellDef: 'Abbr',
      matCellDef: 'abbr',
    },
    {
      matColumnDef: 'color',
      matHeaderCellDef: 'Color',
      matCellDef: 'color',
    },
  ];

  // Estos datos nos deberian llegar de un servicio --> del back-end
  shirtData = [
    { desc: 'extra-small', abbr: 'XS', quantity: 24, color: 'red' },
    { desc: 'small', abbr: 'S', quantity: 3, color: 'blue' },
    { desc: 'medium', abbr: 'M', quantity: 2, color: 'black' },
    { desc: 'large', abbr: 'L', quantity: 0, color: 'white' },
    { desc: 'extra-large', abbr: 'XL', quantity: 23, color: 'pink' },
  ];

  // Estos datos pueden llegar del back, o requerir de nosotros (desde el front-end) para modificar lo que se muestra en la tabla
  displayedColumns = ['description', 'quantity', 'abbreviation', 'color'];

  shirtColors = this.shirtData.map((shirt) => ({
    desc: shirt.abbr,
    color: shirt.color,
  }));

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.shirtColors);
  }

  submitForm() {
    // if (this.formData.valid) console.log(this.formData);
    // else alert('Faltan datos en el formulario');
    this.loading = true;
    setTimeout(() => {
      console.log(this.formData.value);
      this.loading = false;
    }, 3000);
  }

  resetAddress() {
    this.userAddress()?.setValue({
      street: 'Buenos Aires',
      number: '1500',
      zipCode: '5000',
    });
  }
}
