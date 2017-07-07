import { fakeServer } from 'sinon';

describe('Item Actions', () => {
  let server;
  beforeEach( () => {
    server = fakeServer.create();
  });

  afterEach( () => {
    server.restore();
  })
  it('dispatches action after response', () => {
    server.respondWith('POST', '/api/items', [
      200,
      {
        'Conent-Type': 'applicationjson',
        'Content-Length': 2
      },
      '{ "name": "Buy Milk" }'
    ]);
    store.dispatch(addItem('Buy Milk'))
    server.respond();
  })
})
