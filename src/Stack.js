import { deepCopy, isFunction } from "./common_utils";
import { ArrayBasedStruct } from "./ArrayBasedStruct";

export class Stack extends ArrayBasedStruct {
    constructor() {
        super();
    }

    push(element) {
        return this.__items.push(element);
    }

    pop() {
        return this.__items.pop();
    }

    peek() {
        if(!this.__items.length) return undefined;
        return deepCopy(this.__items[this.__items.length - 1]);
    }

    traverse(callback, reversal = false) {
        if(!isFunction(callback)) return;

        let items = this.getItems(this.__items);
        let from = reversal ? items.length -1 : 0;
        let to = reversal ? 0 : items.length - 1;
        
        let loopCondition = function (current) {
            if (reversal) {
                return current >= to;
            } else {
                return to >= current;
            }
        }

        let stepIn = function (current) {
            if (reversal) {
                return current - 1;
            } else {
                return current + 1;
            }
        }

        for (let index = from; loopCondition(index); index = stepIn(index)) {
            let element = items[index];
            callback(element, index);
        }
    }

    toString() {
        return this.__items.map(element => element.toString()).join(' ');
    }
}

