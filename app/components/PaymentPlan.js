import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Payment = () => {
  return (
    <div className=" py-14 px-2 " id="price&payment-plan">
      <h2 className="text-3xl text-black font-semibold text-center ">
        Pricing
      </h2>
      <h4 className="text-xl text-black font-semibold text-center mb-6">
        Apartments & Townhouses
      </h4>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full ">
          <div className="shadow-lg ">
            <div className="text-center p-4">
              <p className="text-sm">754 sqft</p>
              <h3 className="text-lg font-semibold text-gray-400">
                1 Bed Apartments
              </h3>
              <h3 className="text-xl font-semibold text-gray-600">1.76M AED</h3>
            </div>
          </div>
          <div className="shadow-lg ">
            <div className="text-center p-4">
              <p className="text-sm">1181 sqft</p>
              <h3 className="text-lg font-semibold text-gray-400">
                2 Bed Apartments
              </h3>
              <h3 className="text-xl font-semibold text-gray-600">2.59M AED</h3>
            </div>
          </div>
          <div className="shadow-lg ">
            <div className="text-center p-4">
              <p className="text-sm">1540 sqft</p>
              <h3 className="text-lg font-semibold text-gray-400">
                3 Bed Apartments
              </h3>
              <h3 className="text-xl font-semibold text-gray-600">3.58M AED</h3>
            </div>
          </div>
          <div className="shadow-lg ">
            <div className="text-center p-4">
              <p className="text-sm">2,294 sqft</p>
              <h3 className="text-lg font-semibold text-gray-400">
                3 Bed Townhouses
              </h3>
              <h3 className="text-xl font-semibold text-gray-600">
                {" "}
                6.26 M AED
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-14 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl  font-semibold"> Payment Plan</h2>
        <p className="font-bold  mb-4">Rise to exclusive luxury</p>

        <table className="w-full">
          <thead>
            <tr className="bg-blue-800 text-white font-semibold uppercase ">
              <th class="px-2 sm:px-5 py-3">Installment </th>
              <th className="px-2 sm:px-5 py-3">Payment Percentage</th>
              <th className="px-2 sm:px-5  border-e-2 py-3">Due Date</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}>DOWN PAYMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> On Booking</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 1st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Jul. 2024</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 2st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Jan. 2025</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 3st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Jan. 2025</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 4st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Jan. 2026</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 5st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Sep. 2026</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 6st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Mar. 2027</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 7st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>10% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Oct. 2027</td>
            </tr>
            <tr>
              <td className={`px-2 sm:px-5 py-2 text-sm`}> 8st INSTALMENT</td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}>20% </td>
              <td className={`px-2 sm:px-5 py-2 text-sm `}> Apr. 2028</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
