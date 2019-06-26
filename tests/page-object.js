import { Selector } from 'testcafe';

export class LoginPage {
    constructor () {
        this.login    = Selector('#login_field');
        this.password = Selector('#password');
        this.signIn   = Selector('.btn').filter(node => node.value === 'Sign in');
    }
}

export class HomePage {
	constructor () {
		this.octiconPlus = Selector('.octicon-plus');
		this.avatar = Selector('div').child('details').child('summary').child('img');
		this.dropdownItem = Selector('.dropdown-item');
		this.dropdownItemSuccess = Selector('div').child('details').child('details-menu').child('div').child('a');
		this.dropdownItemRepository = Selector('header').child('div').nth(7).child('details').child('details-menu').child('a').nth(1);
		this.newRepo = Selector('a').withText('New repository');

	}
}

export class NewRepo {
	constructor () {
			this.repositoryName    = Selector('#repository_name');
        this.repositorydescription = Selector('#repository_description');
        this.submit   = Selector('.first-in-line');

	}
}

export class Repositories {
	constructor () {
			this.repositoryToEdit    = Selector('#user-repositories-list').child('ul').child('li').nth(0).child('.d-inline-block').find('a');
	}
}

export class EditRepoPage{
		constructor () {
			this.settings   = Selector('nav').child('a').nth(7);
	}
}

export class Settings{
		constructor () {
			this.rename   = Selector('#rename-field');
			this.rename_button = Selector('button').withText('Rename');
			this.delete = Selector('.Box--danger').find('li').nth(-1).child('details').child('summary');
			const repo_name_0 = Selector('.Box--danger').find('li').nth(-1).child('details').child('details-dialog').find('p').find('strong').innerText;
			this.input_field = Selector('.Box--danger').find('li').nth(-1).child('details').child('details-dialog').find('form').child('p').child('.input-block');
			this.button = Selector('.Box--danger').find('li').nth(-1).child('details').child('details-dialog').find('form').find('button');
			this.repo_name_1 = String(repo_name_0).replace('himu-dip/','');
	}
}