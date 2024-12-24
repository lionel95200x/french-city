import { City } from './types';
import { allCities } from './data';

export * from './types';
export * from './data';

/**
 * Recherche une ville par son nom exact
 * @param name Le nom exact de la ville
 * @returns La ville ou undefined si non trouvée
 */
export const getCityByExactName = (name: string): City | undefined => {
  return allCities.find(city => city.city === name);
};

/**
 * Recherche des villes par nom partiel
 * @param name Une partie du nom de la ville
 * @returns Un tableau des villes correspondantes
 */
export const searchCitiesByName = (name: string): City[] => {
  const searchTerm = name.toLowerCase();
  return allCities.filter(city => city.city.toLowerCase().includes(searchTerm));
};

/**
 * Récupère toutes les villes d'un département
 * @param departement Le nom du département
 * @returns Un tableau des villes du département
 */
export const getCitiesByDepartement = (departement: string): City[] => {
  return allCities.filter(city => city.department_name === departement);
};

/**
 * Récupère toutes les villes d'un code postal
 * @param codePostal Le code postal
 * @returns Un tableau des villes correspondantes
 */
export const getCitiesByPostalCode = (codePostal: string): City[] => {
  return allCities.filter(city => city.zip_code === codePostal);
};
