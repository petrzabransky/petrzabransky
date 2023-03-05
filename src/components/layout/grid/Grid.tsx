import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	col?: number,	// Number of columns
	min?: number	// Min width of 1 column (PX)
	gap?: number,	// Grid Gap (PX)
	margin?: number,	// Bottom Magin under of Grid (REM)

	// Old parameters
	column?: string,
	gridRowGap?: number,
	marginBottom?: number
}

const Grid = ({ children, col = 1, gap = 32, margin = 3 }: Props) => {

	let style;
	let cont = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container'));
	// Count min width of column when we know only number of columns
	let colMinWidth = (cont - ((col - 1) * gap)) / col;

	// Style for grid
	style = {
		gridTemplateColumns: "repeat(auto-fit, minmax(" + colMinWidth + "px, 1fr)",
		gridGap: gap,
		marginBottom: margin + "rem"
	}

	return (
		<div className={"grid"} style={style}>
			{children}
		</div >
	)
}

export default Grid;