import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
	const [type, setType] = useState('deposit');
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState('');

	function handleCreatNewTransaction(event: FormEvent) {
		event.preventDefault();
		const data = {
			title,
			value,
			category,
			type,
		};	

		api.post('/transactions', data);
	}


	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button 
				type='button' 
				onClick={onRequestClose} 
				className='react-modal-close'
			>
				<img src={closeImage} alt="Fechar modal" />
			</button>
			<Container onSubmit={handleCreatNewTransaction}>
				<h2>Cadastrar transação</h2>
				<input 
					placeholder='Titulo' 
					onChange={event => setTitle(event.target.value)}
				/>
				<input 
					placeholder='Valor' 
					onChange={event => setValue(Number(event.target.value))} 
					type='number' 
				/>
				<TransactionTypeContainer>
					<RadioBox 
						isActive={type === 'deposit'} 
						type='button' 
						onClick={() => setType('deposit')}
						activeColor='green'
					>
						<img src={incomeImage} alt="Entrada"/>
						<span>Entrada</span>
					</RadioBox>
					<RadioBox 						
						type='button' 
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'} 
						activeColor='red'
					>
						<img src={outcomeImage} alt="Saída"/>
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>
				<input 
					placeholder='Categoria'
					onChange={event => setCategory(event.target.value)}
				/>
				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	)

}