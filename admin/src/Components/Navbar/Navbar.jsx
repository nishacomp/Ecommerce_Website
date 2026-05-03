import './Navbar.css'
import navlogo from '../Assets/nav-logo.jpeg'
import navprofileIcon from '../Assets/profileimg.jpg'

// Navbar Components with nav logo and nav profile img
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar