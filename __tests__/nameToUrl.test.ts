import nameToUrl from "../services/utils/nameToUrl";

describe('nameToUrl function', () => {
  test('should return empty string when input is in empty', () => {
    expect(nameToUrl('')).toBe('')
  });
  test('should return correct value', () => {
    expect(nameToUrl('một con mèo on có 2 cía Ánh')).toBe('mot-con-meo-on-co-2-cia-anh')
    expect(nameToUrl('123123123123')).toBe('123123123123')
    expect(nameToUrl('a á ầ ò ồ ộ Ố Ỗ @ + - - --  ')).toBe('a-a-a-o-o-o-o-o')
  });
});
