


var sum = process.argv
			.slice(2)
			.map((s, i, a) => Number(s))
			.reduce((a, b) => a+b);


// var sum = 0;
// for (var i = process.argv.length - 1; i >= 2; i--) 
// {
// 	sum += Number(process.argv[i]);
// }

console.log(sum);