// import React from 'react';
// import storeitems from './../data/storeitem.json';
// import { useshoppingcart } from "../Providorc";

// const Checkout = () => {
//   const { checkoutItems } = useshoppingcart();

//   return (
//     <section className="h-100 h-custom">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col">
//             <div className="card">
//               <div className="card-body p-4">
//                 <div className="row">
//                   <div className="col-lg-7">
//                     <h5 className="mb-3">
//                       <a href="/fav" className="text-body">
//                         <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
//                       </a>
//                     </h5>
//                     <hr />
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <div>
//                         <p className="mb-1">Shopping cart</p>
//                         <p className="mb-0">Total Items: {checkoutItems.length}</p>
//                       </div>
//                     </div>

//                     {checkoutItems.map((item) => {
//                       const storeItem = storeitems.find((i) => i.id === item.id);
//                       if (!storeItem) return null;

//                       return (
//                         <div key={item.id} className="card mb-3">
//                           <div className="card-body">
//                             <div className="d-flex justify-content-between">
//                               <div className="d-flex flex-row align-items-center">
//                                 {/* Adding the image here */}
//                                 <img 
//                                   src={storeItem.imgUrl} // Assuming storeItem.imageUrl holds the image URL
//                                   alt={storeItem.name}
//                                   style={{ width: '65px' }}
//                                   className="img-fluid rounded-3"
//                                 />
//                                 <div className="ms-3">
//                                   <h5>{storeItem.name}</h5>
//                                   <p className="small mb-0">Details about {storeItem.description}</p>
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center">
//                                 <div style={{ width: '50px' }}>
//                                   <h5 className="fw-normal mb-0">{item.quantity}</h5>
//                                 </div>
//                                 <div style={{ width: '80px' }}>
//                                   <h5 className="mb-0">${storeItem.price}</h5>
//                                 </div>
//                                 <a href="#!" style={{ color: '#cecece' }}>
//                                   <i className="fas fa-trash-alt"></i>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}

