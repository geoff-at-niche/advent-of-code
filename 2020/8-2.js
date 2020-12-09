let l = document.body.innerText.trim().split('\n')
let altered = new Map(), found = false
do {
  let visited = new Map(), acc = 0, flipped = false
  for (let i = 0; i < l.length; i++) {
    if (visited.get(i) == true) break
    visited.set(i, true)
    let x = l[i].split(' ')
    let cmd = x[0], n = Number(x[1])
    if (cmd == 'acc') acc += n
    else if (cmd == 'jmp') {
      if (!flipped) {
        let x = altered.get(i)
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
        let x = altered.get(i)
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
