import { Input } from '@/components/form';

export default function FilterForm() {
	return (
		<div>
			<p>Filtres</p> <button>Sauvegarder</button>
			<br /> <br />
			<label htmlFor="site-search">Search in the website:</label>
			<input type="search" id="site-search" name="q" />
			<br />
			<br />
			<form>
				<p>Type</p>
				<input type="checkbox" id="appartement" name="appartement" />
				<label htmlFor="appartement">Appartement</label>
				<input type="checkbox" id="maison" name="maison" />
				<label htmlFor="maison">Maison</label>
				<br /> <br />
				<label htmlFor="nbrPiece">Nombre de pièce</label>
				<input type="number" id="nbrPiece" name="nbrPiece" />
				<Input label="superficieHabitable" type="number" name="surface" />
				<p> L'Etat</p>
				<select>
					<option value="neuf">Neuf</option>
					<option value="tresBon">Très bon</option>
					<option value="bon">Bon</option>
					<option value="mauvais">Mauvais</option>
				</select>
				<br /> <br />
				<label htmlFor="ville">Ville</label> <br />
				<input type="text" id="ville" name="ville" />
				<br /> <br />
				<label htmlFor="dateDispo">Date de disponibilité</label> <br />
				<input type="date" id="dateDispo" name="dateDispo" />
				<br />
				<br />
				<label htmlFor="garage">Garage</label> <br />
				<input type="number" id="garage" name="garage" />
				<br />
				<br />
				<label htmlFor="prix">Prix</label> <br />
				<input type="number" id="prix1" name="prix" />
				<input type="number" id="prix2" name="prix" />
			</form>
		</div>
	);
}
