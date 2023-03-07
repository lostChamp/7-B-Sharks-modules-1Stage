export class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    filter(str, arr) {
        let retArr = [];
        let splitStr = str.split('&');

        for(let i = 0; i < arr.length; i++) {
            if (splitStr.length === 4) {
                if (splitStr[0].includes("contains") && arr[i].name.includes("fd") ||
                    splitStr[0].includes("start") && arr[i].name.startsWith("fd") ||
                    splitStr[0].includes("ends") && arr[i].name.endsWith("fd")) {
;
                    if (splitStr[1].includes("=") && arr[i].price === +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes(">") && arr[i].price > +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes("<") && arr[i].price < +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes(">=") && arr[i].price >= +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes("<=") && arr[i].price <= +(splitStr[1][splitStr[1].length - 1])) {

                        if (splitStr[2].includes("=") && arr[i].quantity === +(splitStr[2][splitStr[2].length - 1]) ||
                            splitStr[2].includes(">") && arr[i].quantity > +(splitStr[2][splitStr[2].length - 1]) ||
                            splitStr[2].includes("<") && arr[i].quantity < +(splitStr[2][splitStr[2].length - 1]) ||
                            splitStr[2].includes(">=") && arr[i].quantity >= +(splitStr[2][splitStr[2].length - 1]) ||
                            splitStr[2].includes("<=") && arr[i].quantity <= +(splitStr[2][splitStr[2].length - 1])) {

                            if (splitStr[3].includes("contains") && arr[i].description.includes("abc") ||
                                splitStr[3].includes("start") && arr[i].description.startsWith("abc") ||
                                splitStr[3].includes("ends") && arr[i].description.endsWith("abc")) {
                                retArr.push(arr[i]);
                            }
                        }
                    }
                }
            }

            if(splitStr.length === 2) {
                if (splitStr[0].includes("contains") && arr[i].name.includes("fd") ||
                    splitStr[0].includes("start") && arr[i].name.startsWith("fd") ||
                    splitStr[0].includes("ends") && arr[i].name.endsWith("fd")) {

                    if (splitStr[1].includes("=") && arr[i].quantity === +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes(">") && arr[i].quantity > +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes("<") && arr[i].quantity < +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes(">=") && arr[i].quantity >= +(splitStr[1][splitStr[1].length - 1]) ||
                        splitStr[1].includes("<=") && arr[i].quantity <= +(splitStr[1][splitStr[1].length - 1])) {

                        retArr.push(arr[i]);
                    }
                }
            }
        }

        return retArr;
    }
}

