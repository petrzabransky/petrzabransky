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

				<p>+420 736 643 377</p>
				<p className="mb-2">info@petrzabransky.cz</p>

				<p>www.petrzabransky.cz</p>
				<p className="mb-2">www.github.com/petrzabransky</p>

				<p className="mb-2">IČ, HPP, DPP</p>
				<p>Frýdek-Místek, CZ</p>

			</Container>
		</Section>
	)
}

export default Contact;
