const services = [
  {
    name: "Извозване на строителни отпадъци с контейнери 4 кубика до оторизирано разтоварище с включена такса смет, доставка и престой до 5 дни. Широчина на контейнера: 1.52 м., дължина: 2.66 м. и височина: 1.15 м.",
    role: "160 – 180 лв.",
  },
  {
    name: "Извозване на строителни отпадъци с контейнери 6 кубика до оторизирано разтоварище с включена такса смет, доставка и престой. Дължина на контейнера: 3.18 м., широчина: 1.89 м. и височина: 1.25 м.",
    role: "220 – 240 лв.",
  },
  {
    name: "Извозване на строителни отпадъци с контейнери 8 кубика до оторизирано разтоварище с включена такса смет, доставка и престой. Широчина на контейнера: 1.88 м., дължина: 3,45м. и височина: 1.50 м.",
    role: "240 – 260 лв.",
  },
  {
    name: "Извозване на строителни отпадъци със самосвал 4 куб.м. (5 тона) до специализираното сметище с включена такса смет",
    role: "120 лв.",
  },
  {
    name: "Доставка на инертни материали",
    role: "цена по договаряне",
  },
];

export default function Example() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-8 mb-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                scope="col"
                className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 border border-gray-300"
              >
                Услуги
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 border border-gray-300"
              >
                Цени без ДДС
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services.map((service, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="py-4 px-4 text-sm font-medium text-gray-900 border border-gray-300">
                  {service.name}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500 border border-gray-300">
                  {service.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
