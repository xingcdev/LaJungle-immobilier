SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS Logement;
CREATE TABLE Logement(
   IdLogement INT NOT NULL AUTO_INCREMENT,
   Adresse VARCHAR(50),
   DescriptionLogement TEXT,
   NomProprietaire VARCHAR(50),
   IdType VARCHAR(11),
   NombrePieces INT,
   Superficie DECIMAL(7,2),
   IdEtat VARCHAR(8),
   PrixMiseEnVente float(10,2),
   DateDisponibilite DATE,
   CodePostal VARCHAR(5),
   Ville VARCHAR(50),
   PRIMARY KEY(IdLogement)
);

DROP TABLE IF EXISTS Garage;
CREATE TABLE Garage(
   IdGarage INT NOT NULL AUTO_INCREMENT,
   Adresse VARCHAR(50),
   IdLogement INT,
   PRIMARY KEY(IdGarage)
);

DROP TABLE IF EXISTS Client;
CREATE TABLE Client(
   IdClient INT NOT NULL AUTO_INCREMENT,
   NomClient VARCHAR(50),
   PRIMARY KEY(IdClient)
);

DROP TABLE IF EXISTS Visite;
CREATE TABLE Visite(
   IdVisite INT NOT NULL AUTO_INCREMENT,
   DateHeureVisite DATETIME,
   IdLogement INT NOT NULL,
   IdClient INT NOT NULL,
   PRIMARY KEY(IdVisite),
   FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
   FOREIGN KEY(IdClient) REFERENCES Client(IdClient) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Transaction;
CREATE TABLE Transaction(
   IdTransaction INT NOT NULL AUTO_INCREMENT,
   PrixVente float(10,2),
   PourcentageCommission DECIMAL(3,2) NOT NULL CHECK (PourcentageCommission>=3 AND PourcentageCommission <=5),
   IdLogement INT NOT NULL,
   IdClient INT NOT NULL,
   PRIMARY KEY(IdTransaction),
   FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
   FOREIGN KEY(IdClient) REFERENCES Client(IdClient) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Posseder;
CREATE TABLE Posseder(
   IdLogement INT NOT NULL,
   IdGarage INT NOT NULL,
   PRIMARY KEY(IdLogement, IdGarage),
   FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
   FOREIGN KEY(IdGarage) REFERENCES Garage(IdGarage) ON DELETE CASCADE
);

DROP TABLE IF EXISTS Utilisateur;
CREATE TABLE Utilisateur(
   NomUtilisateur VARCHAR(50) NOT NULL,
   MotDePasse VARCHAR(50) NOT NULL,
   PRIMARY KEY (NomUtilisateur)  
)