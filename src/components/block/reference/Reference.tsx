import "./Reference.scss";
import fraktaly from "../../../assets/images/reference/fraktaly.jpg";
import marelen from "../../../assets/images/reference/marelen.jpg";
import truhlarstvi from "../../../assets/images/reference/truhlarstvi-js.jpg";
import jkm from "../../../assets/images/reference/jkm-family.jpg";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";
import CardReference from "../../component/card/CardReference";
import dataReference from "../../../data/dataReference";
import { useState } from "react";

interface Props {
	id: string;
}

const Reference = ({ id }: Props) => {
	const [data, setData] = useState(dataReference);

	return (
		<Section otherStyle="reference" id={id}>
			<Container>
				<h2 className="heading heading--header">Reference</h2>
				<Grid col={"4"} gap={64}>
					{
						data.map((one, index) => {
							return (
								<CardReference
									key={index}
									title={one.title}
									description={one.description}
									technology={one.technology}
									image={one.image}
									website={one.website}
									url={one.url}
									github={one.github} />
							)
						})
					}
				</Grid>
			</Container>
		</Section>
	)
}

export default Reference;
