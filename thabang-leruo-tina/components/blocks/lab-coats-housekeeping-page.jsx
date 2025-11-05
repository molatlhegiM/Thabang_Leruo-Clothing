// Lab Coats & Housekeeping Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  labCoatsHousekeepingFilters, 
  labCoatsHousekeepingProducts, 
  labCoatsHousekeepingPageData 
} from "./labCoatsHousekeepingData";

const LabCoatsHousekeepingPage = () => {
  return (
    <GenericShopPage
      title="Lab Coats & Housekeeping"
      breadcrumb="Lab Coats & Housekeeping Shop"
      filters={labCoatsHousekeepingFilters}
      products={labCoatsHousekeepingProducts}
      pageData={labCoatsHousekeepingPageData}
    />
  );
};

export default LabCoatsHousekeepingPage;
