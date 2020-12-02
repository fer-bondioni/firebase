import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  products: Array<{}> = [];

  constructor(private _service: ProductosService) {}

  filterResult(elements: any) {
    this.products = elements.filter((element: any) => element != null);
    console.log(this.products);
  }

  async getProducts() {
    const result = await this._service.getAll();
    return result;
  }

  async ngOnInit() {
    const products = await this.getProducts();
    // console.log(this.products);
    this.filterResult(products);
  }
}
