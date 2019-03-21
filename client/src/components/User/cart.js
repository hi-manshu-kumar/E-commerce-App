import React, { Component } from 'react';
import UserLayout from '../../HOC/userLayout';
import UserProductBlock from '../utils/User/product_block';

import {connect} from 'react-redux';
import {getCartItems} from '../../actions/user_actions';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFrown, faSmile} from '@fortawesome/fontawesome-free-solid';

class UserCart extends Component{

    state = {
        loading:true,
        total:0,
        showTotal: false,
        showSuccess: false
    }

    componentDidMount(){
        let cartItems = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0){
                
                user.userData.cart.forEach(item=> {
                    cartItems.push(item.id)
                });
                this.props.dispatch(getCartItems(cartItems, user.userData.cart))
            }
        }
    }

    removeFromCart = (id) => {
        console.log('ji')
    }
    
    render(){
        return(
            <UserLayout>
                <div>
                    <h1>My CART</h1>
                    <div className="user_cart">
                        <UserProductBlock
                            products={this.props.user}
                            type="cart"
                            removeItem={(id)=> this.removeFromCart(id)}
                        />
                    </div>
                </div>
            </UserLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserCart);
