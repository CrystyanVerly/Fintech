import React from 'react';
import { useData } from '../Context/DataContext';

const btnStyle: React.CSSProperties = {
	padding: 'var(--gap) var(--gap-s)',
	backgroundColor: 'var(--color-3)',
	border: 'none',
	borderRadius: 'var(--gap)',
	color: 'var(--color-2)',
	fontWeight: '600',
	textTransform: 'capitalize',
};

function monthName(n: number) {
	const date = new Date();
	const month = date.setMonth(date.getMonth() + n);

	const name = new Intl.DateTimeFormat('pt-BR', {
		month: 'long',
	}).format(month);

	return name;
}

function formatDate(date: Date) {
	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const yyyy = date.getFullYear();

	return `${yyyy}-${mm}-${dd}`;
}

const BtnMonth = ({ n }: { n: number }) => {
	const { setInicio, setFinal } = useData();

	function setMonth(n: number) {
		const date = new Date();
		const month = date.setMonth(date.getMonth() + n);

		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lasttDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		setInicio(formatDate(firstDay));
		setFinal(formatDate(lasttDay));
	}
	return (
		<button style={btnStyle} onClick={() => setMonth(n)}>
			{monthName(n)}
		</button>
	);
};

export default BtnMonth;
