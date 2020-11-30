# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**  
validateEmail(value)=> teste si le champs est rempli et si il contient une adresse mail dans un format valide  
validateName(name)=> verifie la présence d'une valeur  
NameField({ name, setName })=> modifie le state avec le nom entré  
EmailField({ email, setEmail })=> modifie le state avec l'email entré  
function Inscription() => declare les différents hooks et affiche les formulaires via des appels aux différent composants créé plus haut


**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**  
on a trois states(ou du moins 3 attributs du state) qui valent isSubmit = false, name et email valent une chaîne de caractères vide

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**  
elle contient la valeur tapée dans l'input

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**  
car on est dans de la syntax javascript


**5. Peut-on transmettre une fonction dans un Props ?**  
oui

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**  
A chaque fois que quelque chose est tapé dans l'input, la methode onChange est appelé et cette dernière fait un setState via la methode définit dans le hook et passé en paramètre de la fonction. ensuite react appel le render qui affichera le nouvel valeur du champs nom. 

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**  
elle permet de controler la présence d'une chaine de caractère sous la forme : chaine de caractère + @+ chaine de caractère+ . + chaine de caractère

## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).




