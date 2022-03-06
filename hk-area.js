var PolygonLookup = require("polygon-lookup");

let features;

const loadFeaturesJSON = () => {
  features = require("./data/hk_boundaries_simplified.json");
};

const getHKArea = (lat, long) => {
  if (features == undefined) {
    loadFeaturesJSON();
  }

  var lookup = new PolygonLookup(features);
  var poly = lookup.search(long, lat);

  if (poly !== undefined) {
    return poly.properties.area;
  } else {
    return null;
  }
};

module.exports = getHKArea;
