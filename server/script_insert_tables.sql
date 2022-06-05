SET FOREIGN_KEY_CHECKS = 0;

-- Insertion dans la table Client
-- TRUNCATE TABLE Client;
INSERT INTO Client (NomClient) VALUE
('Antoine Després'),
('Xing Chen'),
('Laurie Bral'),
('Mélanie Dang')
;

-- TRUNCATE TABLE Garage;
-- Insertion dans la table garage
INSERT INTO Garage (Adresse) VALUE
('106 rue des 2 Boules'),
('7 rue des Boulets'),
('14 rue Gros'),
('8 rue des Femmes')
;

-- TRUNCATE TABLE Logement;
-- Insertion dans la table logement
INSERT INTO Logement (Adresse, DescriptionLogement, NomProprietaire, IdType, NombrePieces, Superficie, IdEtat, PrixMiseEnVente, DateDisponibilite, CodePostal, Ville) VALUES
('9 rue du Chat qui Pêche', 'Charmant appartement dans une ruelle parisienne', 'Charles Potté', 'appartement', 
2, 36.4, 'bon', 350000.00, '2022-06-24', '75005', 'Paris'),
('25 rue Brisemiche', 'Belle maison dans un village au nom atypique mais bien réel', 'Jean Miche', 'maison', 
4, 125.0, 'tres_bon', 400000.000, '2022-09-01', '46800', 'Montcuq'),
('50 rue de la Roquette', 'Appartement à rénover du sol au plafond dans un quartier huppé', 'Franklin Tortue', 'appartement', 
1, 18.7, 'mauvais', 250000.00, '2023-01-01', '78000', 'Versailles'),
('60 rue de la Grande Truanderie', 'Grande maison en plein centre de Paris', 'Jack Truant', 'maison', 
6, 250, 'bon', 850000.00, '2022-06-24', '75001', 'Paris')
;

-- TRUNCATE TABLE Transaction;
-- Insertion dans la table transaction
INSERT INTO Transaction (PrixVente, PourcentageCommission, IdClient, IdLogement) VALUES
(332000.00, 4.2,1,3),
(400000.00, 3.1,2,4),
(248000.00, 5.0,3,1),
(850000.00, 3.8,4,2)
;

-- TRUNCATE TABLE Visite;
-- Insertion dans la table visite
INSERT INTO Visite (IdLogement, DateHeureVisite, IdClient) VALUES
(1,'2022-11-29 14:15:00',4),
(2,'2022-10-11 10:30:00',2),
(3,'2022-08-05 15:50:00',1),
(4,'2022-05-29 09:30:00',3)
;

-- TRUNCATE TABLE Posseder;
INSERT INTO Posseder(IdLogement, IdGarage) VALUES
(1,2),
(2,3),
(3,4),
(4,1)
;

-- TRUNCATE TABLE Utilisateur;

SET FOREIGN_KEY_CHECKS = 1;