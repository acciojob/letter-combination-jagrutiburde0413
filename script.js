function letterCombinations(input_digit) {
  var result=[];
	var alpha={
		'0':'0',
		'1':'1',
		'2':'abc',
		'3':'def',
		'4':'ghi',
		'5':'jkl',
		'6':'mno',
		'7':'pqrs',
		'8':'tuv',
		'9':'wxyz'
	}
	var dfs=(i,digit,slate)=>{
		if(i===digit.length){
			result.push(slate.join(''));
			return;
		}
		let chars=alpha[digit[i]];
		for(let char of chars){
			slate.push(char);
			dfs(i+1, digit,slate);
			slate.pop();
		}
	}
	dfs(0,digit[]);
	return result;
}

module.exports = letterCombinations;
