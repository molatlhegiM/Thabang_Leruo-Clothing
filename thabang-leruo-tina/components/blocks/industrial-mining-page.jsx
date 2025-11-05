// Industrial & Mining Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  industrialMiningFilters, 
  industrialMiningProducts, 
  industrialMiningPageData 
} from "./industrialMiningData";

const IndustrialMiningPage = () => {
  return (
    <GenericShopPage
      title="Industrial & Mining Uniforms"
      breadcrumb="Industrial & Mining Shop"
      filters={industrialMiningFilters}
      products={industrialMiningProducts}
      pageData={industrialMiningPageData}
    />
  );
};

export default IndustrialMiningPage;
