import React, { useState } from "react";

function Combination() {
  const [isClash, setIsClash] = useState(null);

  //import data from json file
  const myCourses = require("./myCourses2");

  //function to seperate courses
  const courseArray = [];
  myCourses.forEach(separateCourses);

  function separateCourses(item, index) {
    courseArray[index] = [];
    item.slots.map((child) =>
      courseArray[index].push({ course: item.course, slots: child })
    );
  }
  console.log(courseArray);

  //Cartesian Product Function
  const f = (a, b) => [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
  const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

  //Pass arrays into Cartesian Product Function
  let cartesianArray = cartesian(...courseArray);

  console.log(cartesianArray);

  //check hasOverlapTime
  function hasOverlap(start1, end1, start2, end2) {
    return start1 < end2 && end1 > start2;
  }

  //function checkclash - check day - check time
  function checkClash(A, B) {
    if (A.slots.day === B.slots.day) {
      //check time
      if (
        hasOverlap(
          A.slots.time.start,
          A.slots.time.end,
          B.slots.time.start,
          B.slots.time.end
        )
      ) {
        //there is a clash
        return true;
      } else {
        //confirmed there is no clash
        return false;
      }
    } else {
      //confirmed that there is no clash
      return false;
    }
  }

  //a state variable
  // let isClash = null;

  //using a combination loop function, we compare for clashes
  for (let i = 0; i < cartesianArray.length; i++) {
    for (let j = 0; j < cartesianArray[0].length - 1; j++) {
      for (let k = j + 1; k < cartesianArray[0].length; k++) {
        // isClash = checkClash(cartesianArray[i][j], cartesianArray[i][k]);
        if (checkClash(cartesianArray[i][j], cartesianArray[i][k])) {
          setIsClash(true);
        } else {
          setIsClash(false);
        }

        console.log(cartesianArray[i][j].slots.day);
        console.log(cartesianArray[i][j].slots.time);
        console.log(cartesianArray[i][k].slots.day);
        console.log(cartesianArray[i][k].slots.time);
        console.log(isClash);
        console.log("BEBEBEBE");
      }
    }
  }

  return (
    <div>
      <p>Hello world 2</p>
    </div>
  );
}

export default Combination;

//courseArray - Array > Arrays seperated by courses > Inside one course,
//there is multiple slots

//cartesianArray - cartesian product
