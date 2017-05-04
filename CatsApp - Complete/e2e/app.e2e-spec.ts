import { CatsAppPage } from './app.po';

describe('cats-app App', () => {
  let page: CatsAppPage;

  beforeEach(() => {
    page = new CatsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
