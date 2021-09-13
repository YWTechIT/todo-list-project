interface DateType {
  year: string;
  month: string;
  day: string;
}

export const useDate = (): DateType => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(monthNames[date.getMonth()]);
  const day = String(date.getDate());

  return { year, month, day };
};
