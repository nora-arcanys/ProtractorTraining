let homepage = function(){

    let firstNum_input = element(by.model('first'));

    let secondNum_input = element(by.model('second'));

    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getURL = function(url){
        browser.get(url);
    }
    
    this.enterFirstNumber = function(firstNum){
        firstNum_input.sendKeys(firstNum);
    }

    this.enterSecondNumber = function(secondNum){
        secondNum_input.sendKeys(secondNum);
    }

    this.clickGo = function(){
        goButton.click();
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        
        expect(output.getText()).toEqual(result);
    }

};

module.exports = new homepage();