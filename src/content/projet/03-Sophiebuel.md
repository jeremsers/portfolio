--- 
title: Sophie Buel - Architecte d'intérieur  
tags : [Html,css,js]
description: Site vitrine avec gestion de login et operations CRUD grace a js
img: '../../assets/sbuel.png'
imgAlt: 'printitjs'
---



Pour la réalisation de ce site vitrine, jái eu acces en plus de la maquette a une premiere version du site sur laquelle manquait les fonctionnalites a implementer pour le projet. Ainsi le projet etait bien plus centre sur la prise en main de javascript.

Dans un premier temps il etait necessaire de mettre en place une galerie de projet en sáppuyant sur une base de donnees qui stockait ceux ci. J'ai donc découvert la gestion des fonctions asynchrones dans js avec le concept de promesses qui envoient une requete et attend une reponse. Il m'as donc fallu bien comprendre la documentation de l'api pour determiner comment je devais former le body de ma requete et ou je devais lénvoyer ainsi que la methode que je devais utiliser.

Il fallait ensuite mettre en place un service de login et pour cela donc faire une requete sur l'api fournie la aussi. 
Une fois la connexion effectue il fallait pouvoir permettre a l'utilisateur de modifier la base de donnees permettant de recuperer  les differents travaux affiches sur le site de maniere dynamique. La methode demande etait la mise en place d'une fentre modale pour faciliter l'experience uitilisateur.

La mise en place d'une modal avec la balise dialog me permettait d'avoir une accesibilite ideale mais les contraintes du projets impliquait la mise en place de deux fenetres differentes se suivant l'une l'autre. Afin d'eviter de modeliser ces fenetres a l'aide de javascript seul j'ai eu l'idee de coder deux modal differentes qui s'appelerait mutuellement selon l'etape ou se trouvait l'utilisateur.

Avec le recul cette solution bien que fonctionnelle n'etait pas forcement ideale puisqu'elle a impliquer beaucoup de logique supplementaire afin de gerer les comportements des deux fenetres a la fois. Mais cela m'a au moins permis de prendre conscience que parfois la solution la plus elegante n'est pas forcement la meilleure solution puisque elle peut rendre le code plus complique et moins maintenable.
