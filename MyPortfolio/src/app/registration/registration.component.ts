import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    username:new FormControl(),
    password:new FormControl()
  })
  msg:string = ""

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  registerAccount(){
    console.log("Registering acount...")
    sessionStorage.setItem("fname",this.registrationRef.value['fname'])
    sessionStorage.setItem("lname",this.registrationRef.value['lanem'])
    sessionStorage.setItem("username",this.registrationRef.value['username'])
    sessionStorage.setItem("password",this.registrationRef.value['password'])
    this.msg = "Account Registered!"
    this.router.navigate(['../login'])
    
  }

}
