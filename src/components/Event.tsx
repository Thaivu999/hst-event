// import React from 'react'

// interface EventHighlightProps {
//     title: string;
//     subtitle: string;
//     description: string;
//     imageUrl: string;
//   }
  
//   const Event: React.FC<EventHighlightProps> = ({ title, subtitle, description, imageUrl }) => {
//     return (
//       <div className="relative text-white">
//         <img src={imageUrl} alt="Event background" className="w-full h-auto" />
//         <div className="absolute bottom-0 left-0 p-5">
//           <h2 className="text-4xl font-bold">{title}</h2>
//           <p className="text-xl">{subtitle}</p>
//           <p>{description}</p>
//           <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded">
//             Nhận Tư Vấn Ngay
//           </button>
//         </div>
//       </div>
//     );
//   };