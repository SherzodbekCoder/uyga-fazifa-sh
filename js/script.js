const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const pNumber = document.querySelector("#number");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nat = document.querySelector("#nat");
const description = document.querySelector("#desc");
const saveB = document.querySelector("#saveButton");
const deleteB = document.querySelector("#deleteButton");
const form = document.querySelector("#form");
const card = document.querySelector("#wrapper");

function validate(name, surname, age, pNumber, email, password) {

    if (!name.value) {
        alert("Ism bolishi shart!");
        name.focus();
        name.style.outlineColor = "red";
        return false;
    } else {
        name.style.outlineColor = "hsl(183, 100%, 50%)";
    }


    if (name.value.trim().length < 3) {
        alert("ism kamida 3 ta belgidan iborat bo'lishi kerak!");
        name.focus();
        name.style.outlineColor = "red";
        return false;
    } else {
        name.style.outlineColor = "hsl(183, 100%, 50%)";
    }


    if (Number(name.value[0])) {
        alert("Ism raqam bilan boshlanmasligi kerak");
        name.focus();
        name.style.outlineColor = "red";
    } else {
        name.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    if (!surname.value) {
        alert("Familiya bolishi shart!");
        surname.focus();
        surname.style.outlineColor = "red";
        return false;
    } else {
        surname.style.outlineColor = "hsl(183, 100%, 50%)";
    }


    if (name.value.trim().length < 3) {
        alert("Familiya kamida 3 ta belgidan iborat bo'lishi kerak!");
        surname.focus();
        surname.style.outlineColor = "red";
        return false;
    } else {
        surname.style.outlineColor = "hsl(183, 100%, 50%)";
    }


    if (Number(surname.value[0])) {
        alert("Familiya raqam bilan boshlanmasligi kerak");
        surname.focus();
        surname.style.outlineColor = "red";
    } else {
        surname.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    if (!age.value) {
        alert("Yoshni kiritish kerak");
        age.focus();
        age.style.outlineColor = "red";
        return false;
    } else {
        name.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    if (age.value <= 0 || age.value > 200) {
        alert("Yosh bunday tarzda bolmaydi");
        age.focus();
        age.style.outlineColor = "red";
        return false;
    } else {
        age.style.outlineColor = "hsl(183, 100%, 50%)";
    }


    if (pNumber.value.trim().length != 13) {
        alert("Belgilar soni noto'g'ri misol:+998911234567");
        pNumber.focus();
        pNumber.style.outlineColor = "red";
        return false;
    } else {
        pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    if (pNumber.value.substring(0, 4) != "+998") {
        alert("Telefon raqam notogri");
        pNumber.focus();
        pNumber.style.outlineColor = "red";
        return false;
    } else {
        pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    if (!Number(pNumber.value.substring(1))) {
        alert("Telefon raqam notogri kiritildi");
        pNumber.focus();
        pNumber.style.outlineColor = "red";
        return false;
    } else {
        pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
    }



    if (password.length < 12) {
        alert("Parolga koʻproq belgilar kerak");
        password.focus();
        password.style.outlineColor = "red";
        return false;
    } else {
        pNumber.style.outlineColor = "hsl(183, 100%, 50%)";
    }

    return true;
}

function getDate() {
    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
}

saveB &&
    saveB.addEventListener("click", function (e) {
        e.preventDefault();

        if (validate(name, surname, age, pNumber, email, password)) {
            const user = {
                name: name.value,
                surname: surname.value,
                age: age.value,
                number: pNumber.value,
                email: email.value,
                password: password.value,
            };

            let u = getDate();
            u.push(user);
            localStorage.setItem("users", JSON.stringify(u));

            localStorage.setItem("users", JSON.stringify(users));

            form.reset();
        } else {
            console.log("otmadi");
        }
    });

function createCard(user) {
    return ` <td>${user.name}</td>
  <td>${user.surname}</td>
  <td>${user.age}</td>
  <td>${user.pNumber}</td>
  <td>${user.email}</td>
  <td>${user.password}</td>
  <br>`;
}

document.addEventListener("DOMContentLoaded", function () {
    let users = getDate();
    users.forEach((user) => {
        let card = createCard(user);
        wrapper.innerHTML += card;
    });
});