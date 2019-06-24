import { Selector } from 'testcafe';

fixture `Navigation`.page `https://xke-introduction-testcafe.surge.sh/`;

test('Access to an article from the home page', async t => {
  // WHEN (enter click on home page)
  const startBtn = await Selector('a').nth(1);
  await t.click(startBtn);
  
  // THEN (the title is the right and we have 100 links on the page)
  await t.expect(await Selector('h4').innerText).eql('Posts Page');
  const links = await Selector('ul').child('a');
  await t.expect(await links.count).eql(100);
  
  // WHEN (click on first article link)
  const firstLink = await links.nth(0).child('div');
  const firstLinkText = await firstLink.innerText; // save title value
  await t.click(firstLink);
  
  // THEN (article page)
  const titleArticleEl = await Selector('h4');
  const titleArticleText = await titleArticleEl.innerText;
  await t.expect(titleArticleText).eql(firstLinkText);
});