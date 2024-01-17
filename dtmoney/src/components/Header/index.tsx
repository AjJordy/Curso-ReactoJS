import logoImg from '../../assets/logo.svg'
import { Conteiner, Content } from './styles'

export function Header(){
	return (
		<Conteiner>
			<Content>
				<img src={logoImg} alt="dt money" />
				<button type="button">
					Nova transação
				</button>
			</Content>			
		</Conteiner>
	)
}