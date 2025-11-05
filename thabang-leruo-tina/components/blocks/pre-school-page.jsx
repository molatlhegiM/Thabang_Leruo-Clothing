// Pre School Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  preSchoolFilters, 
  preSchoolProducts, 
  preSchoolPageData 
} from "./preSchoolData";

const PreSchoolPage = () => {
  return (
    <GenericShopPage
      title="Pre School Uniforms"
      breadcrumb="Pre School Shop"
      filters={preSchoolFilters}
      products={preSchoolProducts}
      pageData={preSchoolPageData}
    />
  );
};

export default PreSchoolPage;
