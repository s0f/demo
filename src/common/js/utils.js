/**
 * Created by 31602 on 2017/5/13.
 */
const utils = {};

function query (selector) {
    let result = document.querySelectorAll(selector);
    if (result.length) {
        result = result[0];
    }
    return result;
}

export default utils;
export {query as $};

