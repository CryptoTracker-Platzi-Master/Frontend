import axios from "axios";
import { getCryptos } from "./getCryptos";
import { BASE_URL } from "./variables";
jest.mock("axios", () => {
  return {
    get: () => {
      return { data: "hola mundo" };
    },
  };
});

describe("[utils / getCryptos]", () => {
  describe("when `getCryptos` is called", () => {
    it("should call `axion.get` with `BASE_URL`", () => {});
    it("should call `setCryptos` with `data`", async () => {
      //arrange
      const setCryptos = jest.fn();
      //act
      await getCryptos({ setCryptos });

      //assert
      expect(setCryptos).toBeCalled();
    });
  });
});
