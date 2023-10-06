import calculate from './calculate';
import '@testing-library/jest-dom';

describe('calculate', () => {
  test('should clear calculator data when AC button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  test('should update next with a number button press when there is an operation', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '5');
    expect(result).toEqual({ total: '10', next: '5', operation: '+' });
  });
  test('should update next with a number button press and clear the value when there is an operation', () => {
    const result = calculate({ total: null, next: '10', operation: '+' }, '5');
    expect(result).toEqual({ total: null, next: '105', operation: '+' });
  });
});
