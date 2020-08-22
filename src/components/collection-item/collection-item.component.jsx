import React from 'react';
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({addItems, ...item}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
        <div className="collection-footer">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
        </div>
        <CustomButton inverted onClick={()=> addItems(item)}>Add to Cart</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItems: (item) => dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);