import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }

  registerForm:any; //form

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null),
      "lastName": new FormControl(null),
      "emailId": new FormControl(null),
      "mobileNumber": new FormControl(null)


    });
  }
// submit function 
submitData()
{
  console.log(this.registerForm.value);

  if(this.registerForm.valid)
  {
    alert(firstName);


    this.registerForm.reset(); //reset form value
    
  }


}}
