import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
player ={
  email:``,
  password:``
}
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    localStorage.setItem('player',JSON.stringify( this.player));
    this.router.navigateByUrl('/');
  }

}
