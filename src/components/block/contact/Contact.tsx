import "../../../styles/container.scss";
import "../../../styles/grid.scss";
import "../../../styles/utility.scss";
import "./Contact.scss";

const Contact = () => {
	return (
		<section id="#contact" className="contact section">
			<section className="subsection">
				<div className="container">
					<h2 className="heading heading--header">Contact</h2>
					<div className="grid grid--small-big grid-gap-0 mb-2">
						<p>Mobil</p>
						<p>+420 736 643 377</p>
						<p>Email</p>
						<p>info@petrzabransky.cz</p>
					</div>

					<div className="grid grid--small-big grid-gap-0 mb-2">
						<p>Email</p>
						<p>info@petrzabransky.cz</p>
						<p>Web</p>
						<p>www.petrzabransky.cz</p>
						<p>GitHub</p>
						<p>www.github.com/petrzabransky</p>
					</div>

					<div className="grid grid--small-big grid-gap-0 mb-2">
						<p>Bydliště</p>
						<p>Palkovice, okr. Frýdek-Místek, Moravskoslezský kraj, CZ</p>

					</div>

					<div className="grid grid--small-big grid-gap-0 mb-2">
						<p>Spolupráce</p>
						<p>IČ, HPP, DPP, Remote, HO i denně ve firmě</p>
					</div>
				</div>
			</section>







		</section>
	)
}

export default Contact;
