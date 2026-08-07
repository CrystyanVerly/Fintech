import React from 'react';
import useFetch from '../Hooks/useFetch';

type IVendas = {
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
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
	const context = React.useContext(DataContext);
	if (!context) throw new Error('useData precisa estar em DataContextProvider');
	return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
	const URL_API = `https://data.origamid.dev/vendas/`;
	const { data, loading, error } = useFetch<IVendas[]>(URL_API);

	return (
		<DataContext.Provider value={{ data, loading, error }}>
			{children}
		</DataContext.Provider>
	);
};
