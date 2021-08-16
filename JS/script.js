//CGPA CONTROLLER
var CGPAcontrol = (function(){

})();

//UI CONTROLLER
var UIcontrol = (function (){
    var DOMstrings= {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    };
    var getInput = {
        value: document.querySelector(DOMstrings.inputType).value
    }
})();
//GENERAL CONTROLLER
var GENcontrol = (function (gpcntrl, uicntrl){

})(CGPAcontrol, UIcontrol);