import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formError:any = {}

  registerForm =  new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')

  })
  constructor(private _http: HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  Save(){
    console.log(this.registerForm.value);
    this._http.post("http://localhost:3000/login",this.registerForm.value).subscribe((res:any)=>{
      alert('succesfully saved')
      
      window.localStorage.setItem('token',res.token);
      this._router.navigate(['blog-tabel'])
      this.registerForm.reset()
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
