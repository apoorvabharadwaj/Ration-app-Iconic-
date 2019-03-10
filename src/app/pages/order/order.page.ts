import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Router } from '@angular/router';


let firebaseRef = firebase.database().ref(`Warehouse/North`) ;
let ans1=0,ans2=0,ans3=0,ans4=0,ans5=0;

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
   
  constructor(private router: Router) { }
  ngOnInit() {}
  
  onChangerice(){
        console.log(this.Rice);
        let req = parseInt(this.Rice);
        //let firebaseRef = firebase.database().ref(`Warehouse/North`) ;

        firebaseRef.once("value", function(snapshot){
        	let rice = snapshot.child("rice_quantity").val();
        	ans1 = rice - req;
        	console.log(ans1);
    }, function (error) {
   console.log("Error: " + error.code);
});
    }     
   onChangeragi(){
        console.log(this.Ragi);
        let req = parseInt(this.Ragi);
        firebaseRef.once("value", function(snapshot){
        	let ragi = snapshot.child("ragi_quantity").val();
        	ans2 = ragi - req;
        	console.log(ans2);

    }, function (error) {
   console.log("Error: " + error.code);
});
    }
   onChangewheat(){
        console.log(this.Wheat);
        let req = parseInt(this.Wheat);

        firebaseRef.once("value", function(snapshot){
        	let wheat = snapshot.child("wheat_quantity").val();
        	ans3 = wheat - req;
        	console.log(ans3);
    }, function (error) {
   console.log("Error: " + error.code);
});
        
    }
    onChangesalt(){
        console.log(this.Salt);
        let req = parseInt(this.Salt);

        firebaseRef.once("value", function(snapshot){
        	let salt = snapshot.child("salt_quantity").val();
        	ans4 = salt - req;
        	console.log(ans4);
    }, function (error) {
   console.log("Error: " + error.code);
});
    }
    onChangesugar(){
        console.log(this.Sugar);
        let req = parseInt(this.Sugar);
        firebaseRef.once("value", function(snapshot){
        	let sugar = snapshot.child("sugar_quantity").val();
        	ans5 = sugar - req;
        	console.log(ans5);
    }, function (error) {
   		console.log("Error: " + error.code);
	});
    }

    getorder(){
    		firebaseRef.set({
        		"rice_quantity":ans1,
        		"ragi_quantity":ans2,
        		"wheat_quantity":ans3,
        		"salt_quantity":ans4,
        		"sugar_quantity":ans5

        	});
        this.router.navigateByUrl('home');

    }
   
}
