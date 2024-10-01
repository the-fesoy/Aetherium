import { Link } from "react-router-dom"
import React from "react"
import { BsGithub, BsLinkedin, BsYoutube , BsInstagram   } from "react-icons/bs";



const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img
                  src="/images/images/newsletter.png"
                  alt="newslettter icon"
                />
                <h2 className="mb-0 text-white">Sign Up For News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 ">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  Nuh: 140 Someone's street,
                  <br />
                  Wohunberg, Lalaland <br />
                  PinCode: 69140
                </address>
                <a
                  href="tel: +96 69 420"
                  className="mt-4 d-block SomeoneNum text-white"
                >
                  +96 69 420 420
                </a>
                <a
                  href="tel: +96 69 969 696 "
                  className="mt-4 d-block mb-0 somebodyNum text-white"
                >
                  +96 69 969 696
                </a>
                <a
                  href="mailto: lamoukfesoy@gmail.com "
                  className="mt-2 d-block mb-1 text-white"
                >
                  lamoukfesoy@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a className="text-white" href="https://www.linkedin.com/in/yousef-mallouk-b48562326/" target="_blank" rel="noreferrer">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://github.com/the-fesoy" target="_blank" rel="noreferrer">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://youtu.be/xvFZjo5PgG0?si=b-aZkAOjwKWG_4b1"target="_blank" rel="noreferrer">
                    <BsYoutube className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.instagram.com/yosefmalok5/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fpassword%2Freset%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fpassword%252Freset%252F%253Fnext%253Dhttps%25253A%25252F%25252Fwww.instagram.com%25252Faccounts%25252Fpassword%25252Freset%25252F%25253Fnext%25253Dhttps%2525253A%2525252F%2525252Fwww.instagram.com%2525252Faccounts%2525252Fpassword%2525252Freset%2525252F%2525253Fnext%2525253Dhttps%252525253A%252525252F%252525252Fwww.instagram.com%252525252Faccounts%252525252Fpassword%252525252Freset%252525252F%252525253Fhl%252525253Den" target="_blank" rel="noreferrer">
                    <BsInstagram className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links  d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="terms-of-service">
                  Terms of Service
                </Link>
                <Link className="text-white py-2 mb-1" to="blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links  d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/about">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2 ">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links  d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Aetherium
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
