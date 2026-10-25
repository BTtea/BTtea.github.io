/* =========================================================
   PEAK — TAIWAN TRIP
   FINAL VERSION
========================================================= */


/* =========================================================
   TRIP DATA
========================================================= */

const trip = {

    taipei: {

        name: "臺北",

        number: "區域 01 / 03",

        dates: "10/18 — 10/20",

        difficulty: "🏔️❓❓❓❓",

        background: "assets/images/taipei-bg.jpg",

        days: [

            {
                date: "10/18",
                day: "DAY 01",
                note:
                    "第一天抵達台北。這趟旅程的第一個區域，正式開始。",
                photos: [
                    'assets/taipei/10-18/瓜瓜01.jpg',
                    'assets/taipei/10-18/瓜瓜02.jpg',
                    'assets/taipei/10-18/一些朋朋的合照.jpg',
                    'assets/taipei/10-18/月月.jpg'
                ]
            },

            {
                date: "10/19",
                day: "DAY 02",
                note:
                    "台北第二天。把今天遇到的人、風景與笑聲全部收進探險日誌。",
                photos: [
                    'assets/taipei/10-19/阿吉的帥照01.jpg',
                    'assets/taipei/10-19/很認真的吉野.jpg',
                    'assets/taipei/10-19/一辣下一媽賽.jpg',
                    'assets/taipei/10-19/抱得美人歸.jpg',
                    'assets/taipei/10-19/幫幫西西.jpg',
                    'assets/taipei/10-19/台北區域全員登頂.jpg',
                    'assets/taipei/10-19/瓜瓜01.jpg',
                    'assets/taipei/10-19/瓜瓜02.jpg',
                    'assets/taipei/10-19/瓜瓜03.jpg',
                    'assets/taipei/10-19/瓜瓜04.jpg',
                    'assets/taipei/10-19/走啦續攤.jpg',
                    'assets/taipei/10-19/你也想續攤嗎.jpg',
                    'assets/taipei/10-19/續攤歷史見證者.jpg',
                    'assets/taipei/10-19/人類最強兵器現身.jpg',
                    'assets/taipei/10-19/第一式-虛張聲勢.jpg',
                    'assets/taipei/10-19/第二式-浪子踢球雙重奏.jpg',
                    'assets/taipei/10-19/第三式-四手霸王.jpg',
                    'assets/taipei/10-19/奇怪的吉野01.jpg',
                    'assets/taipei/10-19/奇怪的吉野02.jpg',
                    'assets/taipei/10-19/奇怪的吉野03.jpg',
                    'assets/taipei/10-19/奇怪的吉野04.jpg',
                    'assets/taipei/10-19/新世紀福音戰士.jpg',
                    'assets/taipei/10-19/使徒來臨.jpg'
                ]
            },

            {
                date: "10/20",
                day: "DAY 03",
                note:
                    "台北區域完成。整理裝備，準備前往下一個區域：臺中 GOGO。",
                photos: [
                    'assets/taipei/10-20/5杯大冰美.jpg',
                    'assets/taipei/10-20/不要拍了快去催店員上菜.jpg',
                    'assets/taipei/10-20/台北續攤全員到齊.jpg',
                    'assets/taipei/10-20/吉野觀戰01.jpg',
                    'assets/taipei/10-20/吉野觀戰02.jpg',
                    'assets/taipei/10-20/吉野觀戰03.jpg',
                    'assets/taipei/10-20/看你睡覺.jpg',
                    'assets/taipei/10-20/科技冷漠仔.jpg',
                    'assets/taipei/10-20/菜單可以拿過來一點嗎.jpg',
                    'assets/taipei/10-20/菜要上了沒.jpg',
                    'assets/taipei/10-20/認真的吉野.jpg',
                    'assets/taipei/10-20/這邊可以睡覺喔.jpg'
                ]
            }

        ]

    },


    taichung: {

        name: "臺中",

        number: "區域 02 / 03",

        dates: "10/20 — 10/22",

        difficulty: "🏔️🏔️🏔️❓❓",

        background: "assets/images/taichung-bg.jpg",

        days: [

            {
                date: "10/20",
                day: "DAY 03",
                note:
                    "進入第二個區域。新的城市，新的路線，新的回憶。",
                photos: [
                    'assets/taichung/10-20/5杯大冰美.jpg',
                    'assets/taichung/10-20/這邊可以睡覺喔.jpg'
                ]
            },

            {
                date: "10/21",
                day: "DAY 04",
                note:
                    "這裡是旅程的一半 — DAY 05。",
                photos: [
                    'assets/taichung/10-21/玖是要你背.png',
                    'assets/taichung/10-21/旁邊有怪人.png',
                    'assets/taichung/10-21/玖玖跳一次.png',
                    'assets/taichung/10-21/種點綠植.png',
                    'assets/taichung/10-21/山頂怎麼沒有信號棒.png'
                ]
            },

            {
                date: "10/22",
                day: "DAY 05",
                note:
                    "離開台中之前，把今天的照片留在這一頁。",
                photos: []
            }

        ]

    },


    tainan: {

        name: "臺南",

        number: "區域 03 / 03",

        dates: "10/22 — 10/25",

        difficulty: "🏔️🏔️🏔️🏔️🏔️",

        background: "assets/images/tainan-bg.jpg",

        days: [

            {
                date: "10/22",
                day: "DAY 05",
                note:
                    "最後一個區域開始。美食之都 !",
                photos: []
            },

            {
                date: "10/23",
                day: "DAY 06",
                note:
                    "不要忘了伴手禮，還有跟大家的回憶。",
                photos: []
            },

            {
                date: "10/24",
                day: "DAY 07",
                note:
                    "倒數第二天。距離 PEAK 只剩最後一段。",
                photos: [
                    'assets/tainan/10-24/10元就夾出來了.jpg',
                    'assets/tainan/10-24/875元的扇子.jpg',
                    'assets/tainan/10-24/最後一座山全員到齊.jpg',
                    'assets/tainan/10-24/西西外婆參戰.jpg',
                    'assets/tainan/10-24/起床關燈在睡.jpg',
                    'assets/tainan/10-24/需要幫忙要說喔.jpg',
                    'assets/tainan/10-24/高枕無憂.jpg'
                ]
            },

            {
                date: "10/25",
                day: "DAY 08",
                note:
                    "最後一天 !! 旅程結束，但這些照片會一直留在我們的回憶。",
                photos: []
            }

        ]

    }

};


