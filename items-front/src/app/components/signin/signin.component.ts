import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




// import { Component, OnInit } from '@angular/core';
// import { Router} from '@angular/router';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent implements OnInit {

//   constructor(private router:Router) { }

//   ngOnInit() {
//   }
// loginUser(e){
//   e.preventDefault();
//   var username = e.target.elements[0].value;
//   var password = e.target.elements[1].value;
//   if(username == 'admin' && password == 'admin'){
//     this.router.navigate(['appmenu']);
//   }

// }
// }