/* -------------------------- */

const btn = document.getElementById("btn");

const adv = document.getElementById("advanc");
const time = document.getElementById("time");

const act = document.getElementById("act");

const header = document.querySelector(".namee h4");
const content = document.querySelector(".namee p");

let who_click = "";

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
let zzzzzz = [];

let un_zzzzzz = false;
let can_un_zzz = true;

let egy = false;
let can_egy = true;

let can_show_family_achivement = true;

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && who_click === "") {
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

        if (name === "زززززز" && e.target.textContent === 'Unfollow') {
            zzzzzz.push(name);
        } if (name === "زززززز" && e.target.textContent === 'Follow') {
            zzzzzz.pop(name);
        };
        if (name === "ذبابة الكترونية 2" && e.target.textContent === 'Unfollow') {
            zzzzzz.push(name);
        } if (name === "ذبابة الكترونية 2" && e.target.textContent === 'Follow') {
            zzzzzz.pop(name);
        };
        if (name === "ذبابة الكترونية 3" && e.target.textContent === 'Unfollow') {
            zzzzzz.push(name);
        } if (name === "ذبابة الكترونية 3" && e.target.textContent === 'Follow') {
            zzzzzz.pop(name);
        };
        if (name === "لست ذبابة الكترونية" && e.target.textContent === 'Unfollow') {
            zzzzzz.push(name);
        } if (name === "لست ذبابة الكترونية" && e.target.textContent === 'Follow') {
            zzzzzz.pop(name);
        };
        if (name === "أحاول ان اكون ذبابة الكترونية" && e.target.textContent === 'Unfollow') {
            zzzzzz.push(name);
        } if (name === "أحاول ان اكون ذبابة الكترونية" && e.target.textContent === 'Follow') {
            zzzzzz.pop(name);
        };

        if (name === "معاً ضد الذباب الالكتروني" && e.target.textContent === "Unfollow") {
            un_zzzzzz = true;
        } if (name === "معاً ضد الذباب الالكتروني" && e.target.textContent === "Follow") {
            un_zzzzzz = false;
            can_un_zzz = true;
        }

        if (name === "مصر" && e.target.textContent === "Unfollow") {
            egy = true;
        } if (name === "مصر" && e.target.textContent === "Follow") {
            egy = false;
            can_egy = true;
        }

        console.log(family);

        if (family.length >= 5 && who_click === "") {
            who_click = "fam";
            console.log("followed all family!");
            adv.style.display = "";

            header.textContent = "لقد تابعت العائلة كلها!";
            content.textContent = "انجزت: متابعة العائلة."

            adv.classList.remove("re-animate");
            adv.classList.remove("op");
            adv.classList.add("animate");
            time.classList.add("time");
            family.length = 0;
        };
        if (zzzzzz.length >= 5 && who_click === "") {
            who_click = "zzz";
            console.log("followed all zzzz");
            adv.style.display = "";

            header.textContent = "الكثير من الذباب!";
            content.textContent = "انجزت: متابعة الذباب كله.";

            adv.classList.remove("re-animate");
            adv.classList.remove("op");
            adv.classList.add("animate");
            time.classList.add("time");
            zzzzzz.length = 0;
        };
        if (un_zzzzzz && who_click === "" && can_un_zzz) {
            who_click = "unz";
            console.log("followed un-zzzz");
            adv.style.display = "";

            header.textContent = "هل أشم رائحة بيروسول؟";
            content.textContent = "انجزت: متابعة ضد الذباب الالكتروني.";

            adv.classList.remove("re-animate");
            adv.classList.remove("op");
            adv.classList.add("animate");
            time.classList.add("time");
        };
        if (egy && who_click === "" && can_egy) {
            who_click = "egy";
            can_egy = false;
            console.log("تحيا مصر!");
            adv.style.display = "";

            header.textContent = "تحيا مصر!";
            content.textContent = "انجزت: متابعة أم الدنيا.";

            adv.classList.remove("re-animate");
            adv.classList.remove("op");
            adv.classList.add("animate");
            time.classList.add("time");
        };
    }
});
