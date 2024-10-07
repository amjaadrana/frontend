// import React from 'react';

// const Testimonial = () => {
//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-lg mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">What our customers say</h2>
//         <div className="flex flex-wrap justify-center mb-8">
//           <div className="w-full md:w-1/2 xl:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <p className="text-lg font-medium mb-2">"I've never been happier with a product!"</p>
//               <p className="text-gray-600">- John Doe</p>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 xl:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <p className="text-lg font-medium mb-2">"This product has changed my life!"</p>
//               <p className="text-gray-600">- Jane Smith</p>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 xl:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <p className="text-lg font-medium mb-2">"I'm so impressed with the quality!"</p>
//               <p className="text-gray-600">- Bob Johnson</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// components/Testimonial.js
import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-image">
        <img src="/bg1.png" alt="Patient Image" />
      </div>
      <div className="testimonial-content">
        <p>
          "I was blown away by the exceptional care I received from Dr. Smith. The appointment was seamless and the staff were friendly and professional. I highly recommend this practice!"
        </p>
        <p className="testimonial-author">- Emily R., Happy Patient</p>
      </div>
    </div>
  );
};

export default Testimonial;