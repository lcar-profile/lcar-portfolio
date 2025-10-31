interface HistoryItem {
  startDate: Date;
  endDate: Date;
  company: string;
  description: string;
}

const history: HistoryItem[] = [
  {
    startDate: new Date(2020, 9),
    endDate: new Date(2025, 10),
    company: "Monash University",
    description: "University",
  },
  {
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    company: "Netizen eXperience",
    description: "Netizen description",
  },
  {
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 11),
    company: "TIME",
    description: "TIME description",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col">
        <span>Lai Carson</span>
        <span>Bachelors in Software Engineering (Honours)</span>
        <span>Description</span>
      </div>
      <div className="m-10"></div>
      <div className="flex flex-col">
        {history.map((item) => {
          return (
            <div key={item.company} className="flex flex-row mb-8">
              <div className="flex flex-col">
                <span>{item.company}</span>
                <div className="flex flex-row">
                  <span>
                    {item.startDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="px-1">-</span>
                  <span>
                    {item.endDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
        <span>View Complete Resume</span>
      </div>
    </div>
  );
}
