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
				<p><a className="link" href="+420736643377">+420 736 643 377</a></p>
				<p className="mb-2"><a className="link" href="mailto:info@petrzabransky.cz">info@petrzabransky.cz</a></p>

				<p><a className="link" href="https://www.petrzabransky.cz">www.petrzabransky.cz</a></p>
				<p className="mb-2"><a className="link" href="https://www.github.com/petrzabransky">wwww.github.com/petrzabransky</a></p>

				<p className="mb-2">IČ, HPP, DPP</p>
				<p>Frýdek-Místek, CZ</p>
			</Container>
		</Section>
	)
}

export default Contact;
