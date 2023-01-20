import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  Email:any
  Password:any

  constructor(private router : Router) { }

  LogInOnClick(){
    if(this.Email == "Akshay" && this.Password == "ak123"){this.router.navigate(['res']);}
    console.log('loggedIN')
  }
  ngOnInit(): void {
  }
}
