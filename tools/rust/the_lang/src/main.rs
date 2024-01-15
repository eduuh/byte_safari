#[allow(dead_code, unused_variables)]
fn main() {
    variables();
    scalar_datatypes();
    compound_datatypes();
    learn_functions("parameter");
}

fn variables() {
    // definition
    let x = 45;
    let y = 36;

    //Mutability
    //To mutatle you need the mut keyword
    let _var1 = &x;
    let mut var2 = &y;

    println!("ar2: {}", var2);

    //scope
    {
        let x: i32 = 5;
        println!("new scope {}", x);
    }

    println!("Original scope X value {}", x);

    //Shadowing
    // The compiler will only see the last variable
    let y = 20;
    println!("Value before mutation: {}", var2);
    var2 = &y;
    println!("Value after mutation: {}", var2);

    println!("Scoped value y: {}", y);

    println!("Hello, world!");
}

fn scalar_datatypes() {
    // - Scalar data types
    //  -- intergers
    //  -- Floats
    //  -- chars
    //  -- boolean

    // -- Interger
    // --- unsigned intergers
    let _unsigned_num: u8 = 5; // u16 , u32, u64, u126

    // Signed intergers
    let _signed_num: i8 = 5; // i16, i32, i64, i126

    // Floading point numbers
    let _float_num: f32 = 5.0; // f64
                               // Platoform specific intergers
    let _arch_1: usize = 5;
    let _arch_2: isize = 5;

    // boolean
    let _b: bool = true;

    //Type aliasing
    type Age = u8;
    let _peter_age: Age = 42;

    //type conversion
    let a: i32 = 5_i32;
    println!("a : {}", a);
}

// Hold multple value
fn compound_datatypes() {
    //&str and string
    let fixed_str: &str = "Fixed length string";
    let mut flexible_str: String = String::from("This string will grow ");
    flexible_str.push_str("with time");
    flexible_str.push('c');

    println!("fixed_str: {}, flexible_str: {}", fixed_str, flexible_str);

    //Zero indexed and same type
    //Arrays are fixed size
    let mut _array_1: [i32; 5] = [4, 5, 6, 8, 9];
    let _num = _array_1[0];

    println!("{:?}", _array_1);

    //vectors
    // Dynamically grows
    let _vec_1: Vec<i32> = vec![4, 5, 6, 8, 9];
    println!("{:?}", _vec_1);

    //Tuples
    let _my_infor: (&str, i32, &str, i32) = ("salary", 40000, "Age", 40);
    let _salary_value: i32 = _my_infor.1;
    println!("My salary is {}", _salary_value);
    // destructure
    // let (salary: &str, salary_value: i32, age:&str, age_value:i32) = _my_infor;

    //let unit: () = ();
}

fn learn_functions(s: &str) {
    //naming is snake case, small letters with underscore between words
    println!("{s}");
    let result: i32 = multiplication_function(2, 4);
    println!("Return type of function: {result}");
    let (mult, add, sub) = basic_math_return_multiplevalues(4, 6);
    println!("mult: {}, add: {}, sub: {}", mult, add, sub);

    code_block_return_values();
}

fn multiplication_function(num1: i32, num2: i32) -> i32 {
    println!("Computing multiplication");
    // no semicolon: that a retuwn statement
    num1 * num2
}

fn basic_math_return_multiplevalues(num1: i32, num2: i32) -> (i32, i32, i32) {
    (num1 * num2, num1 + num2, num1 - num2)
}

fn code_block_return_values() {
    // Code block are not reusables
    // code block do not have parameters
    let full_name: String = {
        let first_name: &str = "Edwin";
        let last_name: &str = "Muraya";
        format!("{first_name} {last_name}") //return
    };

    println!("Your full Name is: {full_name}");
}

// Conditionals
