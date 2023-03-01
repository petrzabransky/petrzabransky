import "../../../styles/container.scss";
import "../../../styles/grid.scss";
import "./Technology.scss";

const Technology = () => {
	return (
		<section className="technology" id="#technology">
			<div className="container">
				<h2 className="heading heading--header">Technologie</h2>
				<div className="grid grid--4">
					<span className="hashtag hashtag--big">html</span>
					<span className="hashtag hashtag--big">typescript</span>
					<span className="hashtag hashtag--big">git</span>
					<span className="hashtag hashtag--big">gulp</span>

					<span className="hashtag hashtag--big">css</span>
					<span className="hashtag hashtag--big">oop a moduly</span>
					<span className="hashtag hashtag--big">sass</span>
					<span className="hashtag hashtag--big">webpack</span>

					<span className="hashtag hashtag--big">javascript</span>
					<span className="hashtag hashtag--big">ajax</span>
					<span className="hashtag hashtag--big">bem</span>
				</div>
			</div>
		</section>
	)
}

export default Technology;
