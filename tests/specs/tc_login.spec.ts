import { expect } from '@wdio/globals'
import loginPage from "../pages/loginPage";

describe('Login Page', () => {
    beforeEach(async () => {
        await loginPage.openLoginPage();
    });

    it('TC001_User melakukan signup', async () => {
        await loginPage.signUpModule.click();
        await loginPage.emailField.setValue('wilbur.testing11@gmail.com');
        await loginPage.passwordField.setValue('testing123');
        await loginPage.signUpConfirmPassword.setValue('testing123');
        await loginPage.signUpBtn.click();
        await expect (loginPage.androidPopUpMsg).toHaveText('You successfully signed up!');
        await loginPage.androidOkBtn.click();
    })

    it('TC002_User melakukan login', async () => {
        await loginPage.emailField.setValue('wilbur.testing11@gmail.com');
        await loginPage.passwordField.setValue('testing123');
        await loginPage.loginBtn.click();
        await expect (loginPage.androidPopUpMsg).toHaveText('You are logged in!');
        await loginPage.androidOkBtn.click();
    })
})