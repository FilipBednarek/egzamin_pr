const but = document.querySelector(`button`);
but.addEventListener('click', function (evt) {
  evt.preventDefault();
  const wzrost = document.querySelector(`#wzrost`).value / 100;
  const waga = document.querySelector(`#waga`).value;
  let BMI = (waga / Math.pow(wzrost, 2)).toFixed(1);
  const wskBMI = document.querySelector(`.wskBMI`);
  const katBMI = document.querySelector(`.katBMI`);
  wskBMI.innerHTML = `Twój BMI = ${BMI}`;

  if (BMI < 18.5) {
    katBMI.innerHTML = `Masz niedowagę`;
    katBMI.style.color = 'red';
  } else if (BMI < 24.9) {
    katBMI.innerHTML = `Masz wagę w normie`;
    katBMI.style.color = 'green';
  } else if (BMI < 29.9) {
    katBMI.innerHTML = `Masz nadwagę`;
    katBMI.style.color = 'red';
  } else if (BMI < 34.9) {
    katBMI.innerHTML = `Masz otyłość 1st.`;
    katBMI.style.color = 'red';
  } else if (BMI <= 39.9) {
    katBMI.innerHTML = `Masz otyłość 2st.`;
    katBMI.style.color = 'red';
  } else if (BMI > 39.9) {
    katBMI.innerHTML = `Masz otyłość 3st.`;
    katBMI.style.color = 'red';
  }
});
