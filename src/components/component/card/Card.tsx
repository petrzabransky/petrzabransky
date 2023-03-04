import "./Card.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	title: string;
}

const Card = ({ children, title }: Props) => {
	return (
		<article className="card">
			<div className="card__body">
				<h4 className="card__title">{title}</h4>
				<ul className="card__list">
					{children}
				</ul>
			</div>
		</article>
	)
}

export default Card;