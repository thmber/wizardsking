/** level 4 is build here
 * 
 */


const level4 = new Level(
    [
        new Background('img/level3/Background/Background_01.png', 0, 0),
        new Background('img/level3/Background/Background_02.png', 0, 0),
        new Background('img/level3/Background/Background_01.png', 850, 0),
        new Background('img/level3/Background/Background_02.png', 850, 0),
        new Background('img/level3/Background/Background_01.png', 1700, 0),
        new Background('img/level3/Background/Background_02.png', 1700, 0),
        new Background('img/level3/Background/Background_01.png', 2550, 0),
        new Background('img/level3/Background/Background_02.png', 2550, 0),
        new Background('img/level3/Background/Background_01.png', 3400, 0),
        new Background('img/level3/Background/Background_02.png', 3400, 0),
        new Background('img/level3/Background/Background_01_night.png', 4250, 0),
      
        
    ], 
    [
        new BackgroundObject('img/level3/Platformer/Ground_10.png', 0, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 50, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 100, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 150, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 200, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 250, 300),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 300, 300),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 500, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 550, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 600, 300),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 650, 300),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 700, 300),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 750, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 800, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 850, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 900, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 950, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1000, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1050, 400),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 1100, 400),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 1300, 400),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1350, 400),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 1400, 400),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 1450, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1500, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1550, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1600, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1650, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1700, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1750, 350),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 1800, 350),

        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1650, 300),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1700, 300),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1700, 250),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1750, 300),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1750, 250),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1800, 200),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1800, 250),
        new BackgroundObject('img/level3/Platformer/Wooden_Box.png', 1800, 300),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 1900, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 1950, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2000, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2050, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2100, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2150, 350),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2200, 350),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2250, 350),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 1950, 200),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2000, 200),

        new BackgroundObject('img/level3/Platformer/Brick_02.png', 2300, 350),
        new BackgroundObject('img/level3/Platformer/Caramel.png', 2350, 350),
        new BackgroundObject('img/level3/Platformer/Caramel.png', 2400, 350),
        new BackgroundObject('img/level3/Platformer/Brick_02.png', 2450, 350),
        new BackgroundObject('img/level3/Platformer/Caramel.png', 2500, 350),
        new BackgroundObject('img/level3/Platformer/Caramel.png', 2550, 350),
        new BackgroundObject('img/level3/Platformer/Brick_02.png', 2600, 350),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 2650, 280),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2700, 280),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 2750, 210),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2800, 210),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 2650, 140),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2700, 140),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 2750, 70),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2800, 70),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 2850, 70),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 2900, 70),

        new BackgroundObject('img/level3/Platformer/Ground_04.png', 2950, 80),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3000, 80),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3050, 80),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3050, 130),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 130),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3100, 130),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 130),

        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3150, 180),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3200, 230),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3250, 280),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3300, 330),
        new BackgroundObject('img/level3/Platformer/Ground_03.png', 3350, 380),

        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3100, 180),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3150, 230),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3200, 280),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3250, 330),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3300, 380),
        new BackgroundObject('img/level3/Platformer/Ground_07.png', 3350, 430),

        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 180),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 230),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 280),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 330),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 380),
        new BackgroundObject('img/level3/Platformer/Ground_09.png', 2950, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 180),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 230),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 280),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 330),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3000, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 180),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 230),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 280),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 330),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3050, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3100, 230),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3100, 280),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3100, 330),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3100, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3100, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3150, 280),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3150, 330),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3150, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3150, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3200, 330),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3200, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3200, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3250, 380),
        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3250, 430),

        new BackgroundObject('img/level3/Platformer/Ground_06.png', 3300, 430),

        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3400, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3450, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3500, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3550, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3600, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3650, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3700, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3750, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3800, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3850, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3900, 430),

        new BackgroundObject('img/level3/Platformer/Ground_02.png', 3950, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4000, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4050, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4100, 430),

        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4150, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4200, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4250, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4300, 430),


        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4350, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4400, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4450, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4500, 430),

        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4550, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4600, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4650, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4700, 430),
        new BackgroundObject('img/level3/Platformer/Ground_02.png', 4750, 430),


        new BackgroundObject('img/level3/Platformer/Ground_10.png', 3900, 340),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 3950, 340),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 4000, 340),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 4050, 340),
        new BackgroundObject('img/level3/Platformer/Ground_11.png', 4100, 340),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 4150, 340),

        new BackgroundObject('img/level3/Platformer/Ground_10.png', 3650, 340),
        new BackgroundObject('img/level3/Platformer/Ground_12.png', 3700, 340),
    



    ], 
        

    [
        new Decoration('img/level3/Platformer/Bridge_01.png', 350, 299, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 375, 298, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_01.png', 400, 301, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 425, 300, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_01.png', 450, 299, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 475, 301, 25, 25),
  
        new Decoration('img/level3/Platformer/Bridge_01.png', 1150, 400, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 1175, 401, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_01.png', 1200, 402, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 1225, 400, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_01.png', 1250, 399, 25, 25),
        new Decoration('img/level3/Platformer/Bridge_02.png', 1275, 399, 25, 25),

        new Decoration('img/level3/Environment/Bush.png', 0, 250, 50, 50),
        new Decoration('img/level3/Environment/Fence.png', 50, 250, 50, 50),
        new Decoration('img/level3/Environment/Sign_01.png', 100, 250, 50, 50),

        new Decoration('img/level3/Environment/Snowman.png', 270, 230, 70, 70),

        new Decoration('img/level3/Environment/Tree_02.png', 670, 210, 90, 90),
        new Decoration('img/level3/Environment/Tree_02.png', 1070, 310, 90, 90),

        new Decoration('img/level3/Environment/Stump.png', 760, 350, 50, 50),

        new Decoration('img/level3/Environment/Tree_02.png', 1400, 60, 290, 290),

        new Decoration('img/level3/Environment/Tree_01.png', 2388, 123, 230, 230),
        new Decoration('img/level3/Environment/Tree_01.png', 2058, 123, 230, 230),

        new Decoration('img/level3/Environment/Sign_03.png', 3000, 30, 50, 50),


        new Decoration('img/level3/Environment/Tree_02.png', 4400, 91, 340, 340),

        new Decoration('img/level3/Environment/Snowman.png', 4700, 360, 70, 70),







    ], 
    [   
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 370, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 410, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 450, 175, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 570, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 610, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 650, 175, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 850, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 900, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 950, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1000, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1050, 275, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1250, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1300, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1350, 275, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1700, 75, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1750, 75, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1800, 75, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1850, 75, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1900, 75, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2300, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2350, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2400, 275, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2070, 125, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2070, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2070, 225, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2070, 275, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 125, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 225, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 75, 30, 30, true, 'coin'),


        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3100, 75, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3150, 125, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3200, 175, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3250, 225, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3300, 275, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3350, 325, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3400, 375, 30, 30, true, 'coin'),

        new Collectable('img/chess-king.png', 4150, 300, 40, 40, false, 'king'),
        new Collectable('img/potions/potion-red.png', 3654, 303, 40, 40, false, 'fire'),
        new Collectable('img/potions/potion-green.png', 3704, 303, 40, 40, false, 'ogre'),
        new Collectable('img/potions/potion-blue.png', 764, 325, 40, 40, false, 'ice'),




        ], 
    [ new Barrel('img/level3/Platformer/Wooden_Barrel.png', 630, 252),
    new Barrel('img/level3/Platformer/Wooden_Barrel.png', 1950, 152),
    new Barrel('img/level3/Platformer/Wooden_Barrel.png', 2000, 152)

    ], 
    [],
    [   new IceGoblin(700, 160, 300),
        new IceGoblin(1200, 100, 300),
        new Reaper(1350, 100, 550),
        new Reaper(1750, 100, 250),
        new IceGoblin(4090, 100, 200),
        new IceGoblin(4050, 100, 180),
        new Reaper(4100, 100, 200),
        new Reaper(4050, 100, 150),
        new Reaper(2550, 100, 400),
        new Reaper(2500, 100, 700),
        new Brother(4360, 100, 10)],
    
);