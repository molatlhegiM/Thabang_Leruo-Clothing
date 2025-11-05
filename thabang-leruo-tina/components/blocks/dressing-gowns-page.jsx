// Dressing Gowns Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  dressingGownsFilters, 
  dressingGownsProducts, 
  dressingGownsPageData 
} from "./dressingGownsData";

const DressingGownsPage = () => {
  return (
    <GenericShopPage
      title="Luxury Dressing Gowns"
      breadcrumb="Dressing Gowns Shop"
      filters={dressingGownsFilters}
      products={dressingGownsProducts}
      pageData={dressingGownsPageData}
    />
  );
};

export default DressingGownsPage;
