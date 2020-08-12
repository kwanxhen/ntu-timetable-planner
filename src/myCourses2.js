let myCourses = [
  {
    course: "ee3001",
    slots: [
      {
        day: "tuesday",
        time: {
          start: 930,
          end: 1500
        }
      },
      {
        day: "wednesday",
        time: {
          start: 1100,
          end: 1600
        }
      },
      {
        day: "thursday",
        time: {
          start: 1330,
          end: 1900
        }
      },
    ],
  },
  {
    course: "ee3002",
    slots: [
      {
        day: "tuesday",
        time: {
          start: 1030,
          end: 1230
        }
      },
      {
        day: "wednesday",
        time: {
          start: 1430,
          end: 1630
        }
      },
    ],
  },
  {
    course: "ee3003",
    slots: [
      {
        day: "tuesday",
        time: {
          start: 930,
          end: 1030
        }
      },
      {
        day: "wednesday",
        time: {
          start: 1030,
          end: 1530
        }
      },
      // {
      //   day: "thursday",
      //   time: {
      //     start: 1130,
      //     end: 1230
      //   }
      // },
    ],
  },
];

module.exports = myCourses;
