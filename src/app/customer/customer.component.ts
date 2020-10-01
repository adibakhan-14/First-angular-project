import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  customerProfile = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
      number: new FormControl('')
      
  });
  onSubmit() {
    console.warn(this.customerProfile.value);
  }

}
