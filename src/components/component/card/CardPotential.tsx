import "./CardPotential.scss";

interface Props {
	title: string,
	list: string[]
}

const CardPotential = ({ title, list }: Props) => {
	return (
		<article className="card">
			<div className="card__body">
				<h3 className="card__title">{title}</h3>
				<ul className="card__list">
					{
						list.map((one, index) => {
							return (
								<li key={index}>#{one}</li>
							)
						})
					}
				</ul>
			</div>
		</article>
	)
}

export default CardPotential;