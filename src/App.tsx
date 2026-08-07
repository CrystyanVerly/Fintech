import React from 'react';
import './Style.css';
import Resumo from './Pages/Resumo';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import { DataContextProvider } from './Context/DataContext';
import Sales from './Pages/Sales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sale from './Pages/Sale';

const App = () => {
	return (
		<BrowserRouter>
			<DataContextProvider>
				<div className="container">
					<Sidenav />
					<main>
						<Header />
						<Routes>
							<Route path="/" element={<Resumo />} />
							<Route path="/sales" element={<Sales />} />
							<Route path="/sales/:id" element={<Sale />} />
						</Routes>
					</main>
				</div>
			</DataContextProvider>
		</BrowserRouter>
	);
};

export default App;
