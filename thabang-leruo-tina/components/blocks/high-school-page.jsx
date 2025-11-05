// High School Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  highSchoolFilters, 
  highSchoolProducts, 
  highSchoolPageData 
} from "./highSchoolData";

const HighSchoolPage = () => {
  return (
    <GenericShopPage
      title="High School Uniforms"
      breadcrumb="High School Shop"
      filters={highSchoolFilters}
      products={highSchoolProducts}
      pageData={highSchoolPageData}
    />
  );
};

export default HighSchoolPage;
