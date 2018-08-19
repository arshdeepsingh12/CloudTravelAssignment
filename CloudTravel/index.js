'use strict';

//To compute the start time
let start = new Date().getTime();

//Inputs to the problem
let latitude = [0, 0, 70];
let longitude = [90, 0, 45];    
let canTravel = ["1", "0", "0"];
let origin = 0;
let destination = 2;

//This block is just for displaying the inputs on the screen
{
  document.write("Inputs are  :- <br> Latitudes -- <b> " + latitude + " </b> <br>");
  document.write("Longitudes -- <b> " + longitude + " </b> <br>");
  document.write("Can Travel -- <b> " + canTravel + " </b> <br>");
  document.write("Origin -- <b> " + origin + "</b> <br>");
  document.write("Destination -- <b> " + destination + "</b> <br>");
}


//Creating an CloudTravel class object
let cloudTravel = new CloudTravel();

//Calling function to calculate shortest distance between 2 airports
let shortestDist = cloudTravel.shortestTrip(latitude, longitude, canTravel, origin, destination);

//Displaying the outpur on screen in red color
document.write("<h2 style='color:red'> Shortest distance is "+ shortestDist + "</h6>");

//End time of application
let end = new Date().getTime();

//Just to check the time taken by application to run in ms
console.log(end - start + " ms");