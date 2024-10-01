const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const body_parser = require("body-parser");
const AuthRouter = require("./routes/authRoutes");
const { ErrorHandler, notFound } = require("./middleware/ErrorHandler");
const cookie_parser = require("cookie-parser");
const ProductRouter = require("./routes/ProductRoutes");
const blogRouter = require("./routes/blogRoutes");
const CatagoryRouter = require("./routes/productCatagoryRoutes");
const blogCatagoryRouter = require("./routes/blogCatagoryRoutes");
const brandRouter = require("./routes/brandRoutes");
const ColorRouter = require("./routes/colorRoutes");
const CouponRouter = require("./routes/couponRoutes");
const EnquiryRouter = require("./routes/EnqRoute");
const morgan = require("morgan");

//connecting with mongo db

dbConnect();

//middle ware for authintications and such
app.use(morgan("dev"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());

//router thingies

app.use("/api/user", AuthRouter);
app.use("/api/product", ProductRouter);
app.use("/api/blog", blogRouter);
app.use("/api/catagory", CatagoryRouter);
app.use("/api/blogCatagory", blogCatagoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/color", ColorRouter);
app.use("/api/Coupon", CouponRouter);
app.use("/api/enquiry", EnquiryRouter);

app.use(notFound);

app.use(ErrorHandler);

//listening for requests

app.listen(PORT, () => {
  console.log(`APP IS WORKING ON PORT ${PORT}`);
});
