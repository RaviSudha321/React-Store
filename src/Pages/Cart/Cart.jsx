import PageBanner from "../../Components/PageBanner/PageBanner";
import { useContext } from "react";
import { cartContext } from "../../context/cart";
import NotFoundText from '../../Components/NotFoundText/NotFoundText'
import './Cart.css'
import { NavLink } from "react-router-dom";

function Cart(){

    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal, deleteFromCart} = useContext(cartContext);

    return (
        <>
            <PageBanner title="Cart" />
            <div className="sec_padding cart_main">
                <div className="container">
                    <div className="cart_content">
                        {
                            cartItems.length > 0 ? <div className="cart_list">
                                <table className="cart_table">
                                    <thead>
                                        <tr>
                                            <th className="serial_no">Sr. No.</th>
                                            <th className="product_image">Product Image</th>
                                            <th className="product_title">Product Title</th>
                                            <th className="price">Price</th>
                                            <th className="quantity">Quantity</th>
                                            <th className="action">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        cartItems.map((item, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td className="serial_no">{index + 1}</td>
                                                    <td className="product_image"><img src={item.image} alt={item.title} /></td>
                                                    <td className="product_title">{item.title}</td>
                                                    <td className="price">${item.price * item.quantity}</td>
                                                    <td className="quantity">
                                                        <span onClick={()=>removeFromCart(item)}>-</span>
                                                        {item.quantity}
                                                        <span onClick={()=>addToCart(item)}>+</span>
                                                    </td>
                                                    <td className="action"><a href="#" onClick={(e)=>{e.preventDefault(); deleteFromCart(item)}}>Delete</a></td> 
                                                </tr>                   
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                <div className="cart_action">
                                    <div className="global_btn" style={{textAlign: 'right'}}>
                                        <a href="#" onClick={(e)=>{e.preventDefault(); clearCart()}}>Clear Cart</a>
                                    </div>
                                </div>
                                <div className="cart_totals">
                                    <table style={{border: '1px solid #000', borderCollapse:'collapse'}}>
                                        <tr>
                                            <th>Sub Total:</th>
                                            <td>${getCartTotal()}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Charges:</th>
                                            <td>$0</td>
                                        </tr>
                                        <tr>
                                            <th>Total:</th>
                                            <td>${getCartTotal()}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="checkout_btn">
                                    <div className="global_btn" style={{textAlign: 'right'}}>
                                        <NavLink to="/checkout">Proceed to Checkout</NavLink>    
                                    </div>    
                                </div>
                            </div> 
                            : 
                            <NotFoundText text="Cart is empty!" />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;