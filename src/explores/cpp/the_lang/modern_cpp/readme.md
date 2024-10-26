## Compilation Enviroment

Use `clang++` as the only compiler used, using the ``-std=c++2a` compilation flag in code.

## Deprecated Features

Deprecation is not completely unusable, it is only intedent to imply that features will disappear from future standard libary.

```c++
char *str = "hellow world"; // deprecation warning

const char *str = "hello dog"  // correct
```

TODO: add more such features


## Compatibilities with C

Modern C++ is not a superset of C. Avoid using c constructs in c++ when posible. If you have to write c use the `extern "c"` from c++ code.

TODO: How to compile C++ + C

## Reference

1. [https://en.cppreference.com/w/](https://en.cppreference.com/w/)


## More Reads

1. A tour of C++ (2nd Edition) Bjarne Stroupstrup History of C++
2. C++ compiler support
3. Incompatibilities Between ISO C and ISO C++


## Notes

1. Makefile indentations are tab based.

### Features

#### - [LUC] Language Usability Enhancements

> 1. Constants

   -  `nullptr` purpose is to replace NULL. Traditional c++ will treat NULL or O as the same thing. nullprt keyboard is used to distiguish null pointers and 0. 
     + The type of nullptr is nullptr_t, can be converted to any pointer or member type and can be used to compare equally or unequally with them.
     + 

   [View source code](./constats/nullprtr.c++)

> 2. contexpr

- C++ already has the concept of constant expression i.e 1+2 , 3*4
- Such expressions produce the same resut without any side effects.
- If the compiler can directly optimize and embed these expressions into the program at compile-time.
- It will increase the performance of the program

   [View source code](./constats/constexpr.c++)


#### - [VAI] Variable and initialization

> - if-switch

```c++
// Now you can have the variable inside the if statement
  if (const auto itr = std::find(vec.begin(), vec.end(), 3); itr != vec.end()) {
    *itr = 4;
  }
```

> Initializer list

Initialization is a very imporant language feature, the most common one is when the object is initialized.

Traditional c++, we had a number of initialization methods
1. Arrays, PODs (plain old data i.e classes without constructs, desturctors and virtual functions)
2. struct type with { }

> Structured Binding

- Provide multiple retured values. C++11 has added a std::tuple container for constructing a tuple that enclosed multiple return values.

- C++11/14 does not provide a simple way to get and define the elements in the tuple from tuple, although we can unpack the tuple using std::tie

- C++17 completes this setting and the structured bindings let us write code like this

## type inference

> 1. Auto

> 2. decltype

decltype keyword is used to solve the defect that the auto keyword can only type the variable.

decltype(expression)

sometimes we may need to calculate the type of an expression

auto x = 1;
auto y = 2;

decltype(x+y) z;

std::is_same<T,U> is used to determine whether two types T and U are equal.

The output is;

type x == int;
type z == type x;

## tail type inference

auto cannot be used for function arguments for type derivation.

