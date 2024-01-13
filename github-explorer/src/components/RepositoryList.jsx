import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss'

// const repository = {
// 	name: 'unform',
// 	description: 'Forms in React',
// 	link: 'https://github.com/unform/unform'
// }

export function RepositoryList(){

	const [repositories, setRepositories] = useState([]);
	
	useEffect(() => {
		fetch('https://api.github.com/users/AjJordy/repos')
			.then(response => response.json())
			.then(data => setRepositories(data));
	}, []);
	// Se [], a função de callback será executada uma única vez
	// Se [repositories], será executado toda vez que repositories for modificada	
	// Sem o segundo parâmetro, a função entra em loop

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				{repositories.map(repository => {
					return <RepositoryItem key={repository.name} repository={repository} />
				})}				
			</ul>
		</section>
	)
}