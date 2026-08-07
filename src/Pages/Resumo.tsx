import React from 'react';
import { useData } from '../Context/DataContext';

const Resumo = () => {
	const { data, loading, error } = useData();

	if (!data) return null;
	if (loading) return <p>carregando...</p>;
	if (error) throw new Error();

	return (
		<section>
			<div className="resumo flex mb">
				<div className="box">
					<h2>Vendas</h2>
					<span>
						{data
							.filter((d) => d.status !== 'falha')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', {
								style: 'currency',
								currency: 'BRL',
							})}
					</span>
				</div>
				<div className="box">
					<h2>Recebido</h2>
					<span>
						{data
							.filter((d) => d.status === 'pago')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', {
								style: 'currency',
								currency: 'BRL',
							})}
					</span>
				</div>
				<div className="box">
					<h2>Processando</h2>
					<span>
						{data
							.filter((d) => d.status === 'processando')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', {
								style: 'currency',
								currency: 'BRL',
							})}
					</span>
				</div>
			</div>

			<div className="box mb">Grafico</div>
		</section>
	);
};

export default Resumo;
