import React from 'react';
import moment from 'moment';

const UserHistoryBlock = (props) => {

    const renderBlocks = () => (
        props.products ?
            props.products.map((product, i) => (
                <tr key={i}>
                    <td>{product.porder}</td>                    
                    <td>{product.brand} {product.name}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{moment(product.dateOfPurchase).format("MM-DD-YYYY")}</td>
                </tr>
            ))
        :null
    )

    return (
        <div className="history_blocks">
            <table> 
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Product</th>
                        <th>Price Paid</th>
                        <th>Quantity</th>
                        <th>Date of purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBlocks()}
                </tbody>
            </table>
        </div>
    )
}

export default UserHistoryBlock;