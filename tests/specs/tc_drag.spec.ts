import { expect} from '@wdio/globals'
import dragPage from "../pages/dragPage";


describe('Drag Page', () => {
    
    beforeEach(async () => {
        await dragPage.openDragPage();
    });
    it('TC007_User menyelesaikan puzzle', async () => {
        await dragPage.completingThePuzzle();
        await expect(dragPage.completeVerify).toHaveText('You made it, click retry if you want to try it again.');
        await dragPage.buttonRetry.click();
    });
})