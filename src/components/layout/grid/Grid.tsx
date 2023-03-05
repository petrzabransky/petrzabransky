import "./Grid.scss";

interface Props {
	children: JSX.Element | JSX.Element[],
	column?: string,
	gap?: number,
	margin?: number,
	gridRowGap?: number,
	marginBottom?: number
}

const Grid = ({ children, column, gap, margin }: Props) => {

	let style;
	let columnMinWidth = (1440 - (2 * 32)) / 3;

	style = { background: "pink", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)" };
	console.log(style);
	return (
		<div className={"grid"} style={style}>
			{children}
		</div >
	)
}

Grid.defaultProps = {

}

export default Grid;