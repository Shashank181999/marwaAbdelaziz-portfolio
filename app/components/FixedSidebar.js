// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function FixedSidebar() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={`hidden xl:block fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
//       {/* Container with close button */}
//       <div className="relative">
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute -left-3 top-3 w-8 h-8 bg-red-900 hover:bg-red-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
//         >
//           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Logo card */}
//         <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-l-4 border-red-900 shadow-2xl shadow-red-900/30 rounded-l-3xl p-6">
//           {/* Logo */}
//           <div className="relative w-32 h-32 mb-4">
//             <Image
//               src="/ma-vision-logo.svg"
//               alt="MA VISION Developments"
//               fill
//               className="object-contain drop-shadow-2xl"
//             />
//           </div>

//           {/* Divider */}
//           <div className="w-full h-[2px] bg-gradient-to-r from-red-900 via-red-700 to-transparent mb-4"></div>

//           {/* Text */}
//           <div className="text-center">
//             <h3 className="text-white font-black text-sm mb-1 tracking-tight">
//               MA VISION
//             </h3>
//             <p className="text-gray-400 text-xs font-semibold">
//               Developments
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="mt-4 space-y-2">
//             <div className="flex items-center justify-between text-xs">
//               <span className="text-gray-500">Est.</span>
//               <span className="text-red-900 font-bold">2001</span>
//             </div>
//             <div className="flex items-center justify-between text-xs">
//               <span className="text-gray-500">Portfolio</span>
//               <span className="text-red-900 font-bold">10B+</span>
//             </div>
//             <div className="flex items-center justify-between text-xs">
//               <span className="text-gray-500">Experience</span>
//               <span className="text-red-900 font-bold">24+ Yrs</span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative glow */}
//         <div className="absolute inset-0 bg-gradient-to-l from-red-900/20 to-transparent rounded-l-3xl blur-xl -z-10"></div>
//       </div>
//     </div>
//   );
// }