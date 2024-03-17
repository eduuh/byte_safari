fn main() {
    use std::io;

    let lines = io::stdin().lines();
    for line in lines {
        println!("{}", line.unwrap());
    }
}
