-- Insertion dans la table Client
TRUNCATE TABLE client;
INSERT INTO Client (NomClient) VALUE
('Antoine Després'),
('Xing Chen'),
('Laurie Bral'),
('Mélanie Dang')
;

TRUNCATE TABLE garage;
-- Insertion dans la table garage
INSERT INTO Garage (Adresse) VALUE
('106 Rue des 2 Boules'),
('7 Rue des Boulets'),
('14 Rue Gros'),
('8 Rue des femmes Fraîches')
;

TRUNCATE TABLE logement;
-- Insertion dans la table logement
INSERT INTO Logement (Adresse, NomProprietaire, TypeLogement, NombrePieces, Superficie, EtatHabitation, PrixMiseEnVente, DateDisponibilite, Ville) VALUES
('9 Rue du Chat qui Pêche', 'Charles Potté', 'appartement', 
2, 36.4, 'bon', 150.000, '2022-06-24', 'Paris'),
('25 Rue Brisemiche', 'Jean Miche', 'maison', 
4, 125.0, 'tres bon', 950.000, '2022-09-01', 'Montcuq'),
('50 Rue de la Roquette', 'Franklin Tortue', 'appartement', 
1, 18.7, 'mauvais', 250.500, '2023-01-01', 'Versailles'),
('6O Rue de la Grande Truanderie', 'Jack Truant', 'maison', 
6, 250, 'bon', 2500000, '2022-06-24', 'Paris')
;

TRUNCATE TABLE transaction;
-- Insertion dans la table transaction
INSERT INTO Transaction (PrixVente, PourcentageCommission, IdClient, IdLogement) VALUES
(135.000, 4.2,1,3),
(900.750, 3.1,2,4),
(250.000, 5.0,3,1),
(135.000, 3.8,4,2)
;

TRUNCATE TABLE visite;
-- Insertion dans la table visite
INSERT INTO visite (IdLogement, DateVisite, IdClient) VALUES
(1,'2022-11-29',4),
(2,'2022-10-11',2),
(3,'2022-08-05',1),
(4,'2022-05-29',3)
;

TRUNCATE TABLE posseder;
INSERT INTO posseder(IdLogement, IdGarage) VALUES
(1,2),
(2,3),
(3,4),
(4,1)
;

TRUNCATE TABLE utilisateur;