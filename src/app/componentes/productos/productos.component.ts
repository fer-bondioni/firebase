import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  form: FormGroup;
  products: Array<{}> = [];
  FormObject = {
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  };

  constructor(private _service: ProductosService) {}

  createForm(): void {
    this.form = new FormGroup(this.FormObject);
  }

  verifyField(field: string) {
    const f = this.form.controls[field];

    if (f.status === 'INVALID' && f.touched) {
      if (f.hasError('required')) return `El campo ${field} es obligatorio`;
      if (f.hasError('minLength'))
        return `El campo ${field} debe tener más caracteres`;
    }
  }

  filterResult(elements: any) {
    this.products = elements.filter((element: any) => element != null);
    console.log(this.products);
  }

  async getProducts() {
    const result = await this._service.getAll();
    return result;
  }

  async submit() {
    const result: any = await this._service.create(this.form.value);
    console.log(result);
  }

  async ngOnInit() {
    const products = await this.getProducts();
    // console.log(this.products);
    this.createForm();
    this.filterResult(products);
  }
}
