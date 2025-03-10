import { expect, $ } from '@wdio/globals'
class LoginPage {
    get loginIcon() {
        return $('//android.widget.TextView[@text="Login"]')
    }
    get emailField() {
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }
    get passwordField() {
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }
    get loginBtn() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup')
    }
    get signUpConfirmPassword () {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    }
    get signUpModule () {
        return $('//android.widget.TextView[@text="Sign up"]')
    }
    get logInModule () {
        return $('(//android.widget.TextView[@text="Login"])[1]')
    }
    get signUpBtn () {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup')
    }
    get androidPopUpMsg () {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }
    get androidOkBtn () {
        return $ ('//android.widget.Button[@resource-id="android:id/button1"]')
    }
    async openLoginPage() {
        await this.loginIcon.waitForDisplayed();
        await this.loginIcon.click();
    }
}

export default new LoginPage();