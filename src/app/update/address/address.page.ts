import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  
  public AddressForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  		this.AddressForm = this.formBuilder.group({
      address: ['',
        Validators.compose([Validators.required])],
   	});
   }

  ngOnInit() {
  }
  async updateaddress(AddressForm: FormGroup): Promise<void>{
  		let firebaseRef = firebase.database().ref(`Card Details/VL12ML1212/Email`);
  		const add = AddressForm.value.address;
  		firebaseRef.set({
  			"Email":add,
  		});
  	}

}
