**WACC** is a toy language. We made a multiplatform compiler for it (in **Kotlin**) capable
of producing both **ARM11** assembly and **JVM** bytecode.
We put a lot of effort into achieving feature parity
between the two. For example, the JVM has no native way of determining an overflow in the
primitive `int` type.

Some of the features WACC supports are:

- Basic control flow constructs: `while`, `for`, `if`...
- The usual language primitives (`char`, `char[]`, `int`...) and their arithmetics
- Pairs, which can be destructured
- Runtime errors (represented as exceptions when targeting the JVM)
- Function definitions, allowing recursive and mutually recursive functions
- Some basic command line IO


 Additionally, because we are targeting the JVM, you could call WACC from Java, Scala,
 or any other JVM language.
 
 Here is an example of a WACC program. It computes the nth fibonacci number:

```java
begin
  int fibonacci(int n) is
    if n <= 1
    then
      return n
    else
      skip
    fi ;
    int f1 = call fibonacci(n - 1) ;
    int f2 = call fibonacci(n - 2) ;
    return f1 + f2
  end

  println "This program calculates the nth fibonacci number recursively." ;
  print "Please enter n (should not be too large): " ;
  int n = 0;
  read n ;
  print "The input n is " ;
  println n ;
  print "The nth fibonacci number is " ;
  int result = call fibonacci(n) ;
  println  result
end
```
