const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const cheer = {
	SONGDO: 'HIGHSCHOOL',
	CODE: 'MASTER',
	2023: '0611',
	ALGORITHM: 'CONTEST',
};
console.log(cheer[input]);