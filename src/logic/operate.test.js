import '@testing-library/jest-dom';
import operate from './operate';

describe('operate function', () => {
  it('should perform addition', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });
  it('should perform subtraction', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });
  it('should perform multiplication', () => {
    expect(operate('9', '10', 'x')).toBe('90');
  });
  it('should perform division', () => {
    expect(operate('8', '2', '÷')).toBe('4');
  });
  it('should perform modolo', () => {
    expect(operate('7', '2', '%')).toBe('1');
  });
  it('should throw an error for unKnown operation', () => {
    expect(() => operate('2', '3', '>')).toThrow("Unknown operation '>'");
  });
});
