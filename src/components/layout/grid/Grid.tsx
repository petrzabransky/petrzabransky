import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	column?: string,
	gridRowGap?: number,
	marginBottom?: number
}

const Grid = ({ children, column, gridRowGap, marginBottom }: Props) => {

	let style: string;
	let otherStyle;

	if (column) {
		style = "grid grid--" + column;
	}
	else style = "grid grid--3"; // Select 3 columns grid if number of columns is not specified

	otherStyle = { gridRowGap: gridRowGap + "rem", marginBottom: marginBottom + "rem" };

	return (
		<div className={style} style={otherStyle}>
			{children}
		</div >
	)
}

export default Grid;