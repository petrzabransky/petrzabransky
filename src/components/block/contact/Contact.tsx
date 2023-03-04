import "./Contact.scss";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";

interface Props {
	id: string;
}

const Contact = ({ id }: Props) => {
	return (
		<section className="contact" id={id} >
			<section>
				<Container>
					<h2 className="heading heading--header">Contact</h2>
					<Grid type="1vs3">
						<p>Mobil</p>
						<p>+420 736 643 377</p>
						<p>Email</p>
						<p>info@petrzabransky.cz</p>
					</Grid>

					<Grid type="1vs3">
						<p>Email</p>
						<p>info@petrzabransky.cz</p>
						<p>Web</p>
						<p>www.petrzabransky.cz</p>
						<p>GitHub</p>
						<p>www.github.com/petrzabransky</p>
					</Grid>

					<Grid type="1vs3">
						<p>Bydliště</p>
						<p>Palkovice, okr. Frýdek-Místek, Moravskoslezský kraj, CZ</p>
					</Grid>

					<Grid type="1vs3">
						<p>Spolupráce</p>
						<p>IČ, HPP, DPP, Remote, HO i denně ve firmě</p>
					</Grid>
				</Container>
			</section>
		</section>
	)
}

export default Contact;
