const bio_main = document.getElementById("main");
const bioo = document.createElement("p");
bioo.classList.add("main_p")
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
const getTimeOfDay = (Hours) => {
  if (Hours >= 6 && Hours < 18) {
    return "დღის";
  } else {
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

bioo.innerHTML = `კაროჩ მევარ 'New WebDeveloper'. ეს ვები ისე შევქმენი, გამოცდილება: {acc-ს ახევა-დაბადებიდან} ხალხის გადებილება: {დაბადებიდან}  ერთისიტყვით  ყველაფერი მაგარი რა . (
დაიწერა: ${dayOfWeekk(
  dayOfWeek
)}, ${getTimeOfDay()}, ${Hours}:${minutes} საათზე, ${DateOfMonth} ${Monthh(
  Month
)})  `;
bio_main.appendChild(bioo);
