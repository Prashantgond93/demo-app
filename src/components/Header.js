import React from "react";

const Header = () => {
  return (
    <div>
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
        <a >
            <img src="https://rumble.ancorathemes.com/splash/assets/img/logo.png" alt="Gloss Blog"/>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              DEMOS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
             FEATURE
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
             DOCUMENTATIONS
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              SUPOORT
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting.
        </p>
      </div>
    </div>
  );
};

export default Header;
