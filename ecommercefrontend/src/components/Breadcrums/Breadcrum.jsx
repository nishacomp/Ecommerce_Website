/* eslint-disable react/prop-types */
import './Breadcrum.css'
import arrrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
        HOME <img src={arrrow_icon} alt="arrow icon" /> SHOP <img src={arrrow_icon} alt="arrow icon" />
		{product.category} <img src={arrrow_icon} alt="arrow icon" /> {product.name}
    </div>
  )
}
