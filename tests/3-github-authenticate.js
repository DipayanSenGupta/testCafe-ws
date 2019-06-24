import { HomePage,TwoStepAuthPage } from './page-object';
import { dipayan } from './role'
import { Selector } from 'testcafe';

fixture `GitHub Tests`
    .page`https://github.com`;

//const page = new HomePage();
const page = new TwoStepAuthPage();

test('User name password entered', async t => {
await t.useRole(dipayan)
await t.expect(await Selector('h1').innerText).eql('Two-factor authentication');

});


// fixture `GitHub Tests`
//     .page `https://github.com/sessions/two-factor`;

// const page_2 = new TwoStepAuthPage();

// test('two-factor-clicker', async t => {
//     await t
//         .click(page.recovery)
// });

// fixture `GitHub Tests`
    // .page `https://github.com/sessions/two-factor/recovery`;

// const page_3 = new TwoStepAuthPage();

// test('recovery-code-added', async t => {
//     await t
//         .typeText(page.recovery_code, '467ac-5f577')
//         .click(page.verify);
// });
