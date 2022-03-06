# hk-area

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

Return the area (NT, Kowloon, HK, Island) of a given coorindates

### 🏠 [Homepage](https://github.com/alanho/hk-area)

## Install

```sh
npm install hk-area
```

```sh
yarn add hk-area
```

## Example

```javascript
import getHKArea from "hk-area";

let area = getHKArea(22.203350936422417, 113.86662909332935);
console.log(area); // HK
```

## Methods

### Summary

- [`getHKArea`](#gethkarea)

### Details

#### `getHKArea()`

```javascript
getHKArea(lat, long);
```

**Parameters:**

| Name | Type   | Required | Description                    |
| ---- | ------ | -------- | ------------------------------ |
| lat  | double | Yes      | Latitude in WGS84 Coordinates  |
| long | double | Yes      | Longitude in WGS84 Coordinates |

## Run tests

```sh
yarn test
```

## Data Source

The boundaries data is based on HKGov's [Hong Kong Geodata Store](https://geodata.gov.hk/), specifically the [Boundary Plan of District Lands Office](https://geodata.gov.hk/gs/view-dataset?uuid=1e11c0dd-e7bf-4607-a793-037788e9f95c&sidx=0).

The original boundaries definition is too large (1.5MB after minified), for sake of performance and package size, the boundaries definition are simplified using [mapshaper](https://mapshaper.org/). Therefore, some locations near the edge of the area (particularly between NT and Kowloon) might not be accurate. But it's good enough for most of the use case.

All coordinates has been converted from HK1980 to WGS84 coordinates.

## Author

Github: [@alanho](https://github.com/alanho)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

[npm-downloads-image]: https://badgen.net/npm/dm/hk-area
[npm-downloads-url]: https://npmcharts.com/compare/hk-area?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/hk-area
[npm-install-size-url]: https://packagephobia.com/result?p=hk-area
[npm-url]: https://npmjs.org/package/hk-area
[npm-version-image]: https://badgen.net/npm/v/hk-area
