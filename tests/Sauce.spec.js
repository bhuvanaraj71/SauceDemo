
import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/Login';
import { HomePage } from '../Pages/HomePage';

test("Login", async({page})=>
{
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);

    const Home = new HomePage(page);
    await Home.addToCart('Sauce Labs Onesie');
})



