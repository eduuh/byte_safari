
int main() { return 1; }

void arrays() {}

void structure() {

  struct Rectagle {
    int length;
    int breadth;
  };

  struct Rectagle R; // declarations
  R.length = 10;
  R.breadth = 20;

  struct Rectagle R2 = {10, 5}; // declaration with initilization

  struct Card {
    int face;
    int shape;
    int color;
  }; // size -> 6 bytes

  struct Card c;

  c.face = 1;
  c.color = 2;
  c.shape = 4;

  struct Card E = {1, 0, 0};
}
