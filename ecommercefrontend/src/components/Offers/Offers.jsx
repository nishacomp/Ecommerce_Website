import './Offers.css'
import exclimg from '../Assets/exclusive_image.jpg'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Special</h1>
            <h1>Offers on current Stock</h1>
            <p>The Best Sellers Products available in stock</p>
            <button>Buy Now</button>
        </div>
        <div className="offers-right">
            <img src={exclimg} alt="Offer image" /> 
        </div>
    </div>
  )
}
 