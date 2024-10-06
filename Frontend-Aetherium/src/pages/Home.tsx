import React from "react"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import BlogCard from "../components/blogCard"
import ProductCard from "../components/ProductCard"
import SpecialProducts from "../components/specialProducts"
import BreadCrumb from "../components/BreadCrumb"
import Container from "../components/Container"
import Meta from "../components/Meta"

const Home = () => {
  return (
    <>
      <BreadCrumb title="" />
      <Meta title="Home" />

      <Container classname="home-wrapper-1 pb-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="/images/images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S140+ Pro.</h5>
                <p>
                  From $9999.00 or a kidney/mo.
                  <br />
                  for 24 mo. Footnote*
                </p>
                <Link to="" className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="/images/images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best sale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $999.00 or <br /> a $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="/images/images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br />
                    styles and colors
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="/images/images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $599 or
                    <br />a 50$/mo for 12 mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="/images/images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>free engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="/images/images/service.png" alt="service" />
                <div className="">
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/images/service-02.png" alt="service" />
                <div className="">
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/images/service-03.png" alt="service" />
                <div className="">
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/images/service-04.png" alt="service" />
                <div className="">
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="/images/images/service-05.png" alt="service" />
                <div className="">
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="catagories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/headphone.jpg" alt="watch" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/camera.jpg" alt="smth" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/headphone.jpg" alt="watch" />
              </div>
              <div className="d-flex gap align-items-center">
                <div className="">
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/images/camera.jpg" alt="smth" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container classname="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative bg-dark">
              <img src="/images/images/famous-1.png" className="" alt="" />
              <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From 2 kindeys or 1 kidney/mo. for 2 mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img
                src="/images/images/famous-2.png"
                className=""
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch-Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img
                src="/images/images/famous-3.png"
                className=""
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From 6 kidneys <br />
                  or 1 kid/mo. for 6 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img
                src="/images/images/famous-4.png"
                className="fixMe"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                <p className="text-dark">
                  From a million or sell youself 5 times/mo.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
      </Container>
      <Container classname="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Our Popular Products(gon do it later)
            </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container classname="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-01.png" alt="brand logo" />
                </div>
                <div>
                  <img src="/images/images/brand-02.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-03.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-04.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-05.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-06.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-07.png" alt="brand logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/images/brand-08.png" alt="brand logo" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
