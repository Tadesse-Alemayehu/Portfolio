import '../mock/initialDOM.js';

describe('Test initial dom content', () => {
  const section = document.querySelectorAll('section');
  test('Assert all section are present inside the DOM', () => {
    expect(section.length).toBe(5);
  });

  test('Assert menu element for toggling menu presents', () => {
    const menuElement = document.querySelector('#app-bar-mobile').querySelector('.menu');
    const visibleMenu = menuElement.querySelectorAll('.hide');
    expect(menuElement).toBeTruthy();
    expect(menuElement.childElementCount).toBe(2);
    expect(visibleMenu.length).toBe(1);
  });
});
