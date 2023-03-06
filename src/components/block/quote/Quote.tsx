import "./Quote.scss";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";

const Quote = () => {
	return (
		<Section otherStyle="quote">
			<Container>
				<h2 className="quote__text">Nejlepší cestou ke štěstí a úspěchu je práce, která je zároveň zábavou</h2>
			</Container>
		</Section>
	)
}

export default Quote;
