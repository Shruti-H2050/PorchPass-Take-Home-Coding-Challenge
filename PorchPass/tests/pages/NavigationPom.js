exports.NavigationPom=
class NavigationPom{

constructor(page){  
    this.page=page;
    this.customerStories = '//a[@aria-label="Customer Stories"]';
    this.locations = '//a[@aria-label="Locations"]';
    this.about = '//li[@aria-haspopup="true"]/div[contains(text(),"About")]'
}
async aboutOnMainNavBar(){
    await this.page.locator(this.about).click();
}
async highlighAbout(){
    await this.page.waitForSelector('//li[@aria-haspopup="true"]/div[contains(text(),"About")]'); 
    await this.page.$eval('//li[@aria-haspopup="true"]/div[contains(text(),"About")]', el => el.click);
}
async aboutStoryOnMainNavBar(){
    await this.page.getByRole('button', { name: 'Braustin Story', exact: true }).isVisible();
}
async navigateToAboutPage(){
    await this.page.goto('https://www.braustin.com/about');
    return true;
}
async clickCustomerStoriesOnMainNavBar(){
    await this.page.locator(this.customerStories).click();
}
async navigateToCustomerStoriesPage(){
    await this.page.goto('https://www.braustin.com/about');
    return true;
}
async clickLocationsOnMainNavBar(){
    await this.page.locator(this.locations).click();
}
async navigateToLocationsPage(){
    await this.page.goto('https://www.braustin.com/locations');
    return true;
}

async goBackToPreviousPage(){
    await this.page.goBack();
}
async learnOnNavBar(){
    await this.page.getByRole('button', { name: 'Learn' }).click();
}
async clickBlog(){
    await this.page.getByLabel('Blog').click();
}
async navigateToBlogPage(){
    await this.page.goto('https://www.braustin.com/blog');
    return true;
}
async clickAcademy(){
    await this.page.getByLabel('Academy').click();
}
async navigateToAcademyPage(){
    await this.page.goto('https://www.braustin.com/academy');
}
async clickPodcast(){
    await this.page.getByLabel('Podcast').click();
}
async navigateToPodCastPage(){
    await this.page.goto('https://www.braustin.com/podcast');
}
async clickFAQs(){
    await this.page.getByLabel('FAQs').click();
}
async navigateToFAQsPage(){
    await this.page.goto('https://www.braustin.com/frequently-asked-questions');
}
async clickBraustinStory(){
    await this.page.getByLabel('Braustin Scholars').click();
}
async navigateBraustinStoryPage(){
    await this.page.goto('https://www.braustin.com/braustin-scholars');
}
async clickContactUs(){
    await this.page.getByLabel('Contact Us').click();
}
async navigateContactUsPage(){
    await this.page.goto('https://www.braustin.com/contact-us');
}
async clickCommercialAccounts(){
    await this.page.getByLabel('Commercial Accounts').click();
}
async navigateCommercialAccountsPage(){
    await this.page.goto('https://www.braustin.com/commercial-account-management');
}
async clickSkirting(){
    await this.page.getByLabel('Skirting').click();
}
async navigateSkirtingPage(){
    await this.page.goto('https://www.braustin.com/mobile-home-skirting-quote');
}
}