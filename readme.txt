4. 放照片

例如你 10/1 拍了：

01.jpg
02.jpg
03.jpg
04.jpg

放：

assets/
└── taipei/
    └── 10-01/
        ├── 01.jpg
        ├── 02.jpg
        ├── 03.jpg
        └── 04.jpg

然後修改 script.js：

photos: [

    "assets/taipei/10-01/01.jpg",
    "assets/taipei/10-01/02.jpg",
    "assets/taipei/10-01/03.jpg",
    "assets/taipei/10-01/04.jpg"

]

10/2：

photos: [

    "assets/taipei/10-02/01.jpg",
    "assets/taipei/10-02/02.jpg"

]

台中：

photos: [

    "assets/taichung/10-04/01.jpg",
    "assets/taichung/10-04/02.jpg"

]

台南：

photos: [

    "assets/tainan/10-07/01.jpg",
    "assets/tainan/10-07/02.jpg"

]
🎮 目前這個版本的網站流程
                    PEAK
                     │
             TAIWAN EXPEDITION
                     │
          ┌──────────┼──────────┐
          │          │          │
        TAIPEI     TAICHUNG    TAINAN
       10/1~10/3   10/4~10/6   10/7~10/9
          │          │          │
       ┌──┼──┐    ┌──┼──┐    ┌──┼──┐
       01  02 03   04 05 06   07 08 09
       │   │  │    │  │  │    │  │  │
       └───┴──┴────┴──┴──┴────┴──┴──┘
                       │
                    PHOTOS
                       │
                  PHOTO WALL
                       │
                   LIGHTBOX
                       │
                 ←   PHOTO   →

而且這個架構有個好處：你現在不需要知道每天究竟會拍幾張照片。

每一天的 photos 可以放：

photos: []

代表目前還沒有照片。

之後可能：

photos: [
    "01.jpg"
]

也可以：

photos: [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg"
]

網站會自己排列。