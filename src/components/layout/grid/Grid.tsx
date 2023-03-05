import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	col?: number,
	min?: number
	gap?: number,
	margin?: number,
	// Old parameters
	column?: string,
	gridRowGap?: number,
	marginBottom?: number
}

const Grid = ({ children, col = 1, gap = 32, margin = 3 }: Props) => {

	let style;
	let colMinWidth = (1140 - ((col - 1) * gap)) / col;

	style = {
		background: "pink",
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