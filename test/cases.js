"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('checking existence of idb', function () {
    it('should exist', function () {
        expect(typeof window.idb).toBe('function');
    });
    it('function call should return instance of DB', function () {
        var idb = window.idb({});
        console.log(typeof idb, idb);
        expect(idb instanceof window.DB).toBe(true);
    });
});
