export { cities as AuvergneRhoneAlpesCities } from './Auvergne-Rhône-Alpes'; // Explicit re-export with aliasexport * from './Bourgogne-Franche-Comté';
export { cities as BretagneCities } from './Bretagne';
export { cities as CentreValDeLoireCities } from './Centre-Val-de-Loire';
export { cities as CorseCities } from './Corse';
export { cities as GrandEstCities } from './Grand-Est';
export { cities as HautsDeFranceCities } from './Hauts-de-France';
export { cities as IleDeFranceCities } from './Île-de-France'; // Corrected to match the import statement
export { cities as NormandieCities } from './Normandie';
export { cities as NouvelleAquitaineCities } from './Nouvelle-Aquitaine';
export { cities as OccitanieCities } from './Occitanie';
export { cities as PaysDeLaLoireCities } from './Pays-de-la-Loire';
export { cities as ProvenceAlpesCoteDAzurCities } from "./Provence-Alpes-Côte-d'Azur";

import { cities as AuvergneRhoneAlpes } from './Auvergne-Rhône-Alpes';
import { cities as BourgogneFrancheComte } from './Bourgogne-Franche-Comté';
import { cities as Bretagne } from './Bretagne';
import { cities as CentreValDeLoire } from './Centre-Val-de-Loire';
import { cities as Corse } from './Corse';
import { cities as GrandEst } from './Grand-Est';
import { cities as HautsDeFrance } from './Hauts-de-France';
import { cities as IleDeFrance } from './Île-de-France';
import { cities as Normandie } from './Normandie';
import { cities as NouvelleAquitaine } from './Nouvelle-Aquitaine';
import { cities as Occitanie } from './Occitanie';
import { cities as PaysDeLaLoire } from './Pays-de-la-Loire';
import { cities as ProvenceAlpesCoteDAzur } from "./Provence-Alpes-Côte-d'Azur";

export const allCities = [
  ...AuvergneRhoneAlpes,
  ...BourgogneFrancheComte,
  ...Bretagne,
  ...CentreValDeLoire,
  ...Corse,
  ...GrandEst,
  ...HautsDeFrance,
  ...IleDeFrance,
  ...Normandie,
  ...NouvelleAquitaine,
  ...Occitanie,
  ...PaysDeLaLoire,
  ...ProvenceAlpesCoteDAzur,
];
