import { NgMaterialNdcPage } from './app.po';

describe('ng-material-ndc App', () => {
  let page: NgMaterialNdcPage;

  beforeEach(() => {
    page = new NgMaterialNdcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
