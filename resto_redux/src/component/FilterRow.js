import React, {Component} from 'react';

const FilterRow = (props) => {
    return(
        <option>{props.category}</option>
    )
}

// class FilterRow extends Component {
//     render(){
//         return(
//             <option>{this.props.category}</option>
//         )
//     }
// }

export default FilterRow;