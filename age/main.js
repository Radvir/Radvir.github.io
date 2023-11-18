let current_age = '2007-07-13'
let birthDate = new Date(current_age);
function change_age() {
    let new_age = prompt(`Date of birth (yyyy-mm-dd)\nCurrent: ${birthDate.getFullYear()}-${parseInt(birthDate.getMonth())+1}-${birthDate.getDate()}`);
    console.log(new_age);
    if (new_age == null) {
        birthDate = new Date(current_age);
    }else{
        current_age = new_age;
        birthDate = new Date(current_age);
    }
}
setInterval(() => {
    let currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    let ageInYears = (Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))*(10**14)))/(10**14);
    if (`${ageInYears}`.length != 17) {
        let nulls = "";
        for (let i = 0; i < 17-`${ageInYears}`.length; i++) {
            nulls += "0";
        }
        num.innerHTML = `${ageInYears}` + nulls;
    } else{
        num.innerHTML = `${ageInYears}`;
    }
}, 50);