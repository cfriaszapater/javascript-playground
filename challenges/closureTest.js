function counter() {
  var count = 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
}

const c1 = counter();
const c2 = counter();
c2.increment();
console.log(c1.getCount()); // 0
c1.increment();
c1.increment();
console.log(c1.getCount()); // 2
console.log(c2.getCount()); // 1
