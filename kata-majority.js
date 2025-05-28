const majority = (arr) => {
    const nbOccurences = {};

    let nbImpairs = 0;
    let nbPairs = 0;

    // Création du dictionnaire qui donne
    // pour chaque nombre, son nombre d'apparitions
    // dans le tableau
    arr.forEach((nombre) => {
        // Nombre arrive dans le dict
        if (nbOccurences[nombre] === undefined ) {
            nbOccurences[nombre] = 1;
        }
        else {
            // Nombre
            nbOccurences[nombre] = nbOccurences[nombre]  + 1;
        }
        if ( nombre % 2 === 0) {
            nbPairs ++;
        }
        if ( nombre %2 !== 0) {
            nbImpairs;
        }
    })

    console.log('Dictionnaire: ', nbOccurences)

    // Compter le
    let maxOcc = 0;
    let nbToReturn = 0; 
    for ( const pair in nbOccurences ) {
        console.log('debug pair', pair);
        console.log('debug value ', nbOccurences[pair])
        if ( nbOccurences[pair] > maxOcc) {
            maxOcc = nbOccurences[pair]
            nbToReturn = pair
        }
    }
    return nbToReturn
};

export default majority;