/** level 4 is build here
 * 
 */

const level3 = new Level(
    [
        new Background('img/level2/Background/Background_01.png', 0, 0),
        new Background('img/level2/Background/Background_02.png', 0, 0),
        new Background('img/level2/Background/Background_01.png', 850, 0),
        new Background('img/level2/Background/Background_02.png', 850, 0),
        new Background('img/level2/Background/Background_01.png', 1700, 0),
        new Background('img/level2/Background/Background_02.png', 1700, 0),
        new Background('img/level2/Background/Background_01.png', 2550, 0),
        new Background('img/level2/Background/Background_02.png', 2550, 0),
        new Background('img/level2/Background/Background_01.png', 3400, 0),
        new Background('img/level2/Background/Background_02.png', 3400, 0),
        new Background('img/level2/Background/Background_01.png', 4250, 0),
        new Background('img/level2/Background/Background_02.png', 4250, 0),
    ], 
    [
        new BackgroundObject('img/level2/Platformer/Ground_04.png', 0, 430),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 50, 430),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 100, 430),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 150, 430),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 200, 430),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 250, 430),
        new BackgroundObject('img/level2/Platformer/Ground_08.png', 300, 430),

        new BackgroundObject('img/level2/Platformer/Ground_10.png', 250, 350),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 300, 350),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 350, 350),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 400, 350),

        new BackgroundObject('img/level2/Platformer/Ground_10.png', 300, 280),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 350, 280),

        new BackgroundObject('img/level2/Platformer/Ground_04.png', 750, 280),
        new BackgroundObject('img/level2/Platformer/Ground_02.png', 800, 280),
        new BackgroundObject('img/level2/Platformer/Ground_08.png', 850, 280),

        new BackgroundObject('img/level2/Platformer/Ground_09.png', 750, 330),
        new BackgroundObject('img/level2/Platformer/Ground_06.png', 800, 330),
        new BackgroundObject('img/level2/Platformer/Ground_13.png', 850, 330),

        new BackgroundObject('img/level2/Platformer/Ground_09.png', 750, 380),
        new BackgroundObject('img/level2/Platformer/Ground_06.png', 800, 380),
        new BackgroundObject('img/level2/Platformer/Ground_13.png', 850, 380),

        new BackgroundObject('img/level2/Platformer/Ground_09.png', 750, 430),
        new BackgroundObject('img/level2/Platformer/Ground_06.png', 800, 430),
        new BackgroundObject('img/level2/Platformer/Ground_13.png', 850, 430),

        new BackgroundObject('img/level2/Platformer/Decor_Brick.png', 450, 430),

        new BackgroundObject('img/level2/Platformer/Ground_10.png', 1050, 460),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 1100, 460),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 1150, 460),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 1200, 460),

        new BackgroundObject('img/level2/Environment/Fence.png', 890, 434),
        new BackgroundObject('img/level2/Environment/Fence.png', 940, 434),
        new BackgroundObject('img/level2/Environment/Fence.png', 990, 434),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1300, 400),
        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1350, 400),

        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1400, 320),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1450, 320),

        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1300, 240),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1350, 240),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1400, 160),
        new BackgroundObject('img/level2/Platformer/Decor_Brick_01.png', 1450, 160),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1500, 160),
        new BackgroundObject('img/level2/Platformer/Decor_Brick.png', 1550, 160),
        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1600, 160),
        new BackgroundObject('img/level2/Platformer/Decor_Brick_01.png', 1650, 160),
        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1700, 160),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1750, 240),
        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1800, 240),

        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1850, 320),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 1900, 320),

        new BackgroundObject('img/level2/Platformer/Brick_02.png', 1950, 320),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 2000, 320),
               
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 2050, 420),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 2100, 420),
        new BackgroundObject('img/level2/Platformer/Brick_01.png', 2150, 420),

        new BackgroundObject('img/level2/Platformer/Decor_Brick_01.png', 2200, 370),
        
        new BackgroundObject('img/level2/Platformer/Ground-Additional_07.png', 2400, 383),
        new BackgroundObject('img/level2/Platformer/Ground-Additional_17.png', 2400, 433),

        new BackgroundObject('img/level2/Platformer/Ground-Additional_07.png', 2900, 383),
        new BackgroundObject('img/level2/Platformer/Ground-Additional_17.png', 2900, 433),

        new BackgroundObject('img/level2/Platformer/Ground_10.png', 3000, 320),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 3050, 320),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 3100, 320),
        
        new BackgroundObject('img/level2/Platformer/Bonus.png', 3350, 190),
        new BackgroundObject('img/level2/Platformer/Ground_10.png', 3550, 275),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 3600, 275),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 3650, 275),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 3700, 275),

        new BackgroundObject('img/level2/Platformer/Ground_10.png', 3800, 375),
        new BackgroundObject('img/level2/Platformer/Ground_11.png', 3850, 375),
        new BackgroundObject('img/level2/Platformer/Ground_12.png', 3900, 375),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 4000, 300),
        new BackgroundObject('img/level2/Platformer/Brick_02.png', 4100, 300),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 4200, 230),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 4300, 160),

        new BackgroundObject('img/level2/Platformer/Brick_01.png', 4475, 115),
    ], 
    [
        new Decoration('img/level2/Environment/Decor_Rock.png', 290, 401, 50, 30),          
        new Decoration('img/level2/Environment/Scull.png', 380, 301, 50, 50),
        new Decoration('img/level2/Platformer/Bridge_01.png', 400, 281, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 425, 283, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 450, 281, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 475, 282, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 500, 281, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 525, 283, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 550, 285, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 575, 280, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 600, 283, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 625, 285, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 650, 282, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 675, 285, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 700, 282, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 725, 282, 25, 25),

        new Decoration('img/level2/Environment/Rock_02.png', 35, 445, 25, 25),
        new Decoration('img/level2/Environment/Rock_04.png', 105, 445, 35, 25),
        new Decoration('img/level2/Environment/Rock_03.png', 175, 445, 25, 25),
        new Decoration('img/level2/Environment/Rock_05.png', 255, 445, 25, 25),

        new Decoration('img/level2/Environment/Cactus.png', 298, 231, 50, 50),

        new Decoration('img/level2/Environment/Sign_01.png', 350, 231, 50, 50),

        new Decoration('img/level2/Environment/Palm_Tree.png', -25, 182, 250, 250),

        new Decoration('img/level2/Environment/Rock_07.png', 820, 402, 30, 30),
        new Decoration('img/level2/Environment/Rock_05.png', 790, 352, 30, 30),

        new Decoration('img/level2/Environment/Dead_Tree.png', 730, 102, 180, 180),

        new Decoration('img/level2/Environment/Well.png', 1080, 285, 175, 175),
        new Decoration('img/level2/Environment/Cactus.png', 1300, 374, 50, 30),
        new Decoration('img/level2/Environment/Cactus.png', 1450, 294, 50, 30),
        new Decoration('img/level2/Environment/Cactus.png', 1350, 214, 50, 30),

        new Decoration('img/level2/Environment/Decor_PLant_02.png', 1400, 114, 50, 50),
        new Decoration('img/level2/Environment/Decor_PLant_02.png', 1650, 114, 50, 50),

        new Decoration('img/level2/Environment/Cactus.png', 2000, 294, 50, 30),
        new Decoration('img/level2/Environment/Cactus.png', 1850, 294, 50, 30),
        new Decoration('img/level2/Environment/Cactus.png', 1750, 214, 50, 30),

        new Decoration('img/level2/Environment/Sign_03.png', 1700, 113, 50, 50),

        new Decoration('img/level2/Environment/Palm_Tree.png', 2330, 186, 200, 200),

        new Decoration('img/level2/Environment/Rock_02.png', 1570, 358, 140, 140),

        new Decoration('img/level2/Platformer/Ground-Additional_05.png', 2350, 380, 50, 100),
        new Decoration('img/level2/Platformer/Ground-Additional_06.png', 2450, 380, 50, 100),

        new Decoration('img/level2/Platformer/Bridge_01.png', 2500, 381, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2525, 383, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 2550, 381, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2575, 382, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 2600, 381, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2625, 382, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 2650, 383, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2675, 380, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2700, 383, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 2725, 381, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2750, 382, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 2775, 381, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2800, 382, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 2825, 382, 25, 25),

        new Decoration('img/level2/Platformer/Ground-Additional_05.png', 2850, 380, 50, 100),
        new Decoration('img/level2/Platformer/Ground-Additional_06.png', 2950, 380, 50, 100),

        new Decoration('img/level2/Platformer/Bridge_01.png', 4350, 161, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 4375, 163, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 4400, 161, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_02.png', 4425, 162, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 4450, 161, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 4475, 161, 25, 25),
        new Decoration('img/level2/Platformer/Bridge_01.png', 4500, 161, 25, 25),

        new Decoration('img/level2/Environment/Palm_Tree.png', 2830, 186, 200, 200),

        new Decoration('img/level2/Environment/Sign_01.png', 3000, 271, 50, 50),
        new Decoration('img/level2/Environment/Scull.png', 3100, 271, 50, 50),

        new Decoration('img/level2/Environment/Dead_Tree.png', 3770, 177, 200, 200),
        new Decoration('img/level2/Environment/Cactus.png', 3570, 227, 50, 50),
        new Decoration('img/level2/Environment/Cactus.png', 4475, 68, 50, 50),
        new Decoration('img/level2/Environment/Scull.png', 4350, 335, 150, 150),
    ], 
    [   new Collectable('img/potions/potion-blue.png', 455, 395, 40, 40, false, 'ice'),
        new Collectable('img/potions/potion-green.png', 3354, 154, 40, 40, false, 'ogre'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 400, 195, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 440, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 480, 195, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 520, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 560, 195, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 600, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 640, 195, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 680, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1335, 135, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1435, 245, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1335, 325, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1435, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1475, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1515, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1555, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1595, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1635, 65, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1675, 65, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1775, 135, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1875, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1915, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1955, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1995, 245, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2125, 265, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2275, 265, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2325, 225, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2350, 265, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2500, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2550, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2650, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2700, 245, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2800, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2850, 245, 30, 30, true, 'coin'),

    ], 
    [new Barrel('img/level2/Platformer/Wooden_Barrel.png', 750, 230),
    new Barrel('img/level2/Platformer/Wooden_Barrel.png', 800, 230),
    new Barrel('img/level2/Platformer/Wooden_Barrel.png', 1500, 112),
    new Barrel('img/level2/Platformer/Wooden_Barrel.png', 1950, 273),
    new Barrel('img/level2/Platformer/Wooden_Barrel.png', 2380, 338),
    new Barrel('img/level2/Platformer/Wooden_Barrel.png', 3650, 227),

    ],
    

     
    [new MovingFloor('img/level2/Platformer/Ground_Moving.png', 3150, 275, 300)


    ],
    [
        new Minotaur(300, 200, 50),
        new Minotaur(700, 170, 350),
        new Minotaur(1180, 170, 150),
        new Minotaur(1450, 120, 80),
        new Minotaur(1700, 0, 300),
        new Minotaur(1800, 0, 80),
        new Minotaur(2150, 0, 130),
        new Minotaur(2850, 0, 430),
        new Minotaur(3700, 0, 180),
        new Minotaur(3900, 0, 140)



    ],


);
