import { makeAutoObservable } from "mobx";

class ShoppingBasketStore {
  shoppingItems = []
  count = 0;
  totalPrice = 0;
  isDisabledButton = true

  constructor() {
    makeAutoObservable(this);
  }

  addItemShoppingBasket(item) {
    this.shoppingItems.push({
      productName: item.productName,
      price: item.price,
      thumb: item.thumb,
      category: item.category,
      id: item.id
    })
    this.count = this.shoppingItems.lengths

    this.totalPrice += item.price

    this.shoppingItems.length ? this.isDisabledButton = false : this.isDisabledButton = true

  }
  
  removeItemShoppingBasket(item, id) {
    const finded = this.shoppingItems.find(item => item.id === id)
    const filtered = this.shoppingItems.filter(item => item !== finded)
    this.shoppingItems = filtered
    this.totalPrice -= item.price
    this.shoppingItems.length ? this.isDisabledButton = false : this.isDisabledButton = true
    console.log('shoppingItems', this.shoppingItems)
  }
}

export const shoppingBasketStore = new ShoppingBasketStore();

