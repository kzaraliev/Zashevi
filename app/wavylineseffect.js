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

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-[#2E2E2E] py-24 sm:py-32 w-full">
      {/* Вълнообразни линии с по-разпръснати краища */}
      <div className="absolute right-0 top-0 bottom-0 -z-10 w-1/3 h-full flex items-center justify-center pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 500 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0 C160 150, 340 250, 420 400 S480 600, 350 800"
            stroke="#f7c51e"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M140 0 C180 170, 320 270, 440 420 S500 650, 320 800"
            stroke="#f7c51e"
            strokeWidth="1.2"
            opacity="0.8"
            fill="none"
          />
          <path
            d="M200 0 C200 190, 300 290, 460 440 S520 700, 290 800"
            stroke="#f7c51e"
            strokeWidth="1"
            opacity="0.6"
            fill="none"
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
