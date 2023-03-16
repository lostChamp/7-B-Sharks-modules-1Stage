export class WorkWithStr {
    toLowerCaseWithFirstLetter(str) {
        console.log("Task 1.1");

        str = str.toLowerCase();
        return str.charAt(1).toUpperCase() + str.slice(1);
    }

    removeExtraSpaces(str) {
        console.log("Task 1.2");

        let tempStr = "";
        let flag = false;
        for(let i = 0; i < str.length; i++) {
            if(str[i] === " " && str[i + 1] === " ") {
                continue;
            }else {
                if(str[i] === "," || str[i] === ".") {
                    tempStr += str[i] + " ";
                }else {
                    tempStr += str[i];
                }
            }
        }

        str = tempStr.split(" ");
        tempStr = "";
        for(let i = 0; i < str.length; i++) {
            if(str[i + 1] === "," || str[i + 1] === ".") {
                tempStr += str[i] + str[i + 1] + " ";
                i += 2;
            }else {
                tempStr += str[i] + " ";
            }
        }

        return tempStr.trim();
    }

    countWords(str) {
        console.log("Task 1.3");

        str = str.split(" ");
        let counter = 0;
        for(let item in str) {
           counter++;
        }
        return counter;
    }

    counterOfUnique(str) {
        console.log("Task 1.4");

        let tempStr = "";
        for(let i = 0; i < str.length; i++) {
            if(str[i] === "," || str[i] === ".") {
                continue;
            }else {
                tempStr += str[i];
            }
        }

        let copy = tempStr.toLowerCase().split(" ");
        tempStr = tempStr.toLowerCase().split(" ");

        tempStr = [...new Set(tempStr)];

        for(let i = 0; i < tempStr.length; i++) {
            let counter = 0;
            for(let j = 0; j < copy.length; j++) {
                if(tempStr[i] === copy[j]) {
                    counter++;
                }
            }
            console.log(`Количество слова "${tempStr[i]}" = ${counter}`);
        }
    }
}