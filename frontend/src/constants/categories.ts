import type { Category } from '../types/type';

import iconScissors from '../assets/svg/page3/scissors-big.svg';
import iconWrench from '../assets/svg/page3/wrench.svg';
import iconLaptop from '../assets/svg/page3/laptop-big.svg';
import iconBicycle from '../assets/svg/page3/bicycle.svg';
import iconNeedle from '../assets/svg/page3/needle.svg';
import iconMore from '../assets/svg/page3/more.svg';
/*иконки переедут на бэк*/

export const CATEGORIES: Category[] = [
  { id: 5, label: 'Friseure', icon: iconScissors } ,
  { id: 1, label: 'Autowerkstatt', icon: iconWrench },
  { id: 3, label: 'Laptop & Handy Reparatur', icon: iconLaptop },
  { id: 2, label: 'Fahrradwerkstatt', icon: iconBicycle },
  { id: 4, label: 'Schneiderei', icon: iconNeedle },
  { id: null, label: 'Alle Kategorien', icon: iconMore },
];
