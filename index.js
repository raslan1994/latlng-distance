module.exports = {
  R: 6371, //in km 
  /**
   * @param deg Value in Degrees
   * @returns Values in Radians
   */
  getRadValue:(deg)=>{
    return deg * (Math.PI/180)
  },
  /**
   * According to the "haversine formula" calculate distance between two coordinates.
   * @param fl Location From (object should contain lat, lon values)
   * @param tl Location To (object should contain lat, lon values)
   * 
   * @returns Distance (Numeric value)
   */
  distanceDiffInKm:(fl,tl)=>{
    let _m = module.exports;
    let lat1 = fl.lat, lon1 = fl.lon;
    let lat2 = tl.lat, lon2 = tl.lon;
    let dLat = _m.getRadValue(lat2-lat1);
    let dLon = _m.getRadValue(lon2-lon1);
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(_m.getRadValue(lat1)) * Math.cos(_m.getRadValue(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = _m.R * c; // Distance in km
    return d;
  }
}