import React from "react"
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import {
  MdHome,
  MdOutlinePhoneCallback,
  MdEmail,
  MdOutlineInfo,
} from "react-icons/md"
import Container from "../components/Container"

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container classname="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.454391186096!2d35.47802439715882!3d33.89667909829596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17283e7e3ced%3A0x740bcfc330ca9eb0!2sHamra%2C%20Beirut!5e0!3m2!1sen!2slb!4v1727599265693!5m2!1sen!2slb"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iframe-thingy-idk"
            />
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name..."
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email..."
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number..."
                    />
                  </div>
                  <div className="">
                    <textarea
                      className="w-100 form-control"
                      placeholder="Message..."
                      name=""
                      id=""
                    ></textarea>
                  </div>
                  <div className="">
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                <div className="">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdHome />
                      <address className="mb-0">
                        Somewhere on wallstreet, afghanistan, fuji mountain, on
                        your left
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdOutlinePhoneCallback />
                      <a href="tel:+91 2928302932">+91 2928302932</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdEmail />
                      <a href="mailto:lamoukfesoy@gmail.com">
                        lamoukfesoy@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdOutlineInfo />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Contact
