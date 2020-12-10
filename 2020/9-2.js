let l = document.body.innerText.trim().split('\n')//
var target = '[YOUR_PART1_ANSWER_HERE]' //Mine: 90433990
var a = [], s = 0, found = false
for (var i = 0; i < l.length; i++) {
	var x = Number(l[i])
	a.push(x); s += x; 

	for (var j = i+1; j < l.length; j++) {
		var y = Number(l[j])
		a.push(y); s += y;

		if (s > target) {
			a = []; s = 0; break;
		} else if (s == target) { found = true; break; }
	}
	if (found) { console.log('AYYY'); console.log(a); break; }
}
console.log(Math.max(...a) + Math.min(...a))
