import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API = 'http://localhost:4000/api/products';

  selectedProduct: Product = {
    code: "",
    image: "",
    name: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0
  };
  products: Product[];

  constructor(private http: HttpClient){}  

  getProducts(filter: string) {
    return this.http.get<Product[]>(`${this.URL_API}${filter}`);    
  }
  createProduct(product: Product){
    console.log(product);
    return this.http.post(this.URL_API, product);
  }
  updateProduct(product: Product){
    return this.http.put(`${this.URL_API}/${product._id}`, product);
  }
  deleteProduct(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  /*updateImage(formData: FormData){
    this.http.post(`${this.URL_API}/${'uploads'}`, formData)
  }*/

  titleForm = 'Añadir nuevo producto';
  descriptionForm = 'Rellena todos (*) los campos para ingresar un núevo producto al inventario';
  btnGuardar = 'Guardar';
  centerTextModal = 'El producto se ha creado con éxito';
}
