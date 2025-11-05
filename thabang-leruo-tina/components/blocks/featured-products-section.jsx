"use client";
// Featured Products Section for Homepage
import React, { useEffect } from "react";
import { featuredProductsData } from "./featuredProductsData";

const FeaturedProductsSection = ({ data }) => {
  const products = data?.products || featuredProductsData;
  const title = data?.title || "Featured Products";
  const subtitle = data?.subtitle || "Check out our most popular items";

  useEffect(() => {
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = '/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    const styleCSS = document.createElement('link');
    styleCSS.rel = 'stylesheet';
    styleCSS.href = '/css/style.min.css';
    document.head.appendChild(styleCSS);

    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(styleCSS);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">{title}</span>
        </h2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="row px-xl-5">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.img} alt={product.name} />
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="#">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="#">
                  {product.name}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{product.price}</h5>
                  {product.oldPrice && (
                    <h6 className="text-muted ml-2">
                      <del>{product.oldPrice}</del>
                    </h6>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <small
                      key={i}
                      className={`fa fa-star${
                        i < product.rating ? "" : "-half-alt"
                      } text-primary mr-1`}
                    ></small>
                  ))}
                  <small>({product.reviews})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSection;

// TinaCMS Schema
export const featuredProductsSectionBlockSchema = {
  name: 'featuredProductsSection',
  label: 'Featured Products',
  ui: {
    defaultItem: {
      title: 'Featured Products',
      subtitle: 'Check out our most popular items',
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
