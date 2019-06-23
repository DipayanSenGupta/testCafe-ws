// import { HomePage } from './page-object';
// import { dipayan } from './roles'

// fixture `GitHub Tests`
//     .page `https://github.com`;

// const page = new HomePage();

// test('User name is displayed correctly', async t => {
//     await t
//         .useRole(dipayan)
//         .click(page.avatar)
//         .expect(page.dropdownHeader.textContent).contains('Signed in as dipayan')

// });

import { Selector } from 'testcafe';
import { LoginPage } from './page-object';
import { HomePage } from './page-object';
import { Role } from 'testcafe';

fixture `Github login`    
.page `https://github.com/login`;

const page = new LoginPage();
const loginPageUrl = 'https://github.com/login';

test('start github page', async t => {});

test('fill-up & click sign in button', async t => {
	 await t
	.typeText(page.login, 'dip.himu@gmail.com')
	.typeText(page.password, '7D<U>K/`Qrt_&-Rx')
	.click(page.signIn);
});

// const dipayan = Role(loginPageUrl, async t => {
// 		 await t
//   .typeText(page.login, 'dip.himu@gmail.com')
//   .typeText(page.password, '7D<U>K/`Qrt_&-Rx')
//   .click(page.signIn);

// });

// test('authentication-completed',async t => {
// 	await t
// 	.click(page.)
// });

test('User name is displayed correctly', async t => {
    await t
        .useRole(dipayan)
        .click(page.avatar)
        .expect(page.dropdownHeader.textContent).contains('Signed in as dipayan')

});