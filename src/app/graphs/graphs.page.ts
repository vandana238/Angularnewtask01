import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.page.html',
  styleUrls: ['./graphs.page.scss'],
})
export class GraphsPage implements OnInit {
  about: string | null | undefined;
  ionicForm: any;
  email: any;
  password:any;
 

  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute) {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      address: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(100)]],
      gender: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      select: ['', [Validators.required]]
    });
  
  }




  ngOnInit(): void {
    this.about=this.activatedRoute.snapshot.paramMap.get('id');
    
  }
 
  submitForm(){

  }


 
}
