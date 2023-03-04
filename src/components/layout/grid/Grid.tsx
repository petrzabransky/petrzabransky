import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	column?: string,
	gapRowZero?: boolean
}

const Grid = ({ children, column, gapRowZero }: Props) => {

	let style: string;

	if (column) {
		style = "grid grid--" + column;
	}
	else style = "grid grid--3"; // Select 3 columns grid if number of columns is not specified

	if (gapRowZero) style += " gap-row-0"

	return (
		<div className={style} >
			{children}
		</div >
	)
}

export default Grid;