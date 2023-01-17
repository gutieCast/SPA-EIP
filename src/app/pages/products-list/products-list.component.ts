import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  @ViewChild('cartContent') CartContent!: TemplateRef<ProductCart[]>;

  loading$ = this.loader.loading$;
  public products: Product[] = [];
  public cart: ProductCart[] = [];
  private elapsed!: number;

  constructor(
    private productService: ProductService,
    public loader: LoadingService,
    private _bottomSheet: MatBottomSheet,
    public _snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.showBarSnack();
  }

  private getProducts(): void {
    const start: Date = new Date()
    this.loader.show()
    this.productService.get()
    .subscribe({
      next: (res) => {
        const end: Date = new Date();
        this.products = res;
        this.loader.hide();
        this.elapsed = (end.getSeconds() - start.getSeconds()) * 1000;
      }, error: (err) => {
        console.log(err);
        this.loader.hide();
        alert('Error: Hubo un error al hacer la petición.');
      }
    })
  }

  private showBarSnack(): void {
    setTimeout(() => {
      if(!this.elapsed) {
        this._snack.open('Ooops! This action is taking much time! Please, recharge the page', 'Get it!', {
          duration: 3000,
        });
      }
      if(this.elapsed && this._snack._openedSnackBarRef) {
        this._snack.dismiss()
      }
    }, 7000);
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
