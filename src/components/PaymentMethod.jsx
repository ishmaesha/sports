import React from 'react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 1,
      name: 'Credit/Debit Card',
      description: 'Credit/Debit Card',
      logo: "https://i.pinimg.com/736x/12/dc/75/12dc750bda126d1d30e0a004db25b203.jpg"                                                                       
    },
    {
      id: 2,
      name: 'JazzCash',
      description: '',
      logo: 'https://i.pinimg.com/736x/0b/27/04/0b2704346ead079c6178c8d939e9063c.jpg', 
    },
    {
      id: 3,
      name: 'EasyPaisa',
      description: 'Easypaisa mobile account required',
      logo:"https://i.pinimg.com/736x/80/31/c6/8031c6abd95fcee33da6ecb67264eaa2.jpg"                                                    
    },
    {
      id: 4,
      name: 'HBL Bank Account',
      description: '',
      logo: 'https://i.pinimg.com/736x/4d/b6/71/4db671e657cc68620c969a7f08adfd8d.jpg', 
    },
    {
      id: 5,
      name: 'Cash on Delivery',
      description: 'Cash on Delivery',
      logo: 'https://i.pinimg.com/736x/01/8c/21/018c2188d4fccfcaf036d124e0115492.jpg', 
    },
  ];

  return (
    <div className="payment-methods">
      <h2>Select Payment Method</h2>
      <div className="other-payment-methods">
        {paymentMethods.map((method) => (
          <div key={method.id} className="payment-method">
            <img src={method.logo} alt={method.name} />
            <div className="payment-method-info">
              <h3>{method.name}</h3>
              <p>{method.description}</p>
            </div>
            <span>&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;