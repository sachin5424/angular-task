import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formError:any = {}

  registerForm =  new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  })
  constructor(private _http: HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  Save(){
    console.log(this.registerForm.value);
    this._http.post("http://localhost:3000/register",this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
       alert('succesfully regsiter')
       this.registerForm.reset()
       this._router.navigate(['/'])
    },(err:any)=>{
      // const errors = err.error.
console.log(err.error.errors)
if(err.error.errors){
  const errorrs = err.error.errors
  errorrs.map((item:any)=>{
    this.formError[item.param] = item.msg
  })
}

console.log(this.formError);

    })
    
  }
}
