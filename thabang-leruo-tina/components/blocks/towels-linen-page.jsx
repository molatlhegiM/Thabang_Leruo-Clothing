// Towels & Linen Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  towelsLinenFilters, 
  towelsLinenProducts, 
  towelsLinenPageData 
} from "./towelsLinenData";

const TowelsLinenPage = () => {
  return (
    <GenericShopPage
      title="Towels & Linen"
      breadcrumb="Towels & Linen Shop"
      filters={towelsLinenFilters}
      products={towelsLinenProducts}
      pageData={towelsLinenPageData}
    />
  );
};

export default TowelsLinenPage;
