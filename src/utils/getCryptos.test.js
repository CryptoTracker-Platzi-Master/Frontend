import axios from 'axios';
import { getCryptos } from './getCryptos';
// import { BASE_URL } from './variables';
jest.mock('axios');
jest.mock('./variables', () => {
  return {
    BASE_URL: 'base_url',
  };
});

describe('[utils / getCryptos]', () => {
  describe('when `getCryptos` is called', () => {
    it('should call `axion.get` with `BASE_URL`', async () => {
      //arrange
      const setCryptos = () => {};
      //act
      await getCryptos({ setCryptos });

      //assert
      expect(axios.get).toBeCalledWith('base_url');
    });
    it('should call `setCryptos` with `data`', async () => {
      //arrange
      const setCryptos = jest.fn();
      axios.get.mockResolvedValue({ data: 'hola mundo' });
      //act
      await getCryptos({ setCryptos });

      //assert
      expect(setCryptos).toBeCalledWith('hola mundo');
    });
  });
});
