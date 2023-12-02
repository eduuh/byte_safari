#[allow(dead_code, unused)]

fn main() {
    let x = 45;
    let y = 36;

    let var1 =  &x;
    let mut var2 = &y;
    
    println!("ar2: {}", var2);

    var2 = &y;

    println!("var1: {}", var1);
    
    println!("Hello, world!");
}
