import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private _router:Router) { }

  gotologin(){
    this._router.navigateByUrl("/login")
  }

  ngOnInit(): void {
  }

}
