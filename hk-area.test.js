const getHKArea = require("./hk-area.js");
const assert = require("assert");

describe("return correct area", function () {
  it("returns HK for coorindates in Hong Kong Island", function () {
    let area = getHKArea(22.27801544726772, 114.16593951084764);
    assert.equal(area, "HK");
  });

  it("returns 'KL' for coorindates in Kowloon", function () {
    let area = getHKArea(22.304196602016567, 114.17977511615237);
    assert.equal(area, "KL");
  });

  it("returns 'NT' for coorindates in New Territories", function () {
    let area = getHKArea(22.311988032996073, 114.26084748327509);
    assert.equal(area, "NT");
  });

  it("returns 'IS' for coorindates in Island Area", function () {
    let area = getHKArea(22.203350936422417, 113.86662909332935);
    assert.equal(area, "IS");
  });

  it("returns null for coorindates outside of Hong Kong", function () {
    let area = getHKArea(50.44946647646575, 30.5255055129873);
    assert.equal(area, null);
  });
});

describe("handle parameter edge cases", function () {
  it("returns null for any null coorindates", function () {
    let area = getHKArea(null, 114.16593951084764);
    assert.equal(area, null);
  });
});
