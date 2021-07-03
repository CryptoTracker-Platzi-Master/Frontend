import { numberWithCommas } from './numberWithCommas';

describe(' [utils / numberWithCommas', () => {
  describe('when `numberWithCommas` is called', () => {
    describe('with `1000000`', () => {
      it('should return `1,000,000`', () => {
        //arrange
        const params = 1000000;
        //act
        const result = numberWithCommas(params);
        const expected = '1,000,000';
        //assert
        expect(result).toEqual(expected);
      });
    });
    describe('with `100`', () => {
      it('should return `100`', () => {
        //arrange
        const params = 100;
        //act
        const result = numberWithCommas(params);
        const expected = '100';
        //assert
        expect(result).toEqual(expected);
      });
    });
  });
});
