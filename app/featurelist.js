import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "НИЕ СМЕ ОТДАДЕНИ НА РАБОТАТА",
    description:
      "Имаме стотици завършени проекти през повече от едно десетилетие работа. Горди сме, че успяваме да доставим на клиентите си отлична услуга и разумна цена. Щастливи сме, че клиентите ни ценят професионализма ни.",
  },
  {
    name: "НИЕ СМЕ НА ТОЧНОТО МЯСТО В ТОЧНОТО ВРЕМЕ",
    description:
      "Наша фирмена политика е да изпълняваме поръчките на клиентите в максимално кратък срок и да не ги ангажираме с детайлите по работата ни.",
  },
  {
    name: "НИЕ СМЕ НА РАЗПОЛОЖЕНИЕ",
    description:
      "Ние обичаме нашата работа и я вършим с желание и професионализъм. Екипът ни работи и в почивните дни, за да успеете навреме с Вашите ремонти и строежи.",
  },
  {
    name: "Calendars",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
  },
  {
    name: "Notifications",
    description:
      "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
  },
  {
    name: "Boards",
    description:
      "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
  },
  {
    name: "Reporting",
    description: "Eos laudantium repellat sed architecto earum unde incidunt.",
  },
  {
    name: "Mobile app",
    description: "Nulla est saepe accusamus nostrum est est fugit omnis.",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Всичко от което имате нужда
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Нашите основни дейности
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Главната дейност на фирмата ни е извозване на строителни отпадъци
              с контейнери за боклук. Разполагаме с контейнери от 3, 4 и 7
              кубика пригодени за всички видове отпадъци и строителни материали.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-7 text-[#f7c51e]"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
