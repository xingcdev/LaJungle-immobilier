# LaJungle Immobilier

## Vue d'ensemble

Projet réalisé dans le cadre du cours de _Bases de données_.  
Il s'agit d'une interface d'administration pour l'agence immobilière fictive LaJungle.

Le rapport de projet se trouve dans le répertoire `docs/`.

## Installation

**Backend**

Ouvrir un terminal et se positionner dans le répertoire `server/` :

```bash
cd server
```

Installer les dépendances (requiert [node.js](https://nodejs.org/fr/download/)) :

```bash
npm install
```

Configurer la connexion à la base de données mySQL dans le répertoire `server/src/config.json`  
Renseignez ici les informations nécessaires à la connexion à la base de données mySQL (nom d'hôte, nom d'utilisateur, mot de passe) :

```json
"mysql": {
    "HOST": "localhost",
    "USER": "root",
    "PASSWORD": ""
}
```

\*Le port utilisé par l'API est 5000. Celui-ci est modifiable dans le fichier `config.json`. Il doit également être renseigné côté front-end dans le fichier .env du répertoire `client/`.

Démarrer le serveur

Assurez-vous au préalable que le serveur mySQL est démarré. Le port utilisé est celui par défaut, c'est-à-dire 3306.

```bash
npm start
```

**Frontend**

Copier le fichier `client/.env.example` et le coller en tant qu'un nouveau fichier `.env` puis mettre l'url de l'api dans ce fichier:

```
REACT_APP_API_URL = "http://localhost:5000/api"
```

L'URL ci-dessus est l'API locale utilisée lors de la phase de développement.

Si vous voulez utilisez l'API déployée :

```
REACT_APP_API_URL = "https://votre_domain.com/api"
```

Ouvrir un terminal et se positionner dans le répertoire `client/` :

```bash
cd client
```

Installer les dépendances (nécessite [node.js](https://nodejs.org/fr/download/)) :

```bash
npm install
```

Démarrer l'application en mode développement :

```bash
npm start
```

Ouvrir http://localhost:3000/ pour la visualiser dans un navigateur.
