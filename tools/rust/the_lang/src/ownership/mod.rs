pub fn ownership_concepts() {
    string_literal_and_allocated_strings();
    variable_data_interacting_with_clone();
}

fn string_literal_and_allocated_strings() {
    // s is string literal
    // This string cannot be mutated
    let s1 = "Edwin Muraya";
    println!("{s1}");

    // The variable is valid from point of declaration upto the end of the scope.
    // This kind of string can be mutated, but the reference cannot
    let mut s = String::from("hello");
    s.push_str(", World");
    println!("{s}");

    //question: Why can string be mutatation and literal cannot
    //answer: This is because of how they both deal with memory
    //
    //
    //String literal
    // - This are of know size and are usually hadcoded inside the prgrams stack
    // - String literal are faster that allocated.
    // - String literal cannot be mutated, we can't put a block of memory for all literal strings
    // into the binary
    //
    //
    // Allocated String: String
    // In order to support mutability, growable pieces of memory, we need to allocated an amount of
    // memory in the heap. This memory is request during runtime.
    // Whe variable goes out os scope rust with automatically return the memory.
    //
    //
    //variable & data
    //stack allocated data: Copies are created automatically
    let x = 5;
    let y = x;

    println!("{x} {y}");

    // Heap allocated
    // Two pointer -> pointing to the same value.
    // Rust does not allows this because, it would result to
    // double free error
    //
    // Rust will automatically consider the first value as invalid
    // The ownership will transper to the second pointer.
    //

    // Shallow copy: Concept of copying the pointer, length and capacity without copying the data.
    // Since rust invalidate the first valiable, it know as a move instead.
    // Note: Rust will never create deep copy of your data.
    let name = String::from("Edwin Muraya");
    //let second = name; This not valid
    println!("{name}");
}

fn variable_data_interacting_with_clone() {
    //other lang will refer this as deep copy;
    //Clone is an expesive operation.
    let s1 = String::from("Hello Edwin");
    let s2 = s1.clone();

    println!("{s1} {s2}");
}
