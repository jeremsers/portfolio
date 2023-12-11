---
title: Print it js
tags: [Html, css, javascript, animation]
description: Site vitrine avec réalisation d'animation grace a css et js
img: './printit.png'
imgAlt: 'printitjs'
---

# Print it js

Ce projet est normalement une simple introduction au language javascript afin de mettre en place un carrousel.
Cela m'as permis de decouvrir comment recuperer un element du dom grace a javascript pour ensuite le modifier.
mais j'ai profiter de ce projet pour pousser un peu plus loin ce que j'avais appris des animations sur le projet précédent en décidant d'animer l'ensemble de la page afin de proposer un résultat plus moderne.

L'animation du carrousel notamment n'etait pas evidente a mettre en place puisqu'il fallait que je trouve comment faire cohabiter a la fois l'image sortante et l'image entrante sans que l'une n'interfere avec l'autre.
En continuant d'utiliser la logique permettant de rendre le carrousel fonctionnel j'ai donc ajouter la mise en place de classe specifique a mon animation selon la fléche selectionnée afin de faire sortir l'ancienne image de la fenetre dans le bon sens et faire rentrer la nouvelle image du bon coté.

Pour le reste des animations il s'agissait simplement d'utiliser les coordonnees de la vue de l'utilisateur ainsi que les selecteurs d'elements ud dom pour permettre de declencher les naimations au moment ou l'utilisateur scrollerait au niveau de ces elements.
