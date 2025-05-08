const wrapper = document.querySelector('.slides-wrapper');
const slideCount = document.querySelectorAll('.slide').length;
let current = 0;
let interval = setInterval(nextSlide, 5000);

function showSlide(index) {
    wrapper.style.transform = `translateX(-${800 * index}px)`; // 슬라이드 너비만큼 이동
}

function nextSlide() {
    current = (current + 1) % slideCount;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slideCount) % slideCount;
    showSlide(current);
}

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

function resetTimer() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

showSlide(current);

// 두 번째 슬라이더용 코드
const wrapper02 = document.querySelector('.slides-wrapper02');
const slides02 = document.querySelectorAll('.slide02');
const slideCount02 = slides02.length;

let current02 = 0;
let interval02 = setInterval(nextSlide02, 5000);

function showSlide02(index) {
  wrapper02.style.transform = `translateX(-${750 * index}px)`; // 슬라이드 너비만큼 이동
}

function nextSlide02() {
  current02 = (current02 + 1) % slideCount02;
  showSlide02(current02);
}

function prevSlide02() {
  current02 = (current02 - 1 + slideCount02) % slideCount02;
  showSlide02(current02);
}

function resetTimer02() {
  clearInterval(interval02);
  interval02 = setInterval(nextSlide02, 5000);
}

// 버튼 이벤트 연결
document.querySelector('.controls02 #next02').addEventListener('click', () => {
  nextSlide02();
  resetTimer02();
});
document.querySelector('.controls02 #prev02').addEventListener('click', () => {
  prevSlide02();
  resetTimer02();
});

// 초기 슬라이드 표시
showSlide02(current02);


// section08 그라디언트
const box03A = document.getElementById('box03A');
const btnA = document.getElementById('hoverBtnA');
const box03B = document.getElementById('box03B');
const btnB = document.getElementById('hoverBtnB');

btnA.addEventListener('mouseenter', () => {
  box03A.classList.add('no-gradient');
});
btnA.addEventListener('mouseleave', () => {
  box03A.classList.remove('no-gradient');
});

btnB.addEventListener('mouseenter', () => {
  box03B.classList.add('no-gradient');
});
btnB.addEventListener('mouseleave', () => {
  box03B.classList.remove('no-gradient');
});


// Top / Up / Down Buttons
const sections = document.querySelectorAll("section");
let currentSection = 0;

document.getElementById("btn-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentSection = 0;
});

document.getElementById("btn-up").addEventListener("click", () => {
  if (currentSection > 0) {
    currentSection--;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  }
}); 

document.getElementById("btn-down").addEventListener("click", () => {
  if (currentSection < sections.length - 1) {
    currentSection++;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  }
});

// 현재 위치 추적 (스크롤 시 업데이트)
window.addEventListener("scroll", () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = index;
    }
  });
});