import "./Reference.scss";
import fraktaly from "../../../assets/images/reference/fraktaly.jpg";
import marelen from "../../../assets/images/reference/marelen.jpg";
import truhlarstvi from "../../../assets/images/reference/truhlarstvi-js.jpg";
import jkm from "../../../assets/images/reference/jkm-family.jpg";

const Reference = () => {
	return (
		<section id="#reference">
			<div className="container">
				<h2 className="heading heading--header">Reference</h2>
				<div className="grid grid--2 mb-5">
					<img src={fraktaly} alt="" />
					<div>
						<h3>Fraktály</h3>
						<p>HTML | CSS | TS</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum reprehenderit repellendus nihil est voluptatibus corporis eligendi ex! Praesentium quae ipsum labore odio non ab hic incidunt libero fugit odit?</p>
						<p>www.marelen.cz</p>
						www.github.com/petrzabransky/marelen
					</div>
				</div>

				<div className="grid grid--3">
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
				</div>
			</div>
		</section>
	)
}

export default Reference;
