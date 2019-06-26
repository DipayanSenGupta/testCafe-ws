import { HomePage,NewRepo,Repositories,EditRepoPage,Settings } from './page-object';
import { dipayan } from './role'

fixture `GitHub Tests`
    .page`https://github.com`;

const page = new HomePage();


test('signed in successful', async t => {
		await t
		.useRole(dipayan)
		.click(page.avatar)
		.expect(page.dropdownItemSuccess.textContent).contains('Signed in as himu-dip')

});

const page1 = new NewRepo();

test('new repo created ', async t => {
		await t
			.useRole(dipayan)
			.click(page.octiconPlus)
			.expect(page.dropdownItem.textContent).contains('New repository')
			.click(page.newRepo)
        .typeText(page1.repositoryName,  String(new Date().getTime()))
        .typeText(page1.repositorydescription, '7<U>Kr/`Qrt_&-Rx')
        .click(page1.submit);
});

const page2 = new Repositories();
const page3 = new EditRepoPage();
const page4 = new Settings();

test('repo edited', async t => {
		await t
			.useRole(dipayan)
			.click(page.avatar)
			.expect(page.dropdownItemRepository.textContent).contains('Your repositories')
			.click(page.dropdownItemRepository)
			.click(page2.repositoryToEdit)
			.click(page3.settings)
			.typeText(page4.rename, 'yahoo')
			.pressKey('ctrl+a delete')
			.typeText(page4.rename, String(new Date().getTime()))
			.click(page4.rename_button)
			.wait(5000)

});
const str = String(page4.repo_name_1)

test('repo deleted', async t => {
		await t
			.useRole(dipayan)
			.click(page.avatar)
			.expect(page.dropdownItemRepository.textContent).contains('Your repositories')
			.click(page.dropdownItemRepository)
			.click(page2.repositoryToEdit)
			.click(page3.settings)
			.expect(page4.delete.textContent).contains('Delete this repository')
			.click(page4.delete)
			.expect(str).contains('hello')
			//this str is supposed too have the repo name
			.typeText(page4.input_field, str)
			.click(page4.button)
			.wait(5000)
});

