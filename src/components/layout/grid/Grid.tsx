import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	col?: string,	// Variant of columns 
	gap?: number,	// Grid Gap (PX)
	margin?: number,	// Bottom Magin under of Grid (REM)
}

const Grid = ({ children, col, gap = 32, margin = 3 }: Props) => {
	let style;

	// Style for grid
	style = {
		gridGap: gap,
		marginBottom: margin + "rem",
	};

	return (
		<div className={"grid grid--" + col} style={style}>
			{children}
		</div >
	)
}

export default Grid;