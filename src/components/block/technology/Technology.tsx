import "./Technology.scss";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";
import Label from "../../component/label/Label";
import dataTechnology from "../../../data/dataTechnology";

interface Props {
	id: string;
}

const Technology = ({ id }: Props) => {
	return (
		<Section otherStyle="technology" id={id}>
			<Container>
				<h2 className="heading heading--header text-center">Technologie</h2>
				<Grid col={"4"} gap={32}>
					{
						dataTechnology.map((one, index) => {
							return (
								<Label key={index} text={one} />
							)
						})
					}
				</Grid>

				<p>
					Úvádím technologie, které běžně používám, chápu a zvládám. Pro posouzení konkrétního rozsahu znalostí a způsobu použití můžete využít můj
					<a href="https://www.github.com/petrzabransky" className="link" target="_blank" rel="noreferrer" aria-label="Otevřít GitHub Petr Zabransky"> GitHub.</a>
				</p>
			</Container>
		</Section>
	)
}

export default Technology;
