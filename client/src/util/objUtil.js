
export const flattenObject = (ob) => {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

export const convertToNestedObj = (obj) => {
    var toReturn = {};

    for (let i in obj) {
        if (i.includes(".")) {
            let [key, nestedKey] = i.split(".");
            if (!toReturn[key]) {
                toReturn[key] = {};
            }
            toReturn[key][nestedKey] = obj[i].value;
        }
        else
            toReturn[i] = obj[i].value;
    }
    return toReturn;
}