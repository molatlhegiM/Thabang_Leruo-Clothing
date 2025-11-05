// Medical Scrubs Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  medicalScrubsFilters, 
  medicalScrubsProducts, 
  medicalScrubsPageData 
} from "./medicalScrubsData";

const MedicalScrubsPage = () => {
  return (
    <GenericShopPage
      title="Medical Scrubs & Lab Coats"
      breadcrumb="Medical Scrubs Shop"
      filters={medicalScrubsFilters}
      products={medicalScrubsProducts}
      pageData={medicalScrubsPageData}
    />
  );
};

export default MedicalScrubsPage;
