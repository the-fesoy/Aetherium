import { NavLink, Link } from "react-router-dom"
import React from "react"
import { BsSearch } from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header className="Header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white " href="tel:+961 03147298">
                  +961 03147298
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link to="/" className="text-white">Aetheirum</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/images/compare.svg" alt=""></img>
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/images/wishlist.svg" alt=""></img>
                    <p className="mb-0">
                      Favourite
                      <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/images/user.svg" alt=""></img>
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/images/cart.svg" alt=""></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0 </span>
                      <p className="mb-0 ">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Catagories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          yoo
                        </Link>
                        Action
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          yoo
                        </Link>
                        Another action
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          yoo
                        </Link>
                        Something else here
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/ourStore">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
