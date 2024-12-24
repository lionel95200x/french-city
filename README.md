# french-city

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> French cities utils

## Install

```bash
npm install french-city
```

## Usage

```ts
import {
  getCityByInseeCode,
  getCityByExactName,
  searchCitiesByName,
  getCitiesByDepartement,
  getCitiesByPostalCode,
} from 'french-city';

// Example usage
const city = getCityByInseeCode('69123');
console.log(city); // { city: 'Lyon', zip_code: '69001', department_name: 'Rhône' }

const exactCity = getCityByExactName('Lyon');
console.log(exactCity); // { city: 'Lyon', zip_code: '69001', department_name: 'Rhône' }

const cities = searchCitiesByName('Saint-');
console.log(cities); // Array of cities with 'Saint-' in their name

const departmentCities = getCitiesByDepartement('Rhône');
console.log(departmentCities); // Array of cities in the 'Rhône' department

const postalCodeCities = getCitiesByPostalCode('69001');
console.log(postalCodeCities); // Array of cities with postal code '69001'
```

## API

### getCityByInseeCode(codeInsee)

- **codeInsee**: `string` - The INSEE code of the city.
- **Returns**: `City | undefined` - The city object or undefined if not found.

### getCityByExactName(name)

- **name**: `string` - The exact name of the city.
- **Returns**: `City | undefined` - The city object or undefined if not found.

### searchCitiesByName(name)

- **name**: `string` - A part of the city's name.
- **Returns**: `City[]` - An array of matching city objects.

### getCitiesByDepartement(departement)

- **departement**: `string` - The name of the department.
- **Returns**: `City[]` - An array of city objects in the department.

### getCitiesByPostalCode(codePostal)

- **codePostal**: `string` - The postal code.
- **Returns**: `City[]` - An array of city objects with the postal code.

## City Interface

```ts
export interface City {
  city: string;
  zip_code: string;
  department_name: string;
}
```

[build-img]: https://github.com/lionel95200x/french-city/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/lionel95200x/french-city/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/french-city
[downloads-url]: https://www.npmjs.com/package/french-city
[npm-img]: https://img.shields.io/npm/v/french-city
[npm-url]: https://www.npmjs.com/package/french-city
[issues-img]: https://img.shields.io/github/issues/lionel95200x/french-city
[issues-url]: https://github.com/lionel95200x/french-city/issues
[codecov-img]: https://codecov.io/gh/lionel95200x/french-city/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/lionel95200x/french-city
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
