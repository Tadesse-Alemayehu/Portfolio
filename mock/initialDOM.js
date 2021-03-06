document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Tadesse Alemayehu portfolio home page" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-221054800-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-221054800-1");
    </script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/main.css" />
    <title>Tadesse Portfolio</title>
  </head>
  <body>
    <div id="main-container">
      <section id="navigation">
        <header id="app-bar-mobile">
          <nav id="tool-bar-m">
            <a href="#" class="logo">Welcome</a>
            <ul class="menu">
              <li class="menu-icon">
                <img src="./images/icons/Icon-Menu.svg" alt="menu" />
              </li>
              <li class="menu-icon hide">
                <img src="./images/icons/Cancel.svg" alt="close" />
              </li>
            </ul>
          </nav>
        </header>
        <header id="app-bar-menus" class="hide">
          <nav id="tool-bar">
            <ul class="menu">
              <li>
                <a href="#main-container">Portfolio</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#contact-form">Contact</a>
              </li>
            </ul>
          </nav>
          <div id="closeMenu"></div>
        </header>
      </section>
      <section id="heading">
        <h1 class="primary">
          Hey there. I’m Tadesse
          <span class="i-am">I’m a software developer</span>
        </h1>
        <p class="supporting-text">
          I can help you build a product , feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hesitate to contact me.
        </p>
        <ul class="social-media-icons">
          <li class="icon">
            <a href="https://twitter.com/TadesseWebDev" target="blanc">
              <img
                src="./images/icons/social-media/twitter.svg"
                alt="twitter logo"
            /></a>
          </li>
          <li class="icon">
            <a
              href="https://www.linkedin.com/in/tadesse-alemayehu-60141a221/"
              target="blanc"
            >
              <img
                src="./images/icons/social-media/LinkedinIcon.svg"
                alt="linked in logo"
            /></a>
          </li>
          <li class="icon">
            <a href="#" target="blanc"
              ><img
                src="./images/icons/social-media/medium.svg"
                alt="medium logo"
            /></a>
          </li>
          <li class="icon">
            <a href="https://github.com/Tadesse-Alemayehu" target="blanc"
              ><img
                src="./images/icons/social-media/github.svg"
                alt="GitHub logo"
            /></a>
          </li>
          <li class="icon">
            <a href="https://angel.co/u/tadesse-alemayehu" target="blanc"
              ><img
                src="./images/icons/social-media/angellist.svg"
                alt="angellist logo"
            /></a>
          </li>
        </ul>
        <div id="action">
          <a href="#recent-work" class="icon"></a>
        </div>
      </section>
      <section id="recent-work">
        <h1 class="primary">My Recent Works</h1>
        <hr />
        <div class="card-flow"></div>
      </section>
      <section id="about-me">
        <div class="text">
          <span class="top-background rotate"></span>
          <h2 class="primary">About me</h2>
          <p class="supporting-text">
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hesitate to contact me.
          </p>
          <button class="action1" type="submit">Get My Resume</button>

          <span class="bottom-background rotate"></span>
        </div>
        <div class="card-flow">
          <div class="card">
            <div class="icon">
              <span id="language" class="centerIcon"></span>
            </div>
            <div class="title-tag">
              <h3 class="title">Languages</h3>
              <nav class="tags">
                <ul>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">Ruby</a>
                  </li>
                  <li>
                    <a href="#">Html </a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <span id="frameworks" class="centerIcon"></span>
            </div>
            <div class="title-tag">
              <h3 class="title">Frameworks</h3>
              <nav class="tags">
                <ul>
                  <li>
                    <a href="#">Bootstrap</a>
                  </li>
                  <li>
                    <a href="#">Ruby on rails</a>
                  </li>
                  <li>
                    <a href="#">RSpec</a>
                  </li>
                  <li>
                    <a href="#">Capybara</a>
                  </li>
                  <li>
                    <a href="#">Selenium</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <span id="skills" class="centerIcon"></span>
            </div>
            <div class="title-tag">
              <h3 class="title">Skills</h3>
              <nav class="tags">
                <ul>
                  <li>
                    <a href="#">Codekit</a>
                  </li>
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Codepen</a>
                  </li>
                  <li>
                    <a href="#">Gitlab</a>
                  </li>
                  <li>
                    <a href="#">Terminal</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-form">
        <form action="https://formspree.io/f/mwkyoldg" method="POST">
          <fieldset class="form">
            <legend class="text">
              <h2 class="primary">
                I'm always interested in hearing about new projects, so if you'd
                like to chat please get in touch.
              </h2>
            </legend>
            <ul>
              <li>
                <input
                  type="text"
                  id="user_name"
                  placeholder="Full name"
                  minlength="3"
                  maxlength="30"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="3"
                  maxlength="500"
                  placeholder="Enter text here"
                  required
                ></textarea>
              </li>
              <li><p class="validation-error"></p></li>
              <li>
                <button type="submit">Get in touch</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </section>
      <span class="form-image1"></span>
      <span class="form-image2"></span>
      <footer id="footer">
        <ul class="social-media-icons">
          <li class="icon">
            <a href="https://twitter.com/TadesseWebDev" target="blanc"
              ><img
                src="./images/icons/social-media/twitter.svg"
                alt="twitter logo"
            /></a>
          </li>
          <li class="icon">
            <a href="https://www.linkedin.com/in/tadesse-alemayehu-60141a221/"
              ><img
                src="./images/icons/social-media/LinkedinIcon.svg"
                alt="linked in logo"
            /></a>
          </li>
          <li class="icon">
            <a href="#" target="blanc"
              ><img
                src="./images/icons/social-media/medium.svg"
                alt="medium logo"
            /></a>
          </li>
          <li class="icon">
            <a href="https://github.com/Tadesse-Alemayehu" target="blanc"
              ><img
                src="./images/icons/social-media/github.svg"
                alt="GitHub logo"
            /></a>
          </li>
          <li class="icon">
            <a href="https://angel.co/u/tadesse-alemayehu" target="blanc"
              ><img
                src="./images/icons/social-media/angellist.svg"
                alt="angellist logo"
            /></a>
          </li>
        </ul>
        <div class="my-email">tadalem26@gmail.com</div>
      </footer>
    </div>
    <div id="recent-work-modal" class="hide">
      <div class="container">
        <div id="feature">
          <span id="close-modal-desktop"></span>
        </div>
      </div>
    </div>
    <script type="module" src="scripts/main.js"></script>
    <script src="scripts/form-validation.js"></script>
    <ul id="toggle-section">
      <li class="icon">
        <a id="go-up" href="#">
          <img src="./images/icons/down_button.svg" alt="go up one section" />
        </a>
      </li>
      <li class="icon">
        <a id="go-down" href="#">
          <img src="./images/icons/down_button.svg" alt="go up one section" />
        </a>
      </li>
    </ul>
  </body>
</html>
`;