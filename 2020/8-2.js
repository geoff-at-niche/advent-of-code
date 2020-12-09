var l = document.body.innerText.trim().split('\n')
var altered = new Map(), found = false, flipped = false
do {
  var visited = new Map(), acc = 0, flipped = false
  for (var i = 0; i < l.length; i++) {
    if (visited.get(i) == true) break
    visited.set(i, true)
    var x = l[i].split(' ')
    var cmd = x[0], n = Number(x[1])
    if (cmd == 'acc') acc += n
    else if (cmd == 'jmp') {
      if (!flipped) {
        var x = altered.get(i)
        if (!x) {
          altered.set(i, true)
          flipped = true
          continue
        }
      }
      i += (n-1)
    }
    else if (cmd == 'nop') {
      if (!flipped) {
        var x = altered.get(i)
        if (!x) {
          altered.set(i, true)
          flipped = true
          i += (n-1)
        }
      }
    }
  }
  if (i >= l.length) found = true
} while (found == false)
console.log(acc)
