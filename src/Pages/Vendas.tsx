import { useData } from '../Context/DataContext';
import ItemVenda from '../Components/ItemVenda';

const Vendas = () => {
	const { data } = useData();
	if (!data) return null;
	return (
		<ul>
			{data.map((venda) => (
				<li key={venda.id}>
					<ItemVenda venda={venda} />
				</li>
			))}
		</ul>
	);
};

export default Vendas;