//                   </div>
//                   <div className="col-lg-5">
//                     <div className="card bg-primary text-white rounded-3">
//                       <div className="card-body">
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                           <h5 className="mb-0">Card details</h5>
//                         </div>
//                         <form className="mt-4">
//                           <div className="form-outline form-white mb-4">
//                             <input type="text" id="typeName" className="form-control form-control-lg" placeholder="Cardholder's Name" />
//                             <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
//                           </div>
//                           <div className="form-outline form-white mb-4">
//                             <input type="text" id="typeCardNumber" className="form-control form-control-lg" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
//                             <label className="form-label" htmlFor="typeCardNumber">Card Number</label>
//                           </div>
//                           <div className="row mb-4">
//                             <div className="col-md-6">
//                               <div className="form-outline form-white">
//                                 <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" minLength="7" maxLength="7" />
//                                 <label className="form-label" htmlFor="typeExp">Expiration</label>
//                               </div>
//                             </div>
//                             <div className="col-md-6">
//                               <div className="form-outline form-white">
//                                 <input type="password" id="typeCVV" className="form-control form-control-lg" placeholder="●●●" minLength="3" maxLength="3" />
//                                 <label className="form-label" htmlFor="typeCVV">CVV</label>
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                         <hr className="my-4" />
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Subtotal</p>
//                           <p className="mb-2">${(checkoutItems.reduce((acc, item) => {
//                             const storeItem = storeitems.find((i) => i.id === item.id);
//                             return storeItem ? acc + (storeItem.price * item.quantity) : acc;
//                           }, 0)).toFixed(2)}</p>
//                         </div>
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Shipping</p>
//                           <p className="mb-2">$20.00</p>
//                         </div>
//                         <div className="d-flex justify-content-between mb-4">
//                           <p className="mb-2">Total (Incl. taxes)</p>
//                           <p className="mb-2">${(
//                             (checkoutItems.reduce((acc, item) => {
//                               const storeItem = storeitems.find((i) => i.id === item.id);
//                               return storeItem ? acc + (storeItem.price * item.quantity) : acc;
//                             }, 0)) + 20
//                           ).toFixed(2)}</p>
//                         </div>
//                         <button type="button" className="btn btn-info btn-block btn-lg">
//                           <div className="d-flex justify-content-between">
//                             <span>${(
//                               (checkoutItems.reduce((acc, item) => {
//                                 const storeItem = storeitems.find((i) => i.id === item.id);
//                                 return storeItem ? acc + (storeItem.price * item.quantity) : acc;
//                               }, 0)) + 20
//                             ).toFixed(2)}</span>
//                             <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
//                           </div>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Checkout;
import React, { useState } from 'react';
import storeitems from './../data/storeitem.json';
import { useshoppingcart } from "../Providorc";
import emailjs from 'emailjs-com'; // استيراد EmailJS
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { checkoutItems } = useshoppingcart();
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCheckout = async () => {
    // تحقق من أن جميع الحقول قد تم ملؤها
    if (!email || !cardName || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSending(true);

    // إعداد تفاصيل الطلب
    const orderDetails = checkoutItems.map(item => {
      const storeItem = storeitems.find((i) => i.id === item.id);
      return storeItem ? `${storeItem.name} (${item.quantity}) - $${storeItem.price * item.quantity}` : null;
    }).filter(Boolean).join('\n');

    // حساب الإجمالي
    const subtotal = checkoutItems.reduce((acc, item) => {
      const storeItem = storeitems.find((i) => i.id === item.id);
      return storeItem ? acc + (storeItem.price * item.quantity) : acc;
    }, 0);

    const shipping = 20.00;
    const total = subtotal + shipping;

    // إعداد رسالة البريد الإلكتروني
    const message = `
      Order Summary:
      ${orderDetails}
      
      Subtotal: $${subtotal.toFixed(2)}
      Shipping: $${shipping.toFixed(2)}
      Total: $${total.toFixed(2)}
    `;

    try {
      // إرسال البريد الإلكتروني باستخدام EmailJS
      // await emailjs.send(
      //   'service_bkyqaig',    // Service ID الخاص بك من EmailJS
      //   'template_to111ji',   // Template ID الخاص بك من EmailJS
      //   { 
      //     to_email: email,    // عنوان البريد الإلكتروني الذي يدخله المستخدم
      //     message: message,   // محتوى الرسالة
      //   },
      //   '045XfgF-7wK-tpdLV'        // User ID الخاص بك من EmailJS
      // );

      alert('Order details sent successfully!');
      console.log('Navigating to /order');

      navigate('/Order'); 
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Order details sent successfully!');

    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="h-100 h-custom "style={{ marginTop: '-10%' }}>
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
                                <img 
                                  src={storeItem.imgUrl}
                                  alt={storeItem.name}
                                  style={{ width: '65px' }}
                                  className="img-fluid rounded-3"
                                />
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
                    <div className="card text-white rounded-3 "style={{background:"linear-gradient(to bottom, #3C6677, #D9D9D9)"}}>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                        </div>
                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              placeholder="Cardholder's Name"
                              value={cardName}
                              onChange={handleCardNameChange}
                            />
                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeCardNumber"
                              className="form-control form-control-lg"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                            />
                            <label className="form-label" htmlFor="typeCardNumber">Card Number</label>
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="text"
                                  id="typeExp"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  minLength="7"
                                  maxLength="7"
                                  value={expiry}
                                  onChange={handleExpiryChange}
                                />
                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="password"
                                  id="typeCVV"
                                  className="form-control form-control-lg"
                                  placeholder="●●●"
                                  minLength="3"
                                  maxLength="3"
                                  value={cvv}
                                  onChange={handleCvvChange}
                                />
                                <label className="form-label" htmlFor="typeCVV">CVV</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input
                              type="email"
                              id="typeEmail"
                              className="form-control form-control-lg"
                              placeholder="Enter your email"
                              value={email}
                              onChange={handleEmailChange}
                            />
                            <label className="form-label" htmlFor="typeEmail">Email Address</label>
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
                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                          onClick={handleCheckout}
                          disabled={isSending}
                        >
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
