/* -------------------------- */

const btn = document.getElementById("btn");

const adv = document.getElementById("advanc");
const time = document.getElementById("time");

const act = document.getElementById("act");

const header = document.querySelector(".namee h4");
const content = document.querySelector(".namee p");

adv.addEventListener('click', () => {
    who_click = ""
    adv.style.display = "";
    adv.classList.remove("animate");
    adv.classList.add("op");

    time.style.animationPlayState = 'paused';

    setTimeout(() => {
        time.classList.remove("time");
        time.style.animationPlayState = "running";
        adv.style.display = "none";
    }, 300);
});

adv.addEventListener('mouseenter', () => {
    time.style.animationPlayState = "paused";
});
adv.addEventListener('mouseleave', () => {
    time.style.animationPlayState = "running";
});

time.addEventListener('animationend', () => {
    who_click = ""
    adv.classList.add("re-animate");
    time.style.animationPlayState = 'paused';

    setTimeout(() => {
        time.classList.remove("time");
        time.style.animationPlayState = "running";
    }, 300);
});


// --------------------------


let family = [];
let can_show_family_achivement = true;

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.classList.toggle('btn-u');
        e.target.textContent = e.target.classList.contains('btn-u') ? 'Unfollow' : 'Follow';

        const card = e.target.closest('.content');
        const name = card.querySelector('.name a').textContent;

        console.log(name);

        if (name === "محمد أحمد زكي" && e.target.textContent === 'Unfollow') {
            family.push(name);
        } if (name === "محمد أحمد زكي" && e.target.textContent === 'Follow') {
            family.pop(name);
        };
        if (name === "أمل أحمد زكي" && e.target.textContent === 'Unfollow') {
            family.push(name);
        } if (name === "أمل أحمد زكي" && e.target.textContent === 'Follow') {
            family.pop(name);
        };
        if (name === "هدي أحمد زكي" && e.target.textContent === 'Unfollow') {
            family.push(name);
        } if (name === "هدي أحمد زكي" && e.target.textContent === 'Follow') {
            family.pop(name);
        };
        if (name === "أحمد كمال زكي" && e.target.textContent === 'Unfollow') {
            family.push(name);
        } if (name === "أحمد كمال زكي" && e.target.textContent === 'Follow') {
            family.pop(name);
        };
        if (name === "هبة عبدالرحمن الباز" && e.target.textContent === 'Unfollow') {
            family.push(name);
        } if (name === "هبة عبدالرحمن الباز" && e.target.textContent === 'Follow') {
            family.pop(name);
        };
        console.log(family);
        if (family.length >= 5 && can_show_family_achivement) {
            console.log("followed all family!");
            adv.style.display = "";

            header.textContent = "لقد تابعت العائلة كلها!";
            content.textContent = "انجزت: متابعة العائلة."

            adv.classList.remove("re-animate");
            adv.classList.remove("op");
            adv.classList.add("animate");
            time.classList.add("time");
            family.length = 0;
            can_show_family_achivement = false;
        }
    }
});
