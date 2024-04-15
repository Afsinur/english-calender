(() => {
  let bnYearDiff = 594;
  let countAgain = 0;
  let totalDatesAdded = 0;
  let totalActiveDatesAdded = 0;
  let dayIndex = 0;
  let reCountStarted = false;
  function months(year) {
    const months = [
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff}`,
        title: "January",
        totalDays: 31,
        altBan: "মাঘ",
        altBanTotalDays: 30,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff}`,
        title: "February",
        totalDays: isLeapYear(year) ? 29 : 28,
        altBan: "ফাল্গুন",
        altBanTotalDays: isLeapYear(year) ? 30 : 29,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff}`,
        title: "March",
        totalDays: 31,
        altBan: "চৈত্র",
        altBanTotalDays: 30,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff}/${year - bnYearDiff + 1}`,
        title: "April",
        totalDays: 30,
        altBan: "বৈশাখ",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "May",
        totalDays: 31,
        altBan: "জ্যৈষ্ঠ",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "June",
        totalDays: 30,
        altBan: "আষাঢ়",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "July",
        totalDays: 31,
        altBan: "শ্রাবণ",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "August",
        totalDays: 31,
        altBan: "ভাদ্র",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "September",
        totalDays: 30,
        altBan: "আশ্বিন",
        altBanTotalDays: 30,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "October",
        totalDays: 31,
        altBan: "কার্তিক",
        altBanTotalDays: 31,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "November",
        totalDays: 30,
        altBan: "অগ্রহায়ণ",
        altBanTotalDays: 30,
      },
      {
        titleYear: year,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "December",
        totalDays: 31,
        altBan: "পৌষ",
        altBanTotalDays: 31,
      },
      {
        titleYear: year + 1,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "January",
        totalDays: 31,
        altBan: "মাঘ",
        altBanTotalDays: 30,
      },
      {
        titleYear: year + 1,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "February",
        totalDays: isLeapYear(year + 1) ? 29 : 28,
        altBan: "ফাল্গুন",
        altBanTotalDays: isLeapYear(year + 1) ? 30 : 29,
      },
      {
        titleYear: year + 1,
        titleBanYear: `${year - bnYearDiff + 1}`,
        title: "March",
        totalDays: 31,
        altBan: "চৈত্র",
        altBanTotalDays: 30,
      },
    ];

    return { months };
  }
  let weeksGlobal = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let monthsGlobal = [
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
  const select = {
    one(sl) {
      return document.querySelector(sl);
    },
  };
  const database = [];
  let calenderDB = [];
  const components = {
    title(theMonth, month, i) {
      let html = `
       <div class="p-2 text-center text-xl font-semibold text-gray-600">
                <p>
                ${month.title}-${month.titleYear}-${
        getOrMonth(theMonth, i).altBan
      }/${month.altBan}-${month.titleBanYear}
                </p>
        </div>`;

      return html;
    },
    weeks() {
      let htmls = ``;

      for (let i = 0; i < weeksGlobal.length; i++) {
        const day = weeksGlobal[i];
        htmls += `
          <div class="p-2 border">
              <p class="text-center font-semibold text-gray-400">${day}</p>
          </div>
          `;
      }

      return htmls;
    },
    dates(year, theMonth, month, _i) {
      const dateBoxes = [];
      let html = ``;
      let indexDay = new Date(`${year}-01-01`).getDay();

      if (_i > 0) {
        totalDatesAdded = 0;

        for (let i = 0; i < dayIndex; i++) {
          totalDatesAdded++;

          let insideHtmls = ``;
          insideHtmls += ``;

          html += `
          <div class="border flex flex-col p-2 invisible">
              <p class="text-xl font-semibold text-gray-600"></p>

              <p class="self-end text-sm font-semibold text-gray-400 flex items-center justify-between w-full">${insideHtmls}</p>
          </div>
          `;
        }
      } else {
        if (indexDay != 0) {
          totalDatesAdded = 0;

          for (let i = 0; i < indexDay; i++) {
            totalDatesAdded++;

            let insideHtmls = ``;
            insideHtmls += ``;

            html += `
          <div class="border flex flex-col p-2 invisible">
              <p class="text-xl font-semibold text-gray-600"></p>

              <p class="self-end text-sm font-semibold text-gray-400 flex items-center justify-between w-full">${insideHtmls}</p>
          </div>
          `;
          }
        }
      }

      let banMonth = getOrMonth(theMonth, _i).altBan;

      for (let i = 0; i < month.totalDays; i++) {
        const day = i + 1;
        totalActiveDatesAdded++;
        totalDatesAdded++;

        dayIndex = totalDatesAdded % 7;

        let prevMonthTotalDays = getOrMonth(theMonth, _i).altBanTotalDays;

        let forBnMonth = (() => {
          if (_i > 3) {
            return reCountStarted
              ? (banMonth = month.altBan && month.altBan)
              : banMonth;
          } else {
            return day - 13 > 0
              ? month.altBan
              : getOrMonth(theMonth, _i).altBan;
          }
        })();

        let insideHtmls = ``;
        let forBnDateRef = null;
        function forBnDate() {
          if (_i > 3) {
            forBnDateRef = reCount();
          } else {
            forBnDateRef =
              day - 13 > 0
                ? reCount()
                : getOrMonth(theMonth, _i).altBanTotalDays + (day - 13);
          }

          return forBnDateRef;
        }

        if (_i > 2) {
          insideHtmls += `
                <span class="text-[9px]">${forBnMonth}</span>
                <span class="text-[9px]">${forBnDate()}</span>
              `;
        } else {
          insideHtmls += `
                <span class="">n</span>
                <span>n</span>
              `;
        }

        html += `
        <div class="border flex flex-col p-2 ${
          month.title == monthsGlobal[new Date().getMonth()] &&
          day == new Date().getDate()
            ? `border border-green-500`
            : ``
        }">
              <p class="text-xl font-semibold text-gray-600 text-center">${day}</p>

              <p class="self-end text-sm font-semibold text-gray-400 flex items-center justify-between w-full">${insideHtmls}</p>
          </div>
        `;

        dateBoxes.push({
          day,
          forBnMonth,
          forBnDate: forBnDateRef,
        });

        reCountStarted = false;
        if (countAgain + 1 > prevMonthTotalDays) {
          countAgain = 0;
          reCountStarted = true;
        }
      }

      return { dateBoxes, html };
    },
  };

  function reCount() {
    countAgain++;

    return countAgain;
  }
  function getOrMonth(months, i) {
    return months[i == 0 ? months.length - 1 : i - 1];
  }
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  function monthCard(year, theMonth, month, i) {
    const { dateBoxes, html: monthCardHtml } = components.dates(
      year,
      theMonth,
      month,
      i
    );

    let html = `
    <div class="border px-4 py-2">
        <div>
            ${components.title(theMonth, month, i)}
        </div>
  
        <div class="grid gap-2 border grid-cols-7 p-2">
            ${components.weeks()}
        </div>
  
        <div class="grid gap-2 border grid-cols-7 p-2">
            ${monthCardHtml}
        </div>
    </div>
  `;

    database.push({
      dateBoxes,
      html,
      title: month.title,
      year,
      i: i + 1,
    });
  }
  function calender(thisYear) {
    resetControls();

    let theMonth = months(thisYear).months;
    theMonth.forEach((month, i) => {
      monthCard(thisYear, theMonth, month, i);
    });
  }
  function resetControls() {
    countAgain = 0;
    totalDatesAdded = 0;
    totalActiveDatesAdded = 0;
    dayIndex = 0;
  }
  function setCalender(thisYear) {
    calender(thisYear);
    calender(thisYear - 1);

    let thisYearsFirstPart = database
      .filter(
        (obj) =>
          obj.year == thisYear - 1 &&
          (obj.title == "January" ||
            obj.title == "February" ||
            obj.title == "March")
      )
      .sort((a, b) => b.i - a.i)
      .slice(0, 3)
      .sort((a, b) => a.i - b.i);

    let thisYearsLastPart = database
      .filter(
        (obj) =>
          obj.year == thisYear &&
          obj.title != "January" &&
          obj.title != "February" &&
          obj.title != "March"
      )
      .sort((a, b) => a.i - b.i);

    calenderDB = [...thisYearsFirstPart, ...thisYearsLastPart];
    //calenderDB = database;

    if (select.one("[data-show-eng-months]")) {
      calenderDB.forEach((obj) => {
        select.one("[data-show-eng-months]").innerHTML += obj.html;
      });
    }
  }
  function setCurrentMonthFromCalender() {
    let currentMonthHtml = calenderDB.filter(
      (obj) => obj.title == monthsGlobal[new Date().getMonth()]
    )[0].html;

    if (select.one("[data-current-eng-month]")) {
      select.one("[data-current-eng-month]").innerHTML = currentMonthHtml;
    }
  }

  setCalender(new Date().getFullYear());
  setCurrentMonthFromCalender();
})();
