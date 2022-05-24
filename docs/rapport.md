# LaJungle

Application Web backoffice immobilier de l'agence LaJungle.

Projet réalisé par ces étudiants Efrei en L3 APP LS1 :

Laurie BRAL \
CHEN Xing \
Mélanie Dang \
Antoine DESPRÉS

13/05/2022

<div style="page-break-after: always;"></div>

## Répartition de rôle

Laurie BRAL - développement Frontend
CHEN Xing - développement Frontend
Mélanie Dang - développement Backend
Antoine DESPRÉS - développement Backend

## Environnement technique

**Frontend**

- HTML 5
- CSS 3
- JavaScript
- React : bibliothèque frontend publiée par Meta (Facebook) en 2013. Il permet de réaliser l'interface utilisateur facilement et rapidement, en développant des composants.

**Backend**

- Looping (logiciel permettant la création du modèle relationnel)
- MySQL (SGBD servant à la création de tables, requêtes, et du stockage de la base de données)
- Express (API)

## Dépendances

**Frontend**

Les dépendances sont installées et configurées avec l'outil d'installation de Meta [Create React App](https://create-react-app.dev/).

| Nom              | Description                                                                                                                                | Version  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| react            | Fonctionnalités pour définir un compposant React, il dois être installer avec `react-dom`                                                  | 18.1.0   |
| react-dom        | Rendre les composants sur le DOM(Document Object Model) HTML                                                                               | 18.1.0   |
| sass             | Utiliser le préprocesseur Sass afin d'écrire du CSS de manière plus pratique                                                               | 1.51.0   |
| typescript       | Language qui ajouter des syntaxes pour typer JavaScript                                                                                    | 4.6.4    |
| react-icons      | Utiliser les icôns sous forme de composants React. Les icôns sont répertorié sur [React icons](https://react-icons.github.io/react-icons/) | 4.3.1    |
| @types/react     | Ajouter les définitions de types des méthodes de React. La dépendance doit être installer avec `typescript`.                               | 18.0.9   |
| @types/react-dom | Ajouter les définitions de types des méthodes de `react-dom`.                                                                              | 18.0.3   |
| @types/node      | Ajouter les définitions de types des méthodes de Node.js                                                                                   | 16.11.33 |

## Process de développement Frontend

### 1. Faire une maquette de site Web qui affiche le modèle de données de la base de données.

Choix de la palette de couleur

| Couleurs         | Code couleur        | Image |
| ---------------- | ------------------- | ----- |
| Couleur primaire | Vert jungle #29AB87 |       |
|                  |                     |
|                  |                     |

**Références**

[134 Shades of Green Color With Names, Hex, RGB, CMYK Codes](https://www.color-meanings.com/shades-of-green-color-names-html-hex-rgb-codes/)

### 2. Analyser la maquette et la divider en plusieurs petits components

### 3. Transformer ces composants sous forme d'une hiérarchie

Les composants Reacts s'organisent sous forme d'un arbre. `App` est le composant racine qui contient tous les composants de l'application.

`HomePage` représente la page d'accueil et il contient les **composants enfants** `Logo`, `SearchBar`, `HousingList`, etc. `HomePage` est le **composant parent**.

- App

  - Dashboard
    - Sidebar
      - UserProfile
      - AppNavMenu
        - NavLink
  - LoginPage
  - 404
  - HomePage
    - Logo
    - SearchBar
    - HousingList
      - HousingCard
    - Filter
  - HousingPage
  - TransactionsPage

  ## Structure des fichiers frontend

Tout le code source est situé dans le répertoire `src/`. Sa structure est la suivante :

- `assets` - fichiers statiques comme les images, logo, vidéos, etc.

- `components` - des components globals et réutilisables partout dans l'application

- `styles` - les fichiers de styles en `.scss`

- `views` - une vue est une page de l'application. Ce répertoire contient toutes les vues de l'application et ainsi les components utilisés dans une vue spécifique. Par exemple le component `HousingCard` est spécifique à la route `/index` qui est la page d'accueil.

  ### Inspiration maquette

[Chameleon Logo - Flaticon](https://www.flaticon.com/free-icon/chameleon_220105?term=chameleon&page=1&position=5&page=1&position=5&related_id=220105&origin=tag)

[Real estate - Dribble](https://dribbble.com/shots/18162442-Real-Estate-Website)

## Process de développement Backend

**Modèle relationnel**

![Modèle relationnel](./images/modele%20relationnel.png)

**Choix du modèle relationnel**

- On considère qu'un logement possède 0 ou plusieurs garages, et qu'un garage est possédé par 1 ou plusieurs logements. Pour un souci de clarté, on a ajouté un attribut "Adresse" à la table garage.
- Une visite concerne 1 logement, et un logement peut être visité plusieurs fois.
- Un client peur effectuer plusieurs visites, et une visite est faite par un seul client.
- Un client peut procéder à 0 ou plusieurs transactions, et une transaction ne concerne qu'un client.
  Une transaction implique un seul logement à la fois, et un logement est impliqué dans 0 ou plusieurs transactions.

Nous avons ajouté une table utilisateur avec les attributs "NomUtilisateur" et "MotDePasse", qui permet à une personne de créer son compte et son mot de passe afin d'accéder au site.

**Script SQL**
Nous avons rédigé deux scripts SQL afin de construire une base de données en local et ainsi tester notre application.

- Le script permettant d'ajouter les tables nécessaires : [Script de création des tables](/server/script_create_tables.sql.md)
- Le script permettant d'insérer des données dans les tables : [Script d'insertion de valeurs](/server/script_insert_tables.sql)

**Requête pour chaque table**

- Pour chaque table, nous avons codé des fonctions asynchrones en js afin de répondre aux besoins de l'application. Chaque table contient au moins les fonctions get, create, delete.
- Pour la fonction asynchrone update, qui permet de modifier les informations d'une ligne, nous avons utilisé un string dynamique qui prend seulement en compte les paramètres modifiés.

Nous avons ajouté une table utilisateur avec les attributs "NomUtilisateur" et "MotDePasse", qui permet à une personne de créer son compte et son mot de passe afin d'accéder au site.
