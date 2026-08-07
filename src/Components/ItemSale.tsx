import React from 'react';
import type { IVendas } from '../Context/DataContext';

const ItemSale = ({ sale }: { sale: IVendas }) => {
	return (
		<div className="venda box">
			<a style={{ fontFamily: 'monospace' }} href="">
				{sale.id}
			</a>
			<div>{sale.nome}</div>
			<div>
				{sale.preco.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
		</div>
	);
};

export default ItemSale;
