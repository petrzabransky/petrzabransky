import "./CardReference.scss";

interface Props {
	id?: number,
	title?: string,
	technology?: string,
	description?: string,
	image?: string,
	website?: string,
	url?: string,
}

const CardReference = ({ id, title, technology, description, website, url, image }: Props) => {
	return (
		<article>
			<figure className="card-reference__figure">
				<img className="card-reference__img" src={image} alt="" />
			</figure>
			<h3 className="card-reference__title">{title}</h3>
			<p className="card-reference__text">{technology}</p>
			<p className="card-reference__text">{description}</p>
			<a className="card-reference__text" href={url}>{website}</a>
		</article>
	)
}

export default CardReference;