import Reptile from "./Reptile.js";
import Mamifere from './Mamifere.js';
import Serpent from './Serpent.js';

export default class Factory{

    constructor(type, nom, genre, peau){
        switch(type){
            case 'reptile':
                return new Reptile(nom, genre, peau);
                break;
            case 'mamifere':
                return new Mamifere(nom, genre, peau);
                break;
            case 'serpent':
                return new Serpent(nom, genre, peau);
                break;
        }
    }

}