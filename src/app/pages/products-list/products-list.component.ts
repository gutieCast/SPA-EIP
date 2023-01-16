import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { Product } from 'src/app/models/product.interface';
import { ProductCart } from 'src/app/models/productCart.interface';

import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @ViewChild('cartContent') CartContent!: TemplateRef<Product[]>;

  loading$ = this.loader.loading$;
  public products: Product[] = [];
  public cart: ProductCart[] = [];

  constructor(
    private productService: ProductService,
    public loader: LoadingService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.loader.show()
    this.productService.get()
    .subscribe({
      next: (res) => {
        this.products = res;
        this.loader.hide();
      }, error: (err) => {
        console.log(err);
        this.loader.hide();
        alert('Error: Hubo un error al hacer la petición.');
      }
    })
  }

  public addProductToCart(id: number) {
    const productToAdd = this.products.find((product: Product) => product.id === id) as Product | undefined;
    const productInCart = this.cart.find((productCart: ProductCart) => productCart.product === productToAdd) as ProductCart | undefined;
    if(productToAdd !== undefined && productInCart === undefined)  {
      this.cart = [...this.cart, { count: 1, product: productToAdd }]
    } else if(productInCart !== undefined) {
        productInCart.count++
      }
  }

  public openCart(): void {
    this._bottomSheet.open(this.CartContent);
  }

  public deleteAll(): void {
    this.cart = [];
    this._bottomSheet.dismiss()
  }

}
