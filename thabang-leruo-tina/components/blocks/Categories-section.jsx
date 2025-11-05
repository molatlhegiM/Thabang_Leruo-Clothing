"use client";
// Categories Section for Homepage
import React, { useEffect } from "react";
import { categoriesData } from "./categoriesData";

const CategoriesSection = ({ data }) => {
  const categories = data?.categories || categoriesData;
  const title = data?.title || "Shop by Category";
  const subtitle = data?.subtitle || "Browse our complete range of uniforms and clothing";

  useEffect(() => {
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = '/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{title}</span>
        </h2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="row px-xl-5 pb-3">
        {categories.map((category) => (
          <div key={category.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
              <a href={category.link} className="cat-img position-relative overflow-hidden mb-3">
                <img className="img-fluid" src={category.image} alt={category.name} />
              </a>
              <h5 className="font-weight-semi-bold m-0">{category.name}</h5>
              <p className="text-muted mb-2">{category.description}</p>
              <small className="text-muted">{category.productCount} Products</small>
              <a href={category.link} className="btn btn-sm btn-primary mt-3">
                <i className="fa fa-shopping-bag mr-1"></i> Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;

// TinaCMS Schema
export const categoriesSectionBlockSchema = {
  name: 'categoriesSection',
  label: 'Categories Section',
  ui: {
    defaultItem: {
      title: 'Shop by Category',
      subtitle: 'Browse our complete range of uniforms and clothing',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Section Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Section Subtitle',
    },
  ],
};
