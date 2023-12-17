--- 
title: Sophie Buel - Architecte d'intérieur  
tags : [Html,css,js]
description: Site vitrine avec gestion de login et operations CRUD grace a js
img: '../../assets/covers/sbuel.png'
imgAlt: 'printitjs'
---



Pour la réalisation de ce site vitrine, j'ai eu accès, en plus de la maquette, à une première version du site sur laquelle manquaient les fonctionnalités à implémenter pour le projet. Ainsi, le projet était bien plus centré sur la prise en main de JavaScript.

Dans un premier temps, il était nécessaire de mettre en place une galerie de projets en s'appuyant sur une base de données qui stockait ceux-ci. J'ai donc découvert la gestion des fonctions asynchrones en JS avec le concept de promesses qui envoie une requête et attend une réponse. Il m'a donc fallu bien comprendre la documentation de l'API pour déterminer comment je devais former le corps de ma requête, où je devais l'envoyer, ainsi que la méthode que je devais utiliser.

Il fallait ensuite mettre en place un service de login, et pour cela, faire une requête sur l'API fournie là aussi. Une fois la connexion effectuée, il fallait pouvoir permettre à l'utilisateur de modifier la base de données permettant de récupérer les différents travaux affichés sur le site de manière dynamique. La méthode demandée était la mise en place d'une fenêtre modale pour faciliter l'expérience utilisateur.

La mise en place d'une modal avec la balise ``<dialog>`` me permettait d'avoir une accessibilité idéale, mais les contraintes du projet impliquaient la mise en place de deux fenêtres différentes se suivant l'une l'autre. Afin d'éviter de modéliser ces fenêtres à l'aide de JavaScript seul, j'ai eu l'idée de coder deux modals différentes qui s'appelleraient mutuellement selon l'étape où se trouvait l'utilisateur.

Avec le recul, cette solution, bien que fonctionnelle, n'était pas forcément idéale puisqu'elle a impliqué beaucoup de logique supplémentaire pour gérer les comportements des deux fenêtres à la fois. Mais cela m'a au moins permis de prendre conscience que parfois la solution la plus élégante n'est pas forcément la meilleure solution, car elle peut rendre le code plus compliqué et moins maintenable.