/* =========================================================
   DOM
========================================================= */

const homeView =
    document.getElementById("homeView");

const regionView =
    document.getElementById("regionView");

const regionGrid =
    document.getElementById("regionGrid");

const currentRegion =
    document.getElementById("currentRegion");

const photoCount =
    document.getElementById("photoCount");

const regionTitle =
    document.getElementById("regionTitle");

const regionNumber =
    document.getElementById("regionNumber");

const regionDates =
    document.getElementById("regionDates");

const difficulty =
    document.getElementById("difficulty");

const dayNav =
    document.getElementById("dayNav");

const dayTitle =
    document.getElementById("dayTitle");

const dayNote =
    document.getElementById("dayNote");

const photoGrid =
    document.getElementById("photoGrid");


/* =========================================================
   LIGHTBOX DOM
========================================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");


/* =========================================================
   MUSIC DOM
========================================================= */

const bgm =
    document.getElementById("bgm");

const musicBtn =
    document.getElementById("musicBtn");


/* =========================================================
   UI SOUND EFFECTS
========================================================= */

const hoverSound =
    new Audio("assets/audio/btn_onmouseover.mp3");

const clickSound =
    new Audio("assets/audio/btn_click.mp3");


/*
    音量
*/

hoverSound.volume = 0.35;

clickSound.volume = 0.45;


/* =========================================================
   CURSOR DOM
========================================================= */

const peakCursor =
    document.getElementById("peakCursor");


/* =========================================================
   FINAL DOM
========================================================= */

const finalEnding =
    document.getElementById("finalEnding");

const finalClose =
    document.getElementById("finalClose");

const summitMessage =
    document.getElementById("summitMessage");

const finalPhoto =
    document.getElementById("finalPhoto");


