import { HomePage,NewRepo,Repositories,EditRepoPage,Settings } from './page-object';
import { dipayan } from './role'

fixture `GitHub Tests`
    .page`https://github.com`;

const page = new HomePage();

// test('signed in successful', async t => {
// 		await t
// 		.useRole(dipayan)
// 		.click(page.avatar)
// 		.expect(page.dropdownItemSuccess.textContent).contains('Signed in as himu-dip')

// });

const page1 = new NewRepo();

// test('new repo created ', async t => {
// 		await t
// 			.useRole(dipayan)
// 			.click(page.octiconPlus)
// 			.expect(page.dropdownItem.textContent).contains('New repository')
// 			.click(page.newRepo)
//         .typeText(page1.repositoryName, 'himudip5mail.com')
//         .typeText(page1.repositorydescription, '7<U>Kr/`Qrt_&-Rx')
//         .click(page1.submit);
// });

const page2 = new Repositories();
const page3 = new EditRepoPage();
const page4 = new Settings();

// test('repo edited', async t => {
// 		await t
// 			.useRole(dipayan)
// 			// .click(page.octiconPlus)
// 			.click(page.avatar)
// 			.expect(page.dropdownItemRepository.textContent).contains('Your repositories')
// 			.click(page.dropdownItemRepository)
// 			.click(page2.repositoryToEdit)
// 			.click(page3.settings)
// 			.typeText(page4.rename, 'yahoo')
// 			.pressKey('ctrl+a delete')
// 			.typeText(page4.rename, 'yahoo')
// 			.wait(5000)

// });

test('repo deleted', async t => {
		await t
			.useRole(dipayan)
			// .click(page.octiconPlus)
			.click(page.avatar)
			.expect(page.dropdownItemRepository.textContent).contains('Your repositories')
			.click(page.dropdownItemRepository)
			.click(page2.repositoryToEdit)
			.click(page3.settings)
			.click(page3.delete)
			// .typeText(page4.rename, 'yahoo')
			// .pressKey('ctrl+a delete')
			// .typeText(page4.rename, 'yahoo')
			.wait(5000)

});

