import "./Reference.scss";
import fraktaly from "../../../assets/images/reference/fraktaly.jpg";
import marelen from "../../../assets/images/reference/marelen.jpg";
import truhlarstvi from "../../../assets/images/reference/truhlarstvi-js.jpg";
import jkm from "../../../assets/images/reference/jkm-family.jpg";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";

interface Props {
	id: string;
}

const Reference = ({ id }: Props) => {
	return (
		<Section otherStyle="reference" id={id}>
			<Container>
				<h2 className="heading heading--header">Reference</h2>
				<Grid>
					<img src={fraktaly} alt="" />
					<div>
						<h3>Fraktály</h3>
						<p>HTML | CSS | TS</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum reprehenderit repellendus nihil est voluptatibus corporis eligendi ex! Praesentium quae ipsum labore odio non ab hic incidunt libero fugit odit?</p>
						<p>www.marelen.cz</p>
						www.github.com/petrzabransky/marelen
					</div>
				</Grid>

				<Grid>
					<article>
						<img src={marelen} alt="" />
						<div>
							<h3>Fraktály</h3>
							<p>HTML | CSS | TS</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum reprehenderit repellendus nihil est voluptatibus corporis eligendi ex! Praesentium quae ipsum labore odio non ab hic incidunt libero fugit odit?</p>
							<p>www.marelen.cz</p>
							www.github.com/petrzabransky/marelen
						</div>
					</article>

					<article>
						<img src={truhlarstvi} alt="" />
						<div>
							<h3>Fraktály</h3>
							<p>HTML | CSS | TS</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum reprehenderit repellendus nihil est voluptatibus corporis eligendi ex! Praesentium quae ipsum labore odio non ab hic incidunt libero fugit odit?</p>
							<p>www.marelen.cz</p>
							www.github.com/petrzabransky/marelen
						</div>
					</article>

					<article>
						<img src={jkm} alt="" />
						<div>
							<h3>Fraktály</h3>
							<p>HTML | CSS | TS</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum reprehenderit repellendus nihil est voluptatibus corporis eligendi ex! Praesentium quae ipsum labore odio non ab hic incidunt libero fugit odit?</p>
							<p>www.marelen.cz</p>
							www.github.com/petrzabransky/marelen
						</div>
					</article>
				</Grid>
			</Container>
		</Section>
	)
}

export default Reference;
