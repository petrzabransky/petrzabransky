import "./Section.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	sub?: boolean,
	id?: string,
	otherStyle?: string;
}

const Section = ({ children, sub, id, otherStyle }: Props) => {

	let style: string;
	let idName: string;

	if (sub) style = "subsection";
	else style = "section";

	if (otherStyle) style = style + " " + otherStyle;

	if (id) idName = id;
	else idName = "";

	return (
		<section className={style} id={idName}>
			{children}
		</section>
	)
}

export default Section;