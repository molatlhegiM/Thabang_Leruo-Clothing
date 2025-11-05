// Workwear Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  workwearFilters, 
  workwearProducts, 
  workwearPageData 
} from "./workwearData";

const WorkwearPage = () => {
  return (
    <GenericShopPage
      title="Professional Workwear"
      breadcrumb="Workwear Shop"
      filters={workwearFilters}
      products={workwearProducts}
      pageData={workwearPageData}
    />
  );
};

export default WorkwearPage;
