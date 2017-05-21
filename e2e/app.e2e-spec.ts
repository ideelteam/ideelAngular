import { TempAngularPage } from './app.po';

describe('temp-angular App', () => {
  let page: TempAngularPage;

  beforeEach(() => {
    page = new TempAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