/* =========================================================
   STATE
========================================================= */

let activeRegion = null;

let activeDay = 0;

let lightboxIndex = 0;

let musicStarted = false;


/*
    彩蛋進度

    0 = 尚未完成
    1 = 台北完成
    2 = 台中完成
    3 = 台南完成
*/

let expeditionProgress = 0;


/* =========================================================
   REQUIRED ORDER
========================================================= */

const expeditionOrder = [
    "taipei",
    "taichung",
    "tainan"
];


/* =========================================================
   COUNT PHOTOS
========================================================= */

function getPhotoCount() {

    let count = 0;

    Object.values(trip).forEach(
        region => {

            region.days.forEach(
                day => {

                    count +=
                        day.photos.length;

                }
            );

        }
    );

    return count;
}


/* =========================================================
   HOME REGION BUTTONS
========================================================= */

function renderRegionCards() {

    const icons = [
        "🚩",
        "🏔️",
        "✨"
    ];

    regionGrid.innerHTML = "";

    Object.entries(trip).forEach(
        ([key, region], index) => {

            const button =
                document.createElement("button");

            button.className =
                "region-card";

            button.type =
                "button";

            button.dataset.region =
                key;

            button.innerHTML = `

                <span class="region-name">
                    ${region.name}
                </span>

                <br>

                <span class="region-date">
                    ${region.dates}
                </span>

                <span class="region-icon">
                    ${icons[index]}
                </span>

            `;

            button.addEventListener(
                "click",
                () => {

                    openRegion(key);

                }
            );

            regionGrid.appendChild(button);

        }
    );

    updatePhotoCount();

}


/* =========================================================
   UPDATE PHOTO COUNT
========================================================= */

function updatePhotoCount() {

    photoCount.textContent =
        String(
            getPhotoCount()
        ).padStart(2, "0");

}


/* =========================================================
   CHECK REGION ORDER
========================================================= */

function canEnterRegion(key) {

    const requiredRegion =
        expeditionOrder[expeditionProgress];


    /*
        如果是目前要求的區域
        → 可以進入
    */

    if(key === requiredRegion) {

        return true;

    }


    /*
        其他區域完全不 disable。

        使用者仍然可以點。
        只是這次不會推進彩蛋進度。
    */

    return true;

}


/* =========================================================
   OPEN REGION
========================================================= */

function openRegion(key) {

    /*
        保留所有按鈕可以自由點擊。

        只有「正確順序 + 回到首頁」
        才會推進 expeditionProgress。
    */

    activeRegion =
        trip[key];

    activeDay =
        0;


    currentRegion.textContent =
        activeRegion.name;


    /*
        地區背景
    */

    regionView
        .querySelector(".region-page")
        .style.backgroundImage =
            `url("${activeRegion.background}")`;


    homeView.classList.remove(
        "active"
    );

    regionView.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    renderRegion();

}


/* =========================================================
   RETURN HOME
========================================================= */

function returnHome() {

    if(activeRegion) {

        const currentKey =
            expeditionOrder[
                expeditionProgress
            ];

        const activeKey =
            Object.keys(trip).find(
                key =>
                    trip[key] === activeRegion
            );

        if(
            activeKey === currentKey
        ) {

            expeditionProgress++;

        }

    }


    regionView.classList.remove(
        "active"
    );

    homeView.classList.add(
        "active"
    );


    activeRegion = null;


    currentRegion.textContent =
        "營地";


    regionView
        .querySelector(".region-page")
        .style.backgroundImage =
        "none";


    /*
        =====================================================
        回到首頁時重新生成狀態條
        =====================================================
    */

    updateStatusBar();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    checkFinalUnlock();

}


/* =========================================================
   RENDER REGION
========================================================= */

