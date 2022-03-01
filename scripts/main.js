document.addEventListener('DOMContentLoaded', () => {
  const fullPage = document.querySelector('#main-mobile');
  const mobileMenuBar = document.querySelector('#app-bar-mobile');
  const menu = mobileMenuBar.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const ListOfMenus = document.querySelector('#app-bar-menus');
  const toolBar = ListOfMenus.querySelector('#tool-bar');
  const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
  const returnHome = document.querySelector('#closeMenu');
  const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
  const windowHeight = window.innerHeight;
  function disposeMobileMenu() {
    ListOfMenus.classList.toggle('display-none');
    ListOfMenus.classList.toggle('show');
    logo.text = 'Welcome';
    humBurger.classList.remove('display-none');
    menu.lastChild.remove();
  }
  humBurger.addEventListener('click', () => {
    ListOfMenus.classList.toggle('display-none');
    ListOfMenus.classList.toggle('show');
    logo.text = '';
    ListOfMenus.style = `position: absolute; top:${mobileMenuBarHeight}px`;
    toolBar.style = `min-height: ${windowHeight - mobileMenuBarHeight - 40}px`;
    const cancel = document.createElement('li');
    cancel.classList.add('menu-icon');
    const img = document.createElement('img');
    img.setAttribute('src', './images/icons/Cancel.svg');
    img.setAttribute('alt', 'close');
    cancel.appendChild(img);
    humBurger.classList.add('display-none');
    menu.appendChild(cancel);
    cancel.addEventListener('click', disposeMobileMenu);
    ListOfMenus.querySelectorAll('li').forEach((element) => {
      element.addEventListener('click', disposeMobileMenu);
    });
  });
  returnHome.addEventListener('click', disposeMobileMenu);


  /* Portfolio: details popup window */

  // create Array having list of projects 
  const recentWork = document.querySelector('#recent-work');
  const ProjectObjects = recentWork.querySelectorAll('.card');
  const Projects = [];
  ProjectObjects.forEach(project => {
    const projectObject = {
      name: project.getAttribute('data-name'),
      title: project.querySelector('.project-title').textContent,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: project.getAttribute('data-image'),
      featuredImageAlt: project.getAttribute('data-name') + ' Image',
      technologies: Array.from(project.querySelectorAll('li')),
      liveVersion: project.getAttribute('data-live'),
      source: project.getAttribute('data-source'),
    }
    project.querySelector('.action').addEventListener('click', () => show_modal(projectObject));
    Projects.push(projectObject);
  });


  // create modal
  const show_modal = (project) => {
    const recentWorkModal = document.querySelector('#recent-work-modal');
    const featureImage = document.createElement('img');
    const title = document.createElement('h2');
    const technology = document.createElement('div');
    const technoList = document.createElement('ul');
    const description = document.createElement('p');
    const links = document.createElement('div');
    links.innerHTML = `
  <a href="#">
    <span>See Live </span
    ><img src="./images/icons/go-live.svg" alt="see live" />
  </a>
  <a href="#">
    <span>See Source </span>
    <img src="./images/icons/GitHub-white.svg" alt="see source" />
  </a>`
    project.technologies.forEach(list => technoList.appendChild(list));
    // console.log(technoList);
    title.setAttribute('id', 'title');
    title.textContent = project.title;
    featureImage.setAttribute('src', project.featuredImage);
    featureImage.setAttribute('alt', project.featuredImageAlt);
    technology.setAttribute('id', 'technology');
    technology.appendChild(technoList);
    description.classList.add('description');
    links.classList.add('links');
    description.textContent = project.description;
    recentWorkModal.querySelector('#feature').appendChild(featureImage);
    recentWorkModal.querySelector('.container').appendChild(title);
    recentWorkModal.querySelector('.container').appendChild(technology);
    recentWorkModal.querySelector('.container').appendChild(description);
    recentWorkModal.querySelector('.container').appendChild(links);
    recentWorkModal.classList.remove('display-none');
    fullPage.setAttribute('style', 'height: 0px')
  }

});

//document.querySelectorAll(`[data-name]`);
//document.querySelectorAll(`[data-name='project-1']`);
