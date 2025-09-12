/** level 1 is build here
 *
 */

const level1 = new Level(
  [ new Background('img/level1/medieval/Background/Background_01.png', 0, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 0, 0),
    new Background('img/level1/medieval/Background/Background_01.png', 849, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 849, 0),
    new Background('img/level1/medieval/Background/Background_01.png', 1698, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 1698, 0),
    new Background('img/level1/medieval/Background/Background_01.png', 2547, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 2547, 0),
    new Background('img/level1/medieval/Background/Background_01.png', 3396, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 3396, 0),
    new Background('img/level1/medieval/Background/Background_01.png', 4245, 0),
    new Background('img/level1/medieval/Background/Background_02.png', 4245, 0)
  ],
  [new BackgroundObject('img/level1/medieval/Environment/Fence.png', 0, 385),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',0,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',50,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',100,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',150,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',200,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',250,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',300,430),

    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png', 358, 450),

    new BackgroundObject('img/level1/medieval/Environment/Sign_01.png',100,380),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',405,370),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',455,370),

    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png', 508, 450),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',550,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',600,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',650,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',700,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',750,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',800,310),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',250,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',300,310),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',100,240),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',150,240),

    new BackgroundObject('img/level1/medieval/Platformer/Decor_Brick.png',20,160),

    new BackgroundObject('img/level1/medieval/Environment/Sign_04.png',790,260),

    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png', 858, 450),
    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png', 908, 450),
    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png', 958, 450),
    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png',1008,450),
    new BackgroundObject('img/level1/medieval/Platformer/Spikes.png',1058,450),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',1100,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_16.png',1150,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',1200,310),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_14.png',1250,240),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_15.png',1300,240),

    new BackgroundObject('img/level1/medieval/Platformer/Brick_01.png',1400,240),
    new BackgroundObject('img/level1/medieval/Platformer/Brick_02.png',1500,240),
    new BackgroundObject('img/level1/medieval/Platformer/Bonus.png', 1600, 240),

    new BackgroundObject('img/level1/medieval/Platformer/Brick_02.png',1700,240),
    new BackgroundObject('img/level1/medieval/Platformer/Brick_01.png',1800,240),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_04.png',1985,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2035,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2085,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2135,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2185,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2235,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2285,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2335,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2385,440),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_08.png',2435,440),
    new BackgroundObject(
      'img/level1/medieval/Environment/Sign_01.png',
      2050,
      390
    ),

    new BackgroundObject(
      'img/level1/medieval/Platformer/Ground_04.png',
      2185,
      320
    ),
    new BackgroundObject(
      'img/level1/medieval/Platformer/Ground_02.png',
      2235,
      320
    ),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_08.png',2285,320),

    new BackgroundObject(
      'img/level1/medieval/Platformer/Wooden_Box.png',
      2385,
      393
    ),
    new BackgroundObject('img/level1/medieval/Platformer/Wooden_Box.png',2430,393),

    new BackgroundObject('img/level1/medieval/Platformer/Wooden_Box.png',2190,273),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_04.png',2285,200),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',2335,200),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_08.png',2385,200),
    new BackgroundObject('img/level1/medieval/Platformer/Wooden_Box.png',2385,153),

    new BackgroundObject('img/level1/medieval/Platformer/Wooden_Box.png',2570,300),

    new BackgroundObject('img/level1/medieval/Environment/Rock_03.png',2520,430),
    new BackgroundObject('img/level1/medieval/Environment/Sign_04.png',2520,390),

    new BackgroundObject('img/level1/medieval/Platformer/Wooden_Box.png',2700,300),

    new BackgroundObject('img/level1/medieval/Platformer/Decor_Brick.png',2800,300),
    new BackgroundObject('img/level1/medieval/Platformer/Bridge_01.png',2845,289),
    new BackgroundObject('img/level1/medieval/Platformer/Bridge_02.png',2890,288),
    new BackgroundObject('img/level1/medieval/Platformer/Decor_Brick.png',2935,300),

    new BackgroundObject('img/level1/medieval/Platformer/Bridge_01.png',2890,210),
    new BackgroundObject('img/level1/medieval/Platformer/Bridge_02.png',2935,210),

    new BackgroundObject('img/level1/medieval/Platformer/Bridge_02.png',2795,115),
    new BackgroundObject('img/level1/medieval/Platformer/Bridge_01.png',2750,115),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_04.png',3150,230),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',3200,230),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_02.png',3250,230),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_08.png',3300,230),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_09.png',3150,280),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3200,280),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3250,280),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_13.png',3300,280),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_09.png',3150,330),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3200,330),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3250,330),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_13.png',3300,330),

    new BackgroundObject('img/level1/medieval/Environment/Lion_Bas_Relief.png',3200,280),
    new BackgroundObject('img/level1/medieval/Environment/Lion_Bas_Relief.png',3250,280),
    new BackgroundObject('img/level1/medieval/Environment/Lion_Bas_Relief.png',3225,330),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_09.png',3150,380),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3200,380),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3250,380),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_13.png',3300,380),

    new BackgroundObject('img/level1/medieval/Environment/Lion_Bas_Relief.png',3225,380),

    new BackgroundObject('img/level1/medieval/Platformer/Ground_09.png',3150,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3200,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_06.png',3250,430),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_13.png',3300,430),

    new BackgroundObject('img/level1/medieval/Platformer/Decor_Brick.png',3050,225),

    new BackgroundObject('img/level1/medieval/Environment/Sign_05.png',2950,178),

    new BackgroundObject('img/level1/medieval/Environment/Rock_04.png',3235,143),
    new BackgroundObject('img/level1/medieval/Environment/Rock_04.png',3260,110),
    new BackgroundObject('img/level1/medieval/Environment/Rock_04.png',3300,110),
    new BackgroundObject('img/level1/medieval/Environment/Rock_04.png',3340,110),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_10.png',3500,410),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',3550,410),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',3600,410),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',3650,410),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_12.png',3700,410),

    new BackgroundObject('img/level1/medieval/Environment/Sign_02.png',3500,363),

    new BackgroundObject('img/level1/medieval/Platformer/Brick_01.png',3600,322),
    new BackgroundObject('img/level1/medieval/Platformer/Brick_01.png',3700,270),

    new BackgroundObject('img/level1/medieval/Platformer/Brick_02.png',3800,300),
    new BackgroundObject('img/level1/medieval/Platformer/Brick_02.png',3900,320),
    new BackgroundObject('img/level1/medieval/Platformer/Brick_01.png',4000,300),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_10.png',4100,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4150,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4200,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4250,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4300,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4250,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4300,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4350,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_11.png',4400,310),
    new BackgroundObject('img/level1/medieval/Platformer/Ground_12.png',4450,310),
    new BackgroundObject('img/level1/medieval/Environment/Sign_01.png',4120,262)
  ],
  [ new Decoration('img/level1/medieval/Environment/Grass_02.png',250,291,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',300,291,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',150,221,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',100,221,50,20),
    new Decoration('img/level1/medieval/Environment/Decor_Ruins_01.png',670,221,70,90),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',1100,291,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',1150,291,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',1200,291,50,20),
    new Decoration('img/level1/medieval/Environment/Decor_Statue.png',3670,321,70,90),
    new Decoration('img/level1/medieval/Environment/Decor_Ruins_02.png',4420,221,70,90),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',2850,284,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',2890,284,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',2800,284,50,20),
    new Decoration('img/level1/medieval/Environment/Grass_02.png',2935,284,50,20),
    new Decoration('img/level1/medieval/Environment/Decor_Ruins_02.png',3277,141,70,90),
    new Decoration('img/level1/medieval/Environment/Grass_01.png',3265,101,40,20),
    new Decoration('img/level1/medieval/Environment/Grass_01.png',3305,101,40,20),
    new Decoration('img/level1/medieval/Environment/Grass_01.png',3345,101,40,20),

    new Decoration('img/level1/medieval/Environment/Rock_06.png',75,451,20,20),
    new Decoration('img/level1/medieval/Environment/Rock_03.png',155,451,30,20),
    new Decoration('img/level1/medieval/Environment/Rock_01.png',239,451,25,25),


  ],
  [
    new Collectable('img/potions/potion-blue.png',23,125,40,40,false,'ice'),

    new Collectable('img/potions/potion-red.png',2755,90,40,40,false,'fire'),


    new Collectable('img/level2/Collectable Object/Bubble.png',1965,90,50,50,false,'bubble'),
    new Collectable('img/level2/Collectable Object/Life.png',1975,102,30,30,false,'life'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',220,145,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',260,105,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',300,145,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',440,265,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',440,315,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',610,235,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',640,205,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',690,175,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',730,205,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',760,235,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',910,195,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',950,195,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',990,195,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',1410,150,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',1510,150,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',1710,150,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',1810,150,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2000,300,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2050,300,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2100,300,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2200,390,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2250,390,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2300,390,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2470,130,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2510,150,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2550,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2600,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2650,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2700,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2900,120,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',2950,120,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3500,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3500,220,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3500,270,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3500,320,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3710,170,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3810,220,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',3910,220,30,30,true,'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png',4010,170,30,30,true,'coin')
  ],

  [new Barrel('img/level1/medieval/Platformer/Wooden_Barrel.png', 1600, 190)], 

  [new MovingFloor('img/level1/medieval/Platformer/Ground_Moving.png',858,310,150)],

  [ new Goblin(295, 100, 300),
    new Goblin(740, 100, 170),
    new Goblin(1190, 100, 50),
    new Goblin(2170, 100, 220),
    new Goblin(2370, 100, 150),
    new Goblin(2350, 100, 90),
    new Goblin(2930, 100, 130),
    new Golem(3280, 100, 130),
    new Golem(3630, 100, 160)
  ]
) 
