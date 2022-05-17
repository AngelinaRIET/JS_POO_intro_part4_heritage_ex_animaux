import ANSIColours from './ANSIColours.js';
let AC = new ANSIColours();

export default class Animaux {
    
    /**
     * 
     * @param {string} nom Nom de l'animal
     * @param {string} genre Femelle ou Male
     * @param {boolean} genre Colonne vertebrale
     */
    constructor(nom, genre, colonneVertebrale = false){
        
        this.nom = nom;
        this.genre = genre;
        this.colonneVertebrale = colonneVertebrale;

    }

    description(){
        console.log('Je m\'appel ' + AC.GREEN + this.nom + AC.RESET);
        console.log('Je suis du genre ' + AC.GREEN + this.genre + AC.RESET);
        if(this.colonneVertebrale){
            console.log('J\'ai une colonne vertebrale');
        }else{
            console.log('Je n\'ai pas de colonne vertebrale');
        }
        console.log('===================================================');
    }

}