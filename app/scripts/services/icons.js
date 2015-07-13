'use strict';

window.app.factory('icons', function () {

    // group contains
    //   - Furniture (chair, desk, sofa, bookcase, electric, ..)
    //   - Kitchen
    //   - Bath
    //   - Activity (singing, play games, play sport, dancing, ..)
    //   - Light
    //   - Door (door window key, lift, ..)
    //   - Yard (yard, wall, ..)
    //   - Other (electric, ccty, camera, server, ..)

    var iconGroup = [
        'Furniture',
        'Kitchen',
        'Bath',
        'Activity',
        'Light',
        'Door',
        'Yard',
        'Other'
    ];

    var icons = {
        100: {
            icon   : 'flaticon-alcohol5',
            group  : 'Activity',
            keyword: 'alcohol bottle drink party'
        },
        101: {
            icon   : 'flaticon-armchair1',
            group  : 'Furniture',
            keyword: 'armchair chair sit'
        },
        102: {
            icon   : 'flaticon-bed13',
            group  : 'Furniture',
            keyword: 'bed sleep'
        },
        103: {
            icon   : 'flaticon-kitchen56',
            group  : 'Kitchen',
            keyword: 'kitchen cook cooking'
        },
        104: {
            icon   : 'flaticon-studio',
            group  : 'Furniture',
            keyword: 'desk studio computer'
        },
        105: {
            icon   : 'flaticon-knife15',
            group  : 'Kitchen',
            keyword: 'knife spoon fork prong eat lunch dinner breakfast'
        },
        106: {
            icon   : 'flaticon-sofa1',
            group  : 'Furniture',
            keyword: 'sofa'
        },
        107: {
            icon   : 'flaticon-shower8',
            group  : 'Bath',
            keyword: 'bath shower'
        },
        108: {
            icon   : 'flaticon-bath1',
            group  : 'Bath',
            keyword: 'bath shower'
        },
        109: {
            icon   : 'flaticon-wine53',
            group  : 'Kitchen',
            keyword: 'wine glass drink'
        },
        110: {
            icon   : 'flaticon-tv6',
            group  : 'Furniture',
            keyword: 'tv television watching monitor stereo electric entertain'
        },
        111: {
            icon   : 'ion-ios-lightbulb',
            group  : 'Light',
            keyword: 'light lamb bulb electric'
        },
        112: {
            icon   : 'ion-thermometer',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        113: {
            icon   : 'ion-ios-locked',
            group  : 'Door',
            keyword: 'key lock close'
        },
        114: {
            icon   : 'ion-ios-unlocked',
            group  : 'Door',
            keyword: 'key unlock open'
        },
        115: {
            icon   : 'flaticon-open129',
            group  : 'Door',
            keyword: 'open door'
        },
        116: {
            icon   : 'flaticon-closed42',
            group  : 'Door',
            keyword: 'close door'
        },
        117: {
            icon   : 'flaticon-living',
            group  : 'Light',
            keyword: 'living lamp light electric'
        },
        118: {
            icon   : 'flaticon-livingroom9',
            group  : 'Light',
            keyword: 'living lamp light electric'
        },
        119: {
            icon   : 'flaticon-lightbulb10',
            group  : 'Light',
            keyword: 'living lamp light electric'
        },
        120: {
            icon   : 'flaticon-livingroom20',
            group  : 'Light',
            keyword: 'living lamp light electric'
        },
        121: {
            icon   : 'flaticon-flatscreen',
            group  : 'Furniture',
            keyword: 'tv television monitor LCD watching electric entertain'
        },
        122: {
            icon   : 'flaticon-turn-off',
            group  : 'Other',
            keyword: 'switch off on'
        },
        123: {
            icon   : 'flaticon-bowling5',
            group  : 'Activity',
            keyword: 'sport bowling play'
        },
        125: {
            icon   : 'flaticon-breakfast2',
            group  : 'Kitchen',
            keyword: 'breakfast billy kettle electric'
        },
        126: {
            icon   : 'flaticon-bricks5',
            group  : 'Yard',
            keyword: 'brick yard wall'
        },
        127: {
            icon   : 'flaticon-building72',
            group  : 'Door',
            keyword: 'lift close'
        },
        128: {
            icon   : 'flaticon-bulb1',
            group  : 'Light',
            keyword: 'light lamb bulb electric'
        },
        129: {
            icon   : 'flaticon-bunk1',
            group  : 'Furniture',
            keyword: 'bed bunk sleep'
        },
        130: {
            icon   : 'flaticon-bunny1',
            group  : 'Other',
            keyword: 'doll toy child baby'
        },
        131: {
            icon   : 'flaticon-buttons2',
            group  : 'Activity',
            keyword: 'play game joystick control entertain'
        },
        133: {
            icon   : 'flaticon-camera65',
            group  : 'Light',
            keyword: 'light lamp bulb neon fluorescent electric'
        },
        134: {
            icon   : 'flaticon-cat19',
            group  : 'Other',
            keyword: 'cat play'
        },
        135: {
            icon   : 'flaticon-cat26',
            group  : 'Other',
            keyword: 'cat play'
        },
        136: {
            icon   : 'flaticon-children1',
            group  : 'Other',
            keyword: 'toy child play'
        },
        137: {
            icon   : 'flaticon-cinema20',
            group  : 'Furniture',
            keyword: 'chair watching movie'
        },
        138: {
            icon   : 'flaticon-claw1',
            group  : 'Activity',
            keyword: 'bath relax onsen rest'
        },
        140: {
            icon   : 'flaticon-closed13',
            group  : 'Door',
            keyword: 'door lock close'
        },
        141: {
            icon   : 'flaticon-audio39',
            group  : 'Furniture',
            keyword: 'listen music dance speaker electric entertain'
        },
        143: {
            icon   : 'flaticon-closed59',
            group  : 'Door',
            keyword: 'door close'
        },
        145: {
            icon   : 'flaticon-clothes16',
            group  : 'Activity',
            keyword: 'clothes line washing'
        },
        147: {
            icon   : 'flaticon-coffee11',
            group  : 'Kitchen',
            keyword: 'glass drink relax'
        },
        148: {
            icon   : 'flaticon-coffeeshop',
            group  : 'Kitchen',
            keyword: 'glass drink relax'
        },
        149: {
            icon   : 'flaticon-comfortable',
            group  : 'Activity',
            keyword: 'comfort relax watching monitor'
        },
        150: {
            icon   : 'flaticon-computer186',
            group  : 'Furniture',
            keyword: 'computer tv television monitor LCD electric entertain'
        },
        151: {
            icon   : 'flaticon-computer58',
            group  : 'Furniture',
            keyword: 'fan ventilators electric'
        },
        152: {
            icon   : 'flaticon-computer95',
            group  : 'Furniture',
            keyword: 'electric computer monitor watching LCD'
        },
        153: {
            icon   : 'flaticon-computerscreen4',
            group  : 'Furniture',
            keyword: 'electric computer monitor watching LCD'
        },
        156: {
            icon   : 'flaticon-console10',
            group  : 'Other',
            keyword: 'bar range level control'
        },
        157: {
            icon   : 'flaticon-console12',
            group  : 'Activity',
            keyword: 'game play entertain'
        },
        160: {
            icon   : 'flaticon-cooking3',
            group  : 'Kitchen',
            keyword: 'cook cooking barbecue eat party'
        },
        161: {
            icon   : 'flaticon-cooking37',
            group  : 'Kitchen',
            keyword: 'cook cooking barbecue eat party'
        },
        162: {
            icon   : 'flaticon-covered20',
            group  : 'Kitchen',
            keyword: 'cook cooking barbecue eat party'
        },
        163: {
            icon   : 'flaticon-cup74',
            group  : 'Activity',
            keyword: 'drink glass clink party celebrate wine'
        },
        164: {
            icon   : 'flaticon-desk7',
            group  : 'Light',
            keyword: 'light lamp bulb neon fluorescent electric'
        },
        167: {
            icon   : 'flaticon-dining4',
            group  : 'Furniture',
            keyword: 'dining desk chair lunch breakfast eat'
        },
        168: {
            icon   : 'flaticon-discjockey',
            group  : 'Activity',
            keyword: 'dj dance listen song music entertain'
        },
        169: {
            icon   : 'flaticon-door9',
            group  : 'Door',
            keyword: 'logout exit off'
        },
        170: {
            icon   : 'flaticon-doors2',
            group  : 'Door',
            keyword: 'door close'
        },
        171: {
            icon   : 'flaticon-drink111',
            group  : 'Activity',
            keyword: 'drink bottle wine party celebrate'
        },
        173: {
            icon   : 'flaticon-eco5',
            group  : 'Light',
            keyword: 'light lamp bulb neon fluorescent electric'
        },
        174: {
            icon   : 'flaticon-electric10',
            group  : 'Furniture',
            keyword: 'fan electric'
        },
        175: {
            icon   : 'flaticon-electric22',
            group  : 'Furniture',
            keyword: 'electric sewing machine'
        },
        176: {
            icon   : 'flaticon-electric39',
            group  : 'Other',
            keyword: 'iron electric cloth'
        },
        177: {
            icon   : 'flaticon-electric43',
            group  : 'Other',
            keyword: 'plug electric'
        },
        178: {
            icon   : 'flaticon-electric48',
            group  : 'Other',
            keyword: 'heater electric'
        },
        179: {
            icon   : 'flaticon-electric59',
            group  : 'Other',
            keyword: 'plug electric'
        },
        180: {
            icon   : 'flaticon-electric9',
            group  : 'Furniture',
            keyword: 'fan electric'
        },
        181: {
            icon   : 'flaticon-electrical11',
            group  : 'Other',
            keyword: 'plug electric'
        },
        182: {
            icon   : 'flaticon-electrical8',
            group  : 'Other',
            keyword: 'plug electric'
        },
        185: {
            icon   : 'flaticon-fan12',
            group  : 'Furniture',
            keyword: 'fan electric'
        },
        188: {
            icon   : 'flaticon-film50',
            group  : 'Other',
            keyword: 'film movie entertain'
        },
        190: {
            icon   : 'flaticon-flat12',
            group  : 'Furniture',
            keyword: 'tv television watching entertain'
        },
        191: {
            icon   : 'flaticon-baby139',
            group  : 'Furniture',
            keyword: 'baby ben sleep child'
        },
        192: {
            icon   : 'flaticon-flowers12',
            group  : 'Yard',
            keyword: 'flower grass garden relax'
        },
        193: {
            icon   : 'flaticon-frankfurter',
            group  : 'Kitchen',
            keyword: 'eat food breakfast lunch dinner cook'
        },
        194: {
            icon   : 'flaticon-frying1',
            group  : 'Kitchen',
            keyword: 'food cook fry'
        },
        195: {
            icon   : 'flaticon-gamepad',
            group  : 'Activity',
            keyword: 'play game entertain'
        },
        197: {
            icon   : 'flaticon-garage3',
            group  : 'Other',
            keyword: 'car garage'
        },
        198: {
            icon   : 'flaticon-glass35',
            group  : 'Kitchen',
            keyword: 'drink relax water juice ice relax food eat'
        },
        199: {
            icon   : 'flaticon-grass',
            group  : 'Yard',
            keyword: 'yard'
        },
        201: {
            icon   : 'flaticon-halloween252',
            group  : 'Other',
            keyword: 'pumpkin halloween'
        },
        202: {
            icon   : 'flaticon-hammer38',
            group  : 'Activity',
            keyword: 'fix repair hammer wrench spanner'
        },
        203: {
            icon   : 'flaticon-hammer42',
            group  : 'Activity',
            keyword: 'fix repair hammer wrench spanner'
        },
        204: {
            icon   : 'flaticon-hammer44',
            group  : 'Activity',
            keyword: 'fix repair hammer wrench spanner'
        },
        205: {
            icon   : 'flaticon-hand211',
            group  : 'Activity',
            keyword: 'karaoke sing music entertain dance song microphone'
        },
        206: {
            icon   : 'flaticon-headset6',
            group  : 'Other',
            keyword: 'listen music entertain relax'
        },
        207: {
            icon   : 'flaticon-home115',
            group  : 'Furniture',
            keyword: 'watching movie listen tv television dance music entertain stereo'
        },
        208: {
            icon   : 'flaticon-house100',
            group  : 'Other',
            keyword: 'stair up down floor'
        },
        210: {
            icon   : 'flaticon-iron7',
            group  : 'Furniture',
            keyword: 'iron electric cloth'
        },
        211: {
            icon   : 'flaticon-key16',
            group  : 'Door',
            keyword: 'door window key open unlock'
        },
        212: {
            icon   : 'flaticon-king11',
            group  : 'Furniture',
            keyword: 'bed sleep relax'
        },
        214: {
            icon   : 'flaticon-kitchen63',
            group  : 'Furniture',
            keyword: 'desk dinner eat food'
        },
        215: {
            icon   : 'flaticon-kitchen64',
            group  : 'Kitchen',
            keyword: 'cook eat food'
        },
        216: {
            icon   : 'flaticon-kitchen65',
            group  : 'Kitchen',
            keyword: 'cook eat food'
        },
        219: {
            icon   : 'flaticon-lamp15',
            group  : 'Light',
            keyword: 'light lamp bulb electric'
        },
        220: {
            icon   : 'flaticon-lamp16',
            group  : 'Light',
            keyword: 'light lamp bulb electric'
        },
        222: {
            icon   : 'flaticon-lamp18',
            group  : 'Light',
            keyword: 'light lamp bulb electric'
        },
        224: {
            icon   : 'flaticon-lift1',
            group  : 'Door',
            keyword: 'lift up down close'
        },
        225: {
            icon   : 'flaticon-light76',
            group  : 'Light',
            keyword: 'light lamp bulb electric'
        },
        226: {
            icon   : 'flaticon-basketball9',
            group  : 'Activity',
            keyword: 'sport play exercise'
        },
        227: {
            icon   : 'flaticon-lightbulb38',
            group  : 'Light',
            keyword: 'light lamp bulb electric'
        },
        229: {
            icon   : 'flaticon-bath2',
            group  : 'Bath',
            keyword: 'bath shower'
        },
        230: {
            icon   : 'flaticon-living1',
            group  : 'Activity',
            keyword: 'book read bookcase'
        },
        231: {
            icon   : 'flaticon-livingroom1',
            group  : 'Door',
            keyword: 'door window'
        },
        232: {
            icon   : 'flaticon-livingroom12',
            group  : 'Light',
            keyword: 'light bulb lamb living'
        },
        233: {
            icon   : 'flaticon-livingroom15',
            group  : 'Door',
            keyword: 'door window'
        },
        234: {
            icon   : 'flaticon-livingroom19',
            group  : 'Door',
            keyword: 'door window'
        },
        235: {
            icon   : 'flaticon-bathroom22',
            group  : 'Bath',
            keyword: 'bath shower'
        },
        236: {
            icon   : 'flaticon-livingroom4',
            group  : 'Furniture',
            keyword: 'book bookcase read vase'
        },
        237: {
            icon   : 'flaticon-livingroom8',
            group  : 'Furniture',
            keyword: 'sofa chair living relax'
        },
        238: {
            icon   : 'flaticon-bathtub3',
            group  : 'Bath',
            keyword: 'bath shower'
        },
        239: {
            icon   : 'flaticon-lock81',
            group  : 'Door',
            keyword: 'door key lock'
        },
        241: {
            icon   : 'flaticon-lovely2',
            group  : 'Activity',
            keyword: 'love couple valentine sweet romantic'
        },
        243: {
            icon   : 'flaticon-man204',
            group  : 'Activity',
            keyword: 'dance celebrate party listen music entertain'
        },
        244: {
            icon   : 'flaticon-man216',
            group  : 'Activity',
            keyword: 'read news work'
        },
        245: {
            icon   : 'flaticon-man349',
            group  : 'Activity',
            keyword: 'steal skulk peek door open'
        },
        246: {
            icon   : 'flaticon-man7',
            group  : 'Activity',
            keyword: 'read news work'
        },
        247: {
            icon   : 'flaticon-mask19',
            group  : 'Activity',
            keyword: 'mask fancy party show entertain'
        },
        248: {
            icon   : 'flaticon-microscope4',
            group  : 'Activity',
            keyword: 'research study work test experiment'
        },
        250: {
            icon   : 'flaticon-mixer8',
            group  : 'Kitchen',
            keyword: 'electric food drink water juice'
        },
        251: {
            icon   : 'flaticon-mobile30',
            group  : 'Other',
            keyword: 'fingerprint key lock'
        },
        252: {
            icon   : 'flaticon-monitor90',
            group  : 'Furniture',
            keyword: 'LCD watch monitor entertain'
        },
        253: {
            icon   : 'flaticon-mother12',
            group  : 'Activity',
            keyword: 'mother child baby diaper nappy napkin clean'
        },
        255: {
            icon   : 'flaticon-mower2',
            group  : 'Yard',
            keyword: 'mower yard grass'
        },
        256: {
            icon   : 'flaticon-musical51',
            group  : 'Activity',
            keyword: 'scratch dance party listen music song entertain'
        },
        257: {
            icon   : 'flaticon-nintendo7',
            group  : 'Activity',
            keyword: 'play game joystick control entertain'
        },
        258: {
            icon   : 'flaticon-beaker4',
            group  : 'Other',
            keyword: 'tube science experiment test research chemical'
        },
        259: {
            icon   : 'flaticon-open161',
            group  : 'Activity',
            keyword: 'book open read'
        },
        260: {
            icon   : 'flaticon-open203',
            group  : 'Door',
            keyword: 'door open window'
        },
        261: {
            icon   : 'flaticon-open204',
            group  : 'Door',
            keyword: 'door open window'
        },
        262: {
            icon   : 'flaticon-opened16',
            group  : 'Door',
            keyword: 'door window open'
        },
        263: {
            icon   : 'flaticon-opened17',
            group  : 'Door',
            keyword: 'door window open'
        },
        264: {
            icon   : 'flaticon-opened33',
            group  : 'Door',
            keyword: 'door window open'
        },
        265: {
            icon   : 'flaticon-opened37',
            group  : 'Door',
            keyword: 'door window open'
        },
        266: {
            icon   : 'flaticon-opened38',
            group  : 'Door',
            keyword: 'door window lift open'
        },
        267: {
            icon   : 'flaticon-oven1',
            group  : 'Kitchen',
            keyword: 'cook microwave oven food eat'
        },
        269: {
            icon   : 'flaticon-padlock76',
            group  : 'Door',
            keyword: 'door window unlock open'
        },
        270: {
            icon   : 'flaticon-padlock77',
            group  : 'Door',
            keyword: 'door window lock close'
        },
        271: {
            icon   : 'flaticon-padlock79',
            group  : 'Door',
            keyword: 'door window unlock open'
        },
        272: {
            icon   : 'flaticon-padlock9',
            group  : 'Door',
            keyword: 'door window lock close'
        },
        273: {
            icon   : 'flaticon-paint49',
            group  : 'Activity',
            keyword: 'paint color'
        },
        274: {
            icon   : 'flaticon-party',
            group  : 'Activity',
            keyword: 'dance disco listen music entertain'
        },
        275: {
            icon   : 'flaticon-person110',
            group  : 'Activity',
            keyword: 'party dance music celebrate jump'
        },
        276: {
            icon   : 'flaticon-person117',
            group  : 'Activity',
            keyword: 'archery archer play sport'
        },
        277: {
            icon   : 'flaticon-person169',
            group  : 'Bath',
            keyword: 'wc toilet flush'
        },
        280: {
            icon   : 'flaticon-plant23',
            group  : 'Yard',
            keyword: 'leaf plant tree'
        },
        281: {
            icon   : 'flaticon-plant35',
            group  : 'Yard',
            keyword: 'leaf plant tree'
        },
        282: {
            icon   : 'flaticon-plants',
            group  : 'Yard',
            keyword: 'leaf plant tree'
        },
        284: {
            icon   : 'flaticon-plug12',
            group  : 'Other',
            keyword: 'plug electric'
        },
        288: {
            icon   : 'flaticon-power26',
            group  : 'Other',
            keyword: 'switch power on off electric'
        },
        289: {
            icon   : 'flaticon-ps45',
            group  : 'Activity',
            keyword: 'play station game entertain'
        },
        290: {
            icon   : 'flaticon-pull2',
            group  : 'Light',
            keyword: 'light lamp bulb electric living'
        },
        291: {
            icon   : 'flaticon-queen9',
            group  : 'Furniture',
            keyword: 'bed sleep relax'
        },
        293: {
            icon   : 'flaticon-refrigerator3',
            group  : 'Kitchen',
            keyword: 'refrigerator food eat cook electric'
        },
        294: {
            icon   : 'flaticon-restaurant26',
            group  : 'Kitchen',
            keyword: 'spoon knife fork prong eat dinner breakfast lunch food cook'
        },
        296: {
            icon   : 'flaticon-room5',
            group  : 'Light',
            keyword: 'light lamb bulb electric'
        },
        298: {
            icon   : 'flaticon-screen63',
            group  : 'Furniture',
            keyword: 'tv television entertain electric watching monitor LCD'
        },
        299: {
            icon   : 'flaticon-shiny',
            group  : 'Activity',
            keyword: 'dance disco music entertain'
        },
        300: {
            icon   : 'flaticon-beaker5',
            group  : 'Other',
            keyword: 'tube experiment research study chemical'
        },
        302: {
            icon   : 'flaticon-silhouette66',
            group  : 'Activity',
            keyword: 'play sport swimming'
        },
        303: {
            icon   : 'flaticon-soccer10',
            group  : 'Activity',
            keyword: 'play sport soccer'
        },
        305: {
            icon   : 'flaticon-bed8',
            group  : 'Furniture',
            keyword: 'bed sleep relax'
        },
        306: {
            icon   : 'flaticon-sound41',
            group  : 'Activity',
            keyword: 'microphone sing song music entertain dance'
        },
        307: {
            icon   : 'flaticon-stickman',
            group  : 'Activity',
            keyword: 'yoga sport exercise relax entertain'
        },
        308: {
            icon   : 'flaticon-student1',
            group  : 'Activity',
            keyword: 'read book study desk work'
        },
        310: {
            icon   : 'flaticon-studio10',
            group  : 'Furniture',
            keyword: 'computer desk work LCD monitor watching monitor'
        },
        311: {
            icon   : 'flaticon-studio12',
            group  : 'Activity',
            keyword: 'roundabout circle drawing sketch work'
        },
        312: {
            icon   : 'flaticon-studio15',
            group  : 'Other',
            keyword: 'electric print document work'
        },
        313: {
            icon   : 'flaticon-studio7',
            group  : 'Activity',
            keyword: 'drawing sketch pencil pen paint'
        },
        315: {
            icon   : 'flaticon-swimming19',
            group  : 'Activity',
            keyword: 'pool play sport swim'
        },
        316: {
            icon   : 'flaticon-swimming8',
            group  : 'Activity',
            keyword: 'pool play sport swim'
        },
        322: {
            icon   : 'flaticon-teacher33',
            group  : 'Activity',
            keyword: 'suitcase work out door open window'
        },
        323: {
            icon   : 'flaticon-television10',
            group  : 'Furniture',
            keyword: 'electric speaker music listen entertain dance song'
        },
        324: {
            icon   : 'flaticon-tennis6',
            group  : 'Activity',
            keyword: 'play sport tennis'
        },
        325: {
            icon   : 'flaticon-thermometer2',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        326: {
            icon   : 'flaticon-thermometer43',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        327: {
            icon   : 'flaticon-thermometer49',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        328: {
            icon   : 'flaticon-thermometer50',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        329: {
            icon   : 'flaticon-thermometer63',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        330: {
            icon   : 'flaticon-thermometer65',
            group  : 'Other',
            keyword: 'thermometer temperature'
        },
        332: {
            icon   : 'flaticon-toaster3',
            group  : 'Kitchen',
            keyword: 'electric bread breakfast eat cook food'
        },
        334: {
            icon   : 'flaticon-toilet10',
            group  : 'Bath',
            keyword: 'bath toilet wc flush'
        },
        336: {
            icon   : 'flaticon-turkey11',
            group  : 'Kitchen',
            keyword: 'chicken microwave oven electric cook eat food'
        },
        337: {
            icon   : 'flaticon-turkey9',
            group  : 'Kitchen',
            keyword: 'eat food dinner celebrate party cook'
        },
        338: {
            icon   : 'flaticon-bedroom16',
            group  : 'Furniture',
            keyword: 'wardrobe cloth'
        },
        340: {
            icon   : 'flaticon-bedroom2',
            group  : 'Furniture',
            keyword: 'wardrobe cloth'
        },
        341: {
            icon   : 'flaticon-two17',
            group  : 'Activity',
            keyword: 'balloon party celebrate entertain'
        },
        342: {
            icon   : 'flaticon-umbrella29',
            group  : 'Furniture',
            keyword: 'relax beach sunshine'
        },
        345: {
            icon   : 'flaticon-unlocked7',
            group  : 'Door',
            keyword: 'door window key unlock open'
        },
        346: {
            icon   : 'flaticon-vacuum6',
            group  : 'Other',
            keyword: 'electric clean vacuum'
        },
        348: {
            icon   : 'flaticon-video103',
            group  : 'Other',
            keyword: 'video camera electric'
        },
        350: {
            icon   : 'flaticon-wii14',
            group  : 'Activity',
            keyword: 'play game entertain control'
        },
        351: {
            icon   : 'flaticon-wine13',
            group  : 'Activity',
            keyword: 'drink bottle celebrate party bottle glass'
        },
        352: {
            icon   : 'flaticon-bedroom3',
            group  : 'Furniture',
            keyword: 'bed sleep relax'
        },
        353: {
            icon   : 'flaticon-wood6',
            group  : 'Yard',
            keyword: 'fence bar paling palisade'
        },
        354: {
            icon   : 'flaticon-wrench44',
            group  : 'Other',
            keyword: 'fix wrench repair'
        },
        355: {
            icon   : 'flaticon-yard4',
            group  : 'Yard',
            keyword: 'yard shovel spade mattock pickax garden'
        },
        356: {
            icon   : 'flaticon-yard5',
            group  : 'Yard',
            keyword: 'garden tree leaf yard'
        },
        358: {
            icon   : 'flaticon-beer6',
            group  : 'Activity',
            keyword: 'beer drink party celebrate relax'
        },
        359: {
            icon   : 'flaticon-birthday10',
            group  : 'Activity',
            keyword: 'birthday cake bakery celebrate party'
        },
        360: {
            icon   : 'flaticon-books8',
            group  : 'Activity',
            keyword: 'book read'
        },
        361: {
            icon   : 'flaticon-bottle33',
            group  : 'Activity',
            keyword: 'drink bottle celebrate party bottle glass'
        },
        362: {
            icon   : 'flaticon-surveillance',
            group  : 'Other',
            keyword: 'cctv camera'
        },
        363: {
            icon   : 'flaticon-data18',
            group  : 'Other',
            keyword: 'server storage data'
        },
        364: {
            icon   : 'flaticon-storage20',
            group  : 'Other',
            keyword: 'server storage data'
        },
        365: {
            icon   : 'flaticon-data110',
            group  : 'Other',
            keyword: 'server storage data'
        },
        366: {
            icon   : 'flaticon-wireless40',
            group  : 'Other',
            keyword: 'server storage data wireless'
        },
        367: {
            icon   : 'flaticon-wifi93',
            group  : 'Other',
            keyword: 'server storage data wireless'
        },
        368: {
            icon   : 'flaticon-wireless15',
            group  : 'Other',
            keyword: 'server storage data wireless'
        },
        369: {
            icon   : 'flaticon-data26',
            group  : 'Other',
            keyword: 'server storage data'
        },
        370: {
            icon   : 'flaticon-glasses35',
            group  : 'Activity',
            keyword: 'drink dinner celebrate'
        },
        371: {
            icon   : 'flaticon-hand202',
            group  : 'Activity',
            keyword: 'drink dinner celebrate'
        },
        372: {
            icon   : 'flaticon-alcohol3',
            group  : 'Activity',
            keyword: 'drink alcohol water'
        },
        373: {
            icon   : 'flaticon-cocktail7',
            group  : 'Activity',
            keyword: 'drink dinner celebrate'
        },
        374: {
            icon   : 'flaticon-alcohol4',
            group  : 'Activity',
            keyword: 'drink alcohol celebrate beer'
        },
        375: {
            icon   : 'flaticon-salty2',
            group  : 'Kitchen',
            keyword: 'cook cooking'
        },
        376: {
            icon   : 'flaticon-kitchen2',
            group  : 'Kitchen',
            keyword: 'cook cooking pot'
        },
        377: {
            icon   : 'flaticon-food60',
            group  : 'Kitchen',
            keyword: 'cook cooking chef'
        },
        378: {
            icon   : 'flaticon-birthdaycake',
            group  : 'Kitchen',
            keyword: 'bekery cake birthday celebrate'
        },
        379: {
            icon   : 'flaticon-park7',
            group  : 'Kitchen',
            keyword: 'food hamburger hotdog eat drink'
        },
        380: {
            icon   : 'flaticon-burger10',
            group  : 'Kitchen',
            keyword: 'food hamburger hotdog eat lunch dinner breakfast'
        },
        381: {
            icon   : 'flaticon-hot64',
            group  : 'Kitchen',
            keyword: 'food hamburger hotdog eat lunch dinner breakfast'
        },
        382: {
            icon   : 'flaticon-meal3',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast'
        },
        383: {
            icon   : 'flaticon-plate13',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish'
        },
        384: {
            icon   : 'flaticon-dining3',
            group  : 'Furniture',
            keyword: 'food cook eat lunch dinner breakfast desk activity'
        },
        385: {
            icon   : 'flaticon-chinese13',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish'
        },
        386: {
            icon   : 'flaticon-man288',
            group  : 'Activity',
            keyword: 'food eat lunch dinner breakfast steak'
        },
        387: {
            icon   : 'flaticon-restaurant29',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish'
        },
        388: {
            icon   : 'flaticon-man332',
            group  : 'Activity',
            keyword: 'food eat lunch dinner breakfast noodle'
        },
        389: {
            icon   : 'flaticon-flat15',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish'
        },
        390: {
            icon   : 'flaticon-hairdresser15',
            group  : 'Activity',
            keyword: 'hair shampoo relax clean wash'
        },
        391: {
            icon   : 'flaticon-dog64',
            group  : 'Activity',
            keyword: 'wash bath clean'
        },
        392: {
            icon   : 'flaticon-laundry7',
            group  : 'Furniture',
            keyword: 'wash clean electric cloth'
        },
        393: {
            icon   : 'flaticon-bowl12',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish microwave electric'
        },
        394: {
            icon   : 'flaticon-microwave2',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish microwave electric'
        },
        395: {
            icon   : 'flaticon-summer11',
            group  : 'Other',
            keyword: 'fan electric'
        },
        396: {
            icon   : 'flaticon-kitchen51',
            group  : 'Furniture',
            keyword: 'microwave cook eat refrigerator lunch dinner breakfast electric'
        },
        397: {
            icon   : 'flaticon-electric46',
            group  : 'Other',
            keyword: 'plug electric'
        },
        398: {
            icon   : 'flaticon-electric49',
            group  : 'Other',
            keyword: 'plug electric'
        },
        399: {
            icon   : 'flaticon-electric44',
            group  : 'Other',
            keyword: 'plug electric'
        },
        400: {
            icon   : 'flaticon-plug9',
            group  : 'Other',
            keyword: 'plug electric'
        },
        401: {
            icon   : 'flaticon-electric50',
            group  : 'Other',
            keyword: 'plug electric'
        },
        402: {
            icon   : 'flaticon-refrigerator4',
            group  : 'Furniture',
            keyword: 'microwave cook eat refrigerator lunch dinner breakfast electric'
        },
        403: {
            icon   : 'flaticon-printer75',
            group  : 'Other',
            keyword: 'print electric document'
        },
        404: {
            icon   : 'flaticon-mp313',
            group  : 'Furniture',
            keyword: 'wash clean electric cloth'
        },
        405: {
            icon   : 'flaticon-warm-up',
            group  : 'Kitchen',
            keyword: 'food cook eat lunch dinner breakfast bowl cup dish microwave electric'
        },
        406: {
            icon   : 'flaticon-server14',
            group  : 'Other',
            keyword: 'server storage data'
        },
        407: {
            icon   : 'flaticon-hurry',
            group  : 'Activity',
            keyword: 'go run office hustle work suitcase'
        },
        408: {
            icon   : 'flaticon-portfolio3',
            group  : 'Activity',
            keyword: 'go run office hustle work suitcase'
        },
        409: {
            icon   : 'flaticon-computer72',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        410: {
            icon   : 'flaticon-photo130',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        411: {
            icon   : 'flaticon-dome2',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        412: {
            icon   : 'flaticon-professional8',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        413: {
            icon   : 'flaticon-surveillance21',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        414: {
            icon   : 'flaticon-documentary1',
            group  : 'Other',
            keyword: 'server storage data camera cctv photo video'
        },
        415: {
            icon   : 'flaticon-radio41',
            group  : 'Furniture',
            keyword: 'electric air cool'
        }
    };

    // Store icons by group into iconsByGroupArray
    //
    // iconsByGroupArray Format Ex.
    // var iconsByGroupArray = [
    //    {
    //          groupName: 'Furniture',
    //          icons: [
    //              {
    //                  $id: 111,
    //                  icon: 'flaticon-chair',
    //                  group: 'Furniture',
    //                  keyword: 'desk chair work living'
    //              },
    //              {
    //                  $id: 111,
    //                  icon: 'flaticon-chair',
    //                  group: 'Furniture',
    //                  keyword: 'desk chair work living'
    //              }
    //          ]
    //    },
    //    ..
    // ];

    var iconsByGroupArray = [
        {
            groupName: 'Furniture',
            icons    : []
        },
        {
            groupName: 'Door',
            icons    : []
        },
        {
            groupName: 'Light',
            icons    : []
        },
        {
            groupName: 'Kitchen',
            icons    : []
        },
        {
            groupName: 'Bath',
            icons    : []
        },
        {
            groupName: 'Yard',
            icons    : []
        },
        {
            groupName: 'Activity',
            icons    : []
        },
        {
            groupName: 'Other',
            icons    : []
        }
    ];

    angular.forEach(icons, function (value, key) {

        var icon = angular.copy(value);
        icon.$id = key;

        if (value.group === 'Furniture') {
            iconsByGroupArray[0].icons.push(icon);

        } else if (value.group === 'Door') {
            iconsByGroupArray[1].icons.push(icon);

        } else if (value.group === 'Light') {
            iconsByGroupArray[2].icons.push(icon);

        } else if (value.group === 'Kitchen') {
            iconsByGroupArray[3].icons.push(icon);

        } else if (value.group === 'Bath') {
            iconsByGroupArray[4].icons.push(icon);

        } else if (value.group === 'Yard') {
            iconsByGroupArray[5].icons.push(icon);

        } else if (value.group === 'Activity') {
            iconsByGroupArray[6].icons.push(icon);

        } else if (value.group === 'Other') {
            iconsByGroupArray[7].icons.push(icon);

        }
    });


    //var iconsByGroupArray = [];
    //var i = 0;
    //
    //angular.forEach(iconGroup, function (group) {
    //
    //    iconsByGroupArray[i] = {
    //        groupName: '',
    //        icons: []
    //    };
    //
    //    iconsByGroupArray[i].groupName = group;
    //    iconsByGroupArray[i].icons = [];
    //
    //    angular.forEach(icons, function (value, key) {
    //        if(value.group === group) {
    //
    //            var icon = angular.copy(value);
    //            icon.$id = key;
    //
    //            iconsByGroupArray[i].icons.push(icon);
    //        }
    //    });
    //
    //    i++;
    //
    //});

    // icons-Obj to icons-Array
    var iconsArray = [];
    angular.forEach(icons, function (value, key) {
        var tmp = angular.copy(value);
        tmp.$id = key;

        iconsArray.push(tmp);
    });

    // return value
    return function (input) {

        if (input === true) {
            return icons;

        } else if (!input) {
            return iconsArray;

        } else if (input === 'group') {
            return iconGroup;

        } else if (input === 'iconsByGroup') {
            return iconsByGroupArray;

        } else {
            return icons;
        }
    };

});
