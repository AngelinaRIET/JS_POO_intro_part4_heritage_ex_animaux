
import Animaux from './Animaux.js';

//Class abstraite
export default class Invertebre extends Animaux{

    constructor(nom, genre){
        super(nom, genre, false);
    }
}