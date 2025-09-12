/** level 2 is build here
 * 
 */

const level2 = new Level(
    [
        new Background('img/marketlevel/Background/Background_01.png', 0, 0),
        new Background('img/marketlevel/Background/Background_02.png', 0, 0),
        new Background('img/marketlevel/Background/Background_01.png', 850, 0),
        new Background('img/marketlevel/Background/Background_02.png', 850, 0),
        new Background('img/marketlevel/Background/Background_01.png', 1700, 0),
        new Background('img/marketlevel/Background/Background_02.png', 1700, 0),
        new Background('img/marketlevel/Background/Background_01.png', 2550, 0),
        new Background('img/marketlevel/Background/Background_02.png', 2550, 0),
        new Background('img/marketlevel/Background/Background_01.png', 3400, 0),
        new Background('img/marketlevel/Background/Background_02.png', 3400, 0),
        new Background('img/marketlevel/Background/Background_01.png', 4250, 0),
        new Background('img/marketlevel/Background/Background_02.png', 4250, 0),
    ], 
    [
       
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 0, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 50, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 100, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 150, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 200, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 250, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 300, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 350, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 400, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 450, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 500, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 550, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 600, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 650, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 700, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 750, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 800, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 850, 445),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 1020, 385),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 1070, 385),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 1120, 385),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 1290, 325),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 1340, 325),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 1390, 325),
       
        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 1560, 265),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 1610, 265),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 1660, 265),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 1830, 205),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 1880, 205),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 1930, 205),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 2100, 145),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 2150, 145),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 2200, 145),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 2370, 85),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 2420, 85),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 2470, 85),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 2400, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_10.png', 2450, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2500, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2550, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2600, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2650, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2700, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2750, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2800, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2850, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2900, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 2950, 445),

        new BackgroundObject('img/marketlevel/Environment/Wooden_Crate.png', 2460, 245),
        new BackgroundObject('img/marketlevel/Platformer/Ground_11.png', 3000, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3050, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3100, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3150, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3200, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3250, 445),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 3300, 445),

        new BackgroundObject('img/marketlevel/Environment/Wooden_Crate.png', 3400, 445),
        new BackgroundObject('img/marketlevel/Environment/Wooden_Crate.png', 3500, 445),
        new BackgroundObject('img/marketlevel/Environment/Wooden_Crate.png', 3600, 445),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 3700, 395),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3750, 395),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 3800, 395),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 3900, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 3950, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4000, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4050, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4100, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4150, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4200, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 4250, 345),

        new BackgroundObject('img/marketlevel/Platformer/Ground_04.png', 4350, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_02.png', 4400, 345),
        new BackgroundObject('img/marketlevel/Platformer/Ground_08.png', 4450, 345),










    ], 
    [

        new Decoration('img/marketlevel/Building/Wall_C_02.png', 120, 332, 120, 114), 

        new Decoration('img/marketlevel/Building/Wall_C_02.png', 16, 332, 120, 114), 
  
        new Decoration('img/marketlevel/Environment/Rock_03.png', 5, 460, 35, 20),       
        new Decoration('img/marketlevel/Environment/Rock_03.png', 305, 460, 35, 20),          
        new Decoration('img/marketlevel/Environment/Rock_03.png', 610, 460, 35, 20),  
        new Decoration('img/marketlevel/Building/Chimney_02.png', -15, 385, 50, 60),
        new Decoration('img/marketlevel/Building/Chimney_02.png', -15, 325, 50, 60),         
        new Decoration('img/marketlevel/Building/Chimney_02.png', -15, 265, 50, 60),         
        new Decoration('img/marketlevel/Building/Chimney_02.png', -15, 225, 50, 60),  
        new Decoration('img/marketlevel/Building/Chimney_02.png', -15, 165, 50, 60),                
        new Decoration('img/marketlevel/Building/Chimney_03.png', -15, 105, 50, 60),   
        new Decoration('img/marketlevel/Building/Pillar_02.png', 20, 345, 20, 100),   
        new Decoration('img/marketlevel/Building/Pillar_05.png', 20, 330, 20, 20),   
 
        new Decoration('img/marketlevel/Environment/Wooden_Barrel.png', 277, 400, 45, 45),   
        new Decoration('img/marketlevel/Environment/Wooden_Barrel.png', 235, 400, 45, 45),   
        new Decoration('img/marketlevel/Environment/Wooden_Barrel.png', 255, 360, 45, 45),   

        new Decoration('img/marketlevel/Building/Wall_A_01.png', 6, 235, 40, 100),   
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 41, 235, 135, 100),   
        new Decoration('img/marketlevel/Building/Pillar_03.png', 76, 336, 50, 50),  
        new Decoration('img/marketlevel/Building/Pillar_04.png', 35, 336, 50, 50),  

        new Decoration('img/marketlevel/Building/Roof_A_02.png', 275, 268, 125, 65),   
        new Decoration('img/marketlevel/Building/Roof_A_03.png', 400, 268, 40, 65),   
      
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 171, 235, 135, 100),  
        new Decoration('img/marketlevel/Building/Wall_A_03.png', 286, 235, 45, 100),  

        new Decoration('img/marketlevel/Building/Pillar_02.png', 100, 226, 20, 100),  
        new Decoration('img/marketlevel/Building/Pillar_02.png', 205, 226, 20, 100),  

        new Decoration('img/marketlevel/Building/Decor_Window_01.png', 120, 240, 45, 45),  
        new Decoration('img/marketlevel/Building/Decor_Window_01.png', 165, 240, 45, 45),  

        new Decoration('img/marketlevel/Environment/Rock_04.png', 355, 460, 30, 20),       
        new Decoration('img/marketlevel/Environment/Rock_08.png', 105, 460, 25, 20),          
        new Decoration('img/marketlevel/Environment/Rock_07.png', 166, 460, 15, 20),  


        new Decoration('img/marketlevel/Building/Pillar_01.png', 242, 325, 100, 20),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 301, 325, 100, 20),  

        new Decoration('img/marketlevel/Building/Pillar_01.png', 36, 226, 100, 20),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 135, 226, 100, 20),  
      
        new Decoration('img/marketlevel/Building/Pillar_05.png', 20, 226, 20, 20),   
        new Decoration('img/marketlevel/Building/Pillar_05.png', 120, 226, 20, 20),   
        new Decoration('img/marketlevel/Building/Pillar_05.png', 225, 226, 20, 20),   
        new Decoration('img/marketlevel/Building/Pillar_01.png', 240, 226, 60, 20),  
        new Decoration('img/marketlevel/Building/Pillar_05.png', 295, 226, 20, 20),   

        new Decoration('img/marketlevel/Building/Decor_Roof_02.png', 307, 210, 50, 50),  
        new Decoration('img/marketlevel/Building/Decor_Roof_02r.png', -25, 210, 50, 50),   
 

        new Decoration('img/marketlevel/Building/Roof_A_02.png', 160, 170, 125, 65),   
        new Decoration('img/marketlevel/Building/Roof_A_01.png', 5, 170, 40, 65),   
        new Decoration('img/marketlevel/Building/Roof_A_03.png', 285, 170, 40, 65), 
        new Decoration('img/marketlevel/Building/Roof_A_02.png', 41, 170, 125, 65),   

        new Decoration('img/marketlevel/Building/Pillar_02.png', 70, 345, 20, 100),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 36, 330, 100, 20),  
        new Decoration('img/marketlevel/Environment/Sign_03.png', 52, 326, 55, 55),  

        new Decoration('img/marketlevel/Building/Roof_A_05.png', 32, 286, 130, 45), 
        new Decoration('img/marketlevel/Building/Roof_A_04.png', 162, 286, 130, 45),  

        new Decoration('img/marketlevel/Building/Pillar_01.png', 180, 326, 50, 20),  

        new Decoration('img/marketlevel/Building/Pillar_03.png', 231, 336, 50, 50),  
        new Decoration('img/marketlevel/Building/Pillar_04.png', 191, 336, 50, 50),  
        new Decoration('img/marketlevel/Building/Pillar_02.png', 226, 335, 20, 110), 
        new Decoration('img/marketlevel/Building/Pillar_05.png', 226, 325, 20, 20),   
 
        new Decoration('img/marketlevel/Building/Wide_Door_04.png', 122, 355, 80, 91),  
        new Decoration('img/marketlevel/Building/Canopy_01.png', 117, 331, 90, 40),  
        new Decoration('img/marketlevel/Building/Decor_Window_03.png', 140, 291, 50, 50), 

        new Decoration('img/marketlevel/Environment/Table_01.png', 280, 400, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 325, 400, 45, 45),  
        
        new Decoration('img/marketlevel/Environment/Chair.png', 245, 405, 40, 40),  
        new Decoration('img/marketlevel/Building/Pillar_02.png', 285, 335, 20, 110), 
        new Decoration('img/marketlevel/Building/Pillar_05.png', 285, 325, 20, 20),   
        
        new Decoration('img/marketlevel/Environment/Bottle.png', 293, 365, 42, 42),   
        new Decoration('img/marketlevel/Building/Pillar_02.png', 385, 335, 20, 110), 

        new Decoration('img/marketlevel/Environment/Trade_Tent_01.png', 410, 365, 80, 80), 
        new Decoration('img/marketlevel/Environment/Trade_Tent_02.png', 490, 365, 80, 80), 
        new Decoration('img/marketlevel/Environment/Street_Lantern.png', 475, 285, 160, 160), 
        new Decoration('img/marketlevel/Building/Window_04.png', 50, 255, 45, 45), 
        new Decoration('img/marketlevel/Building/Window_04.png', 230, 255, 45, 45), 

        new Decoration('img/marketlevel/Building/Decor_Roof_01.png', 45, 238, 55, 55), 
        new Decoration('img/marketlevel/Building/Decor_Roof_01.png', 225, 238, 55, 55), 
        new Decoration('img/marketlevel/Environment/Stall_01.png', 405, 400, 45, 45), 
        new Decoration('img/marketlevel/Environment/Stall_02.png', 455, 400, 45, 45), 
        new Decoration('img/marketlevel/Environment/Stall_02.png', 545, 400, 45, 45), 

        new Decoration('img/marketlevel/Environment/Goods_01.png', 405, 380, 45, 45), 
        new Decoration('img/marketlevel/Environment/Goods_02.png', 455, 380, 45, 45), 
        new Decoration('img/marketlevel/Environment/Goods_03.png', 545, 384, 45, 45), 

        new Decoration('img/marketlevel/Building/Pillar_05.png', 385, 325, 20, 20),   

        new Decoration('img/marketlevel/Building/Canopy_03_reverse.png', 630, 320, 45, 45),  

        
        new Decoration('img/marketlevel/Building/Wall_A_01.png', 655, 345, 40, 100),   
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 695, 345, 140, 100),  
        new Decoration('img/marketlevel/Building/Door_04.png', 695, 365, 40, 80),  
        new Decoration('img/marketlevel/Building/Roof_B_01.png', 655, 295, 40, 60),   
        new Decoration('img/marketlevel/Building/Roof_B_02.png', 695, 295, 140, 60),   
    
        new Decoration('img/level2/Environment/Sign_01.png', 65, 396, 50, 50),



        new Decoration('img/marketlevel/Building/Wall_A_03.png', 825, 345, 40, 100),   
  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 670, 346, 100, 20),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 770, 346, 100, 20),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 870, 346, 80, 20),  

        new Decoration('img/marketlevel/Building/Roof_B_05.png', 715, 296, 120, 60),   
        new Decoration('img/marketlevel/Building/Roof_B_04.png', 835, 296, 120, 60),   
        new Decoration('img/marketlevel/Building/Window_03.png', 780, 370, 45, 45), 

        new Decoration('img/marketlevel/Building/Pillar_02.png', 855, 360, 20, 86), 
        new Decoration('img/marketlevel/Building/Pillar_02.png', 745, 360, 20, 86),  
 
        new Decoration('img/marketlevel/Environment/Table_01.png', 1070, 342, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 1115, 342, 45, 45), 
        new Decoration('img/marketlevel/Environment/Basket.png', 1025, 342, 45, 45),  
        new Decoration('img/marketlevel/Environment/Decor_Bread.png', 1075, 304, 45, 45),  
        new Decoration('img/marketlevel/Environment/Bottle.png', 1115, 304, 45, 45),  

        new Decoration('img/marketlevel/Environment/Herbs.png', 845, 352, 80, 80),   
        new Decoration('img/marketlevel/Building/Decor_Window_04.png', 810, 307, 50, 50), 

        new Decoration('img/marketlevel/Building/Canopy_02.png', 685, 350, 60, 35),  

        new Decoration('img/marketlevel/Environment/Table_01.png', 1290, 282, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 1335, 282, 45, 45), 
        new Decoration('img/marketlevel/Environment/Decor_Cuirass.png', 1290, 244, 45, 45),  
        new Decoration('img/marketlevel/Environment/Decor_Helment.png', 1340, 250, 45, 45),  
        new Decoration('img/marketlevel/Environment/Decor_Sword.png', 1315, 281, 45, 45),  
        new Decoration('img/marketlevel/Environment/Anvil.png', 1380, 260, 65, 65),  

        new Decoration('img/marketlevel/Environment/Table_01.png', 1625, 222, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 1670, 222, 45, 45), 
        new Decoration('img/marketlevel/Environment/Decor_Chest.png', 1560, 205, 60, 60), 
        new Decoration('img/marketlevel/Environment/Decor_Potions_01.png', 1629, 220, 45, 45), 
        new Decoration('img/marketlevel/Environment/Decor_Potions_02.png', 1670, 185, 45, 45), 

        new Decoration('img/marketlevel/Environment/Fence_01.png', 1835, 162, 45, 45),  
        new Decoration('img/marketlevel/Environment/Fence_02.png', 1880, 162, 45, 45), 
        new Decoration('img/marketlevel/Environment/Fence_03.png', 1925, 162, 45, 45), 

        new Decoration('img/marketlevel/Environment/Decor_Cart.png', 2085, 52, 105, 95),  
        new Decoration('img/marketlevel/Environment/Well.png', 2390, 302, 125, 145),  
        new Decoration('img/level2/Environment/Sign_05.png', 3295, 396, 50, 50),


        new Decoration('img/marketlevel/Environment/Fence_01.png', 2635, 402, 45, 45),  
        new Decoration('img/marketlevel/Environment/Fence_02.png', 2680, 402, 45, 45), 
        new Decoration('img/marketlevel/Environment/Fence_02.png', 2725, 402, 45, 45), 
        new Decoration('img/marketlevel/Environment/Fence_03.png', 2770, 402, 45, 45), 

        new Decoration('img/marketlevel/Environment/Grass_01.png', 2365, 62, 45, 25),  
        new Decoration('img/marketlevel/Environment/Grass_01.png', 2402, 62, 45, 25), 
        new Decoration('img/marketlevel/Environment/Grass_01.png', 2439, 62, 45, 25), 
        new Decoration('img/marketlevel/Environment/Grass_01.png', 2476, 62, 45, 25), 

        new Decoration('img/marketlevel/Environment/Furnace.png', 3710, 330, 75, 65), 
        new Decoration('img/marketlevel/Environment/Chair.png', 3792, 351, 45, 45), 
        new Decoration('img/marketlevel/Environment/Decor_Sword.png', 3790, 350, 45, 45), 

        new Decoration('img/marketlevel/Building/Wall_A_01.png', 3920, 245, 40, 100), 
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 3960, 245, 100, 100), 
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 4060, 245, 100, 100), 
        new Decoration('img/marketlevel/Building/Wall_A_02.png', 4160, 245, 100, 100), 
        new Decoration('img/marketlevel/Building/Wall_A_03.png', 4260, 245, 40, 100), 

        new Decoration('img/marketlevel/Building/Window_02.png', 3990, 265, 50, 50), 
        new Decoration('img/marketlevel/Building/Window_03.png', 4090, 265, 50, 50), 
        new Decoration('img/marketlevel/Building/Window_02.png', 4190, 265, 50, 50), 

        new Decoration('img/marketlevel/Building/Pillar_01.png', 3926, 238, 100, 20),
        new Decoration('img/marketlevel/Building/Pillar_01.png', 4026, 238, 100, 20), 
        new Decoration('img/marketlevel/Building/Pillar_01.png', 4126, 238, 100, 20),  
        new Decoration('img/marketlevel/Building/Pillar_01.png', 4226, 238, 70, 20),  

        new Decoration('img/marketlevel/Environment/Well.png', 4390, 202, 125, 145),  
        new Decoration('img/marketlevel/Environment/Grass_01.png', 4362, 322, 45, 25), 
        new Decoration('img/marketlevel/Environment/Grass_01.png', 4399, 322, 45, 25), 
        new Decoration('img/marketlevel/Environment/Grass_01.png', 4436, 322, 45, 25),

        new Decoration('img/marketlevel/Building/Canopy_03_reverse.png', 3896, 246, 45, 45), 

        new Decoration('img/marketlevel/Building/Roof_A_02.png', 4046, 195, 120, 50), 
        new Decoration('img/marketlevel/Building/Roof_A_02.png', 4166, 195, 100, 50), 
        new Decoration('img/marketlevel/Building/Roof_A_03.png', 4266, 195, 40, 50), 
        new Decoration('img/marketlevel/Building/Roof_A_05.png', 3926, 195, 120, 50), 
        new Decoration('img/marketlevel/Building/Roof_A_04.png', 4046, 195, 120, 50), 

        new Decoration('img/marketlevel/Building/Decor_Window_04.png', 4021, 200, 50, 50), 

        new Decoration('img/marketlevel/Environment/Table_01.png', 3950, 302, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 3995, 302, 45, 45), 
  

        new Decoration('img/marketlevel/Environment/Table_01.png', 4170, 302, 45, 45),  
        new Decoration('img/marketlevel/Environment/Table_02.png', 4215, 302, 45, 45), 

        new Decoration('img/marketlevel/Environment/Bucket.png', 3915, 312, 35, 35), 
        new Decoration('img/marketlevel/Environment/Decor_Chest.png', 4125, 292, 75, 55),
        
        new Decoration('img/marketlevel/Environment/Decor_Potions_01.png', 3955, 270, 40, 40), 
        new Decoration('img/marketlevel/Environment/Decor_Potions_02.png', 4065, 307, 40, 40), 
        new Decoration('img/marketlevel/Environment/Bottle.png', 4225, 270, 40, 40), 
        new Decoration('img/marketlevel/Environment/Tankard.png', 4175, 270, 40, 40), 
        new Decoration('img/marketlevel/Environment/Decor_Shield.png', 3990, 302, 45, 45), 
        new Decoration('img/marketlevel/Environment/Herbs.png', 4025, 242, 80, 80),  
        new Decoration('img/marketlevel/Environment/Pot.png', 4262, 312, 35, 35), 

        new Decoration('img/marketlevel/Building/Pillar_02.png', 3155, 360, 20, 86), 
        new Decoration('img/marketlevel/Environment/Sign_01.png', 3104, 359, 55, 55), 

        new Decoration('img/marketlevel/Environment/Decor_Cart.png', 3185, 352, 105, 95),  









        




     


   


      



    ], 
    [   new Collectable('img/potions/potion-blue.png', 555, 395, 40, 40, false, 'ice'),

        new Collectable('img/level1/medieval/Collectable Object/Coin_01.png', 400, 195, 30, 30, true, 'coin'),
       
    ], 
    [

        new Barrel('img/marketlevel/Environment/Wooden_Barrel.png', 255, 360),
   
    ],
    
    
    [
    
       
      
    ],


);