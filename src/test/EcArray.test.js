let EcArray = require("./EcArray.js");
let chai = require("chai");

let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe("EcArray", () => {
    describe("isArray", () => {
        it('Array is Array', () => {
            expect(EcArray.isArray([])).to.equal(true);
        });
        it('Object is not Array', () => {
            expect(EcArray.isArray({})).to.equal(false);
        });
        it('String is not Array', () => {
            expect(EcArray.isArray("[]")).to.equal(false);
        });
    });
    it('Duplicates are removed', () => {
        let ary = [1, 1, 2, 3, 4];
        EcArray.removeDuplicates(ary);
        expect(ary.length).to.equal(4);
    });
    it('SetAdd works', () => {
        let ary = [2, 3, 4];
        EcArray.setAdd(ary, 1);
        expect(ary.length).to.equal(4);
    });
    it('SetAdd doesnt duplicate', () => {
        let ary = [1, 1, 2, 3, 4];
        EcArray.setAdd(ary, 1);
        expect(ary.length).to.equal(5);
    });
    it('SetRemove works', () => {
        let ary = [1, 2, 3, 4];
        EcArray.setRemove(ary, 1);
        expect(ary.length).to.equal(3);
    });
    it('SetRemove doesnt remove things of different types', () => {
        let ary = ['1', 2, 3, 4];
        EcArray.setRemove(ary, 1);
        expect(ary.length).to.equal(4);
    });
    it('SetRemove removes all of something', () => {
        let ary = [1, 1, 2, 3, 4];
        EcArray.setRemove(ary, 1);
        expect(ary.length).to.equal(3);
    });
});