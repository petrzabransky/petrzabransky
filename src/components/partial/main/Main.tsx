import "./Main.scss";
import Hero from "../../block/hero/Hero";
import Reference from "../../block/reference/Reference";
import Technology from "../../block/technology/Technology";
import About from "../../block/about/About";
import Contact from "../../block/contact/Contact";

// Section must have ID for smooth scrool
const Main = () => {
	return (
		<main className="main">
			<Hero id={"hero"}></Hero>
			<Reference id={"reference"}></Reference>
			<Technology id={"technology"}></Technology>
			<About id={"about"}></About>
			<Contact id={"contact"}></Contact>
		</main>
	)
}

export default Main;
