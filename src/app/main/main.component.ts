
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: any = [
    {
      color: '#F11516',
      title: 'URGENCY',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      color: '#1767E5',
      title: 'STUDENT',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      color: '#6B41E9',
      title: 'SPECIALIST',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      color: '#35DB93',
      title: 'NURSING',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
  ]

  /* -------- Código da requisição http desativado pois o servidor no momento da entrega do teste estava com o erro 429 -------- */

  // products: any;

  // readonly API_URL = ' https://teste-simsave.getsandbox.com:443/home'

  // constructor(private http: HttpClient) { 
  //   this.http.get(this.API_URL).toPromise().then(data => {
  //     let res: any = data
  //     console.log(data)
  //     this.products = res.products
  //     for(let product of this.products) {
  //       let title: string = product.title.toUpperCase()
  //       product.title = title
  //     };
  //   });
  // };

  ngOnInit(): void {
    
  }

}
