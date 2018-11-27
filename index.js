//Radius of Earth (Mean)
const R_KM = 6371; //in km

/**
 * @param deg Value in Degrees
 * @returns Values in Radians
 */
const getRadValue=(deg)=>{
  return deg * (Math.PI/180)
}
module.exports = {
  /**
   * According to the "haversine formula" calculate distance between two coordinates.
   * @param fl Location From (object should contain lat, lon values)
   * @param tl Location To (object should contain lat, lon values)
   * @param r radius of earth
   * 
   * @returns Distance
   */
  distanceDiff:(fl,tl,r)=>{
    let lat1 = fl.lat, lon1 = fl.lon;
    let lat2 = tl.lat, lon2 = tl.lon;
    let dLat = getRadValue(lat2-lat1);
    let dLon = getRadValue(lon2-lon1);
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(getRadValue(lat1)) * Math.cos(getRadValue(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = r * c; // Distance in km
    return d;
  },

  /**
   * According to the "haversine formula" calculate distance between two coordinates.
   * @param fl Location From (object should contain lat, lon values)
   * @param tl Location To (object should contain lat, lon values)
   * 
   * @returns Distance difference in km
   */
  distanceDiffInKm:(fl,tl)=> module.exports.distanceDiff(fl,tl,R_KM),
}