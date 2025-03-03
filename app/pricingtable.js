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
    <div className="px-4 sm:px-6 lg:px-8 max-w-[80%] mx-auto">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Услуги
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Цени без ДДС
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {services.map((person) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
