// Officewear Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  officewearFilters, 
  officewearProducts, 
  officewearPageData 
} from "./officewearData";

const OfficewearPage = () => {
  return (
    <GenericShopPage
      title="Professional Officewear"
      breadcrumb="Officewear Shop"
      filters={officewearFilters}
      products={officewearProducts}
      pageData={officewearPageData}
    />
  );
};

export default OfficewearPage;
