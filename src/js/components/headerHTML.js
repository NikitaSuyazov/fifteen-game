export const headerHTML = () => `
  <header class="header">
    <div class="header__container">
      <a href="#" class="header__logo logo">"Пятнашки"</a>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <button class="menu__control" type="button" id="shuffle-start">Shuffle and start</button>
          </li>
          <li class="menu__item">
            <button class="menu__control" type="button" disabled>Stop</button>
          </li>
          <li class="menu__item">
            <button class="menu__control" type="button">Save</button>
          </li>
          <li class="menu__item">
            <button class="menu__control" type="button">Results</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
`