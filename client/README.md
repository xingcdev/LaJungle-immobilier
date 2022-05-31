## Fonctionnalités

- [x] une page d'erreur 404
- [ ] La liste de logements dans l'odre de prix croissant
- [ ] Ajouter un logement, transaction et visite
- [ ] Editer un logement, transaction et visite
- [ ] Supprimer un logement, transaction et visite
- [ ] Chercher un logement particulier ave une adresse postale
- [x] Une page détail de chaque logement
- [ ] La liste de transactions

Laurie :

- [ ] La route visites/getAll qui renvoie TOUTES les visites. Les plus récentes en premier.
- [ ] La liste de toutes les visites (le code de requête SQL inspiré de `HomePage.tsx`, et boucle inspiré de `Housings.tsx` ligne 20 avec `map()` )
- [ ] La liste de garage

## Ce qu'on a appris

### Se mettre d'accord sur le format de réponse json de l'API

On s'est rendu compte que il n'y avait des données manquantes pour le formulaire d'édition de logement. Les dev backend doivent refaire certaines choses qui leur prennait du temps.

### Mettre les attributs SQL en camelCase

La réponse JSON est générée à partir des attributs SQL. Par convention, JSON nécessite des clés en camelCase. Dans ce projet, les attributs sont en PascalCase, ce qui nous oblige à converir les attributs en camelCase. Il serait plus simple de mettre directement les attributs avec la méme écriture que le JSON.
