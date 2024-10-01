import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/contact"
import OurStore from "./pages/OurStore"
import Blogs from "./pages/Blogs"
import CompareProducts from "./pages/CompareProducts"
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login"
import Forgotpassword from "./pages/Forgotpassword"
import Signup from "./pages/Signup"
import Resetpassword from "./pages/Resetpassword"
import SingleBlog from "./pages/SingleBlog"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ShippingPolicy from "./pages/ShippingPolicy"
import RefundPolicy from "./pages/RefundPolicy"
import TermsOfService from "./pages/TermsOfService"
import SingleProduct from "./pages/SingleProduct"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="login/forgot-password" element={<Forgotpassword />} />
            <Route path="about" element={<About />}/>
            <Route path="compare" element={<CompareProducts />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="login/forgot-password/reset-password" element={<Resetpassword />}/>
            <Route path="wishlist" element={<Wishlist />}/>
            <Route path="login" element={<Login />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="ourStore" element={<OurStore />}/>
            <Route path="blogs/blog/:id" element={<SingleBlog />}/>
            <Route path="privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="shipping-policy" element={<ShippingPolicy />}/>
            <Route path="refund-policy" element={<RefundPolicy />}/>
            <Route path="terms-of-service" element={<TermsOfService />}/>
            <Route path="ourStore/products/product/:id" element={<SingleProduct />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
