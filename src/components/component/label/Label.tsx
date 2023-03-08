import "./Label.scss";

interface Props {
	text: string
}

const Label = ({ text }: Props) => {
	return (
		<article className="label">
			<h3 className="label__text">#{text}</h3>
		</article>
	)
}
export default Label;