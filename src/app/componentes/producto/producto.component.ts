import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  products: Array<{}> = [];

  constructor(
    private _service: ProductosService,
    private activatedRoute: ActivatedRoute
  ) {}

  filterResult(elements: any) {
    this.products = elements.filter((element: any) => element != null);
    console.log(this.products);
  }

  async getSingle() {
    const params = this.activatedRoute.snapshot.params.id;
    const result = await this._service.single(params);
    return result;
  }

  async ngOnInit() {
    const products = await this.getSingle();
    // console.log(this.products);
    this.filterResult(products);
  }
}
