# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests 
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**  
La première ligne sert à importer les méthodes que l'on va tester dans le fichier et qui sont écrites dans le fichier javascript.js. On peut également importer des dépendances en écrivant import { anagrammes, Stack, spirale, puissance4, fizzBuzz } from './javascript.js'  
**2. Expliquez le rôle de la fonction `expect`.**  
La fonction expect sert à définir le retour que l'on attend d'une méthode testée grace à ce qu'on appelle des matchers  
**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**  
toEqual sert à verifier si la valeur de sortie correspond à la valeur passée en paramètre.
Il existe plusieur métodes : toBeDefined, toBe, toBeTruthy, toBeFalsy, toBeNull, etc.  
**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**  
beforeEach et afterEach servent à éviter la duplication de code. Ils vont permettre réspéctivement de faire quelque chose avant et après chaque test lancé. describe va servir à rendre les tests lisibles et à les organiser.  
**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**  
"Mocker" une fonction permet de la simuler.  
**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**  
On peut mocker les fonctions qui necessitent des paramètres.
