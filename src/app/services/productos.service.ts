import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService extends BaseService {
  getAll() {
    this.setEndPoint('productos/all');
    return this.get();
  }

  single(id) {
    this.setEndPoint('productos/:id');
    return this.get();
  }

  create(producto: Producto) {
    const obj = {
      nombre: producto.nombre,
      precio: producto.precio,
      foto: producto.foto,
      stock: producto.stock,
    };
    this.setEndPoint('productos');
    this.post(obj);
  }
}
