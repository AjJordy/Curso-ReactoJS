import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Conteiner } from "./styles";


export function Dashboard(){
	return (
		<Conteiner>
			<Summary />
			<TransactionsTable />
		</Conteiner>
	);
}