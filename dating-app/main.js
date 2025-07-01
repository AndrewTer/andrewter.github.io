(function(){
  var swiper = new Swiper('.mobile .screen .selected-user-card#liked-user-card .liked-user-card-full-info-swiper .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      observer: true,  
      observeParents: true,
    });
})(jQuery);

document.getElementById('show-more-info-btn').addEventListener('click', function() {
  document.getElementById('liked-user-card').scrollBy({
    top: document.getElementById('liked-user-card-swiper').offsetTop,
    behavior: 'smooth'
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const tabsProfile = document.querySelectorAll('.profile-menu-item-link');
  const tabsEvents = document.querySelectorAll('.events-menu-item-link');
  const tabProfileContents = document.querySelectorAll('.profile-tab-pane');
  const tabEventsContents = document.querySelectorAll('.events-tab-pane');

  tabsProfile.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();

      // Удаляем класс 'active' у всех вкладок и содержимого
      tabsProfile.forEach(t => t.classList.remove('active'));
      tabProfileContents.forEach(tc => tc.classList.remove('active'));

      // Добавляем класс 'active' к текущей вкладке и соответствующему содержимому
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  tabsEvents.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();

      // Удаляем класс 'active' у всех вкладок и содержимого
      tabsEvents.forEach(t => t.classList.remove('active'));
      tabEventsContents.forEach(tc => tc.classList.remove('active'));

      // Добавляем класс 'active' к текущей вкладке и соответствующему содержимому
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});



let
  currentNearbyUsersFilterPositionForShow = 100,
  currentNearbyUsersFilterPositionForHide = 0;

function showNearbyUsersFilter(currentNearbyUsersFilterPositionForShow) {
  setInterval(function() {
    if (currentNearbyUsersFilterPositionForShow > 0)
    {
      currentNearbyUsersFilterPositionForShow = currentNearbyUsersFilterPositionForShow - 2;
      document.getElementById('nearby-users-filters').style.top = currentNearbyUsersFilterPositionForShow + '%';
    }else
      return;
  }, 1);
}

function hideNearbyUsersFilter(currentNearbyUsersFilterPositionForHide) {
  setInterval(function() {
    if (currentNearbyUsersFilterPositionForHide < 100)
    {
      currentNearbyUsersFilterPositionForHide = currentNearbyUsersFilterPositionForHide + 2;
      document.getElementById('nearby-users-filters').style.top = currentNearbyUsersFilterPositionForHide + '%';
    }else
      return;
  }, 1);
}

document.getElementById('open-filters-btn').addEventListener('click', function() {
  showNearbyUsersFilter(currentNearbyUsersFilterPositionForShow);
});

document.getElementById('hide-filters-btn').addEventListener('click', function() {
  hideNearbyUsersFilter(currentNearbyUsersFilterPositionForHide);
});

document.getElementById('save-filters-btn').addEventListener('click', function() {
  hideNearbyUsersFilter(currentNearbyUsersFilterPositionForHide);
});

const matchPercentageValue = document.querySelector("#match-percentage-value");
const matchPercentageInput = document.querySelector("#match-percentage-input");
matchPercentageValue.textContent = matchPercentageInput.value;
matchPercentageInput.addEventListener("input", (event) => {
  matchPercentageValue.textContent = event.target.value;
});



const slogansArray = ["Притягивай, а не ищи!", "Жизнь слишком коротка для скучных знакомств!", "Твой человек уже рядом!", "Ваши маршруты должны пересечься!"];

function getRandomSlogan() {
  let randomIndex = Math.floor(Math.random() * slogansArray.length);
  return slogansArray[randomIndex];
}

function changeSlogan() {
  document.getElementById('auth-app-slogan').textContent = getRandomSlogan();
}

setInterval(changeSlogan, 5000);



function countTimeDown(totalSecondsCount, elementId) {
  let totalSeconds = totalSecondsCount;

  const updateClock = () => {
    totalSeconds--;

    if (totalSeconds < 0)
    {
      clearInterval(intervalId);
      document.getElementById('map-with-countdown-timer-text').innerHTML = 'Карта более недоступна';
      return;
    }

    const minutesCount = Math.floor(totalSeconds / 60);
    const secondsCount = totalSeconds % 60;

    document.getElementById(elementId).innerHTML = '0:' + (minutesCount > 9 ? minutesCount : '0' + minutesCount) + ':' + (secondsCount > 9 ? secondsCount : '0' + secondsCount);
  };

  const intervalId = setInterval(updateClock, 1000);
  updateClock();
}

countTimeDown(3600, 'countdown-timer'); // 3600сек = 1ч