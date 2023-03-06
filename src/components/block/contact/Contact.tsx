import "./Contact.scss";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";
import "../../../styles/utility.scss";

interface Props {
	id: string;
}

const Contact = ({ id }: Props) => {
	return (
		<Section otherStyle="contact" id={id}>
			<Container>
				<h2 className="heading heading--header">Kontakt</h2>

				<p>Mobil: +420 736 643 377</p>
				<p className="mb-2">Email: info@petrzabransky.cz</p>

				<p>Email: info@petrzabransky.cz</p>
				<p>Web: www.petrzabransky.cz</p>
				<p className="mb-2">GitHub: www.github.com/petrzabransky</p>

				<p>Bydliště: Palkovice, okr. Frýdek-Místek, CZ</p>
				<p className="mb-2">Spolupráce: IČ, HPP, DPP</p>

			</Container>
		</Section>
	)
}

export default Contact;
