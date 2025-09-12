/** here the enemies are restored without having to build up the whole level.
 * 
 * @param {variable} enemies_restored
 */

const enemies_restored = [[[Goblin, 295, 225, 300],
    [Goblin, 740, 150, 170],
    [Goblin, 1190, 150, 50],
    [Goblin, 2170, 100, 220],
    [Goblin, 2370, 100, 150],
    [Goblin,2350, 100, 90],
    [Goblin,2930, 100, 130],
    [Golem, 3280, 100, 130],
     [Golem,3630, 100, 160]],
    
    [[Skeleton, 600, 360, 550],
    [Skeleton, 1125, 200, 150],
    [Skeleton, 1402, 100, 150],
    [Skeleton, 1666, 100, 150],
    [Skeleton, 1942, 100, 150],
    [Skeleton, 2212, 0, 150],
    [Skeleton, 2472, 0, 150],
    [Villager, 2760, 300, 120],
    [Villager, 2710, 300, 70],
    [Villager, 2680, 300, 40],
    [Villager, 3222, 300, 350],
    [Villager, 3252, 300, 200],
    [Angel,4250, 200, 300],
    [Angel,3800, 200, 120],
    [Angel,4250, 200, 380],
    [Crate, 3400, 350],
    [Crate, 3500, -400],
    [Crate, 3600, 350],

    ],

    [[Minotaur,300, 200, 50],
    [Minotaur,700, 170, 350],
   [Minotaur,1180, 170, 150],
   [Minotaur,1450, 120, 80],
   [Minotaur,1700, 0, 300],
   [Minotaur,1800, 0, 80],
   [Minotaur,2150, 0, 130],
   [Minotaur,2850, 0, 430],
   [Minotaur,3700, 0, 180],
   [Minotaur,3900, 0, 140]],
    
        [[IceGoblin,700, 220, 300],
        [IceGoblin,1200, 250, 300],
        [Reaper,1350, 100, 550],
        [Reaper,1750, 100, 250],
        [IceGoblin,4090, 100, 200],
        [IceGoblin,4050, 100, 180],
        [Reaper,4100, 100, 200],
        [Reaper,4050, 100, 150],
        [Reaper,2550, 100, 400],
        [Reaper,2500, 100, 700],
        [Reaper,2400, 100, 400],
        [Brother,4360, 100, 10],
        [IceGoblin, 4250, 100, 300],
        [IceGoblin, 4050, 100, 100]
        ],


];


const collectables_restored = [[
    new Collectable('img/potions/potion-blue.png', 23, 125, 40, 40, false, 'ice'),
    new Collectable('img/potions/potion-red.png', 2755, 90, 40, 40, false, 'fire'),

    new Collectable('img/level2/Collectable Object/Bubble.png',1965,90,50,50,false,'bubble'),
    new Collectable('img/level2/Collectable Object/Life.png',1975,102,30,30,false,'life'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 220, 145, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 260, 105, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 300, 145, 30, 30, true, 'coin'),
 
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 440, 265, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 440, 315, 30, 30, true, 'coin'),


    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 610, 235, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 640, 205, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 690, 175, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 730, 205, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 760, 235, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 910, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 950, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 990, 195, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1410, 150, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1510, 150, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1710, 150, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1810, 150, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2000, 300, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2050, 300, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2100, 300, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2200, 390, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2250, 390, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2300, 390, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2470, 130, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2510, 150, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2550, 170, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2600, 170, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2650, 170, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2700, 170, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2900, 120, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2950, 120, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3500, 170, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3500, 220, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3500, 270, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3500, 320, 30, 30, true, 'coin'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3710, 170, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3810, 220, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3910, 220, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 4010, 170, 30, 30, true, 'coin'),

],
[  

      new Collectable('img/potions/potion-red.png', 1678, 238, 30, 30, false, 'fire'),
      new Collectable('img/potions/potion-blue.png', 4, 418, 30, 30, false, 'ice'),

      new Collectable('img/potions/potion-green.png', 2455, 210, 40, 40, false, 'ogre'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 360, 305, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 400, 285, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 440, 305, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 670, 375, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 710, 375, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 750, 375, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 790, 375, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 830, 375, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 970, 305, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1010, 285, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1050, 265, 30, 30, true, 'coin'),


        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1240, 245, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1280, 225, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1320, 205, 30, 30, true, 'coin'),


        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1510, 185, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1550, 165, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1590, 145, 30, 30, true, 'coin'),


        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1780, 125, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1820, 105, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 1860, 85, 30, 30, true, 'coin'),


        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 160, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 120, 30, 30, true, 'coin'),        
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 200, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 240, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 280, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2520, 320, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2820, 305, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2860, 285, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 2900, 305, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3020, 305, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3060, 285, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3100, 305, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3385, 325, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3405, 295, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3425, 325, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3485, 285, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3505, 265, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3525, 285, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3585, 325, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3605, 295, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3625, 325, 30, 30, true, 'coin'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3735, 295, 30, 30, true, 'coin'),
        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 3775, 295, 30, 30, true, 'coin'),

    ],

    [   new Collectable('img/potions/potion-blue.png', 455, 395, 40, 40, false, 'ice'),
    new Collectable('img/potions/potion-green.png', 3354, 154, 40, 40, false, 'ogre'),

    new Collectable('img/level2/Collectable Object/Bubble.png',3250,114,50,50,false,'bubble'),
    new Collectable('img/level2/Collectable Object/Life.png',3260,126,30,30,false,'life'),

    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 400, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 440, 175, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 480, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 520, 175, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 560, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 600, 175, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 640, 195, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 680, 175, 30, 30, true, 'coin'),
    new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 720, 195, 30, 30, true, 'coin'),

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
];

const barrels_res  = [
    [['img/level1/medieval/Platformer/Wooden_Barrel.png', 1600, 190]
    ],
    [   ['img/marketlevel/Environment/Wooden_Barrel.png', 335, 356],
        ['img/marketlevel/Environment/Wooden_Barrel.png', 2200, 96],
        ['img/marketlevel/Environment/Wooden_Barrel.png', 2920, 396],
        ['img/marketlevel/Environment/Wooden_Barrel.png', 2980, 396],
        ['img/marketlevel/Environment/Wooden_Barrel.png', 3240, 356]
       
      ],
      [   ['img/level2/Platformer/Wooden_Barrel.png', 750, 230],
      ['img/level2/Platformer/Wooden_Barrel.png', 800, 230],
      ['img/level2/Platformer/Wooden_Barrel.png', 1500, 112],
      ['img/level2/Platformer/Wooden_Barrel.png', 1950, 273],
      ['img/level2/Platformer/Wooden_Barrel.png', 2380, 338],
      ['img/level2/Platformer/Wooden_Barrel.png', 3650, 227]
    ],
    [   ['img/level3/Platformer/Wooden_Barrel.png', 630, 252],
        ['img/level3/Platformer/Wooden_Barrel.png', 1950, 152],
        ['img/level3/Platformer/Wooden_Barrel.png', 2000, 152]
      ],


]

const lives_res =
    [   680, 650, 620, 590, 560
    ];

