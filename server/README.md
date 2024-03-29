# Lajungle immobilier

## Usage

Demarrer l'application en développement avec Docker :

```bash
docker-compose up
```

## Structure de l'API serveur

### Fichier index.js

Permet de démarrer l'API et de l'initialiser avec sa configuration (écoute sur un port, vérification de l'existence de la base de données, gestion de la session).

### Fichier config-example.json

Ce fichier contient un exemple de configuration permettant d'utiliser l'API. Il faut donc créer un fichier config.json dans le même répertoire et le compléter avec les information nécessaires, notamment le nom d'utilisateur et le mot de passe permettant de se connecter à mySQL.

### Controllers

Chaque fichier JS correspond à une table de données. Un contrôleur fait appel au modèle qui lui est associé pour récupérer les résultats d'une requête en passant les paramètres voulus. Le contrôleur renvoie ensuite les résultats à la partie _front_ au format JSON.

### Helpers

- dbconnect.js : gère la connexion à la base de données mySQL et crée les tables au démarrage de l'API si elles n'existent pas. La configuration mySQL (identifiant, mot de passe) se trouve dans le fichier `src/config.json`.

### Models

`DAO`: _Data Access Object_

Chaque fichier JS correspond à une table de la base de données. Ils contiennent les différentes requêtes SQL possibles, reçoivent les paramètres envoyés par le contrôleur et lui renvoient le résultat de la requête.  
Par exemple, on trouvera dans le fichier `logementDAO.js` les requêtes SQL permettant d'ajouter, de consulter, de mettre à jour ou encore de supprimer un logement.

### Routes

Contient les différentes routes de l'API, par exemple : `/api/exemple`.  
Utilise la dépendance express-router.
