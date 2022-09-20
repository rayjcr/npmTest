import { deepCopy } from "./common_utils";

export class ArrayBasedStruct {
    constructor() {
        this.__items = [];
    }

    getItems() {
        return deepCopy(this.__items);
    }

    get isEmpty() {
        return this.__items.length === 0;
    }

    get size() {
        return this.__items.length;
    }

    clear() {
        this.__items.length = 0;
    }
}