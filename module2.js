export class opWithNumbers {
    sum(firstNum, secondNum) {
        let addZeroForSum = 0;
        let result = "";
        if (firstNum.length < secondNum.length) {
            addZeroForSum = secondNum.length - firstNum.length;
            for (let i = 0; i < addZeroForSum; i++) {
                firstNum = "0" + firstNum;
            }
        } else {
            addZeroForSum = firstNum.length - secondNum.length;
            for (let i = 0; i < addZeroForSum; i++) {
                secondNum = "0" + secondNum;
            }
        }

        let firstTempNum = 0;
        let secondTempNum = 0;
        let tempResult = 0;
        let remains = 0;
        let counter = 0;

        for (let i = firstNum.length - 1; i >= 0; i--) {
            firstTempNum = Number(firstNum[i]);
            secondTempNum = Number(secondNum[i]);

            tempResult = firstTempNum + secondTempNum + counter;
            counter = 0;
            remains = 0;

            if (tempResult < 10) {
                result = tempResult.toString() + result;
            } else {
                remains = tempResult % 10;
                result = remains.toString() + result;
                counter++;
            }

            if (i === 0 && counter !== 0) {
                result = counter.toString() + result;
            }
        }

        return result;
    }

    minus(firstNum, secondNum) {
        let result = "";
        let flagForMinus = false;

        if (firstNum === secondNum) {
            result = "0";
            return result;
        }

        let addZeroForMinus = 0;
        if (firstNum.length < secondNum.length) {
            addZeroForMinus = secondNum.length - firstNum.length;
            for (let i = 0; i < addZeroForMinus; i++) {
                firstNum = "0" + firstNum;
            }
        } else {
            addZeroForMinus = firstNum.length - secondNum.length;
            for (let i = 0; i < addZeroForMinus; i++) {
                secondNum = "0" + secondNum;
            }
        }

        if(firstNum < secondNum) {
            [firstNum, secondNum] = [secondNum, firstNum];
            flagForMinus = true;
        }

        let firstTempNum = 0;
        let secondTempNum = 0;
        let tempForOp = 0;
        let flagForUnit = false;

        for (let i = firstNum.length - 1; i >= 0; i--) {
            firstTempNum = Number(firstNum[i]);
            secondTempNum = Number(secondNum[i]);

            if(!flagForUnit){
                if(firstTempNum < secondTempNum) {
                    tempForOp = (firstTempNum + 10) - secondTempNum;
                    flagForUnit = true;
                }else {
                    tempForOp = firstTempNum - secondTempNum;
                    flagForUnit = false;
                }
            }else {
                if(firstTempNum < secondTempNum) {
                    tempForOp = (firstTempNum + 10 - 1) - secondTempNum;
                    flagForUnit = true;
                }else {
                    tempForOp = (firstTempNum - 1) - secondTempNum;
                    if(tempForOp < 0) {
                        tempForOp = tempForOp + 10;
                        flagForUnit = true;
                    }else {
                        flagForUnit = false;
                    }
                }
            }

            result = tempForOp.toString() + result;
        }

        if(flagForMinus) {
            result = "-" + result;
        }

        return result;
    }


    mul(firstNum, secondNum) {
        let result = "";

        if(firstNum === "0" || secondNum === "0") {
            result = "0";
            return result;
        }

        if(firstNum.length > secondNum.length) {
            [firstNum, secondNum] = [secondNum, firstNum];
        }

        result = secondNum;
        console.log(result);

        while(firstNum > 1) {
            result = this.sum(result, secondNum);
            firstNum = this.minus(firstNum, "1");
        }


        return result;

    }

    div(firstNum, secondNum) {
        let counter = 0;

        let addZeroForDiv = 0;
        if (firstNum.length < secondNum.length) {
            addZeroForDiv = secondNum.length - firstNum.length;
            for (let i = 0; i < addZeroForDiv; i++) {
                firstNum = "0" + firstNum;
            }
        } else {
            addZeroForDiv = firstNum.length - secondNum.length;
            for (let i = 0; i < addZeroForDiv; i++) {
                secondNum = "0" + secondNum;
            }
        }

        let tempFirstNum = firstNum;

        while(tempFirstNum >= secondNum) {
            tempFirstNum = this.minus(tempFirstNum, secondNum);
            counter++;
        }

        return counter;
    }
}