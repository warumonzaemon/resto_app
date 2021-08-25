import React, {Component, useState} from 'react';
import FilterRow from './FilterRow';

const ItemFilter = (props) => {
    const [category, setCategory] = useState("");

    const onChangeCategory = (e) => {
        props.onClickDisplayItemByCategory(e.target.value)
        console.log(e.target.value)
    }

   return(
       <>
           <select onChange={e => onChangeCategory(e)}  value={category}>             
               <option disable selected hidden>Select Category</option>
               {props.categories.map(x => <FilterRow category={x} key={x}/>)}
               
           </select>
       </>
   )

}


// class ItemFilter extends Component {
//     constructor(props){
//         super(props)

//         this.state= {category: ""};
//         this.onChangeCategory = this.onChangeCategory.bind(this);
//     }

//     onChangeCategory(e){
//         this.props.onClickDisplayItemByCategory(e.target.value)
//         console.log(e.target.value)
//     }


    
//     render(){
//         return(
//             <>
//                 <select onChange={e => this.onChangeCategory(e)}  value={this.state.category}>             
//                     <option disable selected hidden>Select Category</option>
//                     {this.props.categories.map(x => <FilterRow category={x} key={x}/>)}
                    
//                 </select>
//             </>
//         )
//     }
// }

export default ItemFilter;