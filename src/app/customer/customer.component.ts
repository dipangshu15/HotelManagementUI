import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  

  constructor(private activatedRoute:ActivatedRoute,private _router:Router) { }

  gotologin(){
    this._router.navigateByUrl("/login")
  }

  ngOnInit(): void {
  }

}
