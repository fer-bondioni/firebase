import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
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
