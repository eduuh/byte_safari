use crate::token::Token;

struct Lexer {
    input::Vec<char>,

}

impl Lexer {
    fn new(input: &str) -> Lexer {
       todo!();
    }

    fn next_token() -> Token {
       todo!();
    }
}


#[cfg(test)]
mod test {
    use std::usize;

    use crate::token::Token;

    use super::Lexer;

    #[test]
    fn test_next_token() {
        let input = "=+(){},;";

        let expected: Vec<Token> = vec![
            Token {
                kind: crate::token::TokenKind::Assign,
                literal: "=".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Plus,
                literal: "+".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Rparen,
                literal: ")".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Lparen,
                literal: "(".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Lparen,
                literal: "(".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Lbrace,
                literal: "{".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Rbrace,
                literal: "}".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::Comma,
                literal: ",".to_string(),
            },
            Token {
                kind: crate::token::TokenKind::SemiColon,
                literal: ";".to_string(),
            },
        ];

        let lexer: Lexer = Lexer::new(input);

        for (idx: usize, exp_token: Token) in expected.into_iter().enumerate()  {
            let recv_token: Token = lexer.next_token();
            assert_eq!(
                exp_token, recv_token.kind,
                "tests[idx] - token type wrong. expected={:?}, got={:?}", 
                exp_token, recv_token.kind
                );
        }
    }
}
