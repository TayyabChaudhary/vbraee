import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import MainLayout from "../pages/layouts/MainLayout";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/Checkout";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Shops from "../pages/Shops";
import ShopDetails from "../pages/ShopDetails";
import HowToSell from "../pages/HowToSell";
import SelectPlan from "../pages/SelectPlan";
import Affiliate from "../pages/Affiliate";
import Contact from "../pages/Contact";
import CouponPartner from "../pages/CouponPartner";
import HelpCenter from "../pages/HelpCenter";
import SubmitRequest from "../pages/SubmitRequest";
import HelpTopic from "../pages/HelpTopic";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Redeem from "../pages/Redeem";
import GiveAway from "../pages/Giveaway";
import Dashboard from "../pages/account/Dashboard";
import AccountLayout from "../pages/layouts/AccountLayout";
import NewOffers from "../pages/account/NewOffers";
import MyOffers from "../pages/account/MyOffers";
import Wishlist from "../pages/account/Wishlist";
import Sales from "../pages/account/Sales";
import Orders from "../pages/account/Orders";
import Balance from "../pages/account/Balance";
import AccountHelpCenter from "../pages/account/HelpCenter";
import Reviews from "../pages/account/Reviews";
import Notifications from "../pages/account/Notifications";
import OfferDetails from "../pages/account/OfferDetails";
import RequestProduct from "../pages/account/RequestProduct";
import SalesDetails from "../pages/account/SalesDetails";
import OrderDetails from "../pages/account/OrderDetails";
import HelpDetails from "../pages/account/HelpDetails";
import Profile from "../pages/account/Profile";
import Messages from "../pages/account/Messages";
import Support from "../pages/account/Support";
import SupportDetails from "../pages/account/Support_Details";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="psn" element={<Category activeCategory={'psn'} />} />
        <Route path="xbox" element={<Category activeCategory={'xbox'} />} />
        <Route path="nintendo" element={<Category activeCategory={'nintendo'} />} />
        <Route path="gift-cards" element={<Category activeCategory={'gift-cards'} />} />
        <Route path="pc-gaming" element={<Category activeCategory={'pc-gaming'} />} />
        <Route path="skins" element={<Category activeCategory={'skins'} />} />
        <Route path="software" element={<Category activeCategory={'software'} />} />
        <Route path="vr-games" element={<Category activeCategory={'vr-games'} />} />
        <Route path="weekly-deals" element={<Category activeCategory={'weekly-deals'} />} />

        <Route path="details" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<BlogDetails />} />
        <Route path="shops" element={<Shops />} />
        <Route path="shop-details" element={<ShopDetails />} />
        <Route path="how-to-sell" element={<HowToSell />} />
        <Route path="select-plan" element={<SelectPlan />} />
        <Route path="affiliate" element={<Affiliate />} />
        <Route path="coupon-partner" element={<CouponPartner />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="help-topic" element={<HelpTopic />} />
        <Route path="submit-request" element={<SubmitRequest />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="redeem" element={<Redeem />} />
        <Route path="giveaway" element={<GiveAway />} />
      </Route>

      <Route path="/account" element={<AccountLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="new-offers" element={<NewOffers />} />
        <Route path="offers" element={<MyOffers />} />
        <Route path="sales" element={<Sales />} />
        <Route path="orders" element={<Orders />} />
        <Route path="balance" element={<Balance />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="help-center" element={<AccountHelpCenter />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="offer-details" element={<OfferDetails />} />
        <Route path="request-product" element={<RequestProduct />} />
        <Route path="sales-details" element={<SalesDetails />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="help-details" element={<HelpDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="support" element={<Support />} />
        <Route path="support-details" element={<SupportDetails />} />
      </Route>
    </>
  )
);

export default Router;
