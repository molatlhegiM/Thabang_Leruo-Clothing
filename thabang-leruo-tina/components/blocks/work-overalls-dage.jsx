// Work Overalls Page Component
import React from "react";
import GenericShopPage from "./GenericShopPage";
import { 
  workOverallsFilters, 
  workOverallsProducts, 
  workOverallsPageData 
} from "./workOverallsData";

const WorkOverallsPage = () => {
  return (
    <GenericShopPage
      title="Work Overalls"
      breadcrumb="Work Overalls Shop"
      filters={workOverallsFilters}
      products={workOverallsProducts}
      pageData={workOverallsPageData}
    />
  );
};

export default WorkOverallsPage;
