import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { RegisterUserData } from "../models/RegisterUserData";

export class HomePage extends BasePage {

    readonly topPanel: Locator;
    readonly header: Locator;
    readonly homeBtn: Locator;
    readonly aboutUsBtn: Locator;
    readonly contactBtn: Locator;
    readonly leftMenu: {[key: string]: Locator};
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;    
    readonly loginBtn: Locator;
    readonly forgotLoginInfoLink: Locator;
    readonly registerLink: Locator;
    readonly atmServices: {[key: string]: Locator};
    readonly onlineServices: {[key: string]: Locator};
    readonly latestNews: {[key: string]: Locator};
    readonly footer: Locator;
    readonly footerHomeLink: Locator;
    readonly footerAboutUsLink: Locator;    
    readonly footerContactUsLink: Locator;
    readonly footerSiteMapLink: Locator;
    readonly footerServicesLink: Locator;
    readonly footerProductsLink: Locator;
    readonly footerLocationsLink: Locator;
    readonly footerForumsLink: Locator;
    readonly copyrightText: Locator;
    readonly servicesReadMoreLink: Locator;
    readonly newsReadMoreLink: Locator;
    readonly regFirstName: Locator;
    readonly regLastName: Locator;
    readonly regAddress: Locator;
    readonly regCity: Locator;
    readonly regState: Locator;
    readonly regZipCode: Locator;
    readonly regPhone: Locator;
    readonly regSSN: Locator;
    readonly regUsername: Locator;
    readonly regPassword: Locator;
    readonly regConfirmPassword: Locator;
    readonly regSubmitBtn: Locator;
    readonly regSuccessMessage: Locator;
    readonly regErrorMessage: Locator;
    readonly forgotFirstNameInput: Locator;
    readonly forgotLastNameInput: Locator;
    readonly forgotAddressInput: Locator;
    readonly forgotCityInput: Locator;
    readonly forgotStateInput: Locator;
    readonly forgotZipCodeInput: Locator;
    readonly forgotSSNInput: Locator;
    readonly forgotSubmitBtn: Locator;
    readonly forgotSuccessMessage: Locator;
    readonly forgotErrorMessage: Locator;
    readonly forgotUsernameOutput: Locator;
    readonly forgotPasswordOutput: Locator;





