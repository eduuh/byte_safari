let xs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
xs.forEach((x) => {
  if (x & 1) {
    console.log(x, "odd");
  } else {
    console.log(x, "Even");
  }
});

function getithBit(n, i) {
  let mask = 1 << i;
  return (n & mask) > 0 ? 1 : 0;
}

funciton setIthBit(n, i) {
  int mask = (1 <<i);
  return (n | mask)
}

function clearIthBit(n, i) {
  int mask = ~(1<<i)
  return n & mask 
}

function updatelastIBits(n, i) {
  //-1 => ~0
  int mask = -1 << 1
  return n & mask
}

void clearBitsInRange(n, i, j) {


}

// 5 -> 101
console.log(0, getithBit(5, 0));
console.log(1, getithBit(5, 1));
console.log(2, getithBit(5, 2));
