import { StockViewPage } from './app.po';

describe('stock-view App', function() {
  let page: StockViewPage;

  beforeEach(() => {
    page = new StockViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
