import { validate } from '../../src/utils/url-validator';

describe("url-validator", () => {

  describe("validate", () => {
    
    it("should validate valid urls", () => {
      expect(validate('www.google.com')).toBe(true);
      expect(validate('google.com')).toBe(true);
      expect(validate('http://www.google.com')).toBe(true);
      expect(validate('http://google.com')).toBe(true);
      expect(validate('https://google.com')).toBe(true);
      expect(validate('123.gob.mx')).toBe(true);
      expect(validate('123.gob.mx/12414?=24&23235')).toBe(true);
      expect(validate('GOOGLE.COM')).toBe(true);
    })

    it("should not validate invalid urls", () => {
      expect(validate('google .com')).toBe(false);
      expect(validate('+.com')).toBe(false);
      expect(validate('google')).toBe(false);
      expect(validate('google.2')).toBe(false);
      expect(validate('san+google.com')).toBe(false);
      expect(validate('ssh://google.com')).toBe(false);
    })
  })

});