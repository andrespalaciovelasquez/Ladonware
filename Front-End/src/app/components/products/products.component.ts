import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  search: String;  
  idTemporal: string;
  constructor(public productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.searchProduct();
  }

  deleteProductModal(){
    this.productService.deleteProduct(this.idTemporal).subscribe(
      (res) => {
        this.searchProduct();        
      }
    )
  }

  deleteProduct(id: any){
    this.idTemporal = id;
  }

  editProduct(product: Product){
    this.router.navigate(['/form']);
    this.productService.titleForm = 'Editar producto';
    this.productService.descriptionForm = 'Modifica los campos que deseas actualizar';
    this.productService.btnGuardar = 'Guardar';
    this.productService.centerTextModal = 'El producto se ha actualizado correctamente';
    this.productService.selectedProduct = product;    
  }

  searchProduct(){
    const filter = (typeof this.search == 'string' && this.search.length > 0) ? `?searchBy=${this.search}` : '';
    this.productService.getProducts(filter).subscribe(
      (res) => this.productService.products = res
    );
  }
}
