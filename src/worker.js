export function expensive(time)
{
	let start = Date.now();
	let count = 0;

	while(Date.now() - start < time) count++;
	return count;
	
}
