import React from 'react';
import storeitems from './../data/storeitem.json';
import { useshoppingcart } from "../Providorc";

const Checkout = () => {
  const { checkoutItems } = useshoppingcart();

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="/fav" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">Total Items: {checkoutItems.length}</p>
                      </div>
                    </div>

                    {checkoutItems.map((item) => {
                      const storeItem = storeitems.find((i) => i.id === item.id);
                      if (!storeItem) return null;

                      return (
                        <div key={item.id} className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div className="ms-3">
                                  <h5>{storeItem.name}</h5>
                                  <p className="small mb-0">Details about {storeItem.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '50px' }}>
                                  <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                </div>
                                <div style={{ width: '80px' }}>
                                  <h5 className="mb-0">${storeItem.price}</h5>
                                </div>
                                <a href="#!" style={{ color: '#cecece' }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                        </div>
                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeName" className="form-control form-control-lg" placeholder="Cardholder's Name" />
                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeCardNumber" className="form-control form-control-lg" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                            <label className="form-label" htmlFor="typeCardNumber">Card Number</label>
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" minLength="7" maxLength="7" />
                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="password" id="typeCVV" className="form-control form-control-lg" placeholder="●●●" minLength="3" maxLength="3" />
                                <label className="form-label" htmlFor="typeCVV">CVV</label>
                              </div>
                            </div>
                          </div>
                        </form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${(checkoutItems.reduce((acc, item) => {
                            const storeItem = storeitems.find((i) => i.id === item.id);
                            return storeItem ? acc + (storeItem.price * item.quantity) : acc;
                          }, 0)).toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2">${(
                            (checkoutItems.reduce((acc, item) => {
                              const storeItem = storeitems.find((i) => i.id === item.id);
                              return storeItem ? acc + (storeItem.price * item.quantity) : acc;
                            }, 0)) + 20
                          ).toFixed(2)}</p>
                        </div>
                        <button type="button" className="btn btn-info btn-block btn-lg">
                          <div className="d-flex justify-content-between">
                            <span>${(
                              (checkoutItems.reduce((acc, item) => {
                                const storeItem = storeitems.find((i) => i.id === item.id);
                                return storeItem ? acc + (storeItem.price * item.quantity) : acc;
                              }, 0)) + 20
                            ).toFixed(2)}</span>
                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
