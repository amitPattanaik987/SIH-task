import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const PaymentPage = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [country, setCountry] = useState("India");
  const [amount] = useState(12500);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment process
    alert("Payment Successful!");
    navigate("/thankyou");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex bg-white rounded-lg shadow-lg w-3/4">
        {/* Left side: Order Summary */}
        <div className="w-1/2 p-6 border-r">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pay</h2>
          <p className="text-3xl font-bold text-gray-800 mb-8">₹{amount}</p>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Mentorship Charges</span>
              <span>₹12,500.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service Charges</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 mt-4">
              <span>Total</span>
              <span>₹12,500.00</span>
            </div>
          </div>
        </div>

        {/* Right side: Payment Form */}
        <div className="w-1/2 p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pay with card</h2>
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card information</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="1234 1234 1234 1234"
                maxLength="16"
                required
              />
              <div className="flex space-x-4 mt-2">
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                  placeholder="MM / YY"
                  maxLength="5"
                  required
                />
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded"
                  placeholder="CVC"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Cardholder name</label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Full name on card"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Country or region</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Pay ₹{amount}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
