const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const wordInstance = new Word("test");
      expect(wordInstance).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const wordInstance = new Word("example");
      expect(wordInstance.word).to.equal("example");
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const wordInstance = new Word("Pickles");
      expect(wordInstance.removeVowels()).to.equal("Pckls");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const wordInstance = new Word("alphabet");
      expect(wordInstance.removeConsonants()).to.equal("aae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const wordInstance = new Word("magnesium");
      expect(wordInstance.pigLatin()).to.equal("agnesiummay");
    });
  });
});