function renderRegion() {

    if(!activeRegion) {
        return;
    }


    regionTitle.textContent =
        activeRegion.name;

    regionNumber.textContent =
        activeRegion.number;

    regionDates.textContent =
        activeRegion.dates;

    difficulty.textContent =
        activeRegion.difficulty;


    dayNav.innerHTML =
        "";


    activeRegion.days.forEach(
        (day, index) => {

            const button =
                document.createElement("button");

            button.className =
                "day-button";

            button.type =
                "button";


            if(index === activeDay) {

                button.classList.add(
                    "active"
                );

            }


            button.innerHTML = `

                <b>
                    ${day.date}
                </b>

                <span>
                    ${day.day}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    activeDay =
                        index;

                    renderRegion();

                }
            );


            dayNav.appendChild(
                button
            );

        }
    );


    renderDay();

}


/* =========================================================
   RENDER DAY
========================================================= */

function renderDay() {

    if(!activeRegion) {
        return;
    }


    const day =
        activeRegion.days[
            activeDay
        ];


    if(!day) {
        return;
    }


    dayTitle.textContent =
        `${day.date} — ${day.day}`;


    dayNote.textContent =
        day.note;


    photoGrid.innerHTML =
        "";


    if(day.photos.length === 0) {

        createEmptyPhoto(
            "YOUR PHOTO",
            "ADD IMAGE TO SCRIPT.JS"
        );

        createEmptyPhoto(
            "YOUR PHOTO",
            "DROP IMAGE INTO ASSETS"
        );

        return;

    }


    day.photos.forEach(
        (src, index) => {

            const card =
                document.createElement("div");


            card.className =
                "photo-card";


            card.style.setProperty(
                "--rotation",
                index % 2
                    ? "1.2deg"
                    : "-1.1deg"
            );


            card.innerHTML = `

                <img
                    src="${src}"
                    alt="${activeRegion.name} ${day.date}"
                >

                <div class="photo-caption">

                    ${activeRegion.name}
                    /
                    ${day.date}
                    /
                    ${src.split("/").pop().replace(/\.[^/.]+$/, "")}

                </div>

            `;


            const image =
                card.querySelector("img");


            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";


                    const empty =
                        document.createElement("div");


                    empty.className =
                        "photo-empty";


                    empty.innerHTML = `

                        <div>

                            <strong>
                                IMAGE NOT FOUND
                            </strong>

                            <small>
                                ${src}
                            </small>

                        </div>

                    `;


                    card.insertBefore(
                        empty,
                        card.querySelector(
                            ".photo-caption"
                        )
                    );

                }
            );


            card.addEventListener(
                "click",
                () => {

                    openLightbox(index);

                }
            );


            photoGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   EMPTY PHOTO
========================================================= */

function createEmptyPhoto(
    title,
    subtitle
) {

    const card =
        document.createElement("div");


    card.className =
        "photo-card";


    card.style.setProperty(
        "--rotation",
        Math.random() > .5
            ? "1deg"
            : "-1deg"
    );


    card.innerHTML = `

        <div class="photo-empty">

            <div>

                <strong>
                    ${title}
                </strong>

                <small>
                    ${subtitle}
                </small>

            </div>

        </div>

        <div class="photo-caption">
            MEMORY SLOT
        </div>

    `;


    photoGrid.appendChild(
        card
    );

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(index) {

    if(!activeRegion) {
        return;
    }


    const photos =
        activeRegion
            .days[activeDay]
            .photos;


    if(!photos.length) {
        return;
    }


    lightboxIndex =
        index;


    lightboxImage.src =
        photos[lightboxIndex];


    lightboxImage.alt =
        `${activeRegion.name} ${activeRegion.days[activeDay].date}`;


    lightboxCaption.textContent =
        `${activeRegion.name} · ${activeRegion.days[activeDay].date} · PHOTO ${lightboxIndex + 1}/${photos.length}`;


    lightbox.classList.add(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

    lightbox.classList.remove(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    lightboxImage.src =
        "";

}


/* =========================================================
   CHANGE LIGHTBOX PHOTO
========================================================= */

function changeLightbox(step) {

    if(!activeRegion) {
        return;
    }


    const photos =
        activeRegion
            .days[activeDay]
            .photos;


    if(!photos.length) {
        return;
    }


    lightboxIndex =
        (
            lightboxIndex
            + step
            + photos.length
        )
        %
        photos.length;


    openLightbox(
        lightboxIndex
    );

}


/* =========================================================
   HOME BUTTON
========================================================= */

document
    .getElementById("homeBtn")
    .addEventListener(
        "click",
        () => {

            returnHome();

        }
    );


/* =========================================================
   BACK BUTTON
========================================================= */

document
    .getElementById("backHome")
    .addEventListener(
        "click",
        () => {

            returnHome();

        }
    );


/* =========================================================
   PREVIOUS DAY
========================================================= */

document
    .getElementById("prevDay")
    .addEventListener(
        "click",
        () => {

            if(!activeRegion) {
                return;
            }


            activeDay =
                (
                    activeDay
                    - 1
                    + activeRegion.days.length
                )
                %
                activeRegion.days.length;


            renderRegion();

        }
    );


/* =========================================================
   NEXT DAY
========================================================= */

document
    .getElementById("nextDay")
    .addEventListener(
        "click",
        () => {

            if(!activeRegion) {
                return;
            }


            activeDay =
                (
                    activeDay
                    + 1
                )
                %
                activeRegion.days.length;


            renderRegion();

        }
    );


/* =========================================================
   LIGHTBOX CONTROLS
========================================================= */

document
    .getElementById("lightboxClose")
    .addEventListener(
        "click",
        closeLightbox
    );


document
    .getElementById("lightboxPrev")
    .addEventListener(
        "click",
        () => {

            changeLightbox(-1);

        }
    );


document
    .getElementById("lightboxNext")
    .addEventListener(
        "click",
        () => {

            changeLightbox(1);

        }
    );


lightbox.addEventListener(
    "click",
    event => {

        if(event.target === lightbox) {

            closeLightbox();

        }

    }
);


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if(event.key === "Escape") {

            closeLightbox();

        }


        if(
            lightbox.classList.contains(
                "open"
            )
        ) {

            if(event.key === "ArrowLeft") {

                changeLightbox(-1);

            }


            if(event.key === "ArrowRight") {

                changeLightbox(1);

            }

        }


        /*
            Final 圖片開啟時：
            ESC 也可以關閉
        */

        if(
            finalEnding.classList.contains(
                "open"
            ) &&
            event.key === "Escape"
        ) {

            closeFinalEnding();

        }

    }
);


/* =========================================================
   MOBILE SWIPE
========================================================= */

let touchStartX = null;


lightbox.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].clientX;

    },
    {
        passive: true
    }
);


lightbox.addEventListener(
    "touchend",
    event => {

        if(touchStartX === null) {
            return;
        }


        const touchEndX =
            event.changedTouches[0].clientX;


        const difference =
            touchEndX - touchStartX;


        if(Math.abs(difference) > 45) {

            if(difference > 0) {

                changeLightbox(-1);

            } else {

                changeLightbox(1);

            }

        }


        touchStartX =
            null;

    },
    {
        passive: true
    }
);


/* =========================================================
   MUSIC
========================================================= */

function updateMusicButton() {

    if(bgm.paused) {

        musicBtn.textContent =
            "♪ BGM OFF";

        musicBtn.classList.add(
            "muted"
        );

    } else {

        musicBtn.textContent =
            "♪ BGM ON";

        musicBtn.classList.remove(
            "muted"
        );

    }

}


/* =========================================================
   START MUSIC
========================================================= */

function startMusic() {

    if(
        musicStarted &&
        !bgm.paused
    ) {

        return;

    }


    bgm.volume =
        0.35;


    const playPromise =
        bgm.play();


    if(playPromise !== undefined) {

        playPromise
            .then(
                () => {

                    musicStarted =
                        true;

                    updateMusicButton();

                }
            )
            .catch(
                () => {

                    /*
                        Browser blocked autoplay.
                        等待使用者第一次操作。
                    */

                }
            );

    }

}


/* =========================================================
   MUSIC BUTTON
========================================================= */

musicBtn.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        if(bgm.paused) {

            bgm.volume =
                0.35;


            bgm.play()
                .then(
                    () => {

                        musicStarted =
                            true;

                        updateMusicButton();

                    }
                )
                .catch(
                    error => {

                        console.log(
                            "BGM playback failed:",
                            error
                        );

                    }
                );

        } else {

            bgm.pause();

            updateMusicButton();

        }

    }
);


/* =========================================================
   AUTOPLAY
========================================================= */

window.addEventListener(
    "load",
    () => {

        startMusic();

    }
);


/* =========================================================
   FALLBACK AUTOPLAY
========================================================= */

function firstUserInteraction() {

    if(!musicStarted) {

        startMusic();

    }


    document.removeEventListener(
        "click",
        firstUserInteraction
    );


    document.removeEventListener(
        "touchstart",
        firstUserInteraction
    );


    document.removeEventListener(
        "keydown",
        firstUserInteraction
    );

}


document.addEventListener(
    "click",
    firstUserInteraction
);


document.addEventListener(
    "touchstart",
    firstUserInteraction,
    {
        passive: true
    }
);


document.addEventListener(
    "keydown",
    firstUserInteraction
);


/* =========================================================
   PEAK CUSTOM CURSOR
========================================================= */

let cursorX = 0;

let cursorY = 0;

let lastTrailTime = 0;

let cursorFrame = false;


/* =========================================================
   CURSOR MOVE
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        cursorX =
            event.clientX;

        cursorY =
            event.clientY;


        if(!cursorFrame) {

            cursorFrame =
                true;


            requestAnimationFrame(
                updateCursor
            );

        }

    }
);


/* =========================================================
   UPDATE CURSOR
========================================================= */

function updateCursor() {

    cursorFrame =
        false;


    peakCursor.style.transform = `

        translate3d(
            ${cursorX - 5}px,
            ${cursorY - 5}px,
            0
        )

    `;


    const now =
        performance.now();


    if(
        now - lastTrailTime > 45
    ) {

        createCursorTrail(
            cursorX,
            cursorY
        );


        lastTrailTime =
            now;

    }

}


/* =========================================================
   CURSOR TRAIL
========================================================= */

function createCursorTrail(
    x,
    y
) {

    const trail =
        document.createElement("div");


    trail.className =
        "cursor-trail";


    trail.style.left =
        `${x}px`;

    trail.style.top =
        `${y}px`;


    document.body.appendChild(
        trail
    );


    setTimeout(
        () => {

            trail.remove();

        },
        600
    );

}


/* =========================================================
   CURSOR HOVER
========================================================= */

document.addEventListener(
    "mouseover",
    event => {

        const target =
            event.target.closest(
                "button, a, .photo-card, .region-card, .day-button"
            );


        if(!target) {
            return;
        }


        /*
            游標 Hover 效果
        */

        peakCursor.classList.add(
            "hovering"
        );


        /*
            只有真正進入這個元素時才播放
        */

        if(
            event.relatedTarget &&
            target.contains(
                event.relatedTarget
            )
        ) {

            return;

        }


        playHoverSound();

    }
);


document.addEventListener(
    "mouseout",
    event => {

        const target =
            event.target;


        if(
            target.closest(
                "button, a, .photo-card, .region-card, .day-button"
            )
        ) {

            peakCursor.classList.remove(
                "hovering"
            );

        }

    }
);


/* =========================================================
   CURSOR CLICK
========================================================= */

document.addEventListener(
    "mousedown",
    event => {

        /*
            Cursor Click 動畫
        */

        peakCursor.classList.add(
            "clicking"
        );


        /*
            ⭐ 不管點哪裡
            都產生星星粒子
        */

        createClickParticles(
            event.clientX,
            event.clientY
        );


        /*
            只有互動元素才播放 Click 音效
        */

        const target =
            event.target.closest(
                "button, a, .photo-card, .region-card, .day-button"
            );


        if(target) {

            playClickSound();

        }

    }
);


document.addEventListener(
    "mouseup",
    () => {

        peakCursor.classList.remove(
            "clicking"
        );

    }
);


/* =========================================================
   CLICK PARTICLES
========================================================= */

function createClickParticles(
    x,
    y
) {

    const symbols = [
        "⭐", // ✦
        "✧",
        "·"
    ];


    const directions = [

        [-18,-14],
        [18,-12],
        [-14,17],
        [17,18]

    ];


    directions.forEach(
        (direction, index) => {

            const particle =
                document.createElement("div");


            particle.className =
                "cursor-particle";


            particle.textContent =
                symbols[
                    index %
                    symbols.length
                ];


            particle.style.left =
                `${x}px`;


            particle.style.top =
                `${y}px`;


            particle.style.setProperty(
                "--x",
                `${direction[0]}px`
            );


            particle.style.setProperty(
                "--y",
                `${direction[1]}px`
            );


            document.body.appendChild(
                particle
            );


            setTimeout(
                () => {

                    particle.remove();

                },
                600
            );

        }
    );

}


/* =========================================================
   DATE CHECK
========================================================= */

/*
    只檢查使用者目前瀏覽器的日期。

    >= 10/09
    → 日期條件成立。

    不做任何防竄改時間機制。
*/

function isDateUnlocked() {

    // return 1;

    const now = new Date();

    const year = now.getFullYear();

    const targetDate = new Date(
        year,
        9,       // 10 月（JavaScript 從 0 開始）
        25,      // 25 日
        21,       // 時
        30,       // 分
        0,       // 秒
        0        // 毫秒
    );

    return now >= targetDate;
}


/* =========================================================
   FINAL UNLOCK CHECK
========================================================= */

function checkFinalUnlock() {

    /*
        必須：

        ① 台北完成
        ② 台中完成
        ③ 台南完成
        ④ 日期 >= 10/9
    */

    const sequenceComplete =
        expeditionProgress >= 3;


    const dateComplete =
        isDateUnlocked();


    if(
        sequenceComplete &&
        dateComplete
    ) {

        showFinalButton();

    }

}


/* =========================================================
   SHOW FINAL BUTTON
========================================================= */

function showFinalButton() {

    if(
        document.getElementById(
            "finalRescueBtn"
        )
    ) {

        return;

    }


    const button =
        document.createElement("button");


    button.id =
        "finalRescueBtn";


    button.type =
        "button";


    button.className =
        "region-card final-rescue-btn";


    button.innerHTML = `

        <span class="region-name">
            點燃信號棒
        </span>

        <span class="region-icon">
            🪄🪄
        </span>

    `;


    button.addEventListener(
        "click",
        triggerFinalEnding
    );


    /*
        注意：

        直接放進 hero。

        CSS 會讓它固定在
        Hero 正中央。
    */

    document
        .querySelector(".hero")
        .appendChild(
            button
        );

}


/* =========================================================
   FINAL ENDING
========================================================= */

function triggerFinalEnding() {

    const button =
        document.getElementById(
            "finalRescueBtn"
        );


    if(button) {

        button.remove();

    }


    /*
        防止重複觸發
    */

    finalEnding.classList.remove(
        "finished"
    );


    finalEnding.classList.add(
        "open"
    );


    finalEnding.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        先顯示成功登頂
    */

    summitMessage.classList.remove(
        "fade-out"
    );


    summitMessage.classList.add(
        "show"
    );


    finalPhoto.classList.remove(
        "show"
    );


    /*
        約 1.8 秒後開始淡出
    */

    setTimeout(
        () => {

            summitMessage.classList.add(
                "fade-out"
            );

        },
        1800
    );


    /*
        再稍微等一下，
        顯示 Final 圖片。

        圖片使用 opacity + transform，
        避免突然大量 layout / repaint。
    */

    setTimeout(
        () => {

            summitMessage.classList.remove(
                "show"
            );


            finalPhoto.classList.add(
                "show"
            );


            finalEnding.classList.add(
                "finished"
            );

        },
        2700
    );

}


/* =========================================================
   CLOSE FINAL
========================================================= */

function closeFinalEnding() {

    finalEnding.classList.remove(
        "open",
        "finished"
    );


    finalEnding.setAttribute(
        "aria-hidden",
        "true"
    );


    summitMessage.classList.remove(
        "show",
        "fade-out"
    );


    finalPhoto.classList.remove(
        "show"
    );


    /*
        關掉後重新檢查。

        因為進度仍然是 3，
        日期也仍然符合，
        所以按鈕會重新出現。
    */

    setTimeout(
        () => {

            checkFinalUnlock();

        },
        100
    );

}



/* =========================================================
   BUTTON HOVER SOUND
========================================================= */

function playHoverSound() {

    hoverSound.currentTime = 0;

    hoverSound.play()
        .catch(() => {
            /*
                Browser 可能阻擋音效，
                不需要讓網站因此報錯。
            */
        });

}



/* =========================================================
   BUTTON CLICK SOUND
========================================================= */

function playClickSound() {

    clickSound.currentTime = 0;

    clickSound.play()
        .catch(() => {

            /*
                Browser 可能阻擋音效
            */

        });

}




/* =========================================================
   FINAL CLOSE BUTTON
========================================================= */

finalClose.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        closeFinalEnding();

    }
);


/* =========================================================
   FINAL PHOTO PRELOAD
========================================================= */

/*
    提前載入 Final 圖片。

    這可以降低點擊「點燃救援棒」
    後圖片出現時的卡頓。
*/



/* =========================================================
   PEAK STATUS BLOCKS
========================================================= */

const statusBlocks =
    document.getElementById("statusBlocks");


/*
    顏色固定順序

    綠
    ↓
    咖啡
    ↓
    黃
    ↓
    紅
    ↓
    紫
    ↓
    粉
    ↓
    深綠
*/

const statusTypes = [

    {
        name: "green",
        image: "assets/status/green.png"
    },

    {
        name: "brown",
        image: "assets/status/brown.png"
    },

    {
        name: "yellow",
        image: "assets/status/yellow.png"
    },

    {
        name: "red",
        image: "assets/status/red.png"
    },

    {
        name: "purple",
        image: "assets/status/purple.png"
    }

];


/* =========================================================
   GENERATE STATUS BLOCKS
========================================================= */

function generateStatusBlocks() {

    if(!statusBlocks) {
        return;
    }


    /*
        清空原本內容
    */

    statusBlocks.innerHTML = "";


    /*
        =====================================================
        START
        =====================================================
    */

    const start =
        document.createElement("img");

    start.className =
        "status-start";

    start.src =
        "assets/status/start.png";

    start.alt =
        "Status Start";


    statusBlocks.appendChild(
        start
    );


    /*
        =====================================================
        STATUS COLOR TYPES
        =====================================================
    */

    const totalBlocks = 20;


    /*
        綠色一定存在
    */

    const availableTypes = [

        statusTypes[0]

    ];


    /*
        其他顏色隨機決定是否出現

        brown
        yellow
        red
        purple
    */

    for(
        let i = 1;
        i < statusTypes.length;
        i++
    ) {

        if(
            Math.random() < 0.5
        ) {

            availableTypes.push(
                statusTypes[i]
            );

        }

    }


    /*
        =====================================================
        每種顏色先分配 1 格
        =====================================================
    */

    const counts =
        availableTypes.map(
            () => 1
        );


    /*
        剩餘格數
    */

    let remaining =
        totalBlocks -
        availableTypes.length;


    /*
        =====================================================
        隨機分配剩餘格數
        =====================================================
    */

    while(
        remaining > 0
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                counts.length
            );


        counts[randomIndex]++;

        remaining--;

    }


    /*
        =====================================================
        建立色塊
        =====================================================
    */

    availableTypes.forEach(
        (type, index) => {

            const count =
                counts[index];


            for(
                let i = 0;
                i < count;
                i++
            ) {

                const img =
                    document.createElement("img");


                img.className =
                    "status-block";


                img.src =
                    type.image;


                img.alt =
                    type.name;


                statusBlocks.appendChild(
                    img
                );

            }

        }
    );


    /*
        =====================================================
        END
        =====================================================
    */

    const end =
        document.createElement("img");

    end.className =
        "status-end";

    end.src =
        "assets/status/end.png";

    end.alt =
        "Status End";


    statusBlocks.appendChild(
        end
    );

}

/* =========================================================
   UPDATE STATUS BAR
========================================================= */

function updateStatusBar() {

    generateStatusBlocks();

}

generateStatusBlocks();



const finalPreload =
    new Image();

finalPreload.src =
    "assets/images/final.jpg";


/* =========================================================
   INITIALIZE
========================================================= */

renderRegionCards();

updateMusicButton();