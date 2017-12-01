"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('cases for idb function existence', function () {
    it('should exist', function () {
        expect(typeof window.idb).toBe('function');
    });
    it('function call should return instance of DB', function () {
        var idb = window.idb({});
        expect(idb instanceof window.DB).toBe(true);
    });
});
describe('cases for idb connection actions', function () {
    window.indexedDB.deleteDatabase('test');
    var idb = window.idb({});
});
