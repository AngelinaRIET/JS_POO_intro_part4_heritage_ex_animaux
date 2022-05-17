"use strict"

import Reptile from "./lib/Reptile.js";
import Mamifere from './lib/Mamifere.js';
import Serpent from "./lib/Serpent.js";

let vacheDeCreuse = new Mamifere('Huguette la vache', 'Femelle', 'poil');
vacheDeCreuse.description();

let serpent = new Serpent('Serpent des Andes', 'Masculin');
serpent.description();

let varant = new Reptile('Gerard le varant des iles samoa', 'Male');
varant.description();