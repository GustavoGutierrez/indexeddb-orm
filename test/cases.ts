import {Settings} from "../src/interfaces";

describe('checking existence of idb', () => {
    it('should exist', () => {
        expect(typeof window.idb).toBe('function');
    });

    it('function call should return instance of DB', () => {
        let idb = window.idb(<Settings>{});
        console.log(typeof idb, idb);

        expect(idb instanceof window.DB).toBe(true);
    });
});