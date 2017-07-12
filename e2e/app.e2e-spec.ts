import { DeflatePage } from './app.po';

describe('deflate App', () => {
  let page: DeflatePage;

  beforeEach(() => {
    page = new DeflatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
