import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	column?: string;
}

const Grid = ({ children, column }: Props) => {

	let style: string;

	if (column) {
		style = "grid grid--" + column;
	}
	else style = "grid grid--3"; // Select 3 columns grid if number of columns is not specified

	return (
		<div className={style} >
			{children}
		</div >
	)
}

export default Grid;