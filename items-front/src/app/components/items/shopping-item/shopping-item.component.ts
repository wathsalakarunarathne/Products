import { Component, OnInit } from '@angular/core';
import { Item } from '../../../item';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList: Item[]=[];
  selectedItem: Item;
  toggleForm: boolean = false;
  constructor(private dataService: DataService) { 

  }

  getItems(){
    this.dataService.getShoppingItems()
      .subscribe(items => {
        this.shoppingItemList = items;
        //console.log('data from dataservice: '+ this.shoppingItemList[0].item_name)
      });
  }

  addItem(form){
    let newItem: Item = {
      item_no: form.value.item_no,
      item_name: form.value.item_name,
      size: form.value.size,
      item_price: form.value.item_price,
      item_quantity: form.value.item_quantity
      // description: form.value.description
      // addFields: form.value.addFields
    }
    this.dataService.addShoppingItem(newItem)
    .subscribe(item =>{
      console.log(item);
     this.getItems();
    })

    }
  

  deleteItem(id){
    this.dataService.deleteShoppingItem(id)
    .subscribe(data =>{
      console.log(data);
      if(data.n == 1){
        for(var i=0; 1< this.shoppingItemList.length; i++){
          if(id == this.shoppingItemList[i]._id){
            this.shoppingItemList.splice(i, 1);
          }
        }
      }

    })
  }

  editItem(form){
    let newItem: Item = {
      _id: this.selectedItem._id,
      item_no: form.value.item_no,
      item_name: form.value.item_name,
      size: form.value.size,
      item_price: form.value.item_price,
      item_quantity: form.value.item_quantity
      // description: form.value.description
      // addFields: form.value.addFields
    }
    this.dataService.updateShoppingItem(newItem)
      .subscribe( result =>{
        console.log('original Item to be updated with the old values:'+ result.item_quantity);
        this.getItems();
      });
      this.toggleForm = !this.toggleForm;
  }

  showEditForm(item){
    this.selectedItem = item;
    this.toggleForm = !this.toggleForm;

  }

  

  ngOnInit() {
    this.getItems()
      // .subscribe(items =>
        // this.items = items);
  // }
  }

}
