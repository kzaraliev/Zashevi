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

export default function Example({ blurred = false }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#2E2E2E] py-24 sm:py-32 w-full">
      {/* Линиите сега покриват 100% от екрана, без падинги и марджини */}
      <div className="absolute inset-0 -z-10 w-screen h-full flex items-center justify-center">
        <svg
          className="absolute w-full h-full opacity-40"
          viewBox="0 0 2000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#f7c51e" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f7c51e" stopOpacity="0.2" />
            </linearGradient>
            {blurred && (
              <filter id="blurEffect">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            )}
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 2000}
              y1={Math.random() * 800}
              x2={Math.random() * 2000}
              y2={Math.random() * 800}
              stroke="url(#lineGradient)"
              strokeWidth="4"
              opacity={Math.random() * 0.6 + 0.4}
              transform={`rotate(${Math.random() * 40 - 20}, 1000, 400)`}
              filter={blurred ? "url(#blurEffect)" : "none"}
            />
          ))}
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
