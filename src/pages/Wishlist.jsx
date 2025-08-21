import React from "react";
import CreateWishlist from "../components/wishlistComp/CreateWishlist";
import AddWishlist from "../components/wishlistComp/AddWishlist";
import ListWishlist from "../components/wishlistComp/ListWishlist";

const Wishlist = () => {
  return <div>
    <CreateWishlist/>
    <AddWishlist/>
    <ListWishlist/>
  </div>;
};

export default Wishlist;
