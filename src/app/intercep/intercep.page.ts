import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intercep',
  templateUrl: './intercep.page.html',
  styleUrls: ['./intercep.page.scss'],
})
export class IntercepPage implements OnInit {
  intercep: string | null | undefined;
  productData: any[] = [];


  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.intercep=this.activatedRoute.snapshot.paramMap.get('id');

     this.http.get<any[]>('https://fakestoreapi.com/products').subscribe((data)=>{
      this.productData=data
      this.productData = Array.isArray(data) ? data : [];
      console.log(data,"hello")
      console.log(this.productData)
     })


  }

}
