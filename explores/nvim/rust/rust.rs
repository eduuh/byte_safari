// Rust Features

// 1. Constants
const PI: f64 = 3.14159;
const NAME: &str = "Alice";

// 2. Functions
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// 3. Structs and Methods
struct Person {
    first_name: String,
    last_name: String,
}

impl Person {
    fn full_name(&self) -> String {
        format!("{} {}", self.first_name, self.last_name)
    }
}

// 4. Enums and Pattern Matching
enum Result<T, E> {
    Ok(T),
    Err(E),
}

fn handle_result(result: Result<i32, &str>) {
    match result {
        Result::Ok(value) => println!("Result is Ok: {}", value),
        Result::Err(err) => println!("Result is Err: {}", err),
    }
}

// 5. Option and Some/None
fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}

// 6. Traits and Implementations
trait Printable {
    fn print(&self);
}

impl Printable for Person {
    fn print(&self) {
        println!("Person: {}", self.full_name());
    }
}

// 7. Result and Error Handling
fn process_data() -> Result<(), String> {
    // Simulated error case
    let data = fetch_data()?;
    Ok(())
}

fn fetch_data() -> Result<i32, String> {
    // Simulated error case
    Err("Failed to fetch data".to_string())
}

// 8. Lifetimes
fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}

// 9. Closures
fn call_with_one<F>(closure: F) -> i32
where
    F: Fn(i32) -> i32,
{
    closure(1)
}

fn main() {
    // Constants
    println!("PI: {}", PI);
    println!("Name: {}", NAME);

    // Functions
    let sum = add(3, 4);
    println!("Sum: {}", sum);

    // Structs and Methods
    let person = Person {
        first_name: "John".to_string(),
        last_name: "Doe".to_string(),
    };
    println!("Full Name: {}", person.full_name());

    // Enums and Pattern Matching
    let result_ok = Result::Ok(42);
    handle_result(result_ok);

    let result_err = Result::Err("Error message");
    handle_result(result_err);

    // Option and Some/None
    let result = divide(10.0, 2.0);
    match result {
        Some(value) => println!("Result: {}", value),
        None => println!("Cannot divide by zero"),
    }

    // Traits and Implementations
    person.print();

    // Result and Error Handling
    if let Err(err) = process_data() {
        println!("Error: {}", err);
    }

    // Lifetimes
    let s1 = "long string";
    let s2 = "short";
    println!("Longest string: {}", longest(s1, s2));

    // Closures
    let closure = |x| x + 10;
    let result_closure = call_with_one(closure);
    println!("Closure result: {}", result_closure);
}
