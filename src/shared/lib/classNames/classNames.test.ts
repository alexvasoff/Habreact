import { classNames } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional classes', () => {
    const expected = 'someClass class2 class3';
    expect(classNames('someClass', {}, ['class2', 'class3'])).toBe(expected);
  });
  test('with mods classes', () => {
    const expected = 'someClass class2 class3';
    expect(classNames('someClass', { class2: true, class3: true }, [])).toBe(expected);
  });
  test('with all params', () => {
    const expected = 'someClass class3 class2';
    expect(classNames('someClass', { class2: true }, ['class3'])).toBe(expected);
  });
  test('mode with false', () => {
    const expected = 'someClass class3';
    expect(classNames('someClass', { class2: false, class3: true }, [])).toBe(expected);
  });
  test('mode with undefined', () => {
    const expected = 'someClass class2';
    expect(classNames('someClass', { class2: true, class3: undefined }, [])).toBe(expected);
  });
});
