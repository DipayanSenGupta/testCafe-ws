 // test()
 import { Selector } from 'testcafe';
fixture `Leaflet Map - Testing Render`    
.page `http://localhost:3001`;

test('The testing environment works', async t => {});

test('The marker is visible', async t => {
 await t
 .click('#addMarker')
 .expect(Selector('img.leaflet-marker.icon'))
 .ok('The marker must exist')
});

test('The marker image pulls from the correct source', async t => {
 await t
   .click('#addMarker')
   .expect(Selector('.leaflet-marker-icon')
   .withAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png'))
   .ok('The marker must come from the proper source')
});