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
        this.avatar         = Selector('.avatar');
        this.dropdownHeader = Selector('.dropdown-header');
    }
}

export class TwoStepAuthPage {
    constructor () {
        this.recovery       = Selector('.two-factor-help').withText('Enter a two-factor recovery code');
        this.recovery_code    = Selector('#recovery_code');
        this.verify = Selector('.btn');

    }
}