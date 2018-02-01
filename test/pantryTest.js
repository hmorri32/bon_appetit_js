import { expect } from "chai";
import Pantry from "../lib/pantry";

describe("Pantry", () => {
  const pantry = new Pantry();
  describe("attributes", () => {
    it("has stock", () => {
      expect(pantry.stock).to.eql({});
    });
  });

  describe("methods", () => {
    describe("stockCheck", () => {
      it("returns the amount of an igredient by name", () => {
        expect(pantry.stockCheck("Cheese")).to.eql(0);
        pantry.stock = { Cheese: 2 };
        expect(pantry.stockCheck("Cheese")).to.eql(2);
      });
    });

    describe("restock", () => {
      it("restocks pantry item", () => {
        expect(pantry.stock).to.eql({ Cheese: 2 });
        pantry.restock("Cheese", 10);
        expect(pantry.stock).to.eql({ Cheese: 12 });
      });
    });
  });
});
