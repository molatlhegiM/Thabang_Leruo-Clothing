// Chef & Kitchen Uniforms Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  chefKitchenUniformsFilters, 
  chefKitchenUniformsProducts, 
  chefKitchenUniformsPageData 
} from "./chefKitchenUniformsData";

const ChefKitchenUniformsPage = () => {
  return (
    <GenericShopPage
      title="Chef & Kitchen Uniforms"
      breadcrumb="Chef & Kitchen Shop"
      filters={chefKitchenUniformsFilters}
      products={chefKitchenUniformsProducts}
      pageData={chefKitchenUniformsPageData}
    />
  );
};

export default ChefKitchenUniformsPage;
