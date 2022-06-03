## Fonctionnalités

- [x] Faire une page d'erreur 404
- [x] Consulter La liste de logements
- [ ] Créer un nouvoeau logement
- [x] Editer les informations d'un logement
- [ ] Supprimer un logement
- [ ] La liste de toutes les transactions
- [ ] La liste de tous les garages

Laurie :

- [x] La route visite/getAll qui renvoie TOUTES les visites. Les plus récentes en premier.
- [ ] La liste de toutes les visites (le code de requête SQL inspiré de `HomePage.tsx`, et boucle inspiré de `Housings.tsx` ligne 20 avec `map()` )

## Ce qu'on a appris

### Se mettre d'accord sur le format de réponse json de l'API

On s'est rendu compte que il n'y avait des données manquantes pour le formulaire d'édition de logement. Les dev backend doivent refaire certaines choses qui leur prennait du temps.

### Mettre les attributs SQL en camelCase

La réponse JSON est générée à partir des attributs SQL. Par convention, JSON nécessite des clés en camelCase. Dans ce projet, les attributs sont en PascalCase, ce qui nous oblige à converir les attributs en camelCase. Il serait plus simple de mettre directement les attributs avec la méme écriture que le JSON.
