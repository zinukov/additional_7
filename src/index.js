function solved(array) {
    let l = [0, 0];

    if (notFound(array, l)) return true;
    let row = l[0];
    let column = l[1];

    for (let num = 1; num < 10; num++) {
        if (found(array, row, column, num)) {
            array[row][column] = num;
            if (solved(array)) return true;
            array[row][column] = 0;
        }
    }
    return false;
}

function found(array, row, column, num) {

    return rowSearch(array, row, num) &&
        columnSearch(array, column, num) &&
        cubic(array, row - row % 3, column - column % 3, num);
}

function notFound(array, l) {

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (array[row][column] === 0) {
                l[0] = row;
                l[1] = column;
                return false;
            }
        }
    }
    return true;
}

function rowSearch(array, row, num) {

    for (let i = 0; i < 9; i++) {
        if (array[row][i] === num) {
            return false;
        }
    }

    return true;
}

function columnSearch(array, column, num) {

    for (let y = 0; y < 9; y++) {
        if (array[y][column] === num) {
            return false;
        }
    }

    return true;
}

function cubic(array, row, column, num) {

    for (let i = 0; i < 3; i++) {
        for (let y = 0; y < 3; y++) {
            if (array[i + row][y + column] === num) {
                return false;
            }
        }
    }

    return true;
}

module.exports = function solveSudoku(matrix) {

    let rezult = matrix;

    if (solved(matrix)) {
        rezult = matrix;
    }

    return rezult;
};
