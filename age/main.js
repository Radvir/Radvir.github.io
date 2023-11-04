let birthDate = new Date('2007-07-13');
document.addEventListener(ch_age, ()=>{
    let new_age = prompt("Date of birth");
    birthDate = new Date(birthDate);
});
setInterval(() => {
    let currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    num.innerHTML = `${ageInYears}`;
    console.log(ageInYears);
    console.log(num);
}, 50);