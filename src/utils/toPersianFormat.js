export default function toPersianFormat(number) {
  const numWithCama = numberWithCamas(number);
  const numberToPersian = toPersianNumber(numWithCama);
  return numberToPersian;
}

//handle by regex

const numberWithCamas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const toPersianNumber = (number) => {
  const farsDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  //?? by my way :
  //   return number
  //     .toString()
  //     .split("")
  //     .map((x) => {
  //       if (x === ",") {
  //         return ",";
  //       } else {
  //         return farsDigits[x];
  //       }
  //     })
  //     .join("");

  //?? by regex:
  return number.replace(/\d/g, (x) => farsDigits[x]);
};
