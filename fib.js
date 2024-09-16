function fib(n) {
    let a = 0
    let b = 1
    for (let i =1; i < n; i++) {
        let t = a; a = b; b = a + t
    };
    return a
  };
module.exports = fib