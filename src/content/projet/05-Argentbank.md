--- 
title: Argentbank
tags : [React, Redux]
description: Gestion d'un state global grace a Redux
img: '../../assets/covers/argbank.png'
imgAlt: 'Argentbank website'
link: https://github.com/jeremsers/argentbank
---



L'idée principale derrière ce projet était de prendre conscience d'une problématique inhérente à React, qui est la gestion des states, et notamment la gestion d'un state global. En effet, il est difficile de transférer le state d'un composant à un autre sans passer par des étapes fastidieuses appelées **props drilling**.\ Cependant, une librairie vient pallier à ce problème grâce à la mise en place d'un state global qui peut être accessible n'importe où au sein de l'application : **Redux**.

Cela dit, l'utilisation d'une telle librairie ne vient pas sans inconvénient, car son utilisation n'est pas très évidente. En effet, afin de faciliter son utilisation, Redux vient avec une grande couche d'abstraction, notamment lorsque celle-ci est utilisée avec Redux Toolkit, ce qui est préconisé par la documentation elle-même.\ Cependant, une fois tous les éléments assimilés et toute la logique mise en place, son utilisation dans l'application est satisfaisante grâce à toute la logique derrière la librairie. De cette manière, il devient facile de rendre l'application réactive à n'importe quel changement effectué dans n'importe quel composant, et il devient particulièrement facile de mettre en place des comportements différents d'un bouton selon l'état d'une requête ou encore de modifier ce qui est affiché n'importe où dans son application.
