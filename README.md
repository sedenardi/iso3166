# iso3166
Fetch ISO3166 codes and parse to JSON

## Source

This module downloads and parses an XML file from Debian's `iso-codes` project repository, located [here](https://pkg-isocodes.alioth.debian.org/). 

## Installation

```js
npm install iso3166
```

## Usage

```js
var iso3166 = require('iso3166');

iso3166(function(err, countries) {
  // array of country objects
});
```

## Sample Object

```json
{
  "alpha_2_code": "US",
  "alpha_3_code": "USA",
  "numeric_code": "840",
  "name": "United States",
  "official_name": "United States of America"
}
```

## License

  MIT
