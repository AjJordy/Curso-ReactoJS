export function Counter(){

	function increment(){
		console.log();
	}

	return(
		<div>
			<h2></h2>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	)
}