    constructor(page: Page) {
        super(page);
        this.topPanel = page.locator('#topPanel');
        this.header = page.locator('#headerPanel');
        this.homeBtn = page.locator('//li[@class="home"]');
        this.aboutUsBtn = page.locator('//li[@class="aboutus"]');
        this.contactBtn = page.locator('//li[@class="contact"]');
        this.leftMenu = {
            'solutions': page.locator('//li[@class="Solutions"]'),
            'aboutUs': this.header.locator('//a[text()="About Us"]'),
            'services': this.header.locator('//a[text()="Services"]'),
            'products': this.header.locator('//a[text()="Products"]'),
            'locations': this.header.locator('//a[text()="Locations"]'),
            'adminPage': this.header.locator('//a[text()="Admin Page"]')
        };
        this.usernameInput = page.locator('//input[@name="username"]');
        this.passwordInput = page.locator('//input[@name="password"]');
        this.loginBtn = page.locator('//input[@type="submit"]');
        this.forgotLoginInfoLink = page.locator('//a[text()="Forgot login info?"]');
        this.registerLink = page.locator('//a[text()="Register"]');
        this.atmServices = {
            'withdrawFunds': page.locator('//ul[@class="services"]//li/a[text()="Withdraw Funds"]'),
            'transferFunds': page.locator('//ul[@class="services"]//li/a[text()="Transfer Funds"]'),
            'checkBalance': page.locator('//ul[@class="services"]//li/a[text()="Check Balances"]'),
            'makeDeposits': page.locator('//ul[@class="services"]//li/a[text()="Make Deposits"]'),
        };
        this.onlineServices = {
            'billPay': page.locator('//ul[@class="servicestwo"]//li/a[text()="Bill Pay"]'),
            'accountHistory': page.locator('//ul[@class="servicestwo"]//li/a[text()="Account History"]'),
            'transferFunds': page.locator('//ul[@class="servicestwo"]//li/a[text()="Transfer Funds"]')
        };   
        this.latestNews = {
            'newsDate': page.locator('//ul[@class="events"]//li[@class="captionthree"]'),
            'newsOne': page.locator('//ul[@class="events"]//li/a[text()="ParaBank Is Now Re-Opened"]'),
            'newsTwo': page.locator('//ul[@class="events"]//li/a[text()="New! Online Bill Pay"]'),
            'newsThree': page.locator('//ul[@class="events"]//li/a[text()="New! Online Account Transfers"]')
        };
        this.footer = page.locator('#footerPanel');
        this.footerHomeLink = this.footer.locator('//li/a[text()="Home"]');
        this.footerAboutUsLink = this.footer.locator('//li/a[text()="About Us"]');
        this.footerContactUsLink = this.footer.locator('//li/a[text()="Contact Us"]');
        this.footerSiteMapLink = this.footer.locator('//li/a[text()="Site Map"]');
        this.footerServicesLink = this.footer.locator('//li/a[text()="Services"]');
        this.footerProductsLink = this.footer.locator('//li/a[text()="Products"]');
        this.footerLocationsLink = this.footer.locator('//li/a[text()="Locations"]');
        this.footerForumsLink = this.footer.locator('//li/a[text()="Forum"]');
        this.copyrightText = page.locator('//p[@class="copyright"]');
        this.servicesReadMoreLink = page.locator('(//p[@class="more"]//a[text()="Read More"]).nth(0)');
        this.newsReadMoreLink = page.locator('(//p[@class="more"]//a[text()="Read More"]).nth(1)');
        this.regFirstName = page.locator('//input[@id="customer.firstName"]');
        this.regLastName = page.locator('//input[@id="customer.lastName"]');
        this.regAddress = page.locator('//input[@id="customer.address.street"]');
        this.regCity = page.locator('//input[@id="customer.address.city"]');
        this.regState = page.locator('//input[@id="customer.address.state"]');
        this.regZipCode = page.locator('//input[@id="customer.address.zipCode"]');
        this.regPhone = page.locator('//input[@id="customer.phoneNumber"]');
        this.regSSN = page.locator('//input[@id="customer.ssn"]');
        this.regUsername = page.locator('//input[@id="customer.username"]');
        this.regPassword = page.locator('//input[@id="customer.password"]');
        this.regConfirmPassword = page.locator('//input[@id="repeatedPassword"]');
        this.regSubmitBtn = page.locator('//input[@value="Register"]');
        this.regSuccessMessage = page.locator('//div[@id="rightPanel"]/p');
        this.regErrorMessage = page.locator('//span[@class="error"]');
        this.forgotFirstNameInput = page.locator('//input[@id="firstName"]');
        this.forgotLastNameInput = page.locator('//input[@id="lastName"]');
        this.forgotAddressInput = page.locator('//input[@id="address.street"]');
        this.forgotCityInput = page.locator('//input[@id="address.city"]');
        this.forgotStateInput = page.locator('//input[@id="address.state"]');
        this.forgotZipCodeInput = page.locator('//input[@id="address.zipCode"]');
        this.forgotSSNInput = page.locator('//input[@id="ssn"]');
        this.forgotSubmitBtn = page.locator('//input[@value="Find My Login Info"]');
        this.forgotSuccessMessage = page.locator('//div[@id="rightPanel"]/p');
        this.forgotErrorMessage = page.locator('//span[@class="error"]');
        this.forgotUsernameOutput = page.locator('//div[@id="rightPanel"]/p[2]/b[1]');
        this.forgotPasswordOutput = page.locator('//div[@id="rightPanel"]/p[2]/b[2]');

    }

    async registerNewUser(userData: RegisterUserData) {
        await this.registerLink.click();
        await this.regFirstName.fill(userData.firstName);
        await this.regLastName.fill(userData.lastName);
        await this.regAddress.fill(userData.address);
        await this.regCity.fill(userData.city);
        await this.regState.fill(userData.state);
        await this.regZipCode.fill(userData.zipCode);
        await this.regPhone.fill(userData.phone);
        await this.regSSN.fill(userData.ssn);
        await this.regUsername.fill(userData.username);
        await this.regPassword.fill(userData.password);
        await this.regConfirmPassword.fill(userData.password);
        await this.regSubmitBtn.click();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async logout() {
        await this.topPanel.locator('//a[text()="Log Out"]').click();
    }


}
