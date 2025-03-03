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
    <div className="relative isolate overflow-hidden bg-[#2E2E2E] py-24 sm:py-32">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}
      {/* <img
        alt=""
        src="/контейнери-за-стротелни-отпадъци.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#f7c51e] to-[#2E2E2E] opacity-60"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#f7c51e] to-[#2E2E2E] opacity-60"
        />
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
