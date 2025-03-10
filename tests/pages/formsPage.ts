import { expect, $ } from '@wdio/globals'
class FormsPage {
    get formIcon() {
        return $('//android.widget.TextView[@text="Forms"]')
    }
    get inputForm() {
        return $('//android.widget.EditText[@content-desc="text-input"]')
    }
    get youHaveTypedForm() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]')
    }
    get switchButton() {
        return $('//android.widget.Switch[@content-desc="switch"]')
    }
    get switchVerify() {
        return $('//android.widget.TextView[@content-desc="switch-text"]')
        
    }
    get dropDownButton() {
        return $('//android.widget.EditText[@resource-id="text_input"]')
        
    }
    get dropDownValueA() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]')
    }
    get dropDownValueB() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]')
    }
    get dropDownValueC() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]')
    }
    get activeButton() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]')
    }
    get androidOkBtn () {
        return $ ('//android.widget.Button[@resource-id="android:id/button1"]')
    }
    get activeButtonVerify () {
        return $ ('//android.widget.TextView[@resource-id="android:id/message"]')
    }   
    async openFormsPage() {
        await this.formIcon.waitForDisplayed();
        await this.formIcon.click();
    }
    async selectDropdownOption(option: 'A' | 'B' | 'C') {
        await this.dropDownButton.waitForDisplayed();
        await this.dropDownButton.click();

        switch (option) {
            case 'A':
                await this.dropDownValueA.click();
                break;
            case 'B':
                await this.dropDownValueB.click();
                break;
            case 'C':
                await this.dropDownValueC.click();
                break;
        }
    }
}
export default new FormsPage();