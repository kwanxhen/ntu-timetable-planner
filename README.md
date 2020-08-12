Hi there,
This is my little JavaScript + React project to make use of what I've learnt so far.
However, I am unable to complete the algorithm for timetable clashes.

# Project aims <br />
1. User's inputs include Course names, under each course, there are multiple Course Timing available. For example, in Course EE3001, there could be two Course Timing @ Monday 0900-1030, Tues 1300-1430.

2. Second users' input include Restriction, for example, Student A prefer classes that fall on Tues-Thurs. Student B might prefer classes that fall on Mon, Wed, Friday. 

3. Lastly, based on these inputs, the output should give a combination of classes that DO NOT OVERLAP with each other. 

## Problems faced in this project
1. I am able to use Cartesian product and several for loops to process the data such that I can access the combinations of courses that do not clash. 

2. However, I am unable to accept user's inputs that can vary in number of courses which would require dynamic data manipulation. I am stuck on this area. which is commented in green in Combination.js file. 

3. If you have experience in this, please let me know how I can better approach this problem! 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.