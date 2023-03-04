import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	type?: string;
}

const Grid = ({ children, type }: Props) => {

	let style;

	if (type) { // if type of grid didn't select
		style = "grid grid--" + { type };
	}
	else style = "grid grid--3"; // class grid--3 mean 3 columns grid 

	return (
		<div className={style} >
			{children}
		</div >
	)
}

export default Grid;