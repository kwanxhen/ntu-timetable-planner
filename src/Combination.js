import React, { useState } from "react";

function Combination() {
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // const [isClash, setIsClash] = useState(null);

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

  let isClash = null;
  let noClashCombi = [];
  let passArray = [];
  //using a combination loop function, we compare for clashes
  for (let i = 0; i < cartesianArray.length; i++) {
    passArray = [];
    for (let j = 0; j < cartesianArray[0].length - 1; j++) {
      for (let k = j + 1; k < cartesianArray[0].length; k++) {
        // isClash = checkClash(cartesianArray[i][j], cartesianArray[i][k]);
        isClash = checkClash(cartesianArray[i][j], cartesianArray[i][k]);

        // console.log(cartesianArray[i][j].slots.day);
        // console.log(cartesianArray[i][j].slots.time);
        // console.log(cartesianArray[i][k].slots.day);
        // console.log(cartesianArray[i][k].slots.time);
        // console.log(isClash);
        // console.log("BEBEBEBEBEBEBEBEBEBEBEBEBEBEBBE");
        if (!isClash) {
          passArray.push("pass");
        }
        //here we know what combination clashes, so we just push this combination that are NOT clashing into an array. Then we do array.map to return components DisplayCourse passing in props which are courseName and slots then inside Display we can access these props with {}.
      }
    }
    if (arraysEqual(passArray, ["pass", "pass", "pass"])) {
      console.log("combi is safe");
      console.log(i);
      console.log(cartesianArray[i]);
      noClashCombi.push(cartesianArray[i]);
    }
  }
  console.log(noClashCombi);

  const displayClashCombi = noClashCombi.map((combi, index) => {
    // for (let i=0; i<combi.length; i++) {
    //   let courseName = combi[i].course;
    // }
    let courseName1 = combi[0].course;
    let 
    let courseName2 = combi[1].course;
    let courseName3 = combi[2].course;

    return (
      <div>
        <p>{courseName1 + course1Start + course1End}</p>
        <p>{courseName2}</p>
        <p>{courseName3}</p>
        <p>hello</p>
      </div>
    );
  });

  return (
    <div>
      {displayClashCombi}
      <p>Hello world 2</p>
    </div>
  );
}

export default Combination;

//courseArray - Array > Arrays seperated by courses > Inside one course,
//there is multiple slots

//cartesianArray - cartesian product
