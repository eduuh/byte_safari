#[cfg(test)]
mod test {
    use crate::token::Token;

    #[test]
    fn test_next_token() {
        let input = "=+(){},;";
        let expected: Vec<Token> = vec![Token {
            kind: TokenKind::Assign,
        }];
    }
}
