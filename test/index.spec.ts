import {
  getCityByExactName,
  searchCitiesByName,
  getCitiesByDepartement,
  getCitiesByPostalCode,
} from '../src/index';

describe('French Cities Utils', () => {
  describe('getCityByExactName', () => {
    it('should return a city by exact name', () => {
      const city = getCityByExactName('Lyon');
      expect(city).toBeDefined();
      expect(city?.zip_code).toBe('69008');
    });
  });

  describe('searchCitiesByName', () => {
    it('should return cities matching partial name', () => {
      const cities = searchCitiesByName('Saint-');
      expect(cities.length).toBeGreaterThan(0);
      cities.forEach(city => {
        expect(city.city.toLowerCase()).toContain('saint-');
      });
    });
  });

  describe('getCitiesByDepartement', () => {
    it('should return cities by department name', () => {
      const cities = getCitiesByDepartement('ardèche');
      expect(cities.length).toBeGreaterThan(0);
      cities.forEach(city => {
        expect(city.department_name).toBe('ardèche');
      });
    });
  });

  describe('getCitiesByPostalCode', () => {
    it('should return cities by postal code', () => {
      const cities = getCitiesByPostalCode('69001');
      expect(cities.length).toBeGreaterThan(0);
      cities.forEach(city => {
        expect(city.zip_code).toBe('69001');
      });
    });
  });
});
