import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {
  data:any =[];
  formError:any = {}

  registerForm =  new FormGroup({
    title:new FormControl(''),
    description:new FormControl('')

  })
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getList()
  
  }

  getList(){
    this._http.get("http://localhost:3000/private/list/blog").subscribe((res:any)=>{
      console.log(res,"??");
      
      this.data = res.data
    })
  }
  Save(){
    console.log(this.registerForm.value);
    this._http.post("http://localhost:3000/private/create/blog",this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
      this.getList()
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
