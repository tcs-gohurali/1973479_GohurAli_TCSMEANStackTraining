import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  contactRef = new FormGroup({
    contactName:new FormControl(),
    phoneNum:new FormControl()
  })
  username:string = localStorage['username']

  //contacts:Array<Array<string>> = new Array(); //[["Joe","123"],["Bob","456"]]
  contacts:Array<Array<string>> = [["Joe","123"],["Bob","456"]]
  
  constructor() { }

  ngOnInit(): void {
  }

  saveContactInfo(){
    this.contacts.push([this.contactRef.value['contactName'],this.contactRef.value['phoneNum']])
    console.log(this.contacts)
  }

}
