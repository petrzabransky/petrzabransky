import "./Technology.scss";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";

interface Props {
	id: string;
}

const Technology = ({ id }: Props) => {
	return (
		<section className="technology section" id={id}>
			<Container>
				<h2 className="heading heading--header text-center">Technologie</h2>
				<Grid type="4">
					<span className="hashtag hashtag--big">html</span>
					<span className="hashtag hashtag--big">css</span>
					<span className="hashtag hashtag--big">javascript</span>
					<span className="hashtag hashtag--big">react</span>
					<span className="hashtag hashtag--big">typescript</span>
					<span className="hashtag hashtag--big">oop a moduly</span>
					<span className="hashtag hashtag--big">ajax</span>
					<span className="hashtag hashtag--big">git</span>
					<span className="hashtag hashtag--big">sass</span>
					<span className="hashtag hashtag--big">bem</span>
					<span className="hashtag hashtag--big">gulp</span>
					<span className="hashtag hashtag--big">webpack</span>
				</Grid>

				<p>
					Úvádím technologie, které běžně používám, chápu a zvládám. Pro posouzení konkrétního rozsahu znalostí a způsobu použití můžete využít můj
					<a href="https://www.github.com/petrzabransky" target="_blank"> github.</a> Jakoukoli jinou technologii, kterou vyžívá Vaše firma, se rád a rychle doučím.
				</p>
			</Container>
		</section>
	)
}

export default Technology;
