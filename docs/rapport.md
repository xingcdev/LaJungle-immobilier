# LaJungle Immobilier

Interface d'administration d'une agence immobilière réalisée avec les technologies du web

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [LaJungle Immobilier](#lajungle-immobilier)
  - [Répartition des rôles](#r%C3%A9partition-des-r%C3%B4les)
  - [Environnement technique](#environnement-technique)
  - [Dépendances](#d%C3%A9pendances)
  - [Process de développement Frontend](#process-de-d%C3%A9veloppement-frontend)
    - [1. Faire une maquette de site Web qui affiche le modèle de données de la base de données.](#1-faire-une-maquette-de-site-web-qui-affiche-le-mod%C3%A8le-de-donn%C3%A9es-de-la-base-de-donn%C3%A9es)
    - [2. Analyser la maquette et la divider en plusieurs petits components](#2-analyser-la-maquette-et-la-divider-en-plusieurs-petits-components)
    - [3. Transformer ces composants sous forme d'une hiérarchie](#3-transformer-ces-composants-sous-forme-dune-hi%C3%A9rarchie)
  - [Process de développement Backend](#process-de-d%C3%A9veloppement-backend)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Membres de l'équipe :

Laurie BRAL \
Xing CHEN \
Mélanie DANG \
Antoine DESPRÉS

Groupe : L3-APP-LSI 1

05/06/2022

<div style="page-break-after: always;"></div>

## Origine du nom

Le nom « LaJungle » est tout droit inspiré du nom du réseau d'agences immobilières « Laforêt » créé en 1991. Lors de la lecture du sujet, nous nous sommes en effet souvenus de la bande sonore de [leur publicité](https://www.youtube.com/watch?v=VszkyU1yiRU) que nous entendions à la télévision lorsque nous étions plus jeunes.  
Nous avons également envisagé le nom « Gros-Caillou Immobilier » en référence au quartier éponyme du VII<sup>e</sup> arrondissement de Paris, mais LaJungle a obtenu notre préférence.

## Répartition des rôles

Laurie BRAL - développement Frontend  
CHEN Xing - développement Frontend  
Mélanie Dang - développement Backend  
Antoine DESPRÉS - développement Backend

## Environnement technique

**Frontend**

- HTML 5
- CSS 3
- JavaScript
- React : bibliothèque frontend publiée par Meta (Facebook) en 2013. Celle-ci permet de réaliser l'interface utilisateur facilement et rapidement, en développant des composants réutilisables à travers le site.

**Backend**

- Looping (logiciel permettant la création du modèle relationnel)
- MySQL (SGBD servant à la création de tables, requêtes, et du stockage de la base de données)
- NodeJs
- Express

## Dépendances node.js

**Frontend**

Les dépendances sont installées et configurées avec l'outil d'installation de Meta [Create React App](https://create-react-app.dev/).

| Nom              | Description                                                                                                                                | Version  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| react            | Fonctionnalités pour définir un compposant React, il dois être installer avec `react-dom`                                                  | 18.1.0   |
| react-dom        | Rendre les composants sur le DOM(Document Object Model) HTML                                                                               | 18.1.0   |
| sass             | Utiliser le préprocesseur Sass afin d'écrire du CSS de manière plus pratique                                                               | 1.51.0   |
| typescript       | Language qui ajouter des syntaxes pour typer JavaScript                                                                                    | 4.6.4    |
| react-icons      | Utiliser les icôns sous forme de composants React. Les icôns sont répertorié sur [React icons](https://react-icons.github.io/react-icons/) | 4.3.1    |
| @types/react     | Ajouter les définitions de types des méthodes de React. La dépendance doit être installée avec `typescript`.                               | 18.0.9   |
| @types/react-dom | Ajouter les définitions de types des méthodes de `react-dom`.                                                                              | 18.0.3   |
| @types/node      | Ajouter les définitions de types des méthodes de Node.js                                                                                   | 16.11.33 |

**Backend**

| Nom                               | Description                                                                                                              | Version |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| cors                              | Middleware pour permettre le [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) entre le backend et le frontend | 2.8.5   |
| [express](https://expressjs.com/) | Framework JavaScript permettant la conception d'APIs                                                                     | 4.18.1  |
| express-session                   | Gestion de la connexion des utilisateurs, extension d'express                                                            | 1.17.3  |
| mysql2                            | Permet la connexion à la base de données, supporte les requêtes préparées                                                | 2.2.5   |
| node-fetch                        | Permet l'usage de l'API Fetch dans Node.js                                                                               | 2.6.7   |

## Process de développement Frontend

### 1. Faire une maquette de site Web qui affiche le modèle de données de la base de données.

Choix de la palette de couleur

| Couleurs         | Code couleur        | Représentation                         |
| ---------------- | ------------------- | -------------------------------------- |
| Couleur primaire | Vert jungle #29AB87 | <span style="color: #29AB97;">■</span> |

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

  ## Structure des fichiers backend
  Tout le code source est situé dans le répertoire `src/`. Sa structure est la suivante :

- `controllers/`: Chaque fichier JS correspond à une table de données. Un contrôleur fait appel au modèle qui lui est associé pour récupérer les résultats d'une requête en passant les paramètres voulus. Le contrôleur renvoie ensuite les résultats à la partie *front* au format JSON.
- `helpers/`: le fichier dbconnect.js à l'intérieur du dossier gère la connexion à la base de données mySQL et crée les tables au démarrage de l'API si elles n'existent pas. La configuration mySQL (identifiant, mot de passe) se trouve dans le fichier `src/config.json`.
- `middlewares/`: Le fichier auth.js à l'intérieur du dossier gère l'authentification via JSON Web Token (JWT) et vérifie que l'utilisateur est autorisé à accéder aux pages du site.
- `models/`: Chaque fichier JS à l'intérieur du dossier correspond à une table de la base de données. Ils contiennent les différentes requêtes SQL possibles, reçoivent les paramètres envoyés par le contrôleur et lui renvoient le résultat de la requête.  
Par exemple, on trouvera dans le fichier `logementDAO.js` les requêtes SQL permettant d'ajouter, de consulter, de mettre à jour ou encore de supprimer un logement.
- `routes/`: Contient les différentes routes de l'API, par exemple : `/api/exemple`. Utilise la dépendance express-router.
- `strategies/`: Permet l'authentification de l'utilisateur via son compte Microsoft.
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

![Modèle relationnel](./images/modele%20relationnel.jpg)

**Choix du modèle relationnel**

- On considère qu'un logement possède 0 ou plusieurs garages, et qu'un garage est possédé par 1 ou plusieurs logements (dans le cas d'un parking commun à toute une résidence, par exemple). Dans un souci de clarté, on a ajouté un attribut "Adresse" à la table garage.
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

**API Routes**
Pour chaque requête, un code de statut de réponse HTTP est envoyé afin de vérifier si la requête s'est bien réalisée ou non.

| Code HTTP | Description                                                |
|-----------|------------------------------------------------------------|
| 200       | La requête s'est bien déroulée                             |
| 400       | Erreur dans la requête (exemple : ID de l'objet non défini |
| 500       | Erreur du serveur                                          |


 Voici les API routes pour les requêtes que nous avons utilisé dans notre projet :  
## Table Transaction :
### http://localhost:5000/api/transaction/create : 
Permet de créer une transaction.
Prend paramètres :
| Paramètres      |
|-----------------|
| IdTransaction      |
| PrixVente        |
| PourcentageCommission |
| IdClient      |
| IdLogement        |

### http://localhost:5000/api/transaction/get : 
Prend en paramètre l'ID de la transaction souhaitée. Permet de retourner les informations d'une transaction spécifique (IdTransaction, PrixVente PourcentageCommissionIdLogement, IdClient).

Exemple de réponse JSON : 
```json
{
    "PrixVente": 135.000,
    "PourcentageCommission": 4.2,
    "IdClient": 1,
    "IdLogement": 3 
}
```
### http://localhost:5000/api/transaction/getAll : 
Permet de retourner la liste de toutes les transactions de la base de données. 
### http://localhost:5000/api/transaction/update : 
Prend en paramètre l'ID de la transaction souhaitée. Permet de modifier les informations d'une transaction, en fonction des paramètres envoyés.
### http://localhost:5000/api/transaction/remove : 
Permet de supprimer une transaction spécifique de la base de données.

| Paramètres      |
|-----------------|
| IdTransaction        |


## Table Visite :
### http://localhost:5000/api/visite/create : 
Permet de créer une visite.
| Paramètres      |
|-----------------|
| IdVisite        |
| DateHeureVisite |
| IdLogement      |
| IdClient        |

### http://localhost:5000/api/visite/get : 
Permet de retourner les informations d'une transaction spécifique (IdVisite, DateHeureVisite IdLogement, IdClient).

| Paramètres      |
|-----------------|
| IdVisite        |

Exemple de réponse JSON : 
```json
{
    "data": {
        "idVisite": 1,
        "idLogement": 1,
        "idClient": 4
    },
    "error": null
}
```
### http://localhost:5000/api/visite/getAll : 
Permet de retourner la liste de toutes les transactions de la base de données.

```json
{
    "data": [
        {
            "idVisite": 1,
            "dateHeureVisite": "2022-11-29T13:15:00.000Z",
            "idLogement": 1,
            "idClient": 4,
            "adresse": "9 Rue du Chat qui Pêche",
            "nomClient": "Mélanie Dang"
        },
        {
            "idVisite": 2,
            "dateHeureVisite": "2022-10-11T08:30:00.000Z",
            "idLogement": 2,
            "idClient": 2,
            "adresse": "25 Rue Brisemiche",
            "nomClient": "Xing Chen"
        }
    ],
    "error": null
}
```
### http://localhost:5000/api/visite/update : 
Permet de modifier les informations d'une visite, en fonction des paramètres envoyés.
### http://localhost:5000/api/visite/remove : 
Permet de supprimer une visite spécifique de la base de données. 

| Paramètres      |
|-----------------|
| IdVisite       |


## Table Logement :
### http://localhost:5000/api/logement/create : 
Permet de créer un logement.

| Paramètres      |
|-----------------|
| Adresse |
| DescriptionLogement      |
| NomProprietaire        |
| IdType        |
| NombrePieces |
| Superficie      |
| IdEtat        |
| PrixMiseEnVente        |
| DateDisponibilite |
| CodePostal      |
| Ville        |

### http://localhost:5000/api/logement/get : 
Permet de retourner les informations d'un logement spécifique (IdLogement, Adresse, DescriptionLogement, NomProprietaire, IdType, NombrePieces, Superficie, IdEtat, PrixMiseEnVente, DateDisponibilite, CodePostal, Ville).

| Paramètres      |
|-----------------|
| IdLogement        |

Exemple de réponse JSON : 
```json
{
    "PrixVente": 135.000,
    "PourcentageCommission": 4.2,
    "IdClient": 1,
    "IdLogement": 3 
}
```
### http://localhost:5000/api/logement/getAll : 
Permet de retourner la liste de touts les logements de la base de données. 
### http://localhost:5000/api/logement/update : 
Permet de modifier les informations d'un logement, en fonction des paramètres envoyés.
### http://localhost:5000/api/logement/remove : 
Permet de supprimer un logement spécifique de la base de données. 

| Paramètres      |
|-----------------|
| IdLogement      |

## Table Garage :
### http://localhost:5000/api/garage/get : 
Permet de retourner les informations d'un garage spécifique (IdGarage, Adresse, IdLogement).

| Paramètres      |
|-----------------|
| IdGarage        |

Exemple de réponse JSON : 
```json

```
### http://localhost:5000/api/garage/getAll : 
Permet de retourner la liste de tous les garages de la base de données.

```json

```

### http://localhost:5000/api/garage/update : 
Permet de modifier les informations d'un garage, en fonction des paramètres envoyés.
### http://localhost:5000/api/garage/remove : 
Permet de supprimer un garage spécifique de la base de données. 

| Paramètres      |
|-----------------|
| IdGarage       |

## Table Garage :
### http://localhost:5000/api/garage/get : 
Permet de retourner les informations d'un garage spécifique (IdGarage, Adresse, IdLogement).

| Paramètres      |
|-----------------|
| IdGarage        |

Exemple de réponse JSON : 
```json

```
### http://localhost:5000/api/garage/getAll : 
Permet de retourner la liste de tous les garages de la base de données.

```json

```

### http://localhost:5000/api/garage/update : 
Permet de modifier les informations d'un garage, en fonction des paramètres envoyés.
### http://localhost:5000/api/garage/remove : 
Permet de supprimer un garage spécifique de la base de données. 

| Paramètres      |
|-----------------|
| IdGarage       |

## etatHabitation
### http://localhost:5000/api/etatHabitation/getList : 
Permet de récupérer la liste de tous les états d'habitations.

| Résultats      |
|-----------------|
| Très bon      |
| Bon      |
| Mauvais      |

## typeLogement
### http://localhost:5000/api/typeLogement/getList : 
Permet de récupérer la liste de tous les états d'habitations.

| Résultats      |
|-----------------|
| appartement      |
| maison      |