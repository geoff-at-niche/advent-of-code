varl = document.body.innerText.trim().split('\n')
var w = [], pa = 25
for (var i = 0; i < l.length; i++) {
  if (w.length < pa) {
	w.push(Number(l[i]))
    continue
  }
  var target = Number(l[i]), found = false
  for (var j = 0; j < w.length; j++) {
	  for (var k = 0; k < w.length, k != j; k++) {
		  if (w[j] + w[k] == target) found = true
	  }
  }
  if (!found) break
  w.shift()
  w.push(target)
}
console.log(l[i])
