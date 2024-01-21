// pub use: allow use to export module without making them public
pub use customer2::Customer;
pub use order::Order;
pub use product::{Category, Product};

mod product {
    pub use category::Category;

    pub struct Product {
        id: u64,
        name: String,
        price: f64,
        category: Category,
    }

    mod category {

        pub enum Category {
            Electronics,
            Clothings,
            Books,
        }
    }

    impl Product {
        pub fn new(id: u64, name: String, price: f64, category: Category) -> Product {
            Product {
                id,
                name,
                price,
                category,
            }
        }
        fn caculate_tax(&self) -> f64 {
            self.price * 0.3
        }
        pub fn product_price(&self) -> f64 {
            self.price + self.caculate_tax()
        }
    }
}

mod customer2 {

    pub struct Customer {
        id: f64,
        name: String,
        email: String,
    }

    impl Customer {
        pub fn new(id: f64, name: String, email: String) -> Customer {
            Customer { id, name, email }
        }
    }
}

mod order {
    use crate::customer2::Customer;
    use crate::product::Product;

    pub struct Order {
        id: u64,
        product: Product,
        customer: Customer,
        quantity: u32,
    }

    impl Order {
        pub fn new(id: u64, product: Product, customer: Customer, quantity: u32) -> Order {
            Order {
                id,
                product,
                customer,
                quantity,
            }
        }
        fn calculate_discount(&self) -> f64 {
            if self.quantity > 5 {
                0.1
            } else {
                0.0
            }
        }

        pub fn total_bill(&self) -> f64 {
            let discount = self.calculate_discount();
            let cost_before_discount = self.product.product_price() * self.quantity as f64;
            cost_before_discount - (cost_before_discount * discount)
        }
    }
}

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

mod shapes {
    pub struct Circle {
        radius: f32,
    }

    impl Circle {
        pub fn new(radius: f32) -> Circle {
            Circle { radius }
        }

        pub fn contains(&self, other: &Circle) -> bool {
            self.radius > other.radius
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(20, 30);
        assert_eq!(result, 50);
    }

    #[test]
    fn larger_circle_should_contain_smaller() {
        let larger_c = shapes::Circle::new(20.2);
        let small_c = shapes::Circle::new(10.3);

        assert_eq!(larger_c.contains(&small_c), true);
    }
}
