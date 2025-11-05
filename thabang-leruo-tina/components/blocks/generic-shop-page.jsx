"use client";
// Generic Shop Page Component
import React, { useEffect } from "react";
import ShopSection from "./ShopSection";

const GenericShopPage = ({ title, breadcrumb, filters, products, pageData }) => {
  useEffect(() => {
    // Load Bootstrap CSS
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = '/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    // Load custom style CSS
    const styleCSS = document.createElement('link');
    styleCSS.rel = 'stylesheet';
    styleCSS.href = '/css/style.min.css';
    document.head.appendChild(styleCSS);

    // Load Font Awesome from CDN
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Cleanup function
    return () => {
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(styleCSS);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <div className="shop-page">
      {/* Page Header */}
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">{title}</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="/" className="text-dark">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">{breadcrumb}</p>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <ShopSection
        filters={filters}
        products={products}
        page={pageData}
      />
    </div>
  );
};

export default GenericShopPage;
