import { expect, driver,$} from '@wdio/globals'
import { Key } from 'webdriverio'
class DragPage {
    get dragIcon() {
        return $('//android.widget.TextView[@text="Drag"]')
    }
    get completeVerify() {
        return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]')
    }
    get buttonRetry() {
        return $('//android.view.ViewGroup[@content-desc="button-Retry"]')
    }
    async openDragPage () {
        await this.dragIcon.waitForDisplayed();
        await this.dragIcon.click();
    }
    async completingThePuzzle () {
        await driver.action('pointer')
                    .move({ duration: 0, x: 721, y: 1773 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 546, y: 680 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 916, y: 1779 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 549, y: 1128 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 198, y: 1770 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 285, y: 904 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 834, y: 1930 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 311, y: 1105 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 360, y: 1733 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 727, y: 1128 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 535, y: 1791 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 715, y: 669 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 648, y: 1945 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 299, y: 666 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 259, y: 1924 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 770, y: 872 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 471, y: 1965 })
                    .down({ button: 0 })
                    .move({ duration: 1000, x: 544, y: 855 })
                    .up({ button: 0 })
                    .perform();
            
                await driver.action('pointer')
                    .move({ duration: 0, x: 651, y: 1378 })
                    .down({ button: 0 })
                    .pause(50)
                    .up({ button: 0 })
                    .perform();
    }
}
export default new DragPage();