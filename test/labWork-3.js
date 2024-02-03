const sinon = require('sinon');
const Matrix = require('../matrix'); // Шлях до вашого класу

describe('Matrix class tests', () => {
  it('should call swap_with_nonzero_row with correct parameters', () => {
    const matrix = new Matrix(3);
    const mock = sinon.mock(matrix);
    const expectedRow = 1;

    mock.expects('swap_with_nonzero_row').once().withArgs(expectedRow);

    matrix.swap_with_nonzero_row(expectedRow);

    mock.verify();
  });
});
