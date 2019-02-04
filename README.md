### Minesweeper Overview

In Minesweeper, the player is initially presented with a grid of
undifferentiated squares. Either some randomly-selected squares are designated to contain mines. Typically, the
size of the grid and the number of mines are set in advance by the user. The ratio of the number of mines to the grid size is often used as a
measure of an individual game's difficulty. The grid size can also be
represented in terms of the number of rows and columns in the grid.

The player is presented with
the grid. The player
has the option to do 3 different things:

1.  Reveal a square on the grid.
2.  Mark a square as potentially containing a mine.
3.  Mark a square as definitely containing a mine.

When the player reveals a square of the grid, different things can happen. If
the revealed square contains a mine, then the player loses the game. If the
revealed square does not contain a mine, then a digit is instead displayed in
the square, indicating how many adjacent squares contain mines. Typically, there are 8 squares adjacent to any given square, unless
the square lies on an edge or corner of the grid.

The player uses this information to deduce the contents of other squares, and
may perform any of the first three options in the list presented above. When the
player marks a square as potentially containing a mine, a <code>?</code> is
displayed in the square. When the player marks the square as definitely
containing a mine, a flag, represented as <code>'🚩'</code> is displayed in the
square. The player can mark or reveal any square in the grid, even squares that
have already been marked or revealed. The logic for determining what happens
to the square is always the same.

The game is won when both all of the mines are located (i.e., all squares
containing a mine are marked by the user as containing a mine) and when there
are no squares still marked as potentially containing a mine.
