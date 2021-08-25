import {v4 as uuidv4 } from 'uuid';

const initialState = { 
    items: [
        {
            id: uuidv4(),
            name: "Isaw",
            price: 5,
            category: "Foods",
            description: "",
            image: "https://pbs.twimg.com/media/EdKC7C1VAAAV7eG?format=jpg&name=large"
        },     
        {      
            id: uuidv4(),
            name: "Betamax",
            price: 4,
            category: "Foods",
            description: "",
            image: "https://s3.amazonaws.com/iftbucket/2013/12/18125141/PH-manila-betamax-696x512.jpg"
        },     
        {      
            id: uuidv4(),
            name: "Addidas",
            price: 5,
            category: "Foods",
            description: "",
            image: "https://www.lutongbahayrecipe.com/wp-content/uploads/2019/07/lutong-bahay-adobong-adidas-678x381.jpg"
        },     
        {      
            id: uuidv4(),
            name: "Kikiam 9pcs/stick",
            price: 35,
            category: "Foods",
            description: "",
            image: "https://www.lutongbahayrecipe.com/wp-content/uploads/2019/06/59814953_127678608423824_551611802135104740_n-678x381.jpg"
        },     
        {      
            id: uuidv4(),
            name: "Iced Tea",
            price: 30,
            category: "Drinks",
            description: "",
            image: "https://cdnimg.webstaurantstore.com/images/products/large/464930/1858832.jpg"
        },     
        {      
            id: uuidv4(),
            name: "Fish Ball 10pcs./stick",
            price: 15,
            category: "Drinks",
            description: "",
            image: "https://images.unsplash.com/photo-1537081538824-2fcad5cb096b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=402&q=80"
        }], 
    categories: ["All","Foods","Drinks", "Desserts", "Combo Meals" ],
    currentSelectedCategory: "All",
    filteredItems: [],
    itemToModify: "",
    cart:[], 
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    let updateFilteredItems = [...state.items];

    switch(action.type){
        case 'ADD_NEW_ITEM':
            let newItemList = [...state.items, action.payload]
            let newItemListFiltered = 
            state.currentSelectedCategory === "All"
            ? newItemList
              : newItemList.filter(
              (data) => data.category.indexOf(state.currentSelectedCategory) >= 0);
            return {...state, 
                items: newItemList, 
                filteredItems: newItemListFiltered};
        case 'FILTER_ITEMS':
            let selectedCategory = action.payload;
            let filteredItemsByCategory = 
            selectedCategory === "All"
            ? state.items
              : state.items.filter(
              (data) => data.category.indexOf(selectedCategory) >= 0
              );
            return {...state, filteredItems: filteredItemsByCategory, 
                selectedCategory, 
                currentSelectedCategory: action.payload }
        case 'DELETE_ITEM':
            let updatedList = state.items.filter(item => item.id !== action.payload);
            let updatedFilteredListDel = state.filteredItems.filter(item => item.id !== action.payload);
            let updatedCartDel = state.cart.filter(item => item.id !== action.payload);
            let updatedTotalDel = updatedCartDel.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
              }, 0);
            return {...state, 
                items: updatedList,
                filteredItems: updatedFilteredListDel, 
                cart: updatedCartDel, 
                totalPrice: updatedTotalDel}
        case 'ADD_TO_CART':
            let itemFoundInStore = state.items.find(item => item.id === action.payload)
            let itemToBeAdded = {...itemFoundInStore, quantity: 1}
            let currentCartAdd = [...state.cart, itemToBeAdded]
            let initialTotal = currentCartAdd.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
              }, 0);
            return {...state, cart:[...state.cart, itemToBeAdded], totalPrice: initialTotal};
        case 'DELETE_CART_ITEM':
            let updatedCartDel2 = state.cart.filter(item => item.id !== action.payload);
            let updatedTotalDel2 = updatedCartDel2.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
              }, 0);
            return {...state, 
                cart: updatedCartDel2, 
                totalPrice: updatedTotalDel2};
        case 'CHANGE_QUANTITY':
            let changedItem = action.payload;
            let currentCart = state.cart.slice(0);
            let updatedCart = currentCart.map (item => {
                if (item.id === changedItem.id)
                    {if (changedItem.operation === 1)
                        {item.quantity += 1}
                    else if (changedItem.operation === -1 && item.quantity > 1)
                        {item.quantity -= 1}}
                return item; } );
            let total = state.cart.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
              }, 0);
            return {...state, cart:updatedCart, totalPrice: total };
        case 'ITEM_TO_MODIFY':
            let e = document.querySelector(".EditItemForm");
            if(e.style.display === 'block') {
                e.style.display = 'none';
            } else {
                e.style.display = 'block';
            }; 
            return {...state, itemToModify: action.payload};
        case 'MODIFY_ITEM':
            let itemToBeEdited = action.payload
            let currentListEdit = state.items.slice(0);
            let updatedListEdit = currentListEdit.map (item => {
                if (item.id === itemToBeEdited.id){
                    item.name = itemToBeEdited.name;
                    item.price = itemToBeEdited.price;
                    item.category = itemToBeEdited.category;
                    item.image = itemToBeEdited.image;
                    } return item; });
            let updatedListEditFiltered = 
            state.currentSelectedCategory === "All"
            ? updatedListEdit
              : updatedListEdit.filter(
              (data) => data.category.indexOf(state.currentSelectedCategory) >= 0);
            let updatedCartEdit = state.cart.filter(item => item.id !== itemToBeEdited.id);
            let updatedTotalEdit = updatedCartEdit.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
              }, 0);
            return {...state, 
                items: updatedListEdit, 
                filteredItems: updatedListEditFiltered, 
                cart: updatedCartEdit, 
                totalPrice: updatedTotalEdit};
        default:
            return {...state, filteredItems: updateFilteredItems}
    }
}

export default reducer;