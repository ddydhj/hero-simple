import { HeroSimplePage } from './app.po';

describe('hero-simple App', () => {
  let page: HeroSimplePage;

  beforeEach(() => {
    page = new HeroSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
