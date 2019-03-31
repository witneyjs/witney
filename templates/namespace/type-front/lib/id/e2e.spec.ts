import "chromedriver";
import { Builder, By } from "selenium-webdriver";
import { assert } from "chai";
import { Driver } from "selenium-webdriver/chrome";

describe("Title namespace", async function() {
  let driver: Driver;

  before(async function() {
    driver = await new Builder().forBrowser("chrome").build();
    this.timeout((await (driver.manage() as any).getTimeouts().pageLoad) * 3);
  });

  after(async function() {
    await driver.quit();
  });

  it("equals current namespace id @slow", async function() {
    await driver.get("http://0.0.0.0:8080");
    const elements = await driver.findElements(By.className("app__home-title-namespace-text"));
    assert.equal(elements.length, 1);

    const title = await elements[0].getText()
    assert.equal(title.toLowerCase(), ENV.NAMESPACE_ID);
  });
});
