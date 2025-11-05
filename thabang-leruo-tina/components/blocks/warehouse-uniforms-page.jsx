// Warehouse Uniforms Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  warehouseUniformsFilters, 
  warehouseUniformsProducts, 
  warehouseUniformsPageData 
} from "./warehouseUniformsData";

const WarehouseUniformsPage = () => {
  return (
    <GenericShopPage
      title="Warehouse Uniforms"
      breadcrumb="Warehouse Uniforms Shop"
      filters={warehouseUniformsFilters}
      products={warehouseUniformsProducts}
      pageData={warehouseUniformsPageData}
    />
  );
};

export default WarehouseUniformsPage;
