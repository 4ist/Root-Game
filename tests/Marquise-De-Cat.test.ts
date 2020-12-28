//import {MarquiseDeCat} from '../factions/Marquise-De-Cat';

import { number } from "yargs";
import { MarquiseDeCat } from "../factions/Marquise-De-Cat";


test('MarquiseDeCat has daylight actions', () => {

  const cat = new MarquiseDeCat();

  expect(typeof(cat.getDaylightActions())).toBe('string');
});
