// src/components/ShopSection.jsx
import React from "react";

const ShopSection = ({ filters, products, page }) => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4">
          {filters.map((filter) => (
            <div key={filter.id} className="mb-30">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">{filter.title}</span>
              </h5>
              <div className="bg-light p-4">
                <form>
                  {filter.options.map((option) => (
                    <div
                      key={option.id}
                      className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={option.id}
                        defaultChecked={option.checked}
                      />
                      <label className="custom-control-label" htmlFor={option.id}>
                        {option.label}
                      </label>
                      <span className="badge border font-weight-normal">{option.count}</span>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            {/* Sorting & View Options */}
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light">
                    <i className="fa fa-th-large"></i>
                  </button>
                  <button className="btn btn-sm btn-light ml-2">
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
                <div className="ml-2 d-flex">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Sorting
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Showing
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">10</a>
                      <a className="dropdown-item" href="#">20</a>
                      <a className="dropdown-item" href="#">30</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Items */}
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={product.img} alt={product.name} />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart"></i></a>
                      <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart"></i></a>
                      <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt"></i></a>
                      <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search"></i></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href="#">{product.name}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{product.price}</h5>
                      {product.oldPrice && <h6 className="text-muted ml-2"><del>{product.oldPrice}</del></h6>}
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <small key={i} className={`fa fa-star${i < product.rating ? '' : '-half-alt'} text-primary mr-1`}></small>
                      ))}
                      <small>({product.reviews})</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-12">
              <nav>
                <ul className="pagination justify-content-center">
                  {Array.from({ length: page.totalPages }).map((_, i) => (
                    <li key={i} className={`page-item ${i + 1 === page.current ? 'active' : ''}`}>
                      <a className="page-link" href={page.links[i]}>{i + 1}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
