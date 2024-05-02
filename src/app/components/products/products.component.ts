import { Component } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : product[]=[
{
id : '555524',
  name : 'shirt',
  type : 'Germents',
  color : 'blue',
  price : 9.9
},
{
  id : '56996',
  name : 'iphone 14 pro',
  type : 'Mobile',
  color : 'Gold',
  price : 1455
}
 ];

}
