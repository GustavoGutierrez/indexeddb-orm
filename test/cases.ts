import {Settings} from "../src/interfaces";

describe('cases for idb function existence', () => {
    it('should exist', () => {
        expect(typeof window.idb).toBe('function');
    });

    it('function call should return instance of DB', () => {
        let idb = window.idb(<Settings>{});

        expect(idb instanceof window.DB).toBe(true);
    });
});


describe('cases for idb connection actions', () => {
    window.indexedDB.deleteDatabase('test');
    let idb = window.idb({});
});