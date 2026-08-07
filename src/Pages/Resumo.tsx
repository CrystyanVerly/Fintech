import React from 'react';
import { useData } from '../Context/DataContext';

const Resumo = () => {
	const { data, loading, error } = useData();

	return <div>Resumo</div>;
};

export default Resumo;
