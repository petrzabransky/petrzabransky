import "./CardReference.scss";

interface Props {
	id?: number,
	title?: string,
	technology?: string,
	description?: string,
	image?: string,
	website?: string,
	url?: string,
	github?: string
}

const CardReference = ({ id, title, technology, description, website, url, image, github }: Props) => {
	return (
		<article>
			<figure className="card-reference__figure">
				<a href={url} target="_blank">
					<img className="card-reference__img" src={image} alt={title} />
				</a>
			</figure>
			<h3 className="card-reference__title">{title}</h3>
			<p className="card-reference__technology">{technology}</p>
			<p className="card-reference__text">{description}</p>
			<p><a className="card-reference__text link" href={url} target="_blank" rel="noreferrer" aria-label="Otevření ukázkového webu">{website}</a></p>
			<p><a className="card-reference__text link" href={github} target="_blank" rel="noreferrer" aria-label="Otevření ukázkového webu">{github ? "GitHub" : ""}</a></p>
		</article>
	)
}

export default CardReference;