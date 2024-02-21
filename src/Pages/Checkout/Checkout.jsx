import PageBanner from '../../Components/PageBanner/PageBanner'
import './Checkout.css';
import { useContext, useState } from 'react';
import {cartContext} from '../../context/cart'
import NotFountText from '../../Components/NotFoundText/NotFoundText'


function Checkout(){

    const {cartItems, getCartTotal} = useContext(cartContext);
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setShippingDetails(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(shippingDetails)
    }

    return(
        <>
            <PageBanner title="Checkout" />        
            <div className='sec_padding checkout_sec'>
                <div className='container'>
                    {
                        cartItems.length > 0 ? 
                        <div className='checkout_content'>
                            <div className='checkout_form'>
                                <h2 className='sec_title'>Shipping Details</h2>
                                <form id="shipping_form" onSubmit={handleSubmit}>
                                    <p>
                                        <label htmlFor='name'>Name</label>
                                        <input type='text' id="name" name="name" placeholder='Enter your name' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' id="email" name="email" placeholder='Enter your email' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='phone'>Phone</label>
                                        <input type='tel' id="phone" name="phone" placeholder='Enter your phone' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='address'>Address</label>
                                        <input type='text' id="address" name="address" placeholder='Enter your address' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='city'>City</label>
                                        <input type='text' id="city" name="city" placeholder='Enter your city' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='state'>state</label>
                                        <input type='text' id="state" name="state" placeholder='Enter your state' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='country'>Country</label>
                                        <input type='text' id="country" name="country" placeholder='Enter your country' onChange={handleChange} required />
                                    </p>
                                    <p>
                                        <label htmlFor='zipCode'>Zip Code</label>
                                        <input type='text' id="zipCode" name="zipCode" placeholder='Enter your zip-code' onChange={handleChange} required />
                                    </p>
                                    <p className='submit_field'>
                                        <input type='submit' name="checkout_form_submit" id="checkout_form_submit" value="Submit" />
                                    </p>
                                </form>
                            </div>
                            <div className='checkout_order_details'>
                                <div className='order_details'>
                                    <h2 className='sec_title'>Your Order</h2>
                                    <table>
                                        <tbody>
                                            {
                                                cartItems.map((item, index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td>{item.title.slice(0,20)}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>${item.price * item.quantity}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <th>Subtotal</th>
                                                <td colSpan="2">${getCartTotal()}</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td colSpan="2">$0</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td colSpan="2">${getCartTotal() + 0}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='payment_gateways'>

                            </div>
                        </div> :
                        <NotFountText text="You cart is empty!" />
                    }
                </div>
            </div>
        </>
    )
}

export default Checkout;