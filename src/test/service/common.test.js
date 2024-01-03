import { checkSameValue, validatePassword, formatDate } from '../../service/common';

describe('Test checkSameValue for Compare Password', () => {
  test('to be False', () => {
    expect(checkSameValue(1, 2)).toBeFalsy();
  });
  test('toBe True', () => {
    expect(checkSameValue(1, 1)).toBeTruthy();
  });
});

describe('Test validatePassword for suitable regex', () => {
  test('Incorrect Password String', () => {
    expect(validatePassword('1234')).toBeFalsy();
  });
  test('Correct Password String', () => {
    expect(validatePassword('test1234')).toBeTruthy();
  });
});

describe('Test formatDate for Date Format', () => {
  test('Date Length Over 10 throw an error', () => {
    expect(() => {
      formatDate('2023-12-233');
    }).toThrow('날짜 형식에 맞지 않습니다.');
  });
  test('Correct Date String', () => {
    expect(formatDate('2023-1-2')).toBe('2023-01-02');
  });
});
