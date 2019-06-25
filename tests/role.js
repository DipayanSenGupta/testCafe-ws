import { Role } from 'testcafe';
import { LoginPage } from './page-object';

const page         = new LoginPage();
const loginPageUrl = 'https://github.com/login';

export const dipayan = Role(loginPageUrl, async t => {
    await t
        // To try the test in action, provide real credentials.
        .typeText(page.login, 'himudip56@gmail.com')
        .typeText(page.password, '7D<U>K/`Qrt_&-Rx')
        .click(page.signIn);
});
