import { TodoClientPage } from './app.po';

describe('todo-client App', () => {
  let page: TodoClientPage;

  beforeEach(() => {
    page = new TodoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
