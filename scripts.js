const bio_main = document.getElementById("main");
const bioo = document.createElement("p");
bioo.classList.add("main_p");
const today = new Date();
const dayOfWeek = today.getDay();

// ..
const dayOfWeekk = (day) => {
  if (day == 0) {
    return "კვირას";
  } else if (day == 1) {
    return "ორშაბათს";
  } else if (day == 2) {
    return "სამშაბათს";
  } else if (day == 3) {
    return "ოთხშაბათს";
  } else if (day == 4) {
    return "ხუთშაბათს";
  } else if (day == 5) {
    return "პარასკევს";
  } else if (day == 6) {
    return "შაბათს";
  }
};

const Hours = today.getHours();
const minutes = today.getMinutes();

// const minutes0 = (minutes) => {
//   if (minutes == 9) {
//     return "09";
//   } else if (minutes == 8) {
//     return "08";
//   } else if (minutes == 7) {
//     return "07";
//   } else if (minutes == 6) {
//     return "06";
//   } else if (minutes == 5) {
//     return "05";
//   } else if (minutes == 4) {
//     return "04";
//   } else if (minutes == 3) {
//     return "03";
//   } else if (minutes == 2) {
//     return "02";
//   } else if (minutes == 1) {
//     return "01";
//   } else if (minutes == 0) {
//     return "00";
//   }else {
//     return minutes
//   }
// };
const minutes0 = (minutes) => {
  return minutes.toString().padStart(2, "0");
};

const getTimeOfDay = (Hours) => {
  if (Hours >= 6 && Hours <= 18) {
    return "დღის";
  } else if (Hours < 6 || Hours > 18) {
    return "ღამის";
  }
};

const Month = today.getMonth();
const Monthh = (Month) => {
  if (Month == 0) {
    return "იანვარს";
  } else if (Month == 1) {
    return "თებერვალს";
  } else if (Month == 2) {
    return "მარტს";
  } else if (Month == 3) {
    return "აპრილს";
  } else if (Month == 4) {
    return "მაისს";
  } else if (Month == 5) {
    return "ივნისს";
  } else if (Month == 6) {
    return "ივლისს";
  } else if (Month == 7) {
    return "აგვიტოს";
  } else if (Month == 8) {
    return "სექტემბერს";
  } else if (Month == 9) {
    return "ოქტომბერს";
  } else if (Month == 10) {
    return "ნოემბერს";
  } else if (Month == 11) {
    return "დეკემბერს";
  }
};
const DateOfMonth = today.getDate();

bioo.innerHTML = `კაროჩ მევარ 'New WebDeveloper'. ეს ვები  სატესტოდ  შევქმენი, გამოცდინლება : HTML/CSS , JavaSript, jsx , react.  (
დაიწერა: ${dayOfWeekk(dayOfWeek)}, ${getTimeOfDay(Hours)}, ${Hours}:${minutes0(
  minutes
)} საათზე, ${DateOfMonth} ${Monthh(Month)})  `;
bio_main.appendChild(bioo);
