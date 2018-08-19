'use strict';

class CloudTravel {

  constructor() {
  }

  //Function which returns the shortest distance(double) with the following set of inputs
  shortestTrip(latitude, longitude, canTravel, origin, destination) {

    //If origin is same as destination then 0 is returned.
    if(origin==destination){
      return 0.00;
    }

    // Regular expression for extracting numbers from a string array
    let regex = /[+-]?\d+(?:\.\d+)?/g;

    // Creating an empty array distanceMatrix for origin
    let distanceMatrix = new Array(longitude.size);

    //Initializing the above declared array with each distance as infinite for each element where destination is different from origin
    for(let i=0;i<longitude.length;i++){
      distanceMatrix[i]= Number.POSITIVE_INFINITY;
      if(i==origin){
        distanceMatrix[i]=0;
      }
    } 

    /*
    This is the business logic
    We maintain a array for the shortest distance from origin to each airport in this array.
    We initialized the array with infinite distance to each airport from origin and from origin to origin distance as 0.
    We checked where it can go from source and then in every iteration we calculated one minimum distance from the origin airport as described in logic
    When iterations are finished we have the final distance
    */

    while(distanceMatrix[destination]==Number.POSITIVE_INFINITY){
      let minDis = Number.POSITIVE_INFINITY,minval = Number.POSITIVE_INFINITY;
      for(let i=0;i<distanceMatrix.length;i++){
        if(distanceMatrix[i]!=Number.POSITIVE_INFINITY){
          let canTravelOrigin = canTravel[i].match(regex);
          canTravelOrigin = canTravelOrigin.map(Number);
          for(let j=0;j<canTravelOrigin.length;j++){
            if(distanceMatrix[canTravelOrigin[j]]==Number.POSITIVE_INFINITY){
              let disttan = distanceMatrix[i]+this.calculateDist(latitude[i],latitude[canTravelOrigin[j]],longitude[i],longitude[canTravelOrigin[j]]);
              if(disttan<minDis){
               minDis = disttan;
               minval = canTravelOrigin[j];
             }
           }
         }
       }
     }

     if(minDis == Number.POSITIVE_INFINITY){
      break;
    }

    distanceMatrix[minval] = minDis;
  }

  console.log(distanceMatrix);

  //If no route exists we return -1
  if(distanceMatrix[destination]==Number.POSITIVE_INFINITY){
    return -1;
  }
  //Else we return the distance
  else return distanceMatrix[destination];

}


  //Function where the distance between 2 airports is calculated
  calculateDist(lata,latb,longa,longb){

    let radlat1 = Math.PI * lata/180;
    let radlat2 = Math.PI * latb/180;
    let theta = longa-longb;
    let radtheta = Math.PI * theta/180;
    let radiusOfEarth = 4000;

    //Formula to calculate distance
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

    dist = Math.acos(dist);
    dist = dist * radiusOfEarth;

    return dist;
  }

}
