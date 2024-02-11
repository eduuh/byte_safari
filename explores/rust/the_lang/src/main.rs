mod ownership;
mod common;

#[allow(dead_code, unused_variables)]
fn main() {
    common::spaces(2);
    ownership::ownership_rules();
    common::spaces(2);
    ownership::ownership_concepts();
}
