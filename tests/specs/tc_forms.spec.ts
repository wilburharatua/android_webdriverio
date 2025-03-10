import { expect } from '@wdio/globals'
import formsPage from '../pages/formsPage';

describe('Form Page', () => {

    beforeEach(async () => {
        await formsPage.openFormsPage();
    });

    it('TC003_User mengisi input field', async () => {
        await formsPage.inputForm.setValue('testing wilburH 123 #QAtester');
        await expect(formsPage.youHaveTypedForm).toHaveText('testing wilburH 123 #QAtester');
    })

    it('TC004_User menggunakan tombol switch', async () => {
        await formsPage.switchButton.click();
        await expect (formsPage.switchVerify).toHaveText('Click to turn the switch OFF');
        await formsPage.switchButton.click();
        await expect (formsPage.switchVerify).toHaveText('Click to turn the switch ON');
    })

    it('TC005_User menggunakan tombol dropdown', async () => {
        await formsPage.selectDropdownOption('B')
        await expect(formsPage.dropDownButton).toHaveText('Appium is awesome')
    })

    it('TC006_User menggunakan tombol active', async () => {
        await formsPage.activeButton.click();
        await expect (formsPage.activeButtonVerify).toHaveText('This button is active');
        await formsPage.androidOkBtn.click();
    })

})