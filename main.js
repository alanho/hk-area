import fs from "fs";
import PolygonLookup from "polygon-lookup";

let features;

const getHKArea = (lat, long) => {
  if (features == undefined) {
    const data = fs.readFileSync("./data/hk_boundaries_simplified.json");
    features = JSON.parse(data);
  }

  var lookup = new PolygonLookup(features);
  var poly = lookup.search(long, lat);

  if (poly !== undefined) {
    return poly.properties.area;
  } else {
    return null;
  }
};
export { getHKArea };
