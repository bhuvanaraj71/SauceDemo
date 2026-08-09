
import {test, expect} from '@playwright/test';
import {LoginPage} from '../Pages/Login';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { CheckOutPage } from '../Pages/Checkout';

test("Login", async({page})=>
{
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(1000);

    const Home = new HomePage(page);
    await Home.addToCart('Sauce Labs Onesie');
    await Home.gotoCart();
    await page.waitForTimeout(1000);

    const Cart = new CartPage(page);
    await Cart.checkout();
    await page.waitForTimeout(1000);

    const CheckOut = new CheckOutPage(page);
    await CheckOut.CheckOutPage('Bhuvi', 'B', '562135');
    await page.waitForTimeout(1000);

})



