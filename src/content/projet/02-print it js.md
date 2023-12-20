---
title: Print it js
tags: [Html / Css, Javascript, Animation]
description: Site vitrine avec réalisation d'animation grace a css et js
img: '../../assets/covers/printit.png'
imgAlt: 'printitjs'
link: https://jeremsers.github.io/Print-it-JS/
---



Ce projet est normalement une simple introduction au langage JavaScript afin de mettre en place un carrousel. Cela m'a permis de découvrir comment récupérer un élément du DOM grâce à JavaScript pour ensuite le modifier. Mais j'ai profité de ce projet pour pousser un peu plus loin ce que j'avais appris des animations sur le projet précédent en décidant d'animer l'ensemble de la page afin de proposer un résultat plus moderne.

L'animation du carrousel notamment n'était pas évidente à mettre en place, puisqu'il fallait que je trouve comment faire cohabiter à la fois l'image sortante et l'image entrante sans que l'une n'interfère avec l'autre. En continuant d'utiliser la logique permettant de rendre le carrousel fonctionnel, j'ai donc ajouté la mise en place de classes spécifiques à mon animation selon la flèche sélectionnée afin de faire sortir l'ancienne image de la fenêtre dans le bon sens et faire rentrer la nouvelle image du bon côté.

Pour le reste des animations, il s'agissait simplement d'utiliser les coordonnées de la vue de l'utilisateur ainsi que les sélecteurs d'éléments du DOM pour permettre de déclencher les animations au moment où l'utilisateur scrollerait au niveau de ces éléments.
