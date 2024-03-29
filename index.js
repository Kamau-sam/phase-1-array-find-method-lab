const record = [
  { year: "2023", result: "W" },
  { year: "2022", result: "N/A" },
  { year: "2021", result: "L" },
  { year: "2020", result: "W" },
  { year: "2019", result: "N/A" },
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "L" },
  { year: "2014", result: "W" },
  { year: "2013", result: "N/A" },
  { year: "2012", result: "L" },
  { year: "2011", result: "W" },
  { year: "2010", result: "N/A" },
];
function superbowlWin(record) {
  const win = record.find((record) => record.result === "W");

  if (win) {
    return win.year;
  }
  return undefined;
}
