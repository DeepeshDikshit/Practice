const toggle = document.querySelectorAll(".toggle");
const answer = document.querySelectorAll(".answer");
toggle.forEach((btn, index) => {
   btn.addEventListener('click', () => {
      answer[index].classList.toggle('active');
      btn.textContent = answer[index].classList.contains("active") ? "-" : "+";
   })
})