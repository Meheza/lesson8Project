module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },'Navigate Categories': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .verify.containsText('//div[text()= "category: Recreational Vehicles"]', 'Recreational Vehicles')
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .verify.containsText('//div[text()= "category: Outdoor Gear"]', 'Outdoor Gear')
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .verify.containsText('//div[text()= "category: Electronics"]', 'Electronics')
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .verify.containsText('//div[text()= "category: Party & Wedding Equipment"]', 'Party & Wedding Equipment')
        .back()
    },
        'Browse Categories': browser => {
            browser
            .useXpath()
            .click('//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"]')
        },
}