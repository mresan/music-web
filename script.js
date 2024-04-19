const originalElement = document.getElementById('ori-item');
const duplicateContainer = document.getElementById('items');

const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

const duplicateElement = () => {
  for (let i = 0; i < 3; i++) {
    const duplicateElement = originalElement.cloneNode(true);
    duplicateElement.id = 'duplicateElement_' + (i + 1);

    duplicateContainer.appendChild(duplicateElement);
  }
};

duplicateElement();
const dupItem1 = document.getElementById('duplicateElement_1');
const dupItem2 = document.getElementById('duplicateElement_2');
const dupItem3 = document.getElementById('duplicateElement_3');

dupItem1.querySelector('p').textContent = '02';
dupItem2.querySelector('p').textContent = '03';
dupItem3.querySelector('p').textContent = '04';

dupItem1.querySelector('img').setAttribute('src', 'img/song-2.png');
dupItem2.querySelector('img').setAttribute('src', 'img/song-3.png');
dupItem3.querySelector('img').setAttribute('src', 'img/song-4.png');

dupItem1.querySelector('h5').textContent = 'Ojo Lali';
dupItem2.querySelector('h5').textContent = 'Bojo Galak';
dupItem3.querySelector('h5').textContent = 'Kangen Koe';

dupItem1.querySelector('p:nth-child(2)').textContent = 'Ayu Dewi';
dupItem2.querySelector('p:nth-child(2)').textContent = 'Linda Joe';
dupItem3.querySelector('p:nth-child(2)').textContent = 'Anggun';

dupItem1.querySelector('.actions p').textContent = '04:15';
dupItem2.querySelector('.actions p').textContent = '03:28';
dupItem3.querySelector('.actions p').textContent = '02:54';

menuOpen.addEventListener('click', () => (sidebar.style.left = '0'));
menuClose.addEventListener('click', () => (sidebar.style.left = '-100%'));
// ------------------------------------
const menu = document.getElementById('menu-open');
// menu.addEventListener('click', function () {
//   this.setAttribute('class', 'klik');
// });
