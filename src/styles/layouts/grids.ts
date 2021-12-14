import styled from 'styled-components';

const GUTTER = 20;

const SM_COMUMNS = 4;
const SM_MARGIN = 5;

export const MD_BREAKPOINT = 768;
const MD_COLUMNS = 12;
const MD_MARGIN = 30;
const MD_MAX_CONTAINER = 960 + MD_MARGIN * 2;

export const LG_BREAKPOINT = 1200;
const LG_COLUMNS = 12;
const LG_UNIT = 75;
const LG_MAX_CONTAINER = (LG_UNIT + GUTTER) * LG_COLUMNS;

const GRID_MARGIN = 15;

type IColProps = {
	sm?: string;
	md?: string;
	lg?: string;
};

function getWidthStringSM(span: string) {
	let width = (Number(span) / SM_COMUMNS) * 100;
	return `${width}%`;
}

function getWidthString(span: string) {
	let width = (Number(span) / MD_COLUMNS) * 100;
	return `${width}%`;
}

export function numToPX(num: number) {
	return num + 'px';
}

export const Container = styled.div`
	width: 100%;
	padding: 0 ${numToPX(SM_MARGIN)};
	margin: 0 auto;

	@media screen and (min-width: ${numToPX(MD_BREAKPOINT)}) {
		padding: 0 ${numToPX(MD_MARGIN)};
		max-width: ${numToPX(MD_MAX_CONTAINER)};
	}

	@media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
		padding: 0;
		max-width: ${numToPX(LG_MAX_CONTAINER)};
	}
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Col = styled.div<IColProps>`
	width: ${({ sm }) => (sm ? getWidthStringSM(sm) : '100%')};
	padding: 0 ${numToPX(GUTTER / 2)};

	@media screen and (min-width: ${numToPX(MD_BREAKPOINT)}) {
		width: ${({ md }) => (md ? getWidthString(md) : '100%')};
	}

	@media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
		width: ${({ lg }) => (lg ? getWidthString(lg) : '100%')};
	}
`;
