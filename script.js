


const no = document.getElementById("btn2");
const yes = document.getElementById("btn1");

//group 1 of btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12');

//second group of btts

const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12');


//IMAGESSSSSS///////

const hands = document.getElementById('hands');
const chico_sad = document.getElementById('chico_sad');
const crying = document.getElementById('crying');
const sadboi = document.getElementById('sadboi');
const sadman = document.getElementById('sadman');
const hahahuhu = document.getElementById('hahahuhu');
const hang = document.getElementById('hang');
const sadsad = document.getElementById('sadsad');


// WORDS //
const bbtt1_p = document.getElementById('bbtt1_p');
const bbtt2_p = document.getElementById('bbtt2_p');
const bbtt3_p = document.getElementById('bbtt3_p');
const bbtt4_p = document.getElementById('bbtt4_p');
const bbtt5_p = document.getElementById('bbtt5_p');
const bbtt6_p = document.getElementById('bbtt6_p');
const bbtt7_p = document.getElementById('bbtt7_p');
const bbtt8_p = document.getElementById('bbtt8_p');



no.addEventListener("click", function () {
    document.body.style.background = "url('sad.gif') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    btt12.style.opacity = "1";
    no.style.opacity = "0";
    bbtt1_p.style.display = "block";
    changeAudio('balang-araw.mp3');
});

function changeAudio(source) {
    const audio = document.getElementById('audio');
    const newSource = document.createElement('source');
    newSource.src = source;
    newSource.type = 'audio/mpeg';
    audio.innerHTML = '';
    audio.appendChild(newSource);
    audio.load();
    audio.play();
}


btt12.addEventListener("click", function () {
    btt12.style.opacity = "0";
    bbtt3.style.opacity = "1";
    hands.style.opacity = "1";
    bbtt2_p.style.display = "block";
    bbtt1_p.style.display = "none";
});

bbtt3.addEventListener("click", function () {
    btt1.style.opacity = "1";
    bbtt3.style.opacity = "0";
    chico_sad.style.opacity = "1";
    bbtt2_p.style.display = "none";
    bbtt3_p.style.display = "block";
});

btt1.addEventListener("click", function () {
    btt1.style.opacity = "0";
    btt4.style.opacity = "1";
    hahahuhu.style.opacity = "1";
    bbtt3_p.style.display = "none";
    bbtt4_p.style.display = "block";
});


btt4.addEventListener("click", function () {
    swal({
        title: "O di kaya punta tayong classic savory para sa fave mo HAHAHAHAHAHA I LOVE YOU",
        content: {
            element: "img",
            attributes: {
                src: "mushroom.jpg",
                alt: "Mushroom",
                style: "width: 50%; height: auto;"
            },
        },
        icon: "info",
        timer: 5000,
        buttons: false,
    });

    btt2.style.opacity = "1";
    btt4.style.opacity = "0";
    bbtt4_p.style.display = "none";
});


btt2.addEventListener("click", function () {
    btt2.style.opacity = "0";
    bbtt1.style.opacity = "1";
    crying.style.opacity = "1";
    yes.style.padding = "50px";
    bbtt5_p.style.display = "block";

});

bbtt1.addEventListener("click", function () {
    bbtt8.style.opacity = "1";
    bbtt1.style.opacity = "0";
    sadman.style.opacity = "1";
    bbtt5_p.style.display = "none";
    bbtt6_p.style.display = "block";
});

bbtt8.addEventListener("click", function () {
    bbtt8.style.opacity = "0";
    btt6.style.opacity = "1";
    hang.style.opacity = "1";
    bbtt6_p.style.display = "none";
    bbtt7_p.style.display = "block";
});

btt6.addEventListener("click", function () {
    bbtt6.style.opacity = "0";
    btt4.style.opacity = "0";
    btt6.style.opacity = "0";
    bbtt7_p.style.display = "none";
    bbtt8_p.style.display = "block";
});

// btt3.addEventListener("click", function () {
//     bbtt6.style.opacity = "1";
//     btt1.style.opacity = "1";
//     btt4.style.opacity = "1";
//     btt3.style.opacity = "1";
//     btt2.style.opacity = "1";
//     btt5.style.opacity = "1";
//     btt6.style.opacity = "1";
//     btt9.style.opacity = "1";
//     btt11.style.opacity = "1";
//     btt10.style.opacity = "1";
//     bbtt1.style.opacity = "1";
//     bbtt2.style.opacity = "1";
//     bbtt3.style.opacity = "1";
//     bbtt4.style.opacity = "1";
//     bbtt5.style.opacity = "1";

//     bbtt7.style.opacity = "1";

//     bbtt9.style.opacity = "1";



// });









