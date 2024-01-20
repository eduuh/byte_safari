use std::collections::HashMap;
use the_lang::{Category, Customer, Order, Product};

#[allow(dead_code, unused_variables)]
fn main() {
    modules_crates();
    // learn_basic();
}

fn modules_crates() {
    let product: Product =
        Product::new(23, "Smart Phone".to_string(), 200.0, Category::Electronics);
    let customer: Customer = Customer::new(2.0, "Edwin".to_string(), "eduu@test.com".to_string());
    let order: Order = Order::new(2, product, customer, 20);
    println!("The total cost is {}", order.total_bill());
}

fn learn_basic() {
    variables();
    scalar_datatypes();
    compound_datatypes();
    learn_functions("parameter");
    conditionals();
    control_statements();
    ownership();
    borrowing();
    dereferencing();
    learn_struct();
    struct_implementation();
    learn_enums();
    more_struct_optional();
    hash_Maps();
    learn_codeArrangement();
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
fn conditionals() {
    let num: i32 = 32;
    if num < 50 {
        println!("The number is less that 50: num: {num}");
    } else {
        println!("The value is greater that 50");
    }

    let marks = 50;
    let grade;

    if marks >= 80 {
        grade = 'A';
    } else if marks >= 70 {
        grade = 'B';
    } else {
        grade = 'C';
    }

    //remember branches return values

    let grade2 = if marks >= 80 {
        'A'
    } else if marks >= 70 {
        'B'
    } else {
        'C'
    };

    let grade3 = match marks {
        90..=100 => 'A',
        80..=89 => 'B',
        70..=79 => 'C',
        _ => 'F', // default arm should always be defined
    };

    println!("Your grade is {grade} {grade2} and second grade {grade3}");
}

fn control_statements() {
    //1. a forever/infinit loop
    let mut counter = 2;
    loop {
        counter -= 1;
        println!("Infinit loop: Test {counter}"); // terminates the loop
        if counter == 0 {
            break;
        }
    }

    // 'outer: loop {
    //     println!("labeled loop"); // terminates the loop
    //     break 'outer;
    // }

    //for loops
    let vec: Vec<i32> = vec![4, 5, 6, 7, 8, 8];

    for item in vec {
        println!("{item}");
    }

    let mut i = 2;
    while i < 10 {
        i += 2;
    }
    println!("{i}")
}

// Memory
// - Non - volatile
// Non - volatile
// 1. stack
// 2. heap - Unknown size at compile time. Look for memory. Require memory management.
// 3. static
//

fn ownership() {
    // ownership basics
    // 1. Each value has a variable that's its "owner"
    // 2. A value can have only one owner at a time.
    // 3. If the owner goes out of scope, the value is cleaned up.

    //string - made up of (ptr, len , capacity) - the leave on stack but value leave in the heap
    // let s1: String = String::from("word");
    // let s2: String = s1;
    // println!("s1 is: {s1}") // borow of moved values

    // A deep copy should be done
    let s3: String = String::from("Edwin");
    let s4: String = s3.clone();
    println!("s3 is {s3} and s4 is {s4}");

    let s4: String = String::from("Outer Scope");
    {
        let _s5: String = s4;
    }

    // println!("{s4}");
    ownership2();
}

fn ownership2() {
    let vec_1: Vec<i32> = vec![1, 2, 3];
    take_ownership(vec_1);
    //vec_1 is removed and ownship is passed down to the function
    //at the end of the function the function will be removed from heap
    //println!("vec 1 is: {:?}", vec_1);
    let vec_2: Vec<i32> = gives_ownership();
    println!("{:?}", vec_2);

    let vec_3: Vec<i32> = takes_and_gives_ownership(vec_2);
    //println!("vec 2 is : {:?}", vec_2); vec_2 is cleared
    println!("vec 3 is : {:?}", vec_3);

    let x: i32 = 0;
    stack_function(x);
    println!("{x}");
}

fn take_ownership(vec: Vec<i32>) {
    println!("vec is: {:?}", vec);
}

fn gives_ownership() -> Vec<i32> {
    vec![4, 5, 6]
}

fn takes_and_gives_ownership(mut vec: Vec<i32>) -> Vec<i32> {
    vec.push(30);
    vec
}

fn stack_function(mut var: i32) {
    var = 56;
    println!("in fun, var is: {var}");
}

fn borrowing() {
    // Establishign a reference to some data
    // Just like pointer with some rules
    // Does not take ownership

    // why borrowing
    // 1. Prevent unnecessary memory usage
    // 2. Ownship not required

    //Rules
    //1. At any time you can either have one mutable reference or any number of immutable references.
    //2. References must always be valid
    //
    //Solve out two problems
    //  - Data race
    //  - Dangling references
    //
    let mut vec_1: Vec<i32> = vec![4, 5, 6];
    let ref1: &mut Vec<i32> = &mut vec_1;
    //let ref2: &mut Vec<i32> = &mut vec_1;
    ref1.push(20);
    println!("borrowed value {:?}", ref1);
    println!("original value {:?}", vec_1);
    //println!("borrowed value {:?}", ref2); you cannot values twice
    //
    // Immutable references can be many
    let ref5: &Vec<i32> = &vec_1;
    let ref6: &Vec<i32> = &vec_1;
    println!("ref: {:?}", ref5);
    println!("ref: {:?}", ref6);

    // let vec_44 = {
    //     let vec_3: Vec<i32> = vec![1, 2, 3];
    //     // Dangling reference
    //     //&vec_3 // vec 3 does not live long enough as its droped.
    // };

    let mut vec_1: Vec<i32> = vec![1, 2, 4];
    let ref1 = &vec_1;
    take_ownership_borrow(ref1);
    println!("vec is {:?}", vec_1);

    let ref3 = &mut vec_1;
    mutably_borrow_vec(ref3);
    println!("vec is {:?}", ref3);
    gives_ownership_borrow();
}

fn take_ownership_borrow(vec: &Vec<i32>) {
    println!("vec is {:?}", vec);
}

fn mutably_borrow_vec(vec: &mut Vec<i32>) {
    vec.push(50);
}

fn gives_ownership_borrow() -> Vec<i32> {
    vec![4, 5, 6]
}

fn dereferencing() {
    // Access values from pointer
    let mut some_data = 45;
    let ref_1 = &mut some_data;
    let dere = *ref_1;
    *ref_1 = 60;

    println!("some data is {some_data}, deref_copy is: {dere}");

    let mut heap_data = vec![5, 5, 6, 7];
    let ref_1 = &mut heap_data;
    let deref_copy = ref_1.clone();
    println!("deref copy of heap is {:?}", deref_copy);

    //mutable ref on stack are moved not copied
    //let move_out = ref_1;
    //let move_out_again = ref_1;
    let s1 = String::from("hello");
    let s2 = &s1;
    let s3 = &s2;
    let s4 = &s3;
    //let x = ***s4 == (&"hello").to_string();
    //println!("{x}")
}

fn learn_struct() {
    struct Car {
        owner: String,
        year: u32,
        fuel_level: f32,
        price: u32,
    }

    let mut my_car: Car = Car {
        owner: String::from("ABC"),
        year: 2010,
        fuel_level: 3.2,
        price: 5000,
    };

    // let car_year = my_car.year;
    my_car.fuel_level = 30.3;

    let _extracted_owner: String = my_car.owner.clone();

    let _another_car = Car {
        owner: "new_name".to_string(),
        ..my_car
    };

    //tuple struct

    // let _point_2D = (1, 3);
    // let point_3d = (4, 10, 13);
    // struct Point2d(i32, i32);
    // struct Point3d(i32, i32, i32);

    // let point1 = Point2d(1, 3);
    // let point3 = Point3d(1, 3, 4);
    // println!("{point1}, {point3}");
}

fn struct_implementation() {
    struct Car {
        owner: String,
        year: u32,
        fuel_level: f32,
        price: u32,
    }

    impl Car {
        fn monthly_insurance() -> u32 {
            123
        }

        fn selling_price(&self) -> u32 {
            self.price + Car::monthly_insurance()
        }

        fn new(name: String, year: u32) -> Self {
            Self {
                owner: name,
                year,
                fuel_level: 0.0,
                price: 0,
            }
        }
        // immutable reference to self
        fn display_car_information(&self) {
            println!(
                "Owner:  {}, Year: {}, price: {}, fuel_level {}",
                self.owner, self.year, self.price, self.fuel_level
            )
        }
        // mutable
        fn refuel(&mut self, gallons: f32) {
            self.fuel_level += gallons;
        }

        fn sell(self) -> Self {
            self
        }
    }

    let mut my_car: Car = Car {
        owner: String::from("ABC"),
        year: 2010,
        fuel_level: 3.2,
        price: 5000,
    };

    my_car.display_car_information();
    my_car.refuel(30.4);

    let new_owner = my_car.sell();
    new_owner.display_car_information();

    let new_car = Car::new("XYZ".to_string(), 24);
    Car::selling_price(&new_car);
    new_car.display_car_information();
}

fn learn_enums() {
    // enum WeekDay {
    //     Monday,
    //     Tuesday,
    //     Wednesday,
    //     Thursday,
    //     Friday,
    //     Saturday,
    //     Sunday,
    // }
    //
    // let day = WeekDay::Saturday;

    enum TravelType {
        Car(f32),
        Train(f32),
        Aeroplane(f32),
    }

    impl TravelType {
        fn travel_allowance(&self) -> f32 {
            let allowance: f32 = match self {
                TravelType::Car(miles) => miles * 0.2,
                TravelType::Train(miles) => miles * 3.0,
                TravelType::Aeroplane(miles) => miles * 5.0,
            };
            allowance
        }
    }

    let participant = TravelType::Car(60.0);
    println!(
        "Allowance of participant is: {}",
        participant.travel_allowance()
    )
}

fn more_struct_optional() {
    #[derive(Debug)]
    struct StudentOptional {
        name: String,
        grade: Option<u32>,
    }

    fn get_grade(student_name: &String, student_db: &Vec<StudentOptional>) -> Option<u32> {
        for student in student_db {
            if student.name == *student_name {
                return student.grade;
            }
        }
        None
    }

    // enum Result<T,E> {
    //  OK(T),
    //  Err(E)
    // }

    fn check_student_get_grade(
        student_name: &String,
        student_db: &Vec<StudentOptional>,
    ) -> Result<Option<u32>, String> {
        for student in student_db {
            if student.name == *student_name {
                return Ok(student.grade);
            }
        }
        Err(String::from("Student not found"))
    }

    // enum Option<T> {
    //   none
    // }
    let student_db = vec![
        StudentOptional {
            name: String::from("Alice"),
            grade: Some(67),
        },
        StudentOptional {
            name: String::from("Edwin"),
            grade: None,
        },
    ];

    let student_name = String::from("Alice");

    let student_status = check_student_get_grade(&student_name, &student_db);

    match student_status {
        Ok(option_grade) => {
            if let Some(grade) = option_grade {
                println!("Grade is {grade}")
            }
        }
        Err(error_msg) => println!("{error_msg}"),
    }
}

fn hash_Maps() {
    let mut person: HashMap<&str, i32> = HashMap::new();
    person.insert("Edwin", 40);
    person.insert("Test", 231);

    println!("The age is {:?}", person.get("Test").unwrap());

    match person.get("Edwin") {
        Some(value) => println!("The value exist {}", value),
        None => println!("the value does not exist"),
    }

    for (name, age) in &person {
        println!("The person {} has an age of {}", name, age)
    }

    let some_vector = vec![52, 55, 5, 6, 6, 6, 6];
    let mut fre_vec: HashMap<i32, i32> = HashMap::new();

    for i in &some_vector {
        let freq = fre_vec.entry(*i).or_insert(0);
        *freq += 1;
    }
}

fn learn_codeArrangement() {
    // Packages
    // - Managed thro cargo command : cargo new, cargo build, cargo test
    // - Highest leve of organization
    // - Contains binary or library crates. Compilation units, contains functions and structs
    //
    // Crate
    // - Compilation unit
    // - Can be a binary crate or a library crate
    // - Contains as many modules as fit
    //
    // Modules
    // Contro at a finer level, the structure, visibility and privacy
    //
    // Packages Rules
    // 1. Must have at least one crate
    // 2. At most 1 library crate
    // 3. Any number of binary crates.
}
