/** This function is used to determine the positions of the floors
 *
 *
 * @param(number) is the x-axis of the game
 * @param(level) is the level of the game
 */

const floorX = {
  level1: [
    { until: 78, ground: [95, 365] },
    { until: 85, ground: [365] },
    { until: 210, ground: [175, 365] },
    { until: 245, ground: [365] },
    { until: 368, ground: [245, 365] },
    { until: 380, ground: [680] },
    { until: 518, ground: [305] },
    { until: 528, ground: [680] },
    { until: 858, ground: [245] },
    // moving floor
    { until: 860, ground: [680] },
    { until: 958, ground: [245] },
    { until: 1098, ground: [680] },
    //moving floor end
    { until: 1242, ground: [245] },
    { until: 1358, ground: [175, 680] },
    { until: 1400, ground: [680] },
    { until: 1468, ground: [175] },
    { until: 1500, ground: [680] },
    { until: 1568, ground: [175] },
    { until: 1600, ground: [680] },
    { until: 1668, ground: [175] },
    { until: 1700, ground: [680] },
    { until: 1768, ground: [175] },
    { until: 1800, ground: [680] },
    { until: 1858, ground: [175] },
    { until: 1970, ground: [680] },
    { until: 2190, ground: [375] },
    { until: 2240, ground: [210, 255, 375] },
    { until: 2290, ground: [255, 375] },
    { until: 2340, ground: [135, 255, 375] },
    { until: 2390, ground: [135, 375] },
    { until: 2440, ground: [90, 135, 330, 375] },
    { until: 2490, ground: [330, 375] },
    { until: 2565, ground: [680] },
    { until: 2625, ground: [240] },
    { until: 2690, ground: [680] },
    { until: 2755, ground: [240] },
    { until: 2800, ground: [70, 680] },
    { until: 2845, ground: [70, 240] },
    { until: 2890, ground: [240] },
    { until: 2990, ground: [160, 240] },
    { until: 3050, ground: [680] },
    { until: 3110, ground: [165] },
    { until: 3150, ground: [680] },
    { until: 3240, ground: [165] },
    { until: 3280, ground: [85, 165] },
    { until: 3380, ground: [50, 165] },
    { until: 3490, ground: [680] },
    { until: 3600, ground: [345] },
    { until: 3660, ground: [261, 345] },
    { until: 3700, ground: [345] },
    { until: 3760, ground: [208, 345] },
    { until: 3800, ground: [680] },
    { until: 3860, ground: [238] },
    { until: 3910, ground: [680] },
    { until: 3960, ground: [258] },
    { until: 4010, ground: [680] },
    { until: 4060, ground: [238] },
    { until: 4100, ground: [680] },
    { until: 4600, ground: [245] }

    ///// floordata for level2s
  ],
  level2: 
    [
      {until: 920, ground: [380]},
      {until: 1000, ground: [680]},
      {until: 1180, ground: [320]},
      {until: 1260, ground: [680]},
      {until: 1460, ground: [260]},
      {until: 1550, ground: [680]},
      {until: 1730, ground: [200]},
      {until: 1810, ground: [680]},
      {until: 2000, ground: [140]},
      {until: 2080, ground: [680]},
      {until: 2270, ground: [80]},
      {until: 2350, ground: [680]},
      {until: 2390, ground: [20]},
      {until: 2450, ground: [20, 380]},
      {until: 2510, ground: [20, 184, 380]},
      {until: 2520, ground: [20, 380]},
      {until: 3370, ground: [380]},
      {until: 3400, ground: [680]},
      {until: 3450, ground: [380]},
      {until: 3500, ground: [680]},
      {until: 3550, ground: [380]},
      {until: 3600, ground: [680]},
      {until: 3650, ground: [380]},
      {until: 3700, ground: [680]},
      {until: 3850, ground: [330]},
      {until: 3900, ground: [680]},
      {until: 4310, ground: [280]},
      {until: 4350, ground: [680]},
      {until: 4620, ground: [280]},


    ],
  ///// floordata for level3


  level3: [
    { until: 255, ground: [365] },
    { until: 300, ground: [285, 365] },
    { until: 350, ground: [215, 285, 365] },
    { until: 450, ground: [215, 285, 680] },
    { until: 500, ground: [215, 365] },
    { until: 910, ground: [215] },
    { until: 1040, ground: [680] },
    { until: 1250, ground: [395] },
    { until: 1300, ground: [680] },
    { until: 1400, ground: [180, 340] },
    { until: 1500, ground: [100, 260] },
    { until: 1750, ground: [100] },
    { until: 1850, ground: [180] },
    { until: 2050, ground: [260] },
    { until: 2200, ground: [360] },
    { until: 2250, ground: [310] },
    { until: 2350, ground: [680] },
    { until: 3000, ground: [330] },
    { until: 3150, ground: [260] },

    { until: 3150, ground: [680] },
    { until: 3250, ground: [215] },

    { until: 3500, ground: [220] },
    { until: 3550, ground: [680] },
    { until: 3750, ground: [215] },
    { until: 3800, ground: [680] },
    { until: 3950, ground: [315] },
    { until: 4000, ground: [680] },
    { until: 4050, ground: [240] },
    { until: 4100, ground: [680] },
    { until: 4150, ground: [240] },
    { until: 4200, ground: [680] },
    { until: 4250, ground: [170] },
    { until: 4300, ground: [680] },
    { until: 4550, ground: [100] },
    { until: 4600, ground: [680] }
  ],

  level4: [
    { until: 750, ground: [240] },
    { until: 1450, ground: [340] },
    { until: 1650, ground: [290] },
    { until: 1700, ground: [240, 290] },
    { until: 1800, ground: [190, 290] },
    { until: 1850, ground: [140, 290] },
    { until: 1900, ground: [680] },
    { until: 1950, ground: [290] },

    { until: 2050, ground: [145, 290] },
    { until: 2650, ground: [290] },

    { until: 2750, ground: [80, 220] },

    { until: 2850, ground: [10, 150] },

    { until: 2950, ground: [10] },

    { until: 3050, ground: [20] },

    { until: 3650, ground: [370] },
    { until: 3750, ground: [280, 370] },

    { until: 3900, ground: [370] },

    { until: 4200, ground: [280, 370] },

    { until: 5005, ground: [370] }
  ]
}
