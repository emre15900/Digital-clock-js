setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 / 12) * h;
  mm.style.strokeDashoffset = 440 - (440 / 60) * m;
  ss.style.strokeDashoffset = 440 - (440 / 60) * s;

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  //360 / 12 = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  //360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  //360 / 60 = 6
}, 500);
