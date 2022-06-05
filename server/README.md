# LaJungle Immobilier - Partie Serveur

## Fichier index.js

Permet de démarrer l'API et de l'initialiser avec sa configuration (écoute sur un port, vérification de l'existence de la base de données, gestion de la session).

## Fichier config.json

Ce fichier **ne doit pas être commit**. À la place, on commit le fichier config-example.json qui possède la même strucutre, sans les données sensibles.

## Controllers

Chaque fichier JS correspond à une table de données. Un contrôleur fait appel au modèle qui lui est associé pour récupérer les résultats d'une requête en passant les paramètres voulus. Le contrôleur renvoie ensuite les résultats à la partie *front* au format JSON.

## Helpers

- dbconnect.js : gère la connexion à la base de données mySQL et crée les tables au démarrage de l'API si elles n'existent pas. La configuration mySQL (identifiant, mot de passe) se trouve dans le fichier `src/config.json`.

## Models

`DAO`: *Data Access Object*  

Chaque fichier JS correspond à une table de la base de données. Ils contiennent les différentes requêtes SQL possibles, reçoivent les paramètres envoyés par le contrôleur et lui renvoient le résultat de la requête.  
Par exemple, on trouvera dans le fichier `logementDAO.js` les requêtes SQL permettant d'ajouter, de consulter, de mettre à jour ou encore de supprimer un logement.

## Routes

Contient les différentes routes de l'API, par exemple : `/api/exemple`.  
Utilise la dépendance express-router.