import './App.css';
import ItemBox from './component/ItemBox';
import AddItem from './component/AddItem';
import AddToCart from './component/AddToCart';
import EditItem from './component/EditItem';
import { useSelector, useDispatch } from 'react-redux';

const App =() => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const onClickToggleVisibility = () => {        
    let e = document.querySelector(".AddItemForm");

    if(e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    };           
}

  return(
    <div className="App">
      <header>
        <h1>the HEPA lane</h1>
        <h6>Satisfaction on the corner.</h6>
      </header>
      <div>
        <div className="ShoppingWindow">
          <div className="ItemBoxContainer">
            <div className="MenuHeader">
              <h2>Menu</h2>
              <select className="AppSelect" onChange={(e) => dispatch({type: 'FILTER_ITEMS', payload: e.target.value})}  >             
               <option disable selected hidden>Select Category</option>
               {categories.map(type => {return( 
                   <>
                      
                     <option key={type}>{type}</option>
                   </>
               )})}
              </select>
              <button className="AddItem" onClick={onClickToggleVisibility}>Add new item to menu</button> 
            </div>
            <div className="ItemBox">
              <ItemBox />
            </div>
          </div>
          <div className="Forms">
            <AddToCart />
            <AddItem />
            <EditItem />
          </div>
        </div>
      </div>
      <footer>
       <h6> &copy; the HEPA lane</h6>
      </footer>      
    </div>
  )
}

export default App;
