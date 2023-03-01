import './style.css';

const form = document.querySelector('form');
const phone = document.querySelector('#phone');
const paste = document.querySelector('#paste');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  openWhatsApp();
});

paste.addEventListener('click', () => {
  navigator.clipboard.readText().then((text) => {
    const number = getPhoneNumber(text);
    if (!number) {
      alert('Tidak ada nomor telepon yang terdeteksi');
      return;
    }
    phone.value = number;
    openWhatsApp();
  });
});

function getPhoneNumber(number) {
  number = number.replace(/[\s-]/g, '');
  if (number === '') {
    return;
  }
  if (number.startsWith('+')) {
    number = number.replace('+', '');
  }
  if (number.startsWith('0')) {
    number = number.replace('0', '62');
  }
  if (/\D/.test(number)) {
    const regex = /(\+62|62|0)(\d{3,4}-?\d{3,4}-?\d{3,4})/g;
    const match = regex.exec(number);
    if (!match) {
      return;
    }
    return match[0];
  }
  return number;
}

function openWhatsApp() {
  let number = getPhoneNumber(phone.value);
  if (!number) {
    return;
  }
  const url = `https://api.whatsapp.com/send?phone=${number}`;
  window.open(url, '_blank');
}
