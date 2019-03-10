import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  public UpdateForm: FormGroup;	
  
  constructor(private formBuilder: FormBuilder) {
  	 this.UpdateForm = this.formBuilder.group({
      oldname: ['',
        Validators.compose([Validators.required, Validators.minLength(6)])],
      newname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {
  }
  async updatename(UpdateForm: FormGroup): Promise<void>{
  		const temp = UpdateForm.value.oldname;
  		let firebaseRef = firebase.database().ref(`Card Details/VL12ML1212`);
  		const name = UpdateForm.value.newname;
  		console.log(name);

  }
}
