import { ExamplePagePage } from './app.po';

describe('example-page App', () => {
  let page: ExamplePagePage;

  beforeEach(() => {
    page = new ExamplePagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
