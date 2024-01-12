import './Footer.css';
import { BsEnvelope, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="form-wrapper">
        <h6 className="form-heading">Join the club</h6>
        <form >
          <input type="email" placeholder='Enter your email' />
          <BsEnvelope className="icon"/>
        </form>
      </div>
      <footer>
        <a href="/" className="logo_wrapper"><BsInstagram /></a>
        <div className="footer_links">
          <a href="/" className='link'>Return Request</a>
          <a href="/" className='link'>Exchange Request</a>
          <a href="/" className='link'>Terms and Conditions</a>
          <a href="/" className='link'>Privacy Policy</a>
          <a href="/" className='link'>Return, Refund and Cancellation Policy</a>
          <a href="/" className='link'>Shipping and Delivery Policy</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
