import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public AddForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  		this.AddForm = this.formBuilder.group({
      name: ['',
        Validators.compose([Validators.required, Validators.minLength(6)])],
      age: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(3)]),
      ],
      aadhar: [
        '',
        Validators.compose([Validators.required, Validators.minLength(12)]),
      ],
      account: [
        '',
        Validators.compose([Validators.required, Validators.minLength(12)]),
      ],
      income: [
        '',
        Validators.compose([Validators.required])
      ],
      relation: [
        '',
        Validators.compose([Validators.required]),
      ],
    });
  }

  ngOnInit() {
  }

  async updateadd(AddForm: FormGroup): Promise<void>{
  		let firebaseRef = firebase.database().ref(`Card Details/VL12ML1212`);
  		const name = AddForm.value.name;
  		const age = AddForm.value.age;
  		const aadhar = AddForm.value.aadhar;
  		const ac =  AddForm.value.account;
  		const inc = AddForm.value.income;
  		const rel = AddForm.value.relation;
  		console.log(name,age,aadhar,ac,inc,rel);
  		firebaseRef.child(name).set({
  			"age":age,
  			"Aadhar_Number":aadhar,
  			"Bank_Account_No":ac,
  			"Income":inc,
  			"Relation":rel

  		});
  	}

}
