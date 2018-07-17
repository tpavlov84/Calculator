function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = +leftOperand;
    this.operator = operator;
    this.rightOperand = +rightOperand;
    tihs.calulatorResult=function () {
        let result =0;
        switch (this.operator){
            case"+":
                result = this.leftOperand + this.rightOperand;
                break;
            case"-":
                result = this.leftOperand - rightOperand;
                break;
            case"*":
                result = this.leftOperand * rightOperand;
                break;
            case"/":
                result = this.leftOperand / rightOperand;
                break;
        }
        return result;
    }
}
module.export = Calculator;