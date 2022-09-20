/**
 * 深拷贝
 */
export function deepCopy(source) {
    let dest;
    if(Array.isArray(source)) {
        dest = [];
        for (let i = 0; i < source.length; i++) {
            dest[i] = deepCopy(source[i]);
        }
    } else if (toString.call(source) === '[object Object]') {
        dest = [];
        for(var p in source) {
            if(source.hasOwnProperty(p)) {
                dest[p] = deepCopy(source[p]);
            }
        }
    } else {
        dest = source;
    }
    return dest;
}

/**
 * 判断传入参数是否为函数
 */
export function isFunction(func) {
    if (!func || toString.call(func) !== '[object Function]') return false;
    return true;
}