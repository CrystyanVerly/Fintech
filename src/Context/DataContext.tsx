import React from 'react';
import useFetch from '../Hooks/useFetch';

export type IVendas = {
	id: string;
	nome: string;
	preco: number;
	status: 'pago' | 'processando' | 'falha';
	pagamento: 'boleto' | 'pix' | 'cartao';
	parcelas: number | null;
	data: string;
};

type IDataContext = {
	data: IVendas[] | null;
	loading: boolean;
	error: Error | null;
	inicio: string;
	setInicio: React.Dispatch<React.SetStateAction<string>>;
	final: string;
	setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
	const context = React.useContext(DataContext);
	if (!context) throw new Error('useData precisa estar em DataContextProvider');
	return context;
};

function getNDaysAgo(n: number) {
	const date = new Date();
	date.setDate(date.getDate() - n);
	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const yyyy = date.getFullYear();

	return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
	const [inicio, setInicio] = React.useState(getNDaysAgo(30));
	const [final, setFinal] = React.useState(getNDaysAgo(0));

	const URL_API = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`;
	const { data, loading, error } = useFetch<IVendas[]>(URL_API);

	return (
		<DataContext.Provider
			value={{ data, loading, error, inicio, setInicio, final, setFinal }}
		>
			{children}
		</DataContext.Provider>
	);
};
