import { randomInt, randomString } from '../../src/utils/random-generator';

describe("random-generator", () => {

  describe("randomInt", () => {
    
    it("should return a number in range", () => {
      const [lowerBound, upperBound] = [10, 20];
      const random = randomInt(lowerBound, upperBound);

      expect(random).toBeGreaterThanOrEqual(lowerBound);
      expect(random).toBeLessThanOrEqual(upperBound);
    })

    it("should return an integer number", () => {
      const [lowerBound, upperBound] = [10, 20];
      const random = randomInt(lowerBound, upperBound);
      const floor = Math.floor(random);

      expect(random).toBe(floor);
    })
  })
  
  describe("randomString", () => {

    it("should return a fixed lenght string", () => {
      const dict = "abcdefg123";
      const lenght = 10;
      const str = randomString(dict, lenght);

      expect(str.length).toBe(lenght);
    })

    it("should only contain characters in dict", () => {
      const dict = "abcdefg123";
      const lenght = 10;
      const str = randomString(dict, lenght);
      
      let count = 0;
      for (const c of str) {
        count += dict.includes(c);
      }
      expect(count).toBe(str.length);
    })
  })

});