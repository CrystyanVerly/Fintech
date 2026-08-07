import React from 'react';
import './Style.css';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DataContextProvider } from './Context/DataContext';
import Sales from './Pages/Sales';

const App = () => {
	return (
		<DataContextProvider>
			<div className="container">
				<Sidenav />
				<main>
					<Header />
					<Resumo />
					<Sales />
				</main>
			</div>
		</DataContextProvider>
	);
};

export default App;
