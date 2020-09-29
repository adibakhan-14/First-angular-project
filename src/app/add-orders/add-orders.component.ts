import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-add-orders',  
  templateUrl: './add-orders.component.html',  
  styleUrls: ['./add-orders.component.css'],  
})
export class AddOrdersComponent implements OnInit {
  addOrderArray=[];
  addorders(value){   
     this.addOrderArray.push(value)    
     console.log(this.addOrderArray) 
     }

     

       deleteItem(addOrder){   
         for(let i=0 ;i<= this.addOrderArray.length ;i++){   
            if(addOrder== this.addOrderArray[i]){     this.addOrderArray.splice(i,1)   
             }  
            
            }  
          }

          addOrderSubmit(value:any){ 
            console.log(value)
            {     if(value!==""){   
               this.addOrderArray.push(value.addOrder)    
                        }
            else{      
              alert('Field required **') 
            }
            }
          }

  constructor() { }

  ngOnInit(): void {
  }


}
