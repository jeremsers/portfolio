--- 
name: Argentbank
tags : [React, Redux]
description: Gestion d'un state global grace a Redux
img: argbank.png
---


# Argentbank 

L'idée principale derrière ce projet était de prendre conscience d'une problématique inherente a React qui est la gestion des states et notamment la gestion d'un state global. en effet il est difficile de transferer le state d'un composant a un autre sans passer par des etapes fastidieuses appelées **props drilling**\
Mais une librairie vient palier a ce problème grace a la mise en place d'un state global qui peut etre accesible n'importe ou au sein de l'application : **Redux**

Cela dit l'utilisation d'une telle librairie ne vient pas sans incovenient car son utilisation n'est pas tres evidente. En effet, afin de faciliter son utilisation, Redux vient avec une grande couche d'abstraction notamment lorsque celle-ci est utilisée avec redux-toolkit ce qui est préconisée par la documentation elle-meme.\
Mais une fois tout les elements assimilés et toute la logique mise en place son utilisation dans l'application est satisfaisante grace a toute la logique derriere la librairie. De cette maniere il devient facile de rendre l'application reactive a n'importe quel changement effectue dans n'importe quel composant et il devient particulieremnt facile de mettre en place des comportements differents d'un bouton selon l'etat d'une requete ou encore de modifier ce qui est afficher n'importe ou dans son application. 
