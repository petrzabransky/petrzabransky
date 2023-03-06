import "./Grid.scss";
import { useMediaQuery } from "react-responsive";


interface Props {
	children: JSX.Element | JSX.Element[],
	col?: number[],	// Number of columns
	gap?: number,	// Grid Gap (PX)
	margin?: number,	// Bottom Magin under of Grid (REM)
}

const Grid = ({ children, col = [1, 1, 1], gap = 32, margin = 3 }: Props) => {
	let style;

	// Style for grid
	style = {
		gridGap: gap,
		marginBottom: margin + "rem",
	};

	// Breakpoints
	const breakTablet = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-tablet"));
	const breakDesktop = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-desktop"));

	const isTablet = useMediaQuery({ minWidth: breakTablet });
	const isDesktop = useMediaQuery({ minWidth: 1224 });

	// Set number of columns for grid
	if (isDesktop) Object.assign(style, { gridTemplateColumns: "repeat(" + col[2] + ",1fr)" });
	else if (isTablet) Object.assign(style, { gridTemplateColumns: "repeat(" + col[1] + ",1fr)" });
	else Object.assign(style, { gridTemplateColumns: "repeat(" + col[0] + ",1fr)" });

	return (
		<div className={"grid"} style={style}>
			{children}
		</div >
	)
}

export default Grid;