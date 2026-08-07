import React, { use } from 'react';
import { useData } from '../Context/DataContext';

const Header = () => {
	const { data } = useData();

	return <div>Header</div>;
};

export default Header;
