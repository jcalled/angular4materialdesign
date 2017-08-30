import { ProdutoraPage } from './app.po';

describe('produtora App', () => {
  let page: ProdutoraPage;

  beforeEach(() => {
    page = new ProdutoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
