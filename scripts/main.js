document.addEventListener('DOMContentLoaded', () => {
  const fullPage = document.querySelector('#main-mobile');
  const navigationSection = document.querySelector('#navigation');
  const heading = document.querySelector('#heading');
  const recentWorkSection = document.querySelector('#recent-work');
  const aboutMeSection = document.querySelector('#about-me');
  const contactSection = document.querySelector('#contact-form');
  const footerSection = document.querySelector('#footer');
  const mobileMenuBar = document.querySelector('#app-bar-mobile');
  const menu = mobileMenuBar.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const listOfMenus = document.querySelector('#app-bar-menus');
  const toolBar = listOfMenus.querySelector('#tool-bar');
  const humBurger = mobileMenuBar.querySelectorAll('.menu-icon')[0];
  const returnHome = document.querySelector('#closeMenu');
  const recentWorkModal = document.querySelector('#recent-work-modal');
  const cardContainer = recentWorkSection.querySelector('.card-flow');
  const mobileMenuBarHeight = mobileMenuBar.scrollHeight;
  const windowHeight = window.innerHeight;
  const goUp = document.getElementById('go-up');
  const godown = document.getElementById('go-down');
  const sections = [
    navigationSection, heading, recentWorkSection,
    aboutMeSection, contactSection,
    footerSection];
  // dispose mobile menu
  function disposeMobileMenu() {
    listOfMenus.classList.toggle('hide');
    listOfMenus.classList.toggle('show');
    logo.text = 'Welcome';
    humBurger.classList.remove('hide');
    menu.lastChild.remove();
    document.body.setAttribute('style', '    max-height: unset;overflow: visible;');
  }

  humBurger.addEventListener('click', () => {
    listOfMenus.classList.toggle('hide');
    listOfMenus.classList.toggle('show');
    logo.text = '';
    listOfMenus.setAttribute('style', `position: absolute; top:${mobileMenuBarHeight}px;z-index: 1`);
    toolBar.setAttribute('style', `min-height: ${windowHeight - mobileMenuBarHeight - 40}px`);
    document.body.setAttribute('style', '    max-height: 100vh;overflow: hidden;');
    const cancel = document.createElement('li');
    cancel.classList.add('menu-icon');
    const img = document.createElement('img');
    img.setAttribute('src', './images/icons/Cancel.svg');
    img.setAttribute('alt', 'close');
    cancel.appendChild(img);
    humBurger.classList.add('hide');
    menu.appendChild(cancel);
    cancel.addEventListener('click', disposeMobileMenu);
    listOfMenus.querySelectorAll('li').forEach((element) => {
      element.addEventListener('click', disposeMobileMenu);
    });
  });
  returnHome.addEventListener('click', disposeMobileMenu);

  /* Portfolio: details popup window */

  const hideModal = () => {
    recentWorkModal.classList.add('hide');
    recentWorkModal.innerHTML = `<div class="container"> 
    <span id="close-modal-desktop"></span> 
    <div id="feature">  </div> </div>`;
    fullPage.setAttribute('style', 'height: auto');
  };

  // this method will create and display modal from previously defined objects(project)
  const showModal = (project) => {
    const featureImage = document.createElement('img');
    const title = document.createElement('h2');
    const technology = document.createElement('div');
    const technoList = document.createElement('ul');
    const description = document.createElement('p');
    const links = document.createElement('div');
    const disposeDesktop = recentWorkModal.querySelector('#close-modal-desktop');
    links.innerHTML = `
<a href="${project.liveVersion || '#'}" target="blank">
  <span>See Live </span
  ><img src="./images/icons/go-live.svg" alt="see live" />
</a>
<a href="${project.source || '#'}" target="blank">
  <span>See Source </span>
  <img src="./images/icons/GitHub-white.svg" alt="see source" />
</a>`;
    project.technologies.forEach((technology) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = technology;
      li.appendChild(anchor);
      technoList.appendChild(li);
    });
    title.setAttribute('id', 'title');
    title.textContent = `${project.title} --- ${project.name}`;
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
    recentWorkModal.classList.remove('hide');
    fullPage.setAttribute('style', `height: ${recentWorkModal.scrollHeight}px`);
    disposeDesktop.addEventListener('click', () => hideModal());
    document.body.setAttribute('style', '    max-height: 100vh;overflow: hidden;');
  };

  const createRecentWorkCard = (project) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const text = document.createElement('div');
    text.classList.add('text');
    const projectName = document.createElement('h2');
    projectName.classList.add('project-title');
    projectName.textContent = project.name;
    text.appendChild(projectName);

    const tags = document.createElement('nav');
    tags.classList.add('tags');
    const ul = document.createElement('ul');
    project.technologies.forEach((tech) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = tech;
      li.appendChild(anchor);
      ul.appendChild(li);
    });
    tags.appendChild(ul);
    text.appendChild(tags);

    const button = document.createElement('button');
    button.classList.add('action');
    button.type = 'submit';
    button.textContent = 'See Project';
    button.addEventListener('click', () => showModal(project));
    text.appendChild(button);

    card.appendChild(text);

    return card;
  };

  // create Array having list of projects
  const Projects = [
    {
      name: 'To do lists',
      title: 'To do list organizer',
      description: 'This is a single-page application (SPA) that you can use to organize your daily schedule. You can create a task ✍🏼, mark a task as completed ✔, update its details ⚒, or delete it 🚩. All this without needing to reload a page. ✔',
      featuredImage: './images/pictures/project-snapshots/PNG/To-Do-list.PNG',
      featuredImageAlt: 'To-Do-list.PNG Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/To-Do-list/',
      source: 'https://github.com/Tadesse-Alemayehu/To-Do-list',
    },
    {
      name: 'Awesome book project with ES6 syntax.',
      title: 'Awesome book project with ES6 syntax.',
      description: 'Hello there  ✋🏼 . You like reading. here is an awesome single page  App to help you organize your books',
      featuredImage: './images/pictures/project-snapshots/PNG/Awesome-Books-ES6.PNG',
      featuredImageAlt: 'Awesome-Books-ES6.PNG Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/Awesome-Books-ES6/',
      source: 'https://github.com/Tadesse-Alemayehu/Awesome-Books-ES6',
    },
    {
      name: 'Learn to code',
      title: 'Learn to code',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: './images/pictures/project-snapshots/PNG/LEARN-TO-CODE.PNG',
      featuredImageAlt: 'Learn to code project image',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveVersion: 'https://tadesse-alemayehu.github.io/LEARN-TO-CODE/',
      source: 'https://github.com/Tadesse-Alemayehu/LEARN-TO-CODE',
    },
    {
      name: 'Rock-Paper-Scissors',
      title: 'project one',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
      turpis id metus vehicula, a faucibus neque vehicula. Etiam
      tincidunt ante et dui efficitur ultricies. Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi. Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit. Vestibulum tristique
      sapien eu velit porttitor semper. Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida. Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna. Morbi nibh purus, vehicula at`,
      featuredImage: './images/pictures/project-snapshots/PNG/Rock-Paper-Scissors-Advance.PNG',
      featuredImageAlt: 'Rock-Paper-Scissors-Advance.PNG Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/Rock-Paper-Scissors-Advance/',
      source: 'https://github.com/Tadesse-Alemayehu/Rock-Paper-Scissors-Advance',
    },
    {
      name: 'Etch-A-Sketch',
      title: 'Project two(drawing board)',
      description: 'So you love to draw? Good! This is an Etch-a-sketch project and you can create an awesome drawing board with your pre-defined pixel range and draw your picture.',
      featuredImage: './images/pictures/project-snapshots/PNG/Etch-A-Sketch.PNG',
      featuredImageAlt: 'Etch-A-Sketch.PNG Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/Etch-A-Sketch/',
      source: 'https://github.com/Tadesse-Alemayehu/Etch-A-Sketch',
    },
    {
      name: 'YouTube-Clone',
      title: 'Project five. Microverse Bootcamp',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.In varius
      turpis id metus vehicula, a faucibus neque vehicula.Etiam
      tincidunt ante et dui efficitur ultricies.Nulla ex felis, mattis
      eget lacinia sed, molestie at nisi.Nulla iaculis mi finibus augue
      pharetra, quis pellentesque metus hendrerit.Vestibulum tristique
      sapien eu velit porttitor semper.Aliquam sed elementum enim.
      Suspendisse ultrices quis enim at gravida.Ut lectus urna, cursus
      et tellus in, faucibus lacinia urna.Morbi nibh purus, vehicula at`,
      featuredImage: './images/pictures/project-snapshots/PNG/YouTube-Clone.PNG',
      featuredImageAlt: 'YouTube-Clone Image',
      technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      liveVersion: 'https://tadesse-alemayehu.github.io/YouTube-Clone/',
      source: 'https://github.com/Tadesse-Alemayehu/YouTube-Clone',
    },
  ];

  Projects.forEach((project) => {
    cardContainer.appendChild(createRecentWorkCard(project));
  });

  let linkSection = 0;
  goUp.href = `#${sections[linkSection].getAttribute('id')}`;
  godown.href = `#${sections[linkSection + 1].getAttribute('id')}`;
  goUp.classList.toggle('hide', true);
  const navigationIcon = element => {
    setTimeout(() => {
      console.log('inpromise');
      if (element === goUp)
        linkSection -= 1;
      else
        linkSection += 1;
      if (linkSection < 0) {
        linkSection = 0;
        goUp.classList.toggle('hide', true);
      }
      else if (linkSection >= sections.length - 1) {
        linkSection -= 1;
        godown.classList.toggle('hide', true);
      }
      else {
        goUp.classList.toggle('hide', false);
        godown.classList.toggle('hide', false);
      }
      goUp.href = `#${sections[linkSection].getAttribute('id')}`;
      godown.href = `#${sections[linkSection + 1].getAttribute('id')}`;
    }, 100);

  }
  goUp.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget)
  });
  godown.addEventListener('click', (e) => {
    navigationIcon(e.currentTarget)
    // body

  });
});
