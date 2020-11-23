const anagrammes = (stringA, stringB) => {
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */
  /**on remplace les caractères spéciaux par des espaces et on passe la chaîne de caractères en minuscule*/
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase()
  /** on découpe la chaîne de caractères et on replace chaque caractère dans l'ordre alphabéthique puis on joint le tout*/
  stringA= stringA.split('').sort().join()
  stringB= stringB.split('').sort().join()
/** on boucle sur les deux tableaux de caractères et on compare à chaques index les valeurs des caractères */
  for (let char in stringA) {
    if (stringA[char] !== stringB[char]) {
      return false
    }
  }

  return true



};




class Stack {
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */

 constructor(){
   this.tab = []
}
push(paramToAdd){
  return this.tab[this.tab.length]= paramToAdd

}

pop(){
   const tabTemporaire = []
   const elemToDelete = this.tab[this.tab.length -1]
  let i =0
    while (i != this.tab.length - 1) {
      tabTemporaire[i] = this.tab[i]
      i++
    }

  this.tab = tabTemporaire
  console.log(this.tab)


  return elemToDelete

}
peek(){
   return this.tab[0]
}

};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */
for(let i =1; i<n+1;i++){
  if(  i % 3 ===0 && i % 5 !==0){
      console.log('fizz')
  }else if ( i % 5 ===0 && i % 3 !==0 ) {
    console.log('buzz')
  }else if (i % 3 ===0 && i % 5 ===0 ) {
    console.log('fizzbuzz')
  }else
    if(i !== undefined){
      console.log(i)
    }

}

};

const spirale = (n) => {
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
var x = []
  for (var i = 0; i < n; i++) {
    x[i] = []
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      x[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      x[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
      for (let i = endColumn; i >= startColumn; i--) {
        x[endRow][i] = counter;
        counter++;
      }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      x[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return x;

};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}

