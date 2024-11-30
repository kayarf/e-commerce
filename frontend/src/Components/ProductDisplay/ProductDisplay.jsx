import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(133)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">R${product.old_price}</div>
                <div className="productdisplay-right-price-new">R${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            "The adorable and stylish Bangboos of ZZZ are launching an amazing line of everyday clothing for everyone! Inspired by the charm and authenticity of the ZZZ universe, these pieces combine comfort, vibrant colors, and designs perfect for any occasion. Each garment reflects the unique essence of the Bangboos: simplicity, creativity, and a touch of fun. Discover t-shirts, pants, jackets, and accessories that match your style—whether casual, trendy, or chic. Dress like a Bangboo and carry the spirit of ZZZ in every detail!"
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>    
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}
