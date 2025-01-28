---
id: bitwise
tags: []
date: general
excerpt: description
image: image path
status: draft
title: Bit-manipulation Techniques
---

# Bit-manipulation Techniques

## Bit-wise operators

1. Binary And &
2. Binary OR |
3. Binary XOR ^
4. Binary One's Complements ~
5. Binary Left Shift <<
6. Binary Right Shift >>

## Bit-Wise And

1 represent a set bit

0 & 0 = 0
1 & 0 = 0
0 & 1 = 0
1 & 1 = 1

5 & 7 = 5

101 & 111 -> 101

## Binary OR

1 | 0 = 1
0 | 1 = 1
0 | 0 = 0
1 | 1 = 1

5 | 8

0101 | 1000 -> 1101 -> 13

## Exclusive Or ^

0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

## Binary Not ~

~0 = 1
~1 = 0

~5 ~000101 -> 111010

~0 = -1

## Left Shift <<

5 << 2
a << b

0000101

5 \* 2^2

a \* 2^b

## Right Shift

10 >> 1 = 10/2^1 = 5

a / 2 ^ b

## Write a function to check if a number is odd or even?

n % 2

- Odd number last bit is 1
- check of last bit is 1 or not
