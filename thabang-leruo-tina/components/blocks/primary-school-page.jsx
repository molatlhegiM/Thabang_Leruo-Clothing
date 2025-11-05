// Primary School Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  primarySchoolFilters, 
  primarySchoolProducts, 
  primarySchoolPageData 
} from "./primarySchoolData";

const PrimarySchoolPage = () => {
  return (
    <GenericShopPage
      title="Primary School Uniforms"
      breadcrumb="Primary School Shop"
      filters={primarySchoolFilters}
      products={primarySchoolProducts}
      pageData={primarySchoolPageData}
    />
  );
};

export default PrimarySchoolPage;
