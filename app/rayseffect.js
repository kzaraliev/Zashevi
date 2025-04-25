// import { KeyIcon, HomeModernIcon, PhoneIcon } from "@heroicons/react/20/solid";

// const cards = [
//   {
//     name: "Обадете ни се!",
//     description: "Ние ще се погрижим да сме в точния час на уреченото място",
//     icon: PhoneIcon,
//   },
//   {
//     name: "Осигурете ни достъп!",
//     description: "Екипът ни ще свърши задачата си с хирургическа точност",
//     icon: KeyIcon,
//   },
//   {
//     name: "Насладете се на разчистено помещение!",
//     description:
//       "На чисто: сега вече сте готови да продължите с ремонта по свой вкус",
//     icon: HomeModernIcon,
//   },
// ];

// export default function Example({ blurred = true }) {
//   return (
//     <div className="relative isolate overflow-hidden bg-[#2E2E2E] py-24 sm:py-32 w-full">
//       {/* Лъчи, които се пресичат или не, със случайни координати */}
//       <div className="absolute inset-0 -z-10 w-screen h-full flex items-center justify-center">
//         <svg
//           className="absolute w-full h-full opacity-40"
//           viewBox="0 0 2000 800"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="rayGradient" x1="0" y1="0" x2="100%" y2="0">
//               <stop offset="0%" stopColor="#f7c51e" stopOpacity="0.7" />
//               <stop offset="100%" stopColor="#f7c51e" stopOpacity="0.2" />
//             </linearGradient>
//             {blurred && (
//               <filter id="blurEffect">
//                 <feGaussianBlur stdDeviation="12" />
//               </filter>
//             )}
//           </defs>
//           {Array.from({ length: 6 }).map((_, i) => (
//             <polygon
//               key={i}
//               points={`0,${Math.random() * 800} 2000,${
//                 Math.random() * 800
//               } 2000,${Math.random() * 800}`}
//               fill="url(#rayGradient)"
//               opacity={Math.random() * 0.4 + 0.3}
//               transform={`rotate(${Math.random() * 30 - 15}, 1000, 400)`}
//               filter={blurred ? "url(#blurEffect)" : "none"}
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-8xl lg:mx-0 text-center">
//           <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-9/10">
//             Зашеви Транс - контейнери за строителни отпадъци
//           </h2>
//           <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
//             Повече от 12 години ние от Зашеви-Транс ООД София работим в областта
//             на къртачните услуги и извозването на строителни отпадъци с
//             контейнери до специализирано депо за строителни отпадъци.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
//           {cards.map((card) => (
//             <div
//               key={card.name}
//               className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
//             >
//               <card.icon
//                 aria-hidden="true"
//                 className="h-14 w-10 flex-none text-[#f7c51e]"
//               />
//               <div className="text-base/7">
//                 <h3 className="font-semibold text-white">{card.name}</h3>
//                 <p className="mt-2 text-gray-300">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { KeyIcon, HomeModernIcon, PhoneIcon } from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Обадете ни се!",
    description: "Ние ще се погрижим да сме в точния час на уреченото място",
    icon: PhoneIcon,
  },
  {
    name: "Осигурете ни достъп!",
    description: "Екипът ни ще свърши задачата си с хирургическа точност",
    icon: KeyIcon,
  },
  {
    name: "Насладете се на разчистено помещение!",
    description:
      "На чисто: сега вече сте готови да продължите с ремонта по свой вкус",
    icon: HomeModernIcon,
  },
];

export default function Example({ blurred = true }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#2E2E2E] py-24 sm:py-32 w-full">
      {/* 2-3 лъча, разположени стратегически */}
      <div className="absolute inset-0 -z-10 w-screen h-full flex items-center justify-center">
        <svg
          className="absolute w-full h-full opacity-40"
          viewBox="0 0 2000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rayGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#f7c51e" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f7c51e" stopOpacity="0.2" />
            </linearGradient>
            {blurred && (
              <filter id="blurEffect">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            )}
          </defs>
          {/* Първи лъч - отдолу наляво нагоре надясно */}
          <polygon
            points="0,800 1200,0 1400,0"
            fill="url(#rayGradient)"
            opacity="0.7"
            filter={blurred ? "url(#blurEffect)" : "none"}
          />
          {/* Втори лъч - отдясно наляво под лек ъгъл */}
          <polygon
            points="2000,600 800,0 600,0"
            fill="url(#rayGradient)"
            opacity="0.7"
            filter={blurred ? "url(#blurEffect)" : "none"}
          />
          {/* Трети лъч - вертикален отгоре надолу (лек фон акцент) */}
          <polygon
            points="1600,0 1100,800 900,800"
            fill="url(#rayGradient)"
            opacity="0.7"
            filter={blurred ? "url(#blurEffect)" : "none"}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-8xl lg:mx-0 text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-9/10">
            Зашеви Транс - контейнери за строителни отпадъци
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Повече от 12 години ние от Зашеви-Транс ООД София работим в областта
            на къртачните услуги и извозването на строителни отпадъци с
            контейнери до специализирано депо за строителни отпадъци.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
            >
              <card.icon
                aria-hidden="true"
                className="h-14 w-10 flex-none text-[#f7c51e]"
              />
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
