import { expect } from '@wdio/globals'
import loginPage from "../pages/loginPage";
import dotenv from 'dotenv';

describe('Login Page', () => {
    
    beforeEach(async () => {
        await loginPage.openLoginPage();
    });

    it('TC001_User melakukan signup', async () => {
        await loginPage.signUpModule.click();
        await loginPage.emailField.setValue(process.env.EMAIL);
        await loginPage.passwordField.setValue(process.env.PASSWORD);
        await loginPage.signUpConfirmPassword.setValue(process.env.PASSWORD);
        await loginPage.signUpBtn.click();
        await expect (loginPage.androidPopUpMsg).toHaveText('You successfully signed up!');
        await loginPage.androidOkBtn.click();
    })

    it('TC002_User melakukan login', async () => {
        await loginPage.emailField.setValue(process.env.EMAIL);
        await loginPage.passwordField.setValue(process.env.PASSWORD);
        await loginPage.loginBtn.click();
        await expect (loginPage.androidPopUpMsg).toHaveText('You are logged in!');
        await loginPage.androidOkBtn.click();
    })
})