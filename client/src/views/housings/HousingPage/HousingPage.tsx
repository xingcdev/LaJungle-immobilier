import styles from './HousingPage.module.scss';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import VisitList from '../VisitList/VisitList';

export default function HousingPage() {
	const housingPhoto =
		'https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170';

	return (
		<section className={''}>
			<section className={styles.hero}>
				<img src={housingPhoto} alt="housing" />
			</section>
			<section className={styles.content}>
				<section className={styles.housingContent}>
					<section className={styles.info}>
						<p className={styles.address}>30-32 avenue de la République</p>
						<p className={styles.postalCode}>
							94 800 <span className={styles.city}>Villejuif</span>
						</p>
						<p className={styles.price}>
							Prix : <span className={styles.priceValue}>10 000</span>
							<span className={styles.priceDevise}> €</span>
						</p>
						{}
						<p className={styles.type}>
							Type: <span className={styles.typeValue}>appartement</span>
						</p>
						<p className={styles.condition}>
							État : <span className={styles.conditionValue}>très bon</span>
						</p>
					</section>
					<section className={styles.description}>
						<h2 className={styles.descriptionTitle}>Description</h2>
						<p className={styles.descriptionContent}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
							nemo quidem consequatur quas! Mollitia amet tempore commodi
							nostrum assumenda harum nihil odio, alias aspernatur expedita
							itaque dolorem accusantium ad sit. Saepe error perferendis
							temporibus deserunt delectus! Eaque labore asperiores tempore
							natus sunt est consequuntur voluptatibus animi, odit iste fugit.
							Provident eius, sit dolorem sapiente ipsa aperiam dolores ducimus
							inventore dolorum. Rerum corporis praesentium fuga animi sed ipsa
							impedit provident ullam vitae obcaecati nulla velit, culpa ipsum
							dolorem nemo maiores fugit consectetur eveniet quae veniam non!
							Rerum culpa magnam amet id. Sint blanditiis provident aliquam quod
							ducimus maiores accusantium. Consectetur esse, officia maiores a
							aliquam dolor, aperiam animi tempore vero, nam error ullam itaque
							modi cumque molestiae corrupti nemo veritatis impedit? Praesentium
							tempore corporis laborum animi hic! Architecto minus laudantium
							exercitationem autem, odit illo, omnis natus reiciendis laboriosam
							nisi sunt est suscipit, sed animi ex? Esse odio voluptatem autem
							voluptas repellendus? Accusantium magnam eos enim consequatur.
							Maiores ut laborum rerum ea optio similique adipisci inventore
							error culpa, ullam fuga accusamus non, unde commodi, ipsam nam
							ipsum id exercitationem architecto placeat iure! Voluptatum
							cupiditate atque iusto aspernatur maiores ipsa? Deserunt quo
							cupiditate nam. Quisquam dignissimos, nemo magni quaerat pariatur
							voluptate, delectus cupiditate alias, dicta mollitia tempora
							perferendis eligendi cumque dolor id ipsa! Magni, sunt sapiente
							rerum quisquam at ex sint est quod maxime expedita consectetur,
							corrupti temporibus voluptatem molestias doloremque alias, ullam
							pariatur deserunt quasi non fugiat harum nemo aperiam voluptas!
							Repellat? In consequatur nisi dolorum. Praesentium voluptatibus
							vero enim, consectetur quibusdam voluptas illo illum dicta vitae
							corporis, tempore veritatis! Possimus alias veniam, tenetur nisi
							culpa neque velit laborum nulla quaerat quo. Illum iste impedit
							odit provident, et quibusdam magnam quam officiis ab. Ipsam
							temporibus dicta voluptatum sint pariatur repellendus, animi optio
							voluptates eos est nihil mollitia nam fugit, maiores laborum et!
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
							optio est obcaecati dicta! Quas, architecto fuga fugiat iure
							aliquam at deserunt! Culpa, fuga? Laborum sequi culpa, accusamus
							necessitatibus debitis porro. Quibusdam commodi mollitia dolores
							tenetur iure? Velit, placeat optio. Eveniet quasi molestiae alias
							ut natus. Expedita nesciunt, libero, cupiditate modi dolorem
							tempore officiis facilis mollitia debitis eligendi illum incidunt
							aut. Delectus a, voluptatem amet perspiciatis blanditiis
							repellendus repellat in dignissimos libero et nisi? Deleniti, quo
							tenetur debitis fugiat quasi accusamus temporibus et magni
							inventore delectus fugit ipsa perspiciatis voluptatum odit!
							Quisquam est velit inventore obcaecati dolor quos eos alias
							reprehenderit. Minus iste blanditiis ducimus ut ex voluptatibus
							magni, vel suscipit maiores earum eveniet at ab quod alias vero
							nihil illo. Iusto architecto eum deserunt exercitationem amet
							veritatis eligendi! Deserunt exercitationem maxime nobis molestias
							voluptates alias tempore praesentium, non commodi porro, iure
							fuga, modi nihil. Fugiat dolorum esse perferendis maxime maiores?
							Quas in accusantium ut illum nisi nostrum nihil! Provident
							delectus, voluptatum iusto explicabo id odio minus mollitia eum
							commodi nemo repudiandae quo quos rem voluptatem aspernatur
							perspiciatis. Eius, rerum animi. Dignissimos, facere cum possimus
							ipsam dolorum tenetur nostrum minus itaque error perspiciatis
							rerum voluptatem consequatur mollitia nisi ullam minima provident
							nihil esse quisquam dolorem illo corrupti earum quod! Delectus,
							quo. Accusamus velit dicta maxime! Sequi consequatur qui
							cupiditate, laboriosam saepe soluta quo molestiae debitis!
							Reprehenderit odio esse sequi deserunt tempore quo architecto
							tenetur totam, animi qui placeat. Debitis, porro ratione. Impedit,
							quidem tenetur fugiat, voluptatum doloribus eaque adipisci sint
							id, deleniti omnis laboriosam! Officia dignissimos error ab fuga
							nobis deleniti qui tempore ipsam ex, numquam, minima fugiat vitae.
							Aliquid, cumque. Nam quam totam debitis! Eveniet suscipit,
							corporis adipisci sequi officiis nostrum culpa cumque minima alias
							odit magnam tenetur soluta tempora quas consequuntur nesciunt
							expedita, placeat porro commodi. Cupiditate, fuga voluptas.
						</p>
					</section>
					<VisitList visits={{}} />
				</section>

				<OwnerProfile />
			</section>
		</section>
	);
}
