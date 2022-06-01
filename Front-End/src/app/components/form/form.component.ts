import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {  

  uploadedFiles: any;
  constructor(public productService: ProductService, private http: HttpClient, private router:Router) { }
  
  titleForm = this.productService.titleForm;
  descriptionForm = this.productService.descriptionForm;
  btnGuardar = this.productService.btnGuardar;
  centerTextModal = this.productService.centerTextModal;

  fileChange(element: Event) {    
    this.uploadedFiles = (<HTMLInputElement>element.target).files;    
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);        
    }
    this.http.post('http://localhost:4000/api/products/uploads', formData)
            .subscribe((response) => {
                console.log('response received is ', response);
            })
  }

  addProduct(form: NgForm){
    if (form.value._id){      
      this.productService.updateProduct(form.value).subscribe(
        (res) => {        
          
          console.log(res)          
        }
      );
    } else {
        this.productService.createProduct(form.value).subscribe(
          (res) => {
            //console.log(res);
            form.reset();
          }
        )
    }
  }

  navigateProducts(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {       
  }
  

}
