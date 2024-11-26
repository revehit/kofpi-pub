/**
 * 임삼물 정보
 */
const forestProducts = [
    {
        name: '떫은감',
        code: 'astringent_persimmon',
        usage: ['식용, 약용'],
        cultivationEnvironment: [
            '- 연평균기온: 12~15℃',
            '- 연강수량: 1,200mm',
            '- 토양특성: pH 5.5~6.0의 양토~식양토'
        ],
        income2023: [
            '19,259천원/ha (평가액 - 경영비)',
            '- 평가액: 29,325천원/ha, 경영비: 10,066천원/ha',
            '※ 전국 평균값으로, 실제와 다를 수 있습니다.'
        ],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '생표고',
        code: 'fresh_shiitake',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '참나물',
        code: 'chamnamul',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '은행',
        code: 'ginkgo_nut',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '마',
        code: 'yam',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '잣',
        code: 'pine_nut',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '취나물',
        code: 'chwinamul',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '더덕',
        code: 'deodeok',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '고려엉겅퀴',
        code: 'korean_thistle',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '도라지',
        code: 'balloon_flower_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '오미자',
        code: 'schisandra_berry',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '밤',
        code: 'chestnut',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '감초',
        code: 'licorice_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '독활',
        code: 'japanese_angelica',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '복분자딸기',
        code: 'korean_raspberry',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '천마',
        code: 'gastrodia_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '황칠나무',
        code: 'dendropanax_tree',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '산딸기',
        code: 'wild_raspberry',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '작약',
        code: 'peony_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '대추',
        code: 'jujube',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '천궁',
        code: 'cnidium_rhizome',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '당귀',
        code: 'angelica_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '산마늘',
        code: 'wild_garlic',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '죽순',
        code: 'bamboo_shoot',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '고사리',
        code: 'bracken_fern',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '하수오',
        code: 'fo_ti_root',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '눈개승마',
        code: 'false_spikenard',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '꽃송이버섯',
        code: 'cauliflower_mushroom',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '건표고',
        code: 'dried_shiitake',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '구기자',
        code: 'goji_berry',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
    {
        name: '오갈피',
        code: 'siberian_ginseng',
        usage: [],
        cultivationEnvironment: [],
        income2023: [],
        imageUrl: '',
        imageSource: '',
        cultivationGuideUrl: '',
        manualUrl: '',
    },
];


/**
 * 지역정보
 *
 * 인구 현황 (populationStatus): 인구, 가구, 평균 연령 등 기본 정보.
 * 지역 특성 (regionCharacteristics): 연도별 인구와 가구 변화.
 * 기상 정보 (weather): 월별 온도와 강수량.
 * 경제 (economic): 연도별 지역내총생산 (Regional GDP).
 * 안전 (safety): 교통사고, 화재, 범죄 등.
 * 교육 (education): 유치원, 초등학교, 대학 등 시설 현황.
 * 의료 (medical): 병원, 약국 개수.
 * 문화 시설 (culturalFacilities): 문화, 사회복지, 노인 여가복지 시설.
 * 부동산 정보 (realEstate): 표준지 공시지가.
 **/
const regions = [
    {
        parent:'부산광역시', name:'기장군',
        populationStatus:{
            population:{'2023':178729},
            households:{'2023':73595},
            averageAge:{'2023':43.3},
            forestryPopulation: {'2020':421},
            forestryHouseholds: {'2020':181}
        },
        regionCharacteristics: {
            population:{'2019':164716,'2020':174545,'2021':177125,'2022':178614,'2023':178729},
            households:{'2019':62769,'2020':67189,'2021':70266,'2022':72002,'2023':73595}
        },
        weather: {
            temperature: {
                '2021-01': 7.9,
                '2021-02': 11.9,
                '2021-03': 15.9,
                '2021-04': 19.7,
                '2021-05': 21.5,
                '2021-06': 25.4,
                '2021-07': 29.5,
                '2021-08': 29.4,
                '2021-09': 26.4,
                '2021-10': 23.3,
                '2021-11': 17.4,
                '2021-12': 10.8,
                '2022-01': 9.2,
                '2022-02': 8.8,
                '2022-03': 14.8,
                '2022-04': 19.1,
                '2022-05': 23.4,
                '2022-06': 24.9,
                '2022-07': 29.7,
                '2022-08': 29.7,
                '2022-09': 26.9,
                '2022-10': 22.7,
                '2022-11': 19.8,
                '2022-12': 8.1,
                '2023-01': 8.9,
                '2023-02': 11.8,
                '2023-03': 17,
                '2023-04': 19,
                '2023-05': 21.6,
                '2023-06': 26,
                '2023-07': 28.5,
                '2023-08': 31,
                '2023-09': 28.2,
                '2023-10': 23.3,
                '2023-11': 16.7,
                '2023-12': 10.8,
            },
            precipitation: {
                '2021-01': 25.8,
                '2021-02': 49.5,
                '2021-03': 127.5,
                '2021-04': 107.1,
                '2021-05': 139.2,
                '2021-06': 232.3,
                '2021-07': 399.9,
                '2021-08': 481.2,
                '2021-09': 164.7,
                '2021-10': 18.2,
                '2021-11': 57.9,
                '2021-12': 4.5,
                '2022-01': 0,
                '2022-02': 0,
                '2022-03': 127.4,
                '2022-04': 130.6,
                '2022-05': 5.4,
                '2022-06': 152,
                '2022-07': 145,
                '2022-08': 176.7,
                '2022-09': 162.4,
                '2022-10': 9.7,
                '2022-11': 61.3,
                '2022-12': 21.4,
                '2023-01': 79.2,
                '2023-02': 30,
                '2023-03': 76.2,
                '2023-04': 101.6,
                '2023-05': 290.7,
                '2023-06': 153.9,
                '2023-07': 701.7,
                '2023-08': 299.9,
                '2023-09': 322.7,
                '2023-10': 4.2,
                '2023-11': 28.5,
                '2023-12': 102.8
            }
        },
        productsProduction: { fruits: 1022322, medicinalPlants: 33, mountainVegetables: 6020, mushrooms: 7467 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 35 },
            elementarySchools: { '2024': 22 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 350 }
        },
        medical: {
            hospitals: { '2024': 205 },
            pharmacies: { '2024': 66 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 24 },
            seniorLeisureWelfare: { '2023': 307 }
        },
        realEstate: {
            landPrice: { '2023': 683818, '2024': 699654 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'은행'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'부산광역시 농업기술센터',url:'https://www.busan.go.kr/nongup/index'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=busan&page=/member/busan/business01.html&mc=MEM_BUS_BIZ17'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'대구광역시', name:'달성군',
        populationStatus:{
            population:{'2023':262084},
            households:{'2023':108954},
            averageAge:{'2023':42.1},
            forestryPopulation: {'2020':946},
            forestryHouseholds: {'2020':372}
        },
        regionCharacteristics: {
            population:{'2019':256540,'2020':259339,'2021':262451,'2022':263162,'2023':262084},
            households:{'2019':98057,'2020':101578,'2021':105407,'2022':107454,'2023':108954}
        },
        weather: {
            temperature: {
                '2021-01': 5.9,
                '2021-02': 11.1,
                '2021-03': 16.1,
                '2021-04': 20.6,
                '2021-05': 24.3,
                '2021-06': 28.5,
                '2021-07': 32.1,
                '2021-08': 30.5,
                '2021-09': 26.4,
                '2021-10': 22.7,
                '2021-11': 15.7,
                '2021-12': 8.9,
                '2022-01': 6.8,
                '2022-02': 7.4,
                '2022-03': 15.9,
                '2022-04': 22.7,
                '2022-05': 27.4,
                '2022-06': 29.7,
                '2022-07': 32.4,
                '2022-08': 31.4,
                '2022-09': 26.8,
                '2022-10': 21.6,
                '2022-11': 17.7,
                '2022-12': 5.4,
                '2023-01': 6.7,
                '2023-02': 10.4,
                '2023-03': 18.8,
                '2023-04': 20.9,
                '2023-05': 25.1,
                '2023-06': 29.6,
                '2023-07': 31.1,
                '2023-08': 31.9,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.1,
                '2023-12': 8.6,
            },
            precipitation: {
                '2021-01': 11.9,
                '2021-02': 19.2,
                '2021-03': 95.2,
                '2021-04': 43,
                '2021-05': 90.9,
                '2021-06': 55.1,
                '2021-07': 153.3,
                '2021-08': 256.3,
                '2021-09': 84.1,
                '2021-10': 57.8,
                '2021-11': 43.1,
                '2021-12': 0.1,
                '2022-01': 0,
                '2022-02': 0.1,
                '2022-03': 34.3,
                '2022-04': 38.5,
                '2022-05': 4.2,
                '2022-06': 81.8,
                '2022-07': 88.8,
                '2022-08': 143.3,
                '2022-09': 114.2,
                '2022-10': 25.6,
                '2022-11': 46.6,
                '2022-12': 3.6,
                '2023-01': 11.5,
                '2023-02': 11.2,
                '2023-03': 27.3,
                '2023-04': 30.8,
                '2023-05': 200,
                '2023-06': 178.7,
                '2023-07': 298.7,
                '2023-08': 312.8,
                '2023-09': 123.6,
                '2023-10': 5.7,
                '2023-11': 31.6,
                '2023-12': 89.9
            }
        },
        productsProduction: { fruits: 1486019, medicinalPlants: 13250, mountainVegetables: 3137, mushrooms: 42877 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 1 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 46 },
            elementarySchools: { '2024': 33 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 458 }
        },
        medical: {
            hospitals: { '2024': 287 },
            pharmacies: { '2024': 95 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 46 },
            seniorLeisureWelfare: { '2023': 340 }
        },
        realEstate: {
            landPrice: { '2023': 488287, '2024': 310117 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'대구광역시 누리집',url:'https://daegu.go.kr/agri/index.do?menu_id=00939914'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=dalseong&page=/member/dalseong/business01.html&mc=MEM_DSN_BIZ09'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'대구광역시', name:'군위군',
        populationStatus:{
            population:{'2023':22988},
            households:{'2023':11074},
            averageAge:{'2023':58.9},
            forestryPopulation: {'2020':510},
            forestryHouseholds: {'2020':999}
        },
        regionCharacteristics: {
            population:{'2019':23843,'2020':23256,'2021':22945,'2022':23340,'2023':22988},
            households:{'2019':10680,'2020':10850,'2021':10915,'2022':11312,'2023':11074}
        },
        weather: {
            temperature: {
                '2021-01': 5.9,
                '2021-02': 11.1,
                '2021-03': 16.1,
                '2021-04': 20.6,
                '2021-05': 24.3,
                '2021-06': 28.5,
                '2021-07': 32.1,
                '2021-08': 30.5,
                '2021-09': 26.4,
                '2021-10': 22.7,
                '2021-11': 15.7,
                '2021-12': 8.9,
                '2022-01': 6.8,
                '2022-02': 7.4,
                '2022-03': 15.9,
                '2022-04': 22.7,
                '2022-05': 27.4,
                '2022-06': 29.7,
                '2022-07': 32.4,
                '2022-08': 31.4,
                '2022-09': 26.8,
                '2022-10': 21.6,
                '2022-11': 17.7,
                '2022-12': 5.4,
                '2023-01': 6.7,
                '2023-02': 10.4,
                '2023-03': 18.8,
                '2023-04': 20.9,
                '2023-05': 25.1,
                '2023-06': 29.6,
                '2023-07': 31.1,
                '2023-08': 31.9,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.1,
                '2023-12': 8.6,
            },
            precipitation: {
                '2021-01': 11.9,
                '2021-02': 19.2,
                '2021-03': 95.2,
                '2021-04': 43,
                '2021-05': 90.9,
                '2021-06': 55.1,
                '2021-07': 153.3,
                '2021-08': 256.3,
                '2021-09': 84.1,
                '2021-10': 57.8,
                '2021-11': 43.1,
                '2021-12': 0.1,
                '2022-01': 0,
                '2022-02': 0.1,
                '2022-03': 34.3,
                '2022-04': 38.5,
                '2022-05': 4.2,
                '2022-06': 81.8,
                '2022-07': 88.8,
                '2022-08': 143.3,
                '2022-09': 114.2,
                '2022-10': 25.6,
                '2022-11': 46.6,
                '2022-12': 3.6,
                '2023-01': 11.5,
                '2023-02': 11.2,
                '2023-03': 27.3,
                '2023-04': 30.8,
                '2023-05': 200,
                '2023-06': 178.7,
                '2023-07': 298.7,
                '2023-08': 312.8,
                '2023-09': 123.6,
                '2023-10': 5.7,
                '2023-11': 31.6,
                '2023-12': 89.9
            }
        },
        productsProduction: { fruits: 1799903, medicinalPlants: 51559, mountainVegetables: 34931, mushrooms: 33208 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 8 },
            elementarySchools: { '2024': 7 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 7 }
        },
        medical: {
            hospitals: { '2024': 36 },
            pharmacies: { '2024': 8 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 214 }
        },
        realEstate: {
            landPrice: { '2023': 488287, '2024': 310117 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'대추'}, {rank:2,product:'떫은감'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'대구광역시 누리집',url:'https://daegu.go.kr/agri/index.do?menu_id=00939914'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=dalseong&page=/member/dalseong/business01.html&mc=MEM_DSN_BIZ10'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'인천광역시', name:'옹진군',
        populationStatus:{
            population:{'2023':20377},
            households:{'2023':10040},
            averageAge:{'2023':51.9},
            forestryPopulation: {'2020':75},
            forestryHouseholds: {'2020':40}
        },
        regionCharacteristics: {
            population:{'2019':20566,'2020':20455,'2021':20342,'2022':20613,'2023':20377},
            households:{'2019':8981,'2020':8867,'2021':9417,'2022':9880,'2023':10040}
        },
        weather: {
            temperature: {
                '2021-01': 1.8,
                '2021-02': 6.3,
                '2021-03': 12.3,
                '2021-04': 17.3,
                '2021-05': 20.2,
                '2021-06': 25.3,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 26.1,
                '2021-10': 19.6,
                '2021-11': 12.6,
                '2021-12': 5.1,
                '2022-01': 1.7,
                '2022-02': 2.4,
                '2022-03': 10.8,
                '2022-04': 17.3,
                '2022-05': 21.4,
                '2022-06': 25.4,
                '2022-07': 29.5,
                '2022-08': 27.3,
                '2022-09': 26,
                '2022-10': 18.4,
                '2022-11': 14.4,
                '2022-12': 0.9,
                '2023-01': 2.2,
                '2023-02': 5.4,
                '2023-03': 13,
                '2023-04': 17,
                '2023-05': 22.4,
                '2023-06': 25.4,
                '2023-07': 28.4,
                '2023-08': 29.7,
                '2023-09': 26.7,
                '2023-10': 20.1,
                '2023-11': 10.7,
                '2023-12': 4.5,
            },
            precipitation: {
                '2021-01': 20.8,
                '2021-02': 6.6,
                '2021-03': 93.4,
                '2021-04': 116.9,
                '2021-05': 191.5,
                '2021-06': 45.4,
                '2021-07': 84.2,
                '2021-08': 269,
                '2021-09': 125.8,
                '2021-10': 31.6,
                '2021-11': 79,
                '2021-12': 7.6,
                '2022-01': 4.4,
                '2022-02': 2.7,
                '2022-03': 84.6,
                '2022-04': 21.1,
                '2022-05': 5.4,
                '2022-06': 286,
                '2022-07': 215.2,
                '2022-08': 635.9,
                '2022-09': 167.8,
                '2022-10': 102.1,
                '2022-11': 81.3,
                '2022-12': 14,
                '2023-01': 47.2,
                '2023-02': 0.5,
                '2023-03': 10,
                '2023-04': 70.4,
                '2023-05': 133.8,
                '2023-06': 116.2,
                '2023-07': 370.8,
                '2023-08': 297.5,
                '2023-09': 129.2,
                '2023-10': 16.8,
                '2023-11': 63.1,
                '2023-12': 75.9
            }
        },
        productsProduction: { fruits: 775656, medicinalPlants: 2166, mountainVegetables: 0, mushrooms: 5500 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 10 },
            elementarySchools: { '2024': 6 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 5 }
        },
        medical: {
            hospitals: { '2024': 27 },
            pharmacies: { '2024': 3 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 74 }
        },
        realEstate: {
            landPrice: { '2023': 641244, '2024': 618065 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'하수오'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'인천광역시 농업기술센터',url:'https://www.incheon.go.kr/agro/AGRO050501'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=ongjin&page=/member/ongjin/biz01.html&mc=MEM_ONJ_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'울산광역시', name:'울주군',
        populationStatus:{
            population:{'2023':218997},
            households:{'2023':93917},
            averageAge:{'2023':45},
            forestryPopulation: {'2020':772},
            forestryHouseholds: {'2020':320}
        },
        regionCharacteristics: {
            population:{'2019':223167,'2020':222538,'2021':222059,'2022':221512,'2023':218997},
            households:{'2019':87484,'2020':90013,'2021':92082,'2022':93158,'2023':93917}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 11.9,
                '2021-03': 15.4,
                '2021-04': 19,
                '2021-05': 22.7,
                '2021-06': 25.8,
                '2021-07': 29.8,
                '2021-08': 29.2,
                '2021-09': 25.6,
                '2021-10': 22.1,
                '2021-11': 16.6,
                '2021-12': 9.8,
                '2022-01': 8,
                '2022-02': 7.7,
                '2022-03': 15,
                '2022-04': 20.1,
                '2022-05': 24.9,
                '2022-06': 26.6,
                '2022-07': 30,
                '2022-08': 30.2,
                '2022-09': 25.6,
                '2022-10': 21,
                '2022-11': 18.3,
                '2022-12': 6.8,
                '2023-01': 7.9,
                '2023-02': 10.4,
                '2023-03': 17.2,
                '2023-04': 18.8,
                '2023-05': 22.5,
                '2023-06': 26.9,
                '2023-07': 29.8,
                '2023-08': 30.2,
                '2023-09': 26.5,
                '2023-10': 21.9,
                '2023-11': 16.1,
                '2023-12': 9.6,
            },
            precipitation: {
                '2021-01': 20.6,
                '2021-02': 28.8,
                '2021-03': 138.9,
                '2021-04': 73.9,
                '2021-05': 120.4,
                '2021-06': 93.8,
                '2021-07': 189.3,
                '2021-08': 443.9,
                '2021-09': 125.2,
                '2021-10': 49,
                '2021-11': 49.7,
                '2021-12': 3.5,
                '2022-01': 0.9,
                '2022-02': 2.2,
                '2022-03': 55.5,
                '2022-04': 81,
                '2022-05': 6.1,
                '2022-06': 147.1,
                '2022-07': 125,
                '2022-08': 138.5,
                '2022-09': 284.8,
                '2022-10': 30.4,
                '2022-11': 44.9,
                '2022-12': 9.7,
                '2023-01': 41.3,
                '2023-02': 28,
                '2023-03': 68.3,
                '2023-04': 57.7,
                '2023-05': 195.2,
                '2023-06': 141.4,
                '2023-07': 266.9,
                '2023-08': 403.3,
                '2023-09': 276.7,
                '2023-10': 4.3,
                '2023-11': 33.1,
                '2023-12': 126.7
            }
        },
        productsProduction: { fruits: 982568, medicinalPlants: 4556, mountainVegetables: 4556, mushrooms: 8064 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 44 },
            elementarySchools: { '2024': 31 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 405 }
        },
        medical: {
            hospitals: { '2024': 209 },
            pharmacies: { '2024': 69 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 40 },
            seniorLeisureWelfare: { '2023': 414 }
        },
        realEstate: {
            landPrice: { '2023': 199386, '2024': 197583 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'오갈피'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'울산광역시 누리집',url:'https://www.ulsan.go.kr/u/economy/contents.do?mId=001009017002000000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=ulsan&page=/member/ulsan/business01.html&mc=MEM_ULS_BIZ06'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경기도', name:'남양주시',
        populationStatus:{
            population:{'2023':732265},
            households:{'2023':279682},
            averageAge:{'2023':43.5},
            forestryPopulation: {'2020':1044},
            forestryHouseholds: {'2020':376}
        },
        regionCharacteristics: {
            population:{'2019':701830,'2020':713321,'2021':733798,'2022':737353,'2023':732265},
            households:{'2019':246337,'2020':255575,'2021':268979,'2022':277759,'2023':279682}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 91809, medicinalPlants: 6305, mountainVegetables: 226125, mushrooms: 14833 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 108 },
            elementarySchools: { '2024': 68 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 1269 }
        },
        medical: {
            hospitals: { '2024': 810 },
            pharmacies: { '2024': 281 }
        },
        culturalFacilities: {
            cultural: { '2022': 14 },
            socialWelfare: { '2021': 192 },
            seniorLeisureWelfare: { '2023': 557 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'참나물'}, {rank:2,product:'기타산나물'}, {rank:3,product:'건표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'',url:''}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'안성시',
        populationStatus:{
            population:{'2023':189034},
            households:{'2023':90263},
            averageAge:{'2023':44.3},
            forestryPopulation: {'2020':560},
            forestryHouseholds: {'2020':233}
        },
        regionCharacteristics: {
            population:{'2019':183405,'2020':187012,'2021':189534,'2022':188842,'2023':189034},
            households:{'2019':79302,'2020':82928,'2021':86337,'2022':89098,'2023':90263}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 238369, medicinalPlants: 6445, mountainVegetables: 19947, mushrooms: 45366 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 45 },
            elementarySchools: { '2024': 33 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 235 }
        },
        medical: {
            hospitals: { '2024': 214 },
            pharmacies: { '2024': 84 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 68 },
            seniorLeisureWelfare: { '2023': 481 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'은행'}, {rank:2,product:'생표고'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=anseong&page=/member/anseong/business01.html&mc=MEM_ANS_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'광주시',
        populationStatus:{
            population:{'2023':391377},
            households:{'2023':159541},
            averageAge:{'2023':43.5},
            forestryPopulation: {'2020':650},
            forestryHouseholds: {'2020':244}
        },
        regionCharacteristics: {
            population:{'2019':372654,'2020':382054,'2021':387289,'2022':391462,'2023':391377},
            households:{'2019':141279,'2020':147712,'2021':152450,'2022':157358,'2023':159541}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 26017, medicinalPlants: 17379, mountainVegetables: 3886, mushrooms: 200815 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 44 },
            elementarySchools: { '2024': 34 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 507 }
        },
        medical: {
            hospitals: { '2024': 350 },
            pharmacies: { '2024': 123 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 50 },
            seniorLeisureWelfare: { '2023': 307 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'은행'}, {rank:3,product:'기타버섯류'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gwangju2&page=/member/gwangju2/business01.html&mc=MEM_GJU_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'포천시',
        populationStatus:{
            population:{'2023':143323},
            households:{'2023':66624},
            averageAge:{'2023':47.2},
            forestryPopulation: {'2020':1019},
            forestryHouseholds: {'2020':440}
        },
        regionCharacteristics: {
            population:{'2019':148379,'2020':147274,'2021':148939,'2022':146701,'2023':143323},
            households:{'2019':62275,'2020':63701,'2021':65647,'2022':71480,'2023':66624}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 120505, medicinalPlants: 4961, mountainVegetables: 18006, mushrooms: 114872 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 27 },
            elementarySchools: { '2024': 29 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 126 }
        },
        medical: {
            hospitals: { '2024': 161 },
            pharmacies: { '2024': 61 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 92 },
            seniorLeisureWelfare: { '2023': 319 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'참나물'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=pocheon&page=/member/pocheon/business01.html&mc=MEM_PCN_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'여주시',
        populationStatus:{
            population:{'2023':114412},
            households:{'2023':49977},
            averageAge:{'2023':47.9},
            forestryPopulation: {'2020':476},
            forestryHouseholds: {'2020':193}
        },
        regionCharacteristics: {
            population:{'2019':111083,'2020':111897,'2021':112150,'2022':113150,'2023':114412},
            households:{'2019':44009,'2020':45457,'2021':46824,'2022':48131,'2023':49977}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 96853, medicinalPlants: 166560, mountainVegetables: 18537, mushrooms: 1297679 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 33 },
            elementarySchools: { '2024': 23 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 119 }
        },
        medical: {
            hospitals: { '2024': 142 },
            pharmacies: { '2024': 49 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 44 },
            seniorLeisureWelfare: { '2023': 340 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'마'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeoju&page=/member/yeoju/business01.html&mc=MEM_YJU_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'연천군',
        populationStatus:{
            population:{'2023':41584},
            households:{'2023':19088},
            averageAge:{'2023':50.4},
            forestryPopulation: {'2020':292},
            forestryHouseholds: {'2020':128}
        },
        regionCharacteristics: {
            population:{'2019':43824,'2020':43516,'2021':42721,'2022':42062,'2023':41584},
            households:{'2019':18043,'2020':18368,'2021':18691,'2022':18775,'2023':19088}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 390879, medicinalPlants: 51509, mountainVegetables: 0, mushrooms: 17577 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 13 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 34 }
        },
        medical: {
            hospitals: { '2024': 48 },
            pharmacies: { '2024': 23 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 13 },
            seniorLeisureWelfare: { '2023': 111 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'마'}, {rank:2,product:'기타버섯류'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeoncheon&page=/member/yeoncheon/business01.html&mc=MEM_YNC_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'가평군',
        populationStatus:{
            population:{'2023':62302},
            households:{'2023':27690},
            averageAge:{'2023':50.9},
            forestryPopulation: {'2020':797},
            forestryHouseholds: {'2020':340}
        },
        regionCharacteristics: {
            population:{'2019':62415,'2020':62377,'2021':62264,'2022':62150,'2023':62302},
            households:{'2019':25361,'2020':26056,'2021':26659,'2022':27211,'2023':27690}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 449168, medicinalPlants: 23772, mountainVegetables: 19981, mushrooms: 28064 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 61 }
        },
        medical: {
            hospitals: { '2024': 93 },
            pharmacies: { '2024': 25 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 24 },
            seniorLeisureWelfare: { '2023': 173 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'잣'}, {rank:2,product:'밤'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://kapyongsanrim.cafe24.com/?page_id=18'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'경기도', name:'양평군',
        populationStatus:{
            population:{'2023':125238},
            households:{'2023':52969},
            averageAge:{'2023':50.6},
            forestryPopulation: {'2020':864},
            forestryHouseholds: {'2020':338}
        },
        regionCharacteristics: {
            population:{'2019':116874,'2020':118810,'2021':121230,'2022':122323,'2023':125238},
            households:{'2019':46539,'2020':48197,'2021':49922,'2022':51195,'2023':52969}
        },
        weather: {
            temperature: {
                '2021-01': 2.2,
                '2021-02': 7.7,
                '2021-03': 14.1,
                '2021-04': 19,
                '2021-05': 21.5,
                '2021-06': 26.9,
                '2021-07': 31.5,
                '2021-08': 29.3,
                '2021-09': 26.6,
                '2021-10': 20.3,
                '2021-11': 13,
                '2021-12': 5.2,
                '2022-01': 2.6,
                '2022-02': 3.9,
                '2022-03': 12.4,
                '2022-04': 19.7,
                '2022-05': 23.8,
                '2022-06': 26.9,
                '2022-07': 30.4,
                '2022-08': 28.4,
                '2022-09': 26.7,
                '2022-10': 19.3,
                '2022-11': 15,
                '2022-12': 1.1,
                '2023-01': 2.7,
                '2023-02': 6.9,
                '2023-03': 15.4,
                '2023-04': 18.5,
                '2023-05': 24,
                '2023-06': 27,
                '2023-07': 29.5,
                '2023-08': 30.4,
                '2023-09': 27.1,
                '2023-10': 20.3,
                '2023-11': 11.4,
                '2023-12': 5,
            },
            precipitation: {
                '2021-01': 19.6,
                '2021-02': 8.8,
                '2021-03': 103,
                '2021-04': 107.6,
                '2021-05': 184.7,
                '2021-06': 63.7,
                '2021-07': 122.1,
                '2021-08': 192.2,
                '2021-09': 154.6,
                '2021-10': 42.2,
                '2021-11': 68.8,
                '2021-12': 8,
                '2022-01': 5.4,
                '2022-02': 4.4,
                '2022-03': 91.7,
                '2022-04': 33,
                '2022-05': 8.7,
                '2022-06': 380.6,
                '2022-07': 244.2,
                '2022-08': 598.3,
                '2022-09': 184.6,
                '2022-10': 116.9,
                '2022-11': 68.3,
                '2022-12': 14.2,
                '2023-01': 44.5,
                '2023-02': 0.7,
                '2023-03': 7.7,
                '2023-04': 79.1,
                '2023-05': 145.1,
                '2023-06': 154.8,
                '2023-07': 462.7,
                '2023-08': 243.2,
                '2023-09': 130.3,
                '2023-10': 39.3,
                '2023-11': 85.9,
                '2023-12': 88.3
            }
        },
        productsProduction: { fruits: 2941951, medicinalPlants: 6362, mountainVegetables: 37676, mushrooms: 96859 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 25 },
            elementarySchools: { '2024': 22 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 118 }
        },
        medical: {
            hospitals: { '2024': 150 },
            pharmacies: { '2024': 47 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 62 },
            seniorLeisureWelfare: { '2023': 372 }
        },
        realEstate: {
            landPrice: { '2023': 433304, '2024': 438378 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'은행'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경기도 귀농귀촌센터',url:'https://www.refarmgg.or.kr/com/cmm/EgovContentView.do?menuNo=10101000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yangpyeong&page=/member/yangpyeong/business01.html&mc=MEM_YNP_BIZ01'}
            ],
            mento:[6, 7, 11]
        }
    },{
        parent:'강원특별자치도', name:'춘천시',
        populationStatus:{
            population:{'2023':286426},
            households:{'2023':130633},
            averageAge:{'2023':44.5},
            forestryPopulation: {'2020':1505},
            forestryHouseholds: {'2020':597}
        },
        regionCharacteristics: {
            population:{'2019':281291,'2020':282765,'2021':284594,'2022':286664,'2023':286426},
            households:{'2019':115187,'2020':119722,'2021':123586,'2022':127850,'2023':130633}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 319459, medicinalPlants: 15586, mountainVegetables: 114873, mushrooms: 4003 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 44 },
            elementarySchools: { '2024': 41 },
            universities: { '2024': 5 },
            privateInstitutes: { '2023': 466 }
        },
        medical: {
            hospitals: { '2024': 384 },
            pharmacies: { '2024': 137 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 93 },
            seniorLeisureWelfare: { '2023': 375 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'은행'}, {rank:2,product:'더덕'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=chuncheon&page=/member/chuncheon/business01.html&mc=MEM_CCN_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'원주시',
        populationStatus:{
            population:{'2023':361503},
            households:{'2023':164462},
            averageAge:{'2023':43.8},
            forestryPopulation: {'2020':1668},
            forestryHouseholds: {'2020':685}
        },
        regionCharacteristics: {
            population:{'2019':349215,'2020':354376,'2021':357757,'2022':360807,'2023':361503},
            households:{'2019':143720,'2020':151688,'2021':156643,'2022':161029,'2023':164462}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 1218447, medicinalPlants: 19372, mountainVegetables: 44170, mushrooms: 56593 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 72 },
            elementarySchools: { '2024': 51 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 664 }
        },
        medical: {
            hospitals: { '2024': 503 },
            pharmacies: { '2024': 190 }
        },
        culturalFacilities: {
            cultural: { '2022': 12 },
            socialWelfare: { '2021': 90 },
            seniorLeisureWelfare: { '2023': 477 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'은행'}, {rank:2,product:'생표고'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=wonju&page=/member/wonju/business01.html&mc=MEM_WJU_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'강릉시',
        populationStatus:{
            population:{'2023':209439},
            households:{'2023':100581},
            averageAge:{'2023':47.2},
            forestryPopulation: {'2020':2281},
            forestryHouseholds: {'2020':1025}
        },
        regionCharacteristics: {
            population:{'2019':213442,'2020':213321,'2021':212965,'2022':211381,'2023':209439},
            households:{'2019':93078,'2020':99109,'2021':100340,'2022':98998,'2023':100581}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.4,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 1168326, medicinalPlants: 8512, mountainVegetables: 52513, mushrooms: 34113 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 36 },
            elementarySchools: { '2024': 36 },
            universities: { '2024': 4 },
            privateInstitutes: { '2023': 448 }
        },
        medical: {
            hospitals: { '2024': 278 },
            pharmacies: { '2024': 93 }
        },
        culturalFacilities: {
            cultural: { '2022': 8 },
            socialWelfare: { '2021': 98 },
            seniorLeisureWelfare: { '2023': 321 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'기타버섯류'}, {rank:3,product:'산마늘'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gangneung&page=/member/gangneung/business01.html&mc=MEM_GNR_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'삼척시',
        populationStatus:{
            population:{'2023':62651},
            households:{'2023':30546},
            averageAge:{'2023':49},
            forestryPopulation: {'2020':1859},
            forestryHouseholds: {'2020':894}
        },
        regionCharacteristics: {
            population:{'2019':67228,'2020':65243,'2021':63429,'2022':63455,'2023':62651},
            households:{'2019':29615,'2020':31016,'2021':29801,'2022':29950,'2023':30546}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 591092, medicinalPlants: 213450, mountainVegetables: 1811459, mushrooms: 4728 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 18 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 70 }
        },
        medical: {
            hospitals: { '2024': 65 },
            pharmacies: { '2024': 25 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 10 },
            seniorLeisureWelfare: { '2023': 248 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'더덕'}, {rank:2,product:'도라지'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=samcheok&page=/member/samcheok/business01.html&mc=MEM_SMC_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'홍천군',
        populationStatus:{
            population:{'2023':67309},
            households:{'2023':31172},
            averageAge:{'2023':51.9},
            forestryPopulation: {'2020':1839},
            forestryHouseholds: {'2020':825}
        },
        regionCharacteristics: {
            population:{'2019':69150,'2020':69242,'2021':68365,'2022':67977,'2023':67309},
            households:{'2019':28728,'2020':29533,'2021':29991,'2022':30410,'2023':31172}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 537598, medicinalPlants: 336923, mountainVegetables: 1898141, mushrooms: 10970 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 25 },
            elementarySchools: { '2024': 24 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 73 }
        },
        medical: {
            hospitals: { '2024': 92 },
            pharmacies: { '2024': 28 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 31 },
            seniorLeisureWelfare: { '2023': 207 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'더덕'}, {rank:2,product:'도라지'}, {rank:3,product:'잣'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hongcheon&page=/member/hongcheon/business01.html&mc=MEM_HNC_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'횡성군',
        populationStatus:{
            population:{'2023':46359},
            households:{'2023':21488},
            averageAge:{'2023':53.1},
            forestryPopulation: {'2020':988},
            forestryHouseholds: {'2020':442}
        },
        regionCharacteristics: {
            population:{'2019':46575,'2020':46472,'2021':46481,'2022':46532,'2023':46359},
            households:{'2019':19162,'2020':19775,'2021':20217,'2022':20615,'2023':21488}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 347152, medicinalPlants: 67999, mountainVegetables: 1856114, mushrooms: 4215 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 5 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 44 }
        },
        medical: {
            hospitals: { '2024': 50 },
            pharmacies: { '2024': 17 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 24 },
            seniorLeisureWelfare: { '2023': 204 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'더덕'}, {rank:2,product:'복분자딸기'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hoengseong&page=/member/hoengseong/business01.html&mc=MEM_HNS_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'영월군',
        populationStatus:{
            population:{'2023':37332},
            households:{'2023':18182},
            averageAge:{'2023':53.9},
            forestryPopulation: {'2020':798},
            forestryHouseholds: {'2020':373}
        },
        regionCharacteristics: {
            population:{'2019':39127,'2020':38662,'2021':37904,'2022':37728,'2023':37332},
            households:{'2019':16730,'2020':17175,'2021':17306,'2022':17680,'2023':18182}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 139953, medicinalPlants: 183604, mountainVegetables: 200194, mushrooms: 1417 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 35 }
        },
        medical: {
            hospitals: { '2024': 38 },
            pharmacies: { '2024': 17 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 190 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'고려엉겅퀴'}, {rank:2,product:'작약'}, {rank:3,product:'잣'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongwol&page=/member/yeongwol/business01.html&mc=MEM_YNW_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'평창군',
        populationStatus:{
            population:{'2023':40659},
            households:{'2023':19519},
            averageAge:{'2023':53.7},
            forestryPopulation: {'2020':1435},
            forestryHouseholds: {'2020':656}
        },
        regionCharacteristics: {
            population:{'2019':42106,'2020':41681,'2021':40996,'2022':40990,'2023':40659},
            households:{'2019':17963,'2020':18519,'2021':18754,'2022':18962,'2023':19519}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 5527, medicinalPlants: 952944, mountainVegetables: 2010116, mushrooms: 141768 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 18 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 25 }
        },
        medical: {
            hospitals: { '2024': 61 },
            pharmacies: { '2024': 18 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 10 },
            seniorLeisureWelfare: { '2023': 191 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'더덕'}, {rank:2,product:'당귀'}, {rank:3,product:'오미자'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'http://www.pcnfcf.or.kr/'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'정선군',
        populationStatus:{
            population:{'2023':34202},
            households:{'2023':16582},
            averageAge:{'2023':53.6},
            forestryPopulation: {'2020':1382},
            forestryHouseholds: {'2020':657}
        },
        regionCharacteristics: {
            population:{'2019':37271,'2020':36870,'2021':35675,'2022':34931,'2023':34202},
            households:{'2019':15707,'2020':16375,'2021':16384,'2022':16330,'2023':16582}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 13255, medicinalPlants: 74571, mountainVegetables: 1415914, mushrooms: 16 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 1 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 20 }
        },
        medical: {
            hospitals: { '2024': 39 },
            pharmacies: { '2024': 13 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 179 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'고려엉겅퀴'}, {rank:2,product:'더덕'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jeongseon&page=/member/jeongseon/business01.html&mc=MEM_JNS_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'철원군',
        populationStatus:{
            population:{'2023':41448},
            households:{'2023':17775},
            averageAge:{'2023':48.1},
            forestryPopulation: {'2020':265},
            forestryHouseholds: {'2020':101}
        },
        regionCharacteristics: {
            population:{'2019':45584,'2020':44699,'2021':43340,'2022':42256,'2023':41448},
            households:{'2019':17090,'2020':17244,'2021':17382,'2022':17288,'2023':17775}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 52900, medicinalPlants: 4947, mountainVegetables: 21216, mushrooms: 200 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 1 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 58 }
        },
        medical: {
            hospitals: { '2024': 48 },
            pharmacies: { '2024': 20 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 132 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 136000,'2021': 143000,'2022': 151000,'2023': 140300,'2024': 140300},
                lowest: {'2020': 1200,'2021': 1300,'2022': 1400,'2023': 1310,'2024': 1310}
            },
            nonUrbanZone: {
                highest: {'2020': 210000,'2021': 220000,'2022': 230500,'2023': 213900,'2024': 213900},
                lowest: {'2020': 385,'2021': 370,'2022': 390,'2023': 359,'2024': 360}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'더덕'}, {rank:2,product:'은행'}, {rank:3,product:'오갈피'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheorwon&page=/member/cheorwon/business01.html&mc=MEM_CHW_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'화천군',
        populationStatus:{
            population:{'2023':23007},
            households:{'2023':10402},
            averageAge:{'2023':48.2},
            forestryPopulation: {'2020':428},
            forestryHouseholds: {'2020':203}
        },
        regionCharacteristics: {
            population:{'2019':24917,'2020':24857,'2021':24195,'2022':23388,'2023':23007},
            households:{'2019':9826,'2020':9997,'2021':10114,'2022':10120,'2023':10402}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 66685, medicinalPlants: 10914, mountainVegetables: 143595, mushrooms: 27556 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 13 },
            elementarySchools: { '2024': 11 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 18 }
        },
        medical: {
            hospitals: { '2024': 33 },
            pharmacies: { '2024': 8 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 96 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'도라지'}, {rank:2,product:'더덕'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hwacheon&page=/member/hwacheon/biz01.html&mc=MEM_HCN_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'양구군',
        populationStatus:{
            population:{'2023':21056},
            households:{'2023':9272},
            averageAge:{'2023':47},
            forestryPopulation: {'2020':587},
            forestryHouseholds: {'2020':274}
        },
        regionCharacteristics: {
            population:{'2019':22764,'2020':22278,'2021':21748,'2022':21383,'2023':21056},
            households:{'2019':8612,'2020':8606,'2021':8850,'2022':8957,'2023':9272}
        },
        weather: {
            temperature: {
                '2021-01': 1,
                '2021-02': 7.1,
                '2021-03': 13.4,
                '2021-04': 18.3,
                '2021-05': 21.2,
                '2021-06': 26.4,
                '2021-07': 31.2,
                '2021-08': 28,
                '2021-09': 25.1,
                '2021-10': 19,
                '2021-11': 11.9,
                '2021-12': 3.8,
                '2022-01': 1.9,
                '2022-02': 3.2,
                '2022-03': 11.8,
                '2022-04': 19.8,
                '2022-05': 23.7,
                '2022-06': 26.1,
                '2022-07': 29.8,
                '2022-08': 27.8,
                '2022-09': 25.4,
                '2022-10': 18.1,
                '2022-11': 14.1,
                '2022-12': 0.2,
                '2023-01': 1.5,
                '2023-02': 6,
                '2023-03': 15.3,
                '2023-04': 18,
                '2023-05': 23.7,
                '2023-06': 27.2,
                '2023-07': 29.8,
                '2023-08': 29.8,
                '2023-09': 26,
                '2023-10': 19,
                '2023-11': 10.5,
                '2023-12': 3.7,
            },
            precipitation: {
                '2021-01': 11.4,
                '2021-02': 4.5,
                '2021-03': 94.4,
                '2021-04': 101.7,
                '2021-05': 169.2,
                '2021-06': 84.7,
                '2021-07': 139.3,
                '2021-08': 174.4,
                '2021-09': 126,
                '2021-10': 67.9,
                '2021-11': 50.7,
                '2021-12': 5.1,
                '2022-01': 2.2,
                '2022-02': 6.7,
                '2022-03': 82.7,
                '2022-04': 36.1,
                '2022-05': 10.9,
                '2022-06': 328.2,
                '2022-07': 207.7,
                '2022-08': 482.6,
                '2022-09': 218.2,
                '2022-10': 133,
                '2022-11': 58.8,
                '2022-12': 6.7,
                '2023-01': 40.5,
                '2023-02': 1.1,
                '2023-03': 13.4,
                '2023-04': 70.9,
                '2023-05': 123.4,
                '2023-06': 202,
                '2023-07': 339.9,
                '2023-08': 226.3,
                '2023-09': 142.9,
                '2023-10': 28.3,
                '2023-11': 78.8,
                '2023-12': 92.4
            }
        },
        productsProduction: { fruits: 153077, medicinalPlants: 83299, mountainVegetables: 140211, mushrooms: 1588 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 10 },
            elementarySchools: { '2024': 10 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 18 }
        },
        medical: {
            hospitals: { '2024': 24 },
            pharmacies: { '2024': 8 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 6 },
            seniorLeisureWelfare: { '2023': 93 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'취나물'}, {rank:2,product:'오미자'}, {rank:3,product:'더덕'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yanggu&page=/member/yanggu/business01.html&mc=MEM_YNG_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'인제군',
        populationStatus:{
            population:{'2023':32020},
            households:{'2023':14284},
            averageAge:{'2023':46.7},
            forestryPopulation: {'2020':1301},
            forestryHouseholds: {'2020':576}
        },
        regionCharacteristics: {
            population:{'2019':31672,'2020':31694,'2021':32165,'2022':32206,'2023':32020},
            households:{'2019':12459,'2020':12698,'2021':13484,'2022':13706,'2023':14284}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 158910, medicinalPlants: 432061, mountainVegetables: 200454, mushrooms: 18187 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 12 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 23 }
        },
        medical: {
            hospitals: { '2024': 29 },
            pharmacies: { '2024': 12 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 3 },
            seniorLeisureWelfare: { '2023': 89 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'오미자'}, {rank:2,product:'산마늘'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=inje&page=/member/inje/business01.html&mc=MEM_INJ_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'고성군',
        populationStatus:{
            population:{'2023':27305},
            households:{'2023':13384},
            averageAge:{'2023':50.8},
            forestryPopulation: {'2020':321},
            forestryHouseholds: {'2020':144}
        },
        regionCharacteristics: {
            population:{'2019':27260,'2020':26757,'2021':27249,'2022':27274,'2023':27305},
            households:{'2019':11292,'2020':12096,'2021':12385,'2022':12757,'2023':13384}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 199871, medicinalPlants: 23674, mountainVegetables: 33912, mushrooms: 97036 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 10 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 15 }
        },
        medical: {
            hospitals: { '2024': 31 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 6 },
            seniorLeisureWelfare: { '2023': 116 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'떫은감'}, {rank:3,product:'꾸지뽕나무'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=goseong&page=/member/goseong/business01.html&mc=MEM_GSN_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'강원특별자치도', name:'양양군',
        populationStatus:{
            population:{'2023':27710},
            households:{'2023':13418},
            averageAge:{'2023':53.8},
            forestryPopulation: {'2020':1197},
            forestryHouseholds: {'2020':551}
        },
        regionCharacteristics: {
            population:{'2019':27726,'2020':27946,'2021':27913,'2022':27866,'2023':27710},
            households:{'2019':12049,'2020':12445,'2021':12788,'2022':13008,'2023':13418}
        },
        weather: {
            temperature: {
                '2021-01': 3,
                '2021-02': 8,
                '2021-03': 12.9,
                '2021-04': 16.9,
                '2021-05': 21,
                '2021-06': 24.3,
                '2021-07': 29.4,
                '2021-08': 27.3,
                '2021-09': 23.8,
                '2021-10': 19.4,
                '2021-11': 13.6,
                '2021-12': 6.6,
                '2022-01': 3.6,
                '2022-02': 4.1,
                '2022-03': 11.5,
                '2022-04': 19,
                '2022-05': 23.5,
                '2022-06': 25.4,
                '2022-07': 28.4,
                '2022-08': 28.1,
                '2022-09': 24.7,
                '2022-10': 18,
                '2022-11': 15.9,
                '2022-12': 3.4,
                '2023-01': 4.3,
                '2023-02': 6.9,
                '2023-03': 14.5,
                '2023-04': 17.8,
                '2023-05': 22.6,
                '2023-06': 26.5,
                '2023-07': 29.9,
                '2023-08': 28.5,
                '2023-09': 24.9,
                '2023-10': 20.2,
                '2023-11': 12.9,
                '2023-12': 5.4,
            },
            precipitation: {
                '2021-01': 5.7,
                '2021-02': 4,
                '2021-03': 108.5,
                '2021-04': 105.8,
                '2021-05': 155.6,
                '2021-06': 54.8,
                '2021-07': 131.1,
                '2021-08': 336.4,
                '2021-09': 138.3,
                '2021-10': 142.5,
                '2021-11': 20.3,
                '2021-12': 38.1,
                '2022-01': 3.7,
                '2022-02': 5,
                '2022-03': 104.6,
                '2022-04': 45.5,
                '2022-05': 8.4,
                '2022-06': 207.5,
                '2022-07': 199.2,
                '2022-08': 300.5,
                '2022-09': 219,
                '2022-10': 246.7,
                '2022-11': 55.2,
                '2022-12': 1.9,
                '2023-01': 63.3,
                '2023-02': 29.5,
                '2023-03': 15.1,
                '2023-04': 46.5,
                '2023-05': 100.9,
                '2023-06': 205,
                '2023-07': 160,
                '2023-08': 515.8,
                '2023-09': 224.6,
                '2023-10': 24.8,
                '2023-11': 50.2,
                '2023-12': 185.3
            }
        },
        productsProduction: { fruits: 23285636, medicinalPlants: 2405, mountainVegetables: 47021, mushrooms: 28775 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 15 }
        },
        medical: {
            hospitals: { '2024': 25 },
            pharmacies: { '2024': 12 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 136 }
        },
        realEstate: {
            landPrice: { '2023': 33840, '2024': 33125 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'도라지'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'강원특별자치도 누리집',url:'https://state.gwd.go.kr/portal/partinfo/forest/afforestation/products'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yangyang&page=/member/yangyang/business01.html&mc=MEM_YYA_BIZ01'}
            ],
            mento:[8, 9, 18]
        }
    },{
        parent:'충청북도', name:'충주시',
        populationStatus:{
            population:{'2023':207778},
            households:{'2023':100082},
            averageAge:{'2023':46.4},
            forestryPopulation: {'2020':1608},
            forestryHouseholds: {'2020':697}
        },
        regionCharacteristics: {
            population:{'2019':210737,'2020':210186,'2021':209358,'2022':208277,'2023':207778},
            households:{'2019':92220,'2020':95281,'2021':97508,'2022':98388,'2023':100082}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 3451101, medicinalPlants: 75648, mountainVegetables: 7523, mushrooms: 65255 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 41 },
            elementarySchools: { '2024': 35 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 330 }
        },
        medical: {
            hospitals: { '2024': 280 },
            pharmacies: { '2024': 91 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 149 },
            seniorLeisureWelfare: { '2023': 558 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'떫은감'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=chungju&page=/member/chungju/business01.html&mc=MEM_CUJ_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'제천시',
        populationStatus:{
            population:{'2023':130194},
            households:{'2023':60715},
            averageAge:{'2023':48},
            forestryPopulation: {'2020':2303},
            forestryHouseholds: {'2020':1030}
        },
        regionCharacteristics: {
            population:{'2019':134617,'2020':133018,'2021':131591,'2022':130988,'2023':130194},
            households:{'2019':57908,'2020':60173,'2021':60648,'2022':59552,'2023':60715}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 287237, medicinalPlants: 609955, mountainVegetables: 91058, mushrooms: 3792 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 31 },
            elementarySchools: { '2024': 23 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 180 }
        },
        medical: {
            hospitals: { '2024': 196 },
            pharmacies: { '2024': 53 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 62 },
            seniorLeisureWelfare: { '2023': 346 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'감초'}, {rank:2,product:'당귀'}, {rank:3,product:'작약'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jecheon&page=/member/jecheon/business01.html&mc=MEM_JCN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'통합청주시',
        populationStatus:{
            population:{'2023':852189},
            households:{'2023':385589},
            averageAge:{'2023':42.4},
            forestryPopulation: {'2020':3109},
            forestryHouseholds: {'2020':1266}
        },
        regionCharacteristics: {
            population:{'2019':839566,'2020':844993,'2021':848482,'2022':849573,'2023':852189},
            households:{'2019':341101,'2020':355294,'2021':366157,'2022':373835,'2023':385589}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 3021850, medicinalPlants: 22189, mountainVegetables: 91214, mushrooms: 540167 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 128 },
            elementarySchools: { '2024': 94 },
            universities: { '2024': 8 },
            privateInstitutes: { '2023': 1579 }
        },
        medical: {
            hospitals: { '2024': 0 },
            pharmacies: { '2024': 398 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 42 },
            seniorLeisureWelfare: { '2023': 1089 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'밤'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheongju&page=/member/cheongju/business01.html&mc=MEM_CNJ_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'보은군',
        populationStatus:{
            population:{'2023':31010},
            households:{'2023':14656},
            averageAge:{'2023':55.9},
            forestryPopulation: {'2020':2050},
            forestryHouseholds: {'2020':921}
        },
        regionCharacteristics: {
            population:{'2019':32949,'2020':32412,'2021':31878,'2022':31455,'2023':31010},
            households:{'2019':14206,'2020':14464,'2021':14651,'2022':14826,'2023':14656}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 4408492, medicinalPlants: 19046, mountainVegetables: 75979, mushrooms: 87569 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 23 }
        },
        medical: {
            hospitals: { '2024': 58 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 292 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'대추'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=boeun&page=/member/boeun/business01.html&mc=MEM_BON_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'옥천군',
        populationStatus:{
            population:{'2023':48891},
            households:{'2023':21940},
            averageAge:{'2023':53},
            forestryPopulation: {'2020':1197},
            forestryHouseholds: {'2020':535}
        },
        regionCharacteristics: {
            population:{'2019':51023,'2020':50527,'2021':50093,'2022':49520,'2023':48891},
            households:{'2019':20575,'2020':20937,'2021':21540,'2022':21713,'2023':21940}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 15759973, medicinalPlants: 1972, mountainVegetables: 14589, mushrooms: 72123 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 12 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 27 }
        },
        medical: {
            hospitals: { '2024': 85 },
            pharmacies: { '2024': 21 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 18 },
            seniorLeisureWelfare: { '2023': 314 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=okcheon&page=/member/okcheon/business01.html&mc=MEM_OKC_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'영동군',
        populationStatus:{
            population:{'2023':44195},
            households:{'2023':21508},
            averageAge:{'2023':53.8},
            forestryPopulation: {'2020':2311},
            forestryHouseholds: {'2020':1095}
        },
        regionCharacteristics: {
            population:{'2019':48738,'2020':47475,'2021':45773,'2022':44956,'2023':44195},
            households:{'2019':21040,'2020':21303,'2021':21432,'2022':20905,'2023':21508}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 14145713, medicinalPlants: 12281, mountainVegetables: 61322, mushrooms: 605074 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 13 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 44 }
        },
        medical: {
            hospitals: { '2024': 79 },
            pharmacies: { '2024': 25 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 26 },
            seniorLeisureWelfare: { '2023': 354 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'호두'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongdong&page=/member/yeongdong/business01.html&mc=MEM_YDN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'진천군',
        populationStatus:{
            population:{'2023':86254},
            households:{'2023':41375},
            averageAge:{'2023':43.6},
            forestryPopulation: {'2020':448},
            forestryHouseholds: {'2020':178}
        },
        regionCharacteristics: {
            population:{'2019':81084,'2020':83718,'2021':85176,'2022':86147,'2023':86254},
            households:{'2019':35362,'2020':37427,'2021':39438,'2022':40701,'2023':41375}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 376988, medicinalPlants: 221, mountainVegetables: 3575, mushrooms: 41049 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 17 },
            elementarySchools: { '2024': 15 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 122 }
        },
        medical: {
            hospitals: { '2024': 98 },
            pharmacies: { '2024': 41 }
        },
        culturalFacilities: {
            cultural: { '2022': 8 },
            socialWelfare: { '2021': 21 },
            seniorLeisureWelfare: { '2023': 293 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'은행'}, {rank:3,product:'대추'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongdong&page=/member/yeongdong/business01.html&mc=MEM_YDN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'괴산군',
        populationStatus:{
            population:{'2023':36590},
            households:{'2023':18501},
            averageAge:{'2023':54.7},
            forestryPopulation: {'2020':828},
            forestryHouseholds: {'2020':373}
        },
        regionCharacteristics: {
            population:{'2019':39163,'2020':39393,'2021':38122,'2022':37055,'2023':36590},
            households:{'2019':17267,'2020':18470,'2021':18263,'2022':18359,'2023':18501}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 807266, medicinalPlants: 17075, mountainVegetables: 29431, mushrooms: 485311 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 12 }
        },
        medical: {
            hospitals: { '2024': 54 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 14 },
            seniorLeisureWelfare: { '2023': 341 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'떫은감'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gjnfcf&page=/member/gjnfcf/biz01.html&mc=MEM_GSJ_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청북도', name:'단양군',
        populationStatus:{
            population:{'2023':27701},
            households:{'2023':13213},
            averageAge:{'2023':55.4},
            forestryPopulation: {'2020':1110},
            forestryHouseholds: {'2020':547}
        },
        regionCharacteristics: {
            population:{'2019':29756,'2020':29155,'2021':28331,'2022':27767,'2023':27701},
            households:{'2019':12791,'2020':12845,'2021':12962,'2022':13037,'2023':13213}
        },
        weather: {
            temperature: {
                '2021-01': 2.9,
                '2021-02': 8.4,
                '2021-03': 14.5,
                '2021-04': 19.4,
                '2021-05': 21.9,
                '2021-06': 27.3,
                '2021-07': 31.2,
                '2021-08': 28.6,
                '2021-09': 25.5,
                '2021-10': 20.2,
                '2021-11': 13.3,
                '2021-12': 5.7,
                '2022-01': 3.2,
                '2022-02': 4.4,
                '2022-03': 13.1,
                '2022-04': 20.8,
                '2022-05': 24.8,
                '2022-06': 27.9,
                '2022-07': 30.2,
                '2022-08': 28.4,
                '2022-09': 26.2,
                '2022-10': 19.2,
                '2022-11': 15.2,
                '2022-12': 1.5,
                '2023-01': 3.4,
                '2023-02': 7.4,
                '2023-03': 16.6,
                '2023-04': 19.1,
                '2023-05': 24.2,
                '2023-06': 28,
                '2023-07': 29.8,
                '2023-08': 30.9,
                '2023-09': 26.8,
                '2023-10': 20.2,
                '2023-11': 12.2,
                '2023-12': 5.7,
            },
            precipitation: {
                '2021-01': 16.5,
                '2021-02': 12.2,
                '2021-03': 86.8,
                '2021-04': 62,
                '2021-05': 158.6,
                '2021-06': 83,
                '2021-07': 210.6,
                '2021-08': 241.9,
                '2021-09': 191.6,
                '2021-10': 35.3,
                '2021-11': 47.8,
                '2021-12': 5.1,
                '2022-01': 2.8,
                '2022-02': 4,
                '2022-03': 79.3,
                '2022-04': 49.9,
                '2022-05': 7.1,
                '2022-06': 163.9,
                '2022-07': 236.5,
                '2022-08': 425.3,
                '2022-09': 100.1,
                '2022-10': 88.3,
                '2022-11': 55,
                '2022-12': 17.6,
                '2023-01': 26.9,
                '2023-02': 4.4,
                '2023-03': 21.4,
                '2023-04': 41.3,
                '2023-05': 156.9,
                '2023-06': 199.1,
                '2023-07': 609,
                '2023-08': 263.5,
                '2023-09': 238.1,
                '2023-10': 21.8,
                '2023-11': 43.7,
                '2023-12': 104.9
            }
        },
        productsProduction: { fruits: 51076, medicinalPlants: 135340, mountainVegetables: 418781, mushrooms: 11768 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 5 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 10 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 13 }
        },
        medical: {
            hospitals: { '2024': 42 },
            pharmacies: { '2024': 10 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 14 },
            seniorLeisureWelfare: { '2023': 166 }
        },
        realEstate: {
            landPrice: { '2023': 44279, '2024': 44600 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'고려엉겅퀴'}, {rank:2,product:'오미자'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청북도 누리집',url:'https://www.chungbuk.go.kr/www/selectBbsNttList.do?bbsNo=94&key=638'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=danyang&page=/member/danyang/business01.html&mc=MEM_DAN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'천안시',
        populationStatus:{
            population:{'2023':655959},
            households:{'2023':303616},
            averageAge:{'2023':41},
            forestryPopulation: {'2020':2056},
            forestryHouseholds: {'2020':830}
        },
        regionCharacteristics: {
            population:{'2019':652258,'2020':658808,'2021':658486,'2022':657559,'2023':655959},
            households:{'2019':273053,'2020':284818,'2021':292290,'2022':298461,'2023':303616}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 9429510, medicinalPlants: 222810, mountainVegetables: 4591, mushrooms: 714641 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 111 },
            elementarySchools: { '2024': 79 },
            universities: { '2024': 6 },
            privateInstitutes: { '2023': 1382 }
        },
        medical: {
            hospitals: { '2024': 836 },
            pharmacies: { '2024': 301 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 112 },
            seniorLeisureWelfare: { '2023': 759 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'밤'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheonan&page=/member/cheonan/biz01.html&mc=MEM_CNA_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'공주시',
        populationStatus:{
            population:{'2023':102104},
            households:{'2023':48382},
            averageAge:{'2023':49.4},
            forestryPopulation: {'2020':3437},
            forestryHouseholds: {'2020':1495}
        },
        regionCharacteristics: {
            population:{'2019':106474,'2020':104545,'2021':103145,'2022':102571,'2023':102104},
            households:{'2019':45543,'2020':46981,'2021':47242,'2022':47780,'2023':48382}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 9371234, medicinalPlants: 9495, mountainVegetables: 21650, mushrooms: 660914 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 33 },
            elementarySchools: { '2024': 28 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 112 }
        },
        medical: {
            hospitals: { '2024': 171 },
            pharmacies: { '2024': 59 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 37 },
            seniorLeisureWelfare: { '2023': 439 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'은행'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gongju&page=/member/gongju/business01.html&mc=MEM_GON_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'보령시',
        populationStatus:{
            population:{'2023':95772},
            households:{'2023':44891},
            averageAge:{'2023':50.1},
            forestryPopulation: {'2020':762},
            forestryHouseholds: {'2020':341}
        },
        regionCharacteristics: {
            population:{'2019':101114,'2020':100229,'2021':98408,'2022':97157,'2023':95772},
            households:{'2019':42160,'2020':43181,'2021':43928,'2022':44432,'2023':44891}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 2618269, medicinalPlants: 65497, mountainVegetables: 202356, mushrooms: 338203 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 3 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 32 },
            elementarySchools: { '2024': 28 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 130 }
        },
        medical: {
            hospitals: { '2024': 145 },
            pharmacies: { '2024': 49 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 18 },
            seniorLeisureWelfare: { '2023': 419 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'떫은감'}, {rank:3,product:'취나물'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=boryeong&page=/member/boryeong/business01.html&mc=MEM_BOR_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'아산시',
        populationStatus:{
            population:{'2023':345796},
            households:{'2023':158682},
            averageAge:{'2023':40.6},
            forestryPopulation: {'2020':928},
            forestryHouseholds: {'2020':405}
        },
        regionCharacteristics: {
            population:{'2019':314395,'2020':316129,'2021':324580,'2022':334539,'2023':345796},
            households:{'2019':131316,'2020':136783,'2021':144799,'2022':151159,'2023':158682}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 2202577, medicinalPlants: 5425, mountainVegetables: 5105, mushrooms: 113438 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 66 },
            elementarySchools: { '2024': 50 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 454 }
        },
        medical: {
            hospitals: { '2024': 371 },
            pharmacies: { '2024': 124 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 53 },
            seniorLeisureWelfare: { '2023': 550 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'은행'}, {rank:2,product:'생표고'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=asan&page=/member/asan/business01.html&mc=MEM_ASN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'논산시',
        populationStatus:{
            population:{'2023':110423},
            households:{'2023':52476},
            averageAge:{'2023':49.5},
            forestryPopulation: {'2020':1395},
            forestryHouseholds: {'2020':641}
        },
        regionCharacteristics: {
            population:{'2019':118842,'2020':116675,'2021':114483,'2022':112617,'2023':110423},
            households:{'2019':50560,'2020':51800,'2021':52379,'2022':52370,'2023':52476}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 2434331, medicinalPlants: 67540, mountainVegetables: 558459, mushrooms: 188805 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 30 },
            elementarySchools: { '2024': 31 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 122 }
        },
        medical: {
            hospitals: { '2024': 202 },
            pharmacies: { '2024': 70 }
        },
        culturalFacilities: {
            cultural: { '2022': 6 },
            socialWelfare: { '2021': 43 },
            seniorLeisureWelfare: { '2023': 524 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'도라지'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=user.index.IndexApp&c=1004&d=nonsan&mc=MEM_NNS'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'금산군',
        populationStatus:{
            population:{'2023':50093},
            households:{'2023':24447},
            averageAge:{'2023':51.2},
            forestryPopulation: {'2020':1342},
            forestryHouseholds: {'2020':579}
        },
        regionCharacteristics: {
            population:{'2019':52257,'2020':51413,'2021':50477,'2022':50092,'2023':50093},
            households:{'2019':23172,'2020':24102,'2021':24171,'2022':24214,'2023':24447}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 11262439, medicinalPlants: 843366, mountainVegetables: 84362, mushrooms: 13496 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 37 }
        },
        medical: {
            hospitals: { '2024': 87 },
            pharmacies: { '2024': 35 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 30 },
            seniorLeisureWelfare: { '2023': 346 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'독활'}, {rank:2,product:'당귀'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=user.index.IndexApp&c=1004&d=geumsan&mc=MEM_GMS'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'부여군',
        populationStatus:{
            population:{'2023':61046},
            households:{'2023':28438},
            averageAge:{'2023':55},
            forestryPopulation: {'2020':3706},
            forestryHouseholds: {'2020':1667}
        },
        regionCharacteristics: {
            population:{'2019':66740,'2020':65354,'2021':63774,'2022':62343,'2023':61046},
            households:{'2019':28303,'2020':28671,'2021':28848,'2022':28923,'2023':28438}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 12529781, medicinalPlants: 68313, mountainVegetables: 524484, mushrooms: 1537362 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 4 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 25 },
            elementarySchools: { '2024': 24 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 44 }
        },
        medical: {
            hospitals: { '2024': 107 },
            pharmacies: { '2024': 34 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 16 },
            seniorLeisureWelfare: { '2023': 471 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'생표고'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=buyeo&page=/member/buyeo/business01.html&mc=MEM_BYO_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'충청남도', name:'청양군',
        populationStatus:{
            population:{'2023':30168},
            households:{'2023':14078},
            averageAge:{'2023':55},
            forestryPopulation: {'2020':2641},
            forestryHouseholds: {'2020':1203}
        },
        regionCharacteristics: {
            population:{'2019':31717,'2020':30948,'2021':30440,'2022':30266,'2023':30168},
            households:{'2019':13571,'2020':13745,'2021':13916,'2022':14075,'2023':14078}
        },
        weather: {
            temperature: {
                '2021-01': 4,
                '2021-02': 9,
                '2021-03': 15,
                '2021-04': 19.8,
                '2021-05': 22.3,
                '2021-06': 27.4,
                '2021-07': 31.6,
                '2021-08': 29.6,
                '2021-09': 26.6,
                '2021-10': 21.4,
                '2021-11': 14.5,
                '2021-12': 7.3,
                '2022-01': 4.4,
                '2022-02': 5.3,
                '2022-03': 13.4,
                '2022-04': 20.3,
                '2022-05': 24.4,
                '2022-06': 27.7,
                '2022-07': 30.6,
                '2022-08': 28.9,
                '2022-09': 27,
                '2022-10': 20,
                '2022-11': 16.3,
                '2022-12': 3.2,
                '2023-01': 4.7,
                '2023-02': 8,
                '2023-03': 16.4,
                '2023-04': 19.4,
                '2023-05': 24.3,
                '2023-06': 28,
                '2023-07': 29.7,
                '2023-08': 31.4,
                '2023-09': 27.4,
                '2023-10': 21.2,
                '2023-11': 13,
                '2023-12': 7,
            },
            precipitation: {
                '2021-01': 25.7,
                '2021-02': 14.8,
                '2021-03': 90.5,
                '2021-04': 56.3,
                '2021-05': 135.3,
                '2021-06': 76.5,
                '2021-07': 168.5,
                '2021-08': 252.6,
                '2021-09': 195.5,
                '2021-10': 44.5,
                '2021-11': 79.6,
                '2021-12': 9.7,
                '2022-01': 4.4,
                '2022-02': 3.6,
                '2022-03': 70.2,
                '2022-04': 55.7,
                '2022-05': 5.9,
                '2022-06': 188.6,
                '2022-07': 160.4,
                '2022-08': 475,
                '2022-09': 107.8,
                '2022-10': 103.8,
                '2022-11': 46,
                '2022-12': 20.9,
                '2023-01': 28.9,
                '2023-02': 3.7,
                '2023-03': 14.8,
                '2023-04': 48,
                '2023-05': 182.2,
                '2023-06': 146.5,
                '2023-07': 689.2,
                '2023-08': 234.3,
                '2023-09': 244.4,
                '2023-10': 21.7,
                '2023-11': 67.2,
                '2023-12': 113.8
            }
        },
        productsProduction: { fruits: 6299391, medicinalPlants: 345239, mountainVegetables: 101114, mushrooms: 496460 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 12 },
            elementarySchools: { '2024': 12 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 11 }
        },
        medical: {
            hospitals: { '2024': 49 },
            pharmacies: { '2024': 13 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 309 }
        },
        realEstate: {
            landPrice: { '2023': 61682, '2024': 61974 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'생표고'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'충청남도 농업기술원',url:'https://cnnongup.chungnam.go.kr/main.cs'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheongyang&page=/member/cheongyang/business01.html&mc=MEM_CYN_BIZ01'}
            ],
            mento:[3, 5, 12, 16]
        }
    },{
        parent:'전북특별자치도', name:'정읍시',
        populationStatus:{
            population:{'2023':103620},
            households:{'2023':48301},
            averageAge:{'2023':50.9},
            forestryPopulation: {'2020':2645},
            forestryHouseholds: {'2020':1254}
        },
        regionCharacteristics: {
            population:{'2019':110541,'2020':108508,'2021':106487,'2022':105081,'2023':103620},
            households:{'2019':46260,'2020':46850,'2021':47434,'2022':47815,'2023':48301}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 3290880, medicinalPlants: 71370, mountainVegetables: 120111, mushrooms: 71160 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 38 },
            elementarySchools: { '2024': 34 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 181 }
        },
        medical: {
            hospitals: { '2024': 189 },
            pharmacies: { '2024': 60 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 31 },
            seniorLeisureWelfare: { '2023': 719 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'복분자딸기'}, {rank:2,product:'떫은감'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'http://www.jusj.kr/sub05020101'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'남원시',
        populationStatus:{
            population:{'2023':76781},
            households:{'2023':35146},
            averageAge:{'2023':51.6},
            forestryPopulation: {'2020':1686},
            forestryHouseholds: {'2020':771}
        },
        regionCharacteristics: {
            population:{'2019':81441,'2020':80662,'2021':79431,'2022':77948,'2023':76781},
            households:{'2019':33610,'2020':34331,'2021':34747,'2022':34879,'2023':35146}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 1177203, medicinalPlants: 216292, mountainVegetables: 131114, mushrooms: 23242 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 5 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 26 },
            elementarySchools: { '2024': 27 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 97 }
        },
        medical: {
            hospitals: { '2024': 145 },
            pharmacies: { '2024': 40 }
        },
        culturalFacilities: {
            cultural: { '2022': 10 },
            socialWelfare: { '2021': 16 },
            seniorLeisureWelfare: { '2023': 498 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'오미자'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'http://www.namwonfc.co.kr/'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'완주군',
        populationStatus:{
            population:{'2023':97827},
            households:{'2023':45406},
            averageAge:{'2023':46.4},
            forestryPopulation: {'2020':3198},
            forestryHouseholds: {'2020':1456}
        },
        regionCharacteristics: {
            population:{'2019':92220,'2020':91609,'2021':91142,'2022':92422,'2023':97827},
            households:{'2019':38453,'2020':39629,'2021':40712,'2022':41263,'2023':45406}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 6679675, medicinalPlants: 65447, mountainVegetables: 447091, mushrooms: 46339 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 36 },
            elementarySchools: { '2024': 29 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 185 }
        },
        medical: {
            hospitals: { '2024': 136 },
            pharmacies: { '2024': 42 }
        },
        culturalFacilities: {
            cultural: { '2022': 10 },
            socialWelfare: { '2021': 27 },
            seniorLeisureWelfare: { '2023': 452 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'취나물'}, {rank:3,product:'복분자딸기'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=wanju&page=/member/wanju/business01.html&mc=MEM_WNJ_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'진안군',
        populationStatus:{
            population:{'2023':24465},
            households:{'2023':11096},
            averageAge:{'2023':55.5},
            forestryPopulation: {'2020':999},
            forestryHouseholds: {'2020':500}
        },
        regionCharacteristics: {
            population:{'2019':25697,'2020':25394,'2021':24987,'2022':24550,'2023':24465},
            households:{'2019':10460,'2020':10774,'2021':10835,'2022':10977,'2023':11096}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 993575, medicinalPlants: 211484, mountainVegetables: 300846, mushrooms: 440227 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 8 }
        },
        medical: {
            hospitals: { '2024': 45 },
            pharmacies: { '2024': 9 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 8 },
            seniorLeisureWelfare: { '2023': 340 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'떫은감'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jinan&page=/member/jinan/business01.html&mc=MEM_JAN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'무주군',
        populationStatus:{
            population:{'2023':23251},
            households:{'2023':11017},
            averageAge:{'2023':54.7},
            forestryPopulation: {'2020':1683},
            forestryHouseholds: {'2020':773}
        },
        regionCharacteristics: {
            population:{'2019':24303,'2020':24036,'2021':23748,'2022':23489,'2023':23251},
            households:{'2019':10366,'2020':10539,'2021':10740,'2022':10873,'2023':11017}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 558896, medicinalPlants: 628442, mountainVegetables: 259828, mushrooms: 150241 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 9 },
            elementarySchools: { '2024': 10 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 20 }
        },
        medical: {
            hospitals: { '2024': 39 },
            pharmacies: { '2024': 12 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 271 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'천마'}, {rank:2,product:'오미자'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=muju&page=/member/muju/business01.html&mc=MEM_MUJ_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'장수군',
        populationStatus:{
            population:{'2023':20983},
            households:{'2023':9615},
            averageAge:{'2023':54.8},
            forestryPopulation: {'2020':1063},
            forestryHouseholds: {'2020':482}
        },
        regionCharacteristics: {
            population:{'2019':22441,'2020':22085,'2021':21695,'2022':21336,'2023':20983},
            households:{'2019':9371,'2020':9497,'2021':9561,'2022':9603,'2023':9615}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 807483, medicinalPlants: 338817, mountainVegetables: 131492, mushrooms: 17689 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 1 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 8 },
            elementarySchools: { '2024': 8 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 13 }
        },
        medical: {
            hospitals: { '2024': 33 },
            pharmacies: { '2024': 9 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 280 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'오미자'}, {rank:2,product:'천마'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://jangsufc.co.kr/successor/'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'임실군',
        populationStatus:{
            population:{'2023':25956},
            households:{'2023':12208},
            averageAge:{'2023':55.4},
            forestryPopulation: {'2020':937},
            forestryHouseholds: {'2020':448}
        },
        regionCharacteristics: {
            population:{'2019':28902,'2020':27314,'2021':26730,'2022':26508,'2023':25956},
            households:{'2019':12093,'2020':12380,'2021':12333,'2022':12486,'2023':12208}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 3456515, medicinalPlants: 396899, mountainVegetables: 22369, mushrooms: 67152 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 4 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 15 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 12 }
        },
        medical: {
            hospitals: { '2024': 67 },
            pharmacies: { '2024': 14 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 353 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'작약'}, {rank:3,product:'복분자딸기'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=imsil&page=/member/imsil/business01.html&mc=MEM_IMS_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'순창군',
        populationStatus:{
            population:{'2023':26764},
            households:{'2023':12062},
            averageAge:{'2023':54.3},
            forestryPopulation: {'2020':3255},
            forestryHouseholds: {'2020':1506}
        },
        regionCharacteristics: {
            population:{'2019':28382,'2020':27810,'2021':26855,'2022':26727,'2023':26764},
            households:{'2019':11586,'2020':11750,'2021':11750,'2022':11838,'2023':12062}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 5745409, medicinalPlants: 57480, mountainVegetables: 492116, mushrooms: 11853 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 15 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 21 }
        },
        medical: {
            hospitals: { '2024': 61 },
            pharmacies: { '2024': 15 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 8 },
            seniorLeisureWelfare: { '2023': 373 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'두릅'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=sunchang&page=/member/sunchang/business01.html&mc=MEM_SCA_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전북특별자치도', name:'부안군',
        populationStatus:{
            population:{'2023':49187},
            households:{'2023':22888},
            averageAge:{'2023':54.4},
            forestryPopulation: {'2020':747},
            forestryHouseholds: {'2020':360}
        },
        regionCharacteristics: {
            population:{'2019':53295,'2020':52140,'2021':50795,'2022':50094,'2023':49187},
            households:{'2019':22280,'2020':22591,'2021':22557,'2022':22827,'2023':22888}
        },
        weather: {
            temperature: {
                '2021-01': 4.6,
                '2021-02': 9.3,
                '2021-03': 15.1,
                '2021-04': 19.7,
                '2021-05': 22.5,
                '2021-06': 27.4,
                '2021-07': 30.9,
                '2021-08': 29.7,
                '2021-09': 26.3,
                '2021-10': 21.5,
                '2021-11': 14.4,
                '2021-12': 7.6,
                '2022-01': 4.7,
                '2022-02': 5.3,
                '2022-03': 13.8,
                '2022-04': 20.3,
                '2022-05': 24.3,
                '2022-06': 27.7,
                '2022-07': 30.2,
                '2022-08': 29.2,
                '2022-09': 26.8,
                '2022-10': 20.3,
                '2022-11': 16.7,
                '2022-12': 3.8,
                '2023-01': 5.2,
                '2023-02': 8.1,
                '2023-03': 16.5,
                '2023-04': 19.3,
                '2023-05': 24.1,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 31.4,
                '2023-09': 27.6,
                '2023-10': 21.3,
                '2023-11': 13.6,
                '2023-12': 7.8,
            },
            precipitation: {
                '2021-01': 34.8,
                '2021-02': 27,
                '2021-03': 97.8,
                '2021-04': 41.3,
                '2021-05': 109.3,
                '2021-06': 120.2,
                '2021-07': 231.8,
                '2021-08': 358.4,
                '2021-09': 133.6,
                '2021-10': 43.7,
                '2021-11': 89.8,
                '2021-12': 12.1,
                '2022-01': 2.8,
                '2022-02': 7.6,
                '2022-03': 81.8,
                '2022-04': 69,
                '2022-05': 5.1,
                '2022-06': 188.3,
                '2022-07': 145.8,
                '2022-08': 223.2,
                '2022-09': 82,
                '2022-10': 53.7,
                '2022-11': 73.1,
                '2022-12': 42.7,
                '2023-01': 26.8,
                '2023-02': 10.7,
                '2023-03': 29.9,
                '2023-04': 53.2,
                '2023-05': 235.6,
                '2023-06': 236.6,
                '2023-07': 722.4,
                '2023-08': 257.3,
                '2023-09': 173.9,
                '2023-10': 15.1,
                '2023-11': 91.1,
                '2023-12': 127
            }
        },
        productsProduction: { fruits: 44371283, medicinalPlants: 26075, mountainVegetables: 27485, mushrooms: 44583 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 19 },
            elementarySchools: { '2024': 19 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 49 }
        },
        medical: {
            hospitals: { '2024': 86 },
            pharmacies: { '2024': 31 }
        },
        culturalFacilities: {
            cultural: { '2022': 6 },
            socialWelfare: { '2021': 13 },
            seniorLeisureWelfare: { '2023': 482 }
        },
        realEstate: {
            landPrice: { '2023': 29853, '2024': 29603 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전북특별자치도 누리집',url:'https://www.jeonbuk.go.kr/index.jeonbuk?menuCd=DOM_000000104008004000'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=buan&page=/member/buan/business01.html&mc=MEM_BUN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'여수시',
        populationStatus:{
            population:{'2023':271696},
            households:{'2023':118364},
            averageAge:{'2023':46.4},
            forestryPopulation: {'2020':1060},
            forestryHouseholds: {'2020':488}
        },
        regionCharacteristics: {
            population:{'2019':282786,'2020':280242,'2021':276762,'2022':274765,'2023':271696},
            households:{'2019':110825,'2020':113780,'2021':115639,'2022':117279,'2023':118364}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 8132606, medicinalPlants: 82462, mountainVegetables: 116344, mushrooms: 2723 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 65 },
            elementarySchools: { '2024': 48 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 502 }
        },
        medical: {
            hospitals: { '2024': 370 },
            pharmacies: { '2024': 132 }
        },
        culturalFacilities: {
            cultural: { '2022': 9 },
            socialWelfare: { '2021': 34 },
            seniorLeisureWelfare: { '2023': 529 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'독활'}, {rank:2,product:'고사리'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeosu&page=/member/yeosu/business01.html&mc=MEM_YSU_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'순천시',
        populationStatus:{
            population:{'2023':278137},
            households:{'2023':117524},
            averageAge:{'2023':44.1},
            forestryPopulation: {'2020':5733},
            forestryHouseholds: {'2020':2577}
        },
        regionCharacteristics: {
            population:{'2019':279598,'2020':282189,'2021':281436,'2022':278737,'2023':278137},
            households:{'2019':107128,'2020':110833,'2021':114963,'2022':115536,'2023':117524}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 10297537, medicinalPlants: 45016, mountainVegetables: 778473, mushrooms: 271730 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 53 },
            elementarySchools: { '2024': 42 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 543 }
        },
        medical: {
            hospitals: { '2024': 366 },
            pharmacies: { '2024': 131 }
        },
        culturalFacilities: {
            cultural: { '2022': 10 },
            socialWelfare: { '2021': 31 },
            seniorLeisureWelfare: { '2023': 696 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=suncheon&page=/member/suncheon/business01.html&mc=MEM_SCN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'광양시',
        populationStatus:{
            population:{'2023':152666},
            households:{'2023':63428},
            averageAge:{'2023':43.7},
            forestryPopulation: {'2020':4237},
            forestryHouseholds: {'2020':1999}
        },
        regionCharacteristics: {
            population:{'2019':156750,'2020':151769,'2021':150531,'2022':152168,'2023':152666},
            households:{'2019':56685,'2020':58325,'2021':59960,'2022':61803,'2023':63428}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 6054996, medicinalPlants: 17594, mountainVegetables: 2323906, mushrooms: 72 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 36 },
            elementarySchools: { '2024': 29 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 258 }
        },
        medical: {
            hospitals: { '2024': 160 },
            pharmacies: { '2024': 51 }
        },
        culturalFacilities: {
            cultural: { '2022': 9 },
            socialWelfare: { '2021': 19 },
            seniorLeisureWelfare: { '2023': 340 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'고사리'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gwangyang&page=/member/gwangyang/business01.html&mc=MEM_GYN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'담양군',
        populationStatus:{
            population:{'2023':45373},
            households:{'2023':19609},
            averageAge:{'2023':52.7},
            forestryPopulation: {'2020':560},
            forestryHouseholds: {'2020':263}
        },
        regionCharacteristics: {
            population:{'2019':46535,'2020':46280,'2021':46180,'2022':45792,'2023':45373},
            households:{'2019':17974,'2020':18333,'2021':19000,'2022':19131,'2023':19609}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 3620950, medicinalPlants: 5968, mountainVegetables: 49253, mushrooms: 18274 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 21 }
        },
        medical: {
            hospitals: { '2024': 80 },
            pharmacies: { '2024': 21 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 17 },
            seniorLeisureWelfare: { '2023': 369 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'죽순'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=damyang&page=/member/damyang/business01.html&mc=MEM_DMY_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'곡성군',
        populationStatus:{
            population:{'2023':26905},
            households:{'2023':13185},
            averageAge:{'2023':55.3},
            forestryPopulation: {'2020':1047},
            forestryHouseholds: {'2020':503}
        },
        regionCharacteristics: {
            population:{'2019':28887,'2020':28039,'2021':27535,'2022':27060,'2023':26905},
            households:{'2019':12779,'2020':12833,'2021':12941,'2022':13052,'2023':13185}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 7677457, medicinalPlants: 16221, mountainVegetables: 98849, mushrooms: 11170 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 8 },
            elementarySchools: { '2024': 8 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 20 }
        },
        medical: {
            hospitals: { '2024': 53 },
            pharmacies: { '2024': 15 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 11 },
            seniorLeisureWelfare: { '2023': 321 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gokseong&page=/member/gokseong/business01.html&mc=MEM_GOK_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'구례군',
        populationStatus:{
            population:{'2023':24314},
            households:{'2023':11342},
            averageAge:{'2023':56.3},
            forestryPopulation: {'2020':2864},
            forestryHouseholds: {'2020':1369}
        },
        regionCharacteristics: {
            population:{'2019':26563,'2020':25719,'2021':25235,'2022':24655,'2023':24314},
            households:{'2019':10873,'2020':11089,'2021':11243,'2022':11284,'2023':11342}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 4671834, medicinalPlants: 216439, mountainVegetables: 656129, mushrooms: 20476 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 10 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 22 }
        },
        medical: {
            hospitals: { '2024': 48 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 10 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 289 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gokseong&page=/member/gokseong/business01.html&mc=MEM_GOK_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'고흥군',
        populationStatus:{
            population:{'2023':61113},
            households:{'2023':30520},
            averageAge:{'2023':57.7},
            forestryPopulation: {'2020':1094},
            forestryHouseholds: {'2020':551}
        },
        regionCharacteristics: {
            population:{'2019':64913,'2020':63922,'2021':62762,'2022':61880,'2023':61113},
            households:{'2019':29298,'2020':29852,'2021':30062,'2022':30489,'2023':30520}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 1464592, medicinalPlants: 255897, mountainVegetables: 2702483, mushrooms: 6539 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 18 },
            elementarySchools: { '2024': 17 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 48 }
        },
        medical: {
            hospitals: { '2024': 104 },
            pharmacies: { '2024': 31 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 14 },
            seniorLeisureWelfare: { '2023': 649 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'취나물'}, {rank:2,product:'고려엉겅퀴'}, {rank:3,product:'작약'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=goheung&page=/member/goheung/business01.html&mc=MEM_GHN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'보성군',
        populationStatus:{
            population:{'2023':37686},
            households:{'2023':18180},
            averageAge:{'2023':57.1},
            forestryPopulation: {'2020':698},
            forestryHouseholds: {'2020':333}
        },
        regionCharacteristics: {
            population:{'2019':41420,'2020':40482,'2021':39375,'2022':38471,'2023':37686},
            households:{'2019':17839,'2020':17980,'2021':18204,'2022':18205,'2023':18180}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 1749014, medicinalPlants: 17868, mountainVegetables: 50054, mushrooms: 47977 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 17 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 23 }
        },
        medical: {
            hospitals: { '2024': 70 },
            pharmacies: { '2024': 23 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 7 },
            seniorLeisureWelfare: { '2023': 450 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=boseong&page=/member/boseong/business01.html&mc=MEM_BSN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'화순군',
        populationStatus:{
            population:{'2023':61254},
            households:{'2023':27093},
            averageAge:{'2023':51},
            forestryPopulation: {'2020':1102},
            forestryHouseholds: {'2020':501}
        },
        regionCharacteristics: {
            population:{'2019':62737,'2020':62522,'2021':62624,'2022':62024,'2023':61254},
            households:{'2019':25005,'2020':25608,'2021':26425,'2022':26753,'2023':27093}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 609239, medicinalPlants: 194195, mountainVegetables: 255484, mushrooms: 19193 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 19 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 72 }
        },
        medical: {
            hospitals: { '2024': 106 },
            pharmacies: { '2024': 35 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 16 },
            seniorLeisureWelfare: { '2023': 443 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'더덕'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hwasun&page=/member/hwasun/business01.html&mc=MEM_HSU_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'장흥군',
        populationStatus:{
            population:{'2023':35046},
            households:{'2023':16653},
            averageAge:{'2023':54.8},
            forestryPopulation: {'2020':1123},
            forestryHouseholds: {'2020':528}
        },
        regionCharacteristics: {
            population:{'2019':38563,'2020':37800,'2021':36547,'2022':35650,'2023':35046},
            households:{'2019':16497,'2020':16646,'2021':16683,'2022':16633,'2023':16653}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 491928, medicinalPlants: 22980, mountainVegetables: 36518, mushrooms: 879350 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 30 }
        },
        medical: {
            hospitals: { '2024': 64 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 408 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'건표고'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jangheung&page=/member/jangheung/business01.html&mc=MEM_JNH_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'강진군',
        populationStatus:{
            population:{'2023':32722},
            households:{'2023':15579},
            averageAge:{'2023':54.7},
            forestryPopulation: {'2020':507},
            forestryHouseholds: {'2020':247}
        },
        regionCharacteristics: {
            population:{'2019':35286,'2020':34597,'2021':33753,'2022':33177,'2023':32722},
            households:{'2019':15059,'2020':15398,'2021':15518,'2022':15510,'2023':15579}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 804813, medicinalPlants: 66811, mountainVegetables: 116979, mushrooms: 34344 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 13 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 25 }
        },
        medical: {
            hospitals: { '2024': 54 },
            pharmacies: { '2024': 14 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 343 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'도라지'}, {rank:3,product:'작약'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gangjin&page=/member/gangjin/business01.html&mc=MEM_GJN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'영광군',
        populationStatus:{
            population:{'2023':51750},
            households:{'2023':22932},
            averageAge:{'2023':50.4},
            forestryPopulation: {'2020':639},
            forestryHouseholds: {'2020':289}
        },
        regionCharacteristics: {
            population:{'2019':53852,'2020':53099,'2021':51985,'2022':52197,'2023':51750},
            households:{'2019':21668,'2020':22102,'2021':22282,'2022':22811,'2023':22932}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 3876007, medicinalPlants: 7822, mountainVegetables: 3421, mushrooms: 40 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 1 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 76 }
        },
        medical: {
            hospitals: { '2024': 89 },
            pharmacies: { '2024': 25 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 12 },
            seniorLeisureWelfare: { '2023': 379 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'복분자딸기'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeonggwang&page=/member/yeonggwang/business01.html&mc=MEM_YGN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'장성군',
        populationStatus:{
            population:{'2023':42543},
            households:{'2023':18232},
            averageAge:{'2023':52.2},
            forestryPopulation: {'2020':2579},
            forestryHouseholds: {'2020':1235}
        },
        regionCharacteristics: {
            population:{'2019':45739,'2020':44464,'2021':43365,'2022':43146,'2023':42543},
            households:{'2019':17365,'2020':17583,'2021':17833,'2022':18033,'2023':18232}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 3163601, medicinalPlants: 30647, mountainVegetables: 29815, mushrooms: 32050 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 34 }
        },
        medical: {
            hospitals: { '2024': 60 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 344 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'복분자딸기'}, {rank:3,product:'두릅'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jangseong&page=/member/jangseong/int02.html&mc=MEM_JSN_INT02'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'완도군',
        populationStatus:{
            population:{'2023':46641},
            households:{'2023':22350},
            averageAge:{'2023':51.9},
            forestryPopulation: {'2020':372},
            forestryHouseholds: {'2020':167}
        },
        regionCharacteristics: {
            population:{'2019':50689,'2020':49916,'2021':48631,'2022':47597,'2023':46641},
            households:{'2019':21536,'2020':22006,'2021':22051,'2022':22083,'2023':22350}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 73158, medicinalPlants: 24486, mountainVegetables: 1105, mushrooms: 30 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 24 },
            elementarySchools: { '2024': 21 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 40 }
        },
        medical: {
            hospitals: { '2024': 73 },
            pharmacies: { '2024': 21 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 12 },
            seniorLeisureWelfare: { '2023': 311 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'황칠나무'}, {rank:2,product:'떫은감'}, {rank:3,product:'다래'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=wando&page=/member/wando/business01.html&mc=MEM_WDO_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'진도군',
        populationStatus:{
            population:{'2023':28979},
            households:{'2023':14263},
            averageAge:{'2023':52.9},
            forestryPopulation: {'2020':705},
            forestryHouseholds: {'2020':326}
        },
        regionCharacteristics: {
            population:{'2019':30715,'2020':31227,'2021':30066,'2022':29507,'2023':28979},
            households:{'2019':13597,'2020':13883,'2021':14086,'2022':14138,'2023':14263}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 99361, medicinalPlants: 74935, mountainVegetables: 3063, mushrooms: 211908 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 5 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 10 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 23 }
        },
        medical: {
            hospitals: { '2024': 53 },
            pharmacies: { '2024': 14 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 3 },
            seniorLeisureWelfare: { '2023': 283 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'구기자'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jindo&page=/member/jindo/business01.html&mc=MEM_JDO_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'전라남도', name:'신안군',
        populationStatus:{
            population:{'2023':38037},
            households:{'2023':17422},
            averageAge:{'2023':56.2},
            forestryPopulation: {'2020':440},
            forestryHouseholds: {'2020':220}
        },
        regionCharacteristics: {
            population:{'2019':40274,'2020':38938,'2021':38217,'2022':37858,'2023':38037},
            households:{'2019':16749,'2020':16997,'2021':17069,'2022':17238,'2023':17422}
        },
        weather: {
            temperature: {
                '2021-01': 6.8,
                '2021-02': 10.5,
                '2021-03': 15.5,
                '2021-04': 19.3,
                '2021-05': 22.7,
                '2021-06': 26.8,
                '2021-07': 30.1,
                '2021-08': 30,
                '2021-09': 26.5,
                '2021-10': 22.5,
                '2021-11': 16.1,
                '2021-12': 9.6,
                '2022-01': 6.7,
                '2022-02': 7,
                '2022-03': 14.6,
                '2022-04': 20.4,
                '2022-05': 24.1,
                '2022-06': 26.7,
                '2022-07': 30.2,
                '2022-08': 29.9,
                '2022-09': 26.9,
                '2022-10': 21.2,
                '2022-11': 17.9,
                '2022-12': 6.4,
                '2023-01': 7.3,
                '2023-02': 9.6,
                '2023-03': 16.7,
                '2023-04': 19,
                '2023-05': 22.9,
                '2023-06': 26.7,
                '2023-07': 28.9,
                '2023-08': 31.4,
                '2023-09': 28.2,
                '2023-10': 22.3,
                '2023-11': 15.4,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 31.1,
                '2021-02': 34.8,
                '2021-03': 135.9,
                '2021-04': 62.5,
                '2021-05': 127.3,
                '2021-06': 116.9,
                '2021-07': 404.2,
                '2021-08': 282.9,
                '2021-09': 111.9,
                '2021-10': 25.6,
                '2021-11': 59.6,
                '2021-12': 5.4,
                '2022-01': 2.1,
                '2022-02': 1.7,
                '2022-03': 118.2,
                '2022-04': 75.1,
                '2022-05': 2.9,
                '2022-06': 90.2,
                '2022-07': 200.7,
                '2022-08': 121.5,
                '2022-09': 149.9,
                '2022-10': 23.8,
                '2022-11': 43.1,
                '2022-12': 16.7,
                '2023-01': 52.6,
                '2023-02': 31.2,
                '2023-03': 38,
                '2023-04': 98.9,
                '2023-05': 263.6,
                '2023-06': 243.9,
                '2023-07': 535,
                '2023-08': 244.4,
                '2023-09': 144.5,
                '2023-10': 6.7,
                '2023-11': 83.3,
                '2023-12': 65.2
            }
        },
        productsProduction: { fruits: 82907727, medicinalPlants: 3940, mountainVegetables: 32269, mushrooms: 600 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 21 },
            elementarySchools: { '2024': 19 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 6 }
        },
        medical: {
            hospitals: { '2024': 64 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 8 },
            socialWelfare: { '2021': 11 },
            seniorLeisureWelfare: { '2023': 417 }
        },
        realEstate: {
            landPrice: { '2023': 24460, '2024': 24389 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'고사리'}, {rank:3,product:'꾸지뽕나무'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'전라남도 귀농산어촌종합지원센터',url:'https://jnfarm.jeonnam.go.kr/content/view.do?menuCd=farm002003001'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=sinan&page=/member/sinan/business01.html&mc=MEM_SAN_BIZ01'}
            ],
            mento:[4, 10, 13, 14, 15]
        }
    },{
        parent:'경상북도', name:'포항시',
        populationStatus:{
            population:{'2023':493033},
            households:{'2023':218848},
            averageAge:{'2023':46},
            forestryPopulation: {'2020':2370},
            forestryHouseholds: {'2020':1061}
        },
        regionCharacteristics: {
            population:{'2019':507025,'2020':502916,'2021':503852,'2022':496650,'2023':493033},
            households:{'2019':204305,'2020':209373,'2021':215409,'2022':216673,'2023':218848}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 860222, medicinalPlants: 65254, mountainVegetables: 60379, mushrooms: 9156 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 113 },
            elementarySchools: { '2024': 68 },
            universities: { '2024': 4 },
            privateInstitutes: { '2023': 798 }
        },
        medical: {
            hospitals: { '2024': 669 },
            pharmacies: { '2024': 233 }
        },
        culturalFacilities: {
            cultural: { '2022': 6 },
            socialWelfare: { '2021': 50 },
            seniorLeisureWelfare: { '2023': 651 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'산딸기'}, {rank:2,product:'은행'}, {rank:3,product:'오미자'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://phsanrim.or.kr/%ec%82%b0%eb%a6%bc%ec%9e%90%ec%9b%90%ec%a1%b0%ec%84%b1%ec%82%ac%ec%97%85/'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'경주시',
        populationStatus:{
            population:{'2023':247489},
            households:{'2023':120672},
            averageAge:{'2023':48},
            forestryPopulation: {'2020':968},
            forestryHouseholds: {'2020':446}
        },
        regionCharacteristics: {
            population:{'2019':255402,'2020':253502,'2021':251889,'2022':249607,'2023':247489},
            households:{'2019':113433,'2020':116452,'2021':119140,'2022':119353,'2023':120672}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 2856231, medicinalPlants: 2986, mountainVegetables: 59706, mushrooms: 190599 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 54 },
            elementarySchools: { '2024': 43 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 343 }
        },
        medical: {
            hospitals: { '2024': 297 },
            pharmacies: { '2024': 120 }
        },
        culturalFacilities: {
            cultural: { '2022': 13 },
            socialWelfare: { '2021': 26 },
            seniorLeisureWelfare: { '2023': 637 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gyeongju&page=/member/gyeongju/int02.html&mc=MEM_GGJ_INT02'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'김천시',
        populationStatus:{
            population:{'2023':137515},
            households:{'2023':62680},
            averageAge:{'2023':48},
            forestryPopulation: {'2020':2842},
            forestryHouseholds: {'2020':1354}
        },
        regionCharacteristics: {
            population:{'2019':141229,'2020':140548,'2021':140239,'2022':139324,'2023':137515},
            households:{'2019':58106,'2020':60013,'2021':61020,'2022':62082,'2023':62680}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 3176966, medicinalPlants: 284849, mountainVegetables: 57196, mushrooms: 346584 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 34 },
            elementarySchools: { '2024': 27 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 149 }
        },
        medical: {
            hospitals: { '2024': 156 },
            pharmacies: { '2024': 51 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 45 },
            seniorLeisureWelfare: { '2023': 528 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'호두'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gimcheon&page=/member/gimcheon/business01.html&mc=MEM_GIM_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'안동시',
        populationStatus:{
            population:{'2023':152935},
            households:{'2023':73018},
            averageAge:{'2023':48.7},
            forestryPopulation: {'2020':2581},
            forestryHouseholds: {'2020':1186}
        },
        regionCharacteristics: {
            population:{'2019':160052,'2020':158907,'2021':156972,'2022':154610,'2023':152935},
            households:{'2019':68783,'2020':71424,'2021':72329,'2022':72567,'2023':73018}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 3838912, medicinalPlants: 5572954, mountainVegetables: 481629, mushrooms: 67740 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 40 },
            elementarySchools: { '2024': 30 },
            universities: { '2024': 3 },
            privateInstitutes: { '2023': 239 }
        },
        medical: {
            hospitals: { '2024': 225 },
            pharmacies: { '2024': 66 }
        },
        culturalFacilities: {
            cultural: { '2022': 8 },
            socialWelfare: { '2021': 21 },
            seniorLeisureWelfare: { '2023': 561 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'마'}, {rank:2,product:'도라지'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=andong&page=/member/andong/business01.html&mc=MEM_AND_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'영주시',
        populationStatus:{
            population:{'2023':100199},
            households:{'2023':46709},
            averageAge:{'2023':50.4},
            forestryPopulation: {'2020':2004},
            forestryHouseholds: {'2020':878}
        },
        regionCharacteristics: {
            population:{'2019':105067,'2020':103119,'2021':101942,'2022':100749,'2023':100199},
            households:{'2019':44659,'2020':45970,'2021':45762,'2022':46297,'2023':46709}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 764014, medicinalPlants: 524221, mountainVegetables: 152234, mushrooms: 22526 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 23 },
            elementarySchools: { '2024': 19 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 176 }
        },
        medical: {
            hospitals: { '2024': 145 },
            pharmacies: { '2024': 42 }
        },
        culturalFacilities: {
            cultural: { '2022': 11 },
            socialWelfare: { '2021': 25 },
            seniorLeisureWelfare: { '2023': 371 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'마'}, {rank:2,product:'작약'}, {rank:3,product:'도라지'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=user.index.IndexApp&c=1004&d=yeongju&mc=MEM_YGJ'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'영천시',
        populationStatus:{
            population:{'2023':100212},
            households:{'2023':47626},
            averageAge:{'2023':51.1},
            forestryPopulation: {'2020':896},
            forestryHouseholds: {'2020':425}
        },
        regionCharacteristics: {
            population:{'2019':102470,'2020':102015,'2021':101888,'2022':101088,'2023':100212},
            households:{'2019':44131,'2020':45647,'2021':46653,'2022':47154,'2023':47626}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 32575316, medicinalPlants: 861732, mountainVegetables: 18217, mushrooms: 120131 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 5 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 22 },
            elementarySchools: { '2024': 18 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 85 }
        },
        medical: {
            hospitals: { '2024': 150 },
            pharmacies: { '2024': 46 }
        },
        culturalFacilities: {
            cultural: { '2022': 9 },
            socialWelfare: { '2021': 22 },
            seniorLeisureWelfare: { '2023': 434 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'작약'}, {rank:2,product:'대추'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongcheon&page=/member/yeongcheon/business01.html&mc=MEM_YGC_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'상주시',
        populationStatus:{
            population:{'2023':93858},
            households:{'2023':44512},
            averageAge:{'2023':52.7},
            forestryPopulation: {'2020':6203},
            forestryHouseholds: {'2020':2879}
        },
        regionCharacteristics: {
            population:{'2019':100688,'2020':97228,'2021':95566,'2022':94823,'2023':93858},
            households:{'2019':42925,'2020':44043,'2021':43709,'2022':44208,'2023':44512}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 33572052, medicinalPlants: 361059, mountainVegetables: 64518, mushrooms: 119719 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 35 },
            elementarySchools: { '2024': 28 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 98 }
        },
        medical: {
            hospitals: { '2024': 145 },
            pharmacies: { '2024': 44 }
        },
        culturalFacilities: {
            cultural: { '2022': 9 },
            socialWelfare: { '2021': 22 },
            seniorLeisureWelfare: { '2023': 595 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'오미자'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=sangju&page=/member/sangju/business01.html&mc=MEM_SGJ_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'문경시',
        populationStatus:{
            population:{'2023':68755},
            households:{'2023':31594},
            averageAge:{'2023':52.7},
            forestryPopulation: {'2020':2843},
            forestryHouseholds: {'2020':1292}
        },
        regionCharacteristics: {
            population:{'2019':72242,'2020':71406,'2021':71154,'2022':70373,'2023':68755},
            households:{'2019':30329,'2020':30839,'2021':31448,'2022':31856,'2023':31594}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 5236321, medicinalPlants: 2276499, mountainVegetables: 48749, mushrooms: 398419 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 21 },
            elementarySchools: { '2024': 17 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 82 }
        },
        medical: {
            hospitals: { '2024': 111 },
            pharmacies: { '2024': 40 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 23 },
            seniorLeisureWelfare: { '2023': 398 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'오미자'}, {rank:2,product:'떫은감'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=mungyeong&page=/member/mungyeong/business01.html&mc=MEM_MGN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'경산시',
        populationStatus:{
            population:{'2023':266205},
            households:{'2023':133955},
            averageAge:{'2023':43.2},
            forestryPopulation: {'2020':2497},
            forestryHouseholds: {'2020':1065}
        },
        regionCharacteristics: {
            population:{'2019':263185,'2020':263728,'2021':268369,'2022':267725,'2023':266205},
            households:{'2019':116892,'2020':120756,'2021':127288,'2022':129652,'2023':133955}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 4775001, medicinalPlants: 1836, mountainVegetables: 10464, mushrooms: 45205 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 54 },
            elementarySchools: { '2024': 31 },
            universities: { '2024': 10 },
            privateInstitutes: { '2023': 418 }
        },
        medical: {
            hospitals: { '2024': 353 },
            pharmacies: { '2024': 114 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 60 },
            seniorLeisureWelfare: { '2023': 399 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'대추'}, {rank:2,product:'떫은감'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gyeongsan&page=/member/gyeongsan/business01.html&mc=MEM_GNS_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'의성군',
        populationStatus:{
            population:{'2023':50086},
            households:{'2023':24942},
            averageAge:{'2023':58.9},
            forestryPopulation: {'2020':687},
            forestryHouseholds: {'2020':347}
        },
        regionCharacteristics: {
            population:{'2019':52595,'2020':51724,'2021':50632,'2022':50186,'2023':50086},
            households:{'2019':23969,'2020':24312,'2021':24437,'2022':24665,'2023':24942}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 2475341, medicinalPlants: 163157, mountainVegetables: 11764, mushrooms: 250680 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 19 }
        },
        medical: {
            hospitals: { '2024': 80 },
            pharmacies: { '2024': 20 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 18 },
            seniorLeisureWelfare: { '2023': 489 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'대추'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=uiseong&page=/member/uiseong/business01.html&mc=MEM_USN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'청송군',
        populationStatus:{
            population:{'2023':24019},
            households:{'2023':12060},
            averageAge:{'2023':57.6},
            forestryPopulation: {'2020':805},
            forestryHouseholds: {'2020':383}
        },
        regionCharacteristics: {
            population:{'2019':25416,'2020':25044,'2021':24539,'2022':24295,'2023':24019},
            households:{'2019':11593,'2020':11797,'2021':11938,'2022':12040,'2023':12060}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 117876, medicinalPlants: 53278, mountainVegetables: 21159, mushrooms: 18403 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 2 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 8 },
            elementarySchools: { '2024': 8 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 10 }
        },
        medical: {
            hospitals: { '2024': 40 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 6 },
            seniorLeisureWelfare: { '2023': 232 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'오미자'}, {rank:2,product:'은행'}, {rank:3,product:'호두'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheongsong&page=/member/cheongsong/business01.html&mc=MEM_CNS_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'영양군',
        populationStatus:{
            population:{'2023':15661},
            households:{'2023':7839},
            averageAge:{'2023':57.4},
            forestryPopulation: {'2020':652},
            forestryHouseholds: {'2020':310}
        },
        regionCharacteristics: {
            population:{'2019':16993,'2020':16692,'2021':16320,'2022':16022,'2023':15661},
            households:{'2019':7609,'2020':7725,'2021':7821,'2022':7855,'2023':7839}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 126262, medicinalPlants: 986487, mountainVegetables: 56104, mushrooms: 2978 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 5 },
            crimes: { '2022': 1 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 7 },
            elementarySchools: { '2024': 6 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 7 }
        },
        medical: {
            hospitals: { '2024': 21 },
            pharmacies: { '2024': 4 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 187 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'천궁'}, {rank:2,product:'당귀'}, {rank:3,product:'오미자'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongyang&page=/member/yeongyang/business01.html&mc=MEM_YYN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'영덕군',
        populationStatus:{
            population:{'2023':34055},
            households:{'2023':17308},
            averageAge:{'2023':56.5},
            forestryPopulation: {'2020':1011},
            forestryHouseholds: {'2020':481}
        },
        regionCharacteristics: {
            population:{'2019':37361,'2020':36313,'2021':35314,'2022':34650,'2023':34055},
            households:{'2019':17164,'2020':17206,'2021':17195,'2022':17189,'2023':17308}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 31083836, medicinalPlants: 273, mountainVegetables: 31591, mushrooms: 18409 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 9 },
            elementarySchools: { '2024': 9 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 25 }
        },
        medical: {
            hospitals: { '2024': 60 },
            pharmacies: { '2024': 22 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 5 },
            seniorLeisureWelfare: { '2023': 248 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'고사리'}, {rank:3,product:'송이'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yeongdeok&page=/member/yeongdeok/business01.html&mc=MEM_YDK_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'청도군',
        populationStatus:{
            population:{'2023':41316},
            households:{'2023':19631},
            averageAge:{'2023':56.8},
            forestryPopulation: {'2020':7553},
            forestryHouseholds: {'2020':3771}
        },
        regionCharacteristics: {
            population:{'2019':42910,'2020':42263,'2021':41891,'2022':41614,'2023':41316},
            households:{'2019':18798,'2020':19004,'2021':19228,'2022':19507,'2023':19631}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 31059547, medicinalPlants: 7359, mountainVegetables: 50227, mushrooms: 467124 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 13 },
            elementarySchools: { '2024': 11 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 29 }
        },
        medical: {
            hospitals: { '2024': 69 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 15 },
            seniorLeisureWelfare: { '2023': 319 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'대추'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=cheongdo&page=/member/cheongdo/business01.html&mc=MEM_CDO_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'고령군',
        populationStatus:{
            population:{'2023':30139},
            households:{'2023':14289},
            averageAge:{'2023':53.5},
            forestryPopulation: {'2020':299},
            forestryHouseholds: {'2020':143}
        },
        regionCharacteristics: {
            population:{'2019':32373,'2020':31361,'2021':30626,'2022':30353,'2023':30139},
            households:{'2019':13873,'2020':13917,'2021':13983,'2022':14094,'2023':14289}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 373193, medicinalPlants: 13926, mountainVegetables: 8650, mushrooms: 11285 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 5 }
        },
        education: {
            kindergartens: { '2024': 8 },
            elementarySchools: { '2024': 9 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 19 }
        },
        medical: {
            hospitals: { '2024': 48 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 10 },
            seniorLeisureWelfare: { '2023': 212 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'약모밀'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=goryeong&page=/member/goryeong/business01.html&mc=MEM_GRN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'성주군',
        populationStatus:{
            population:{'2023':42086},
            households:{'2023':19576},
            averageAge:{'2023':54.6},
            forestryPopulation: {'2020':407},
            forestryHouseholds: {'2020':193}
        },
        regionCharacteristics: {
            population:{'2019':44015,'2020':43414,'2021':42842,'2022':42566,'2023':42086},
            households:{'2019':18299,'2020':18713,'2021':18992,'2022':19289,'2023':19576}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 729134, medicinalPlants: 6925, mountainVegetables: 7577, mushrooms: 76606 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 12 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 27 }
        },
        medical: {
            hospitals: { '2024': 61 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 9 },
            seniorLeisureWelfare: { '2023': 296 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=seongju&page=/member/seongju/business01.html&mc=MEM_SJU_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'칠곡군',
        populationStatus:{
            population:{'2023':110581},
            households:{'2023':50623},
            averageAge:{'2023':45.2},
            forestryPopulation: {'2020':893},
            forestryHouseholds: {'2020':376}
        },
        regionCharacteristics: {
            population:{'2019':117047,'2020':114758,'2021':113822,'2022':112487,'2023':110581},
            households:{'2019':47475,'2020':47953,'2021':49181,'2022':50128,'2023':50623}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 2323042, medicinalPlants: 5323, mountainVegetables: 13461, mushrooms: 104847 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 1 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 30 },
            elementarySchools: { '2024': 21 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 161 }
        },
        medical: {
            hospitals: { '2024': 116 },
            pharmacies: { '2024': 44 }
        },
        culturalFacilities: {
            cultural: { '2022': 2 },
            socialWelfare: { '2021': 13 },
            seniorLeisureWelfare: { '2023': 268 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'생표고'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'common.HtmlApp&c=4001&d=chilgok&page=/member/chilgok/business01.html&mc=MEM_CHG_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'예천군',
        populationStatus:{
            population:{'2023':55325},
            households:{'2023':25413},
            averageAge:{'2023':50.4},
            forestryPopulation: {'2020':1326},
            forestryHouseholds: {'2020':648}
        },
        regionCharacteristics: {
            population:{'2019':55100,'2020':55613,'2021':55739,'2022':55755,'2023':55325},
            households:{'2019':23543,'2020':24213,'2021':24860,'2022':25262,'2023':25413}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 2016911, medicinalPlants: 459522, mountainVegetables: 111352, mushrooms: 244817 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 12 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 85 }
        },
        medical: {
            hospitals: { '2024': 73 },
            pharmacies: { '2024': 18 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 8 },
            seniorLeisureWelfare: { '2023': 382 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'마'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yecheon&page=/member/yecheon/business01.html&mc=MEM_YCN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'봉화군',
        populationStatus:{
            population:{'2023':29603},
            households:{'2023':14352},
            averageAge:{'2023':57.5},
            forestryPopulation: {'2020':1476},
            forestryHouseholds: {'2020':686}
        },
        regionCharacteristics: {
            population:{'2019':32150,'2020':31494,'2021':30762,'2022':30139,'2023':29603},
            households:{'2019':14092,'2020':14189,'2021':14282,'2022':14358,'2023':14352}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 248724, medicinalPlants: 521210, mountainVegetables: 102254, mushrooms: 74458 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 14 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 14 }
        },
        medical: {
            hospitals: { '2024': 35 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 6 },
            seniorLeisureWelfare: { '2023': 261 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'당귀'}, {rank:2,product:'도라지'}, {rank:3,product:'천궁'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=bonghwa&page=/member/bonghwa/business01.html&mc=MEM_BNH_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'울진군',
        populationStatus:{
            population:{'2023':46669},
            households:{'2023':22330},
            averageAge:{'2023':51.5},
            forestryPopulation: {'2020':1299},
            forestryHouseholds: {'2020':606}
        },
        regionCharacteristics: {
            population:{'2019':49314,'2020':48716,'2021':47858,'2022':47030,'2023':46669},
            households:{'2019':21632,'2020':22006,'2021':22203,'2022':22198,'2023':22330}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 147797, medicinalPlants: 98710, mountainVegetables: 77534, mushrooms: 16013 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 49 }
        },
        medical: {
            hospitals: { '2024': 64 },
            pharmacies: { '2024': 18 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 4 },
            seniorLeisureWelfare: { '2023': 255 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'당귀'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=uljin&page=/member/uljin/business01.html&mc=MEM_UJN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상북도', name:'울릉군',
        populationStatus:{
            population:{'2023':9077},
            households:{'2023':4400},
            averageAge:{'2023':52.1},
            forestryPopulation: {'2020':840},
            forestryHouseholds: {'2020':434}
        },
        regionCharacteristics: {
            population:{'2019':9617,'2020':9077,'2021':8867,'2022':8996,'2023':9077},
            households:{'2019':4146,'2020':4199,'2021':4208,'2022':4321,'2023':4400}
        },
        weather: {
            temperature: {
                '2021-01': 4.8,
                '2021-02': 10,
                '2021-03': 14.7,
                '2021-04': 19,
                '2021-05': 22.2,
                '2021-06': 26.4,
                '2021-07': 30.4,
                '2021-08': 28.6,
                '2021-09': 25.2,
                '2021-10': 21,
                '2021-11': 14.7,
                '2021-12': 8,
                '2022-01': 5.7,
                '2022-02': 6.3,
                '2022-03': 14.1,
                '2022-04': 21.1,
                '2022-05': 25.6,
                '2022-06': 27.9,
                '2022-07': 30.3,
                '2022-08': 29.3,
                '2022-09': 25.7,
                '2022-10': 20.1,
                '2022-11': 16.7,
                '2022-12': 4.3,
                '2023-01': 5.6,
                '2023-02': 9.2,
                '2023-03': 17.2,
                '2023-04': 19.5,
                '2023-05': 23.7,
                '2023-06': 27.9,
                '2023-07': 29.8,
                '2023-08': 30.7,
                '2023-09': 26.7,
                '2023-10': 21.1,
                '2023-11': 13.9,
                '2023-12': 7.5,
            },
            precipitation: {
                '2021-01': 11.6,
                '2021-02': 12.3,
                '2021-03': 101.2,
                '2021-04': 77.5,
                '2021-05': 133.8,
                '2021-06': 56.8,
                '2021-07': 199.2,
                '2021-08': 290.7,
                '2021-09': 148.7,
                '2021-10': 84,
                '2021-11': 40.3,
                '2021-12': 1.3,
                '2022-01': 2.6,
                '2022-02': 2.4,
                '2022-03': 74.3,
                '2022-04': 41.6,
                '2022-05': 4.5,
                '2022-06': 97,
                '2022-07': 129.4,
                '2022-08': 224.5,
                '2022-09': 127.1,
                '2022-10': 68.3,
                '2022-11': 78.5,
                '2022-12': 6.5,
                '2023-01': 23.1,
                '2023-02': 19,
                '2023-03': 32.5,
                '2023-04': 47.1,
                '2023-05': 150.4,
                '2023-06': 220,
                '2023-07': 403.5,
                '2023-08': 307.2,
                '2023-09': 207.2,
                '2023-10': 10.8,
                '2023-11': 32.2,
                '2023-12': 104.4
            }
        },
        productsProduction: { fruits: 45909882, medicinalPlants: 1799, mountainVegetables: 565818, mushrooms: 0 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 5 },
            elementarySchools: { '2024': 4 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 1 }
        },
        medical: {
            hospitals: { '2024': 8 },
            pharmacies: { '2024': 2 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 2 },
            seniorLeisureWelfare: { '2023': 25 }
        },
        realEstate: {
            landPrice: { '2023': 28773, '2024': 29487 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'산마늘'}, {rank:2,product:'기타산나물'}, {rank:3,product:'취나물'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상북도 귀농귀촌센터',url:'https://www.gb.go.kr/Main/open_contents/section/refarm/index.html'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=ulleung&page=/member/ulleung/business01.html&mc=MEM_ULN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'통합창원시',
        populationStatus:{
            population:{'2023':1009038},
            households:{'2023':435303},
            averageAge:{'2023':44.6},
            forestryPopulation: {'2020':2468},
            forestryHouseholds: {'2020':1024}
        },
        regionCharacteristics: {
            population:{'2019':1044740,'2020':1036738,'2021':1032741,'2022':1021487,'2023':1009038},
            households:{'2019':409391,'2020':415535,'2021':427883,'2022':432766,'2023':435303}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 4373759, medicinalPlants: 1000, mountainVegetables: 4620, mushrooms: 7494 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 1 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 51 },
            elementarySchools: { '2024': 46 },
            universities: { '2024': 5 },
            privateInstitutes: { '2023': 885 }
        },
        medical: {
            hospitals: { '2024': 13151 },
            pharmacies: { '2024': 430 }
        },
        culturalFacilities: {
            cultural: { '2022': 12 },
            socialWelfare: { '2021': 104 },
            seniorLeisureWelfare: { '2023': 1058 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'은행'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=changwon&page=/member/changwon/business01.html&mc=MEM_CNW_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'진주시',
        populationStatus:{
            population:{'2023':341074},
            households:{'2023':154311},
            averageAge:{'2023':44.3},
            forestryPopulation: {'2020':4332},
            forestryHouseholds: {'2020':1803}
        },
        regionCharacteristics: {
            population:{'2019':347334,'2020':348096,'2021':347097,'2022':343782,'2023':341074},
            households:{'2019':142418,'2020':148396,'2021':151342,'2022':152900,'2023':154311}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 3468651, medicinalPlants: 720739, mountainVegetables: 131457, mushrooms: 82243 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 25 },
            elementarySchools: { '2024': 20 },
            universities: { '2024': 4 },
            privateInstitutes: { '2023': 221 }
        },
        medical: {
            hospitals: { '2024': 482 },
            pharmacies: { '2024': 169 }
        },
        culturalFacilities: {
            cultural: { '2022': 7 },
            socialWelfare: { '2021': 40 },
            seniorLeisureWelfare: { '2023': 570 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'마'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=jinju&page=/member/jinju/business01.html&mc=MEM_JNJ_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'통영시',
        populationStatus:{
            population:{'2023':120551},
            households:{'2023':55511},
            averageAge:{'2023':47.5},
            forestryPopulation: {'2020':576},
            forestryHouseholds: {'2020':282}
        },
        regionCharacteristics: {
            population:{'2019':131404,'2020':128293,'2021':125383,'2022':122681,'2023':120551},
            households:{'2019':54379,'2020':54922,'2021':55197,'2022':55319,'2023':55511}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 2333822, medicinalPlants: 10180, mountainVegetables: 6396, mushrooms: 695 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 12 },
            elementarySchools: { '2024': 18 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 203 }
        },
        medical: {
            hospitals: { '2024': 161 },
            pharmacies: { '2024': 60 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 23 },
            seniorLeisureWelfare: { '2023': 257 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'독활'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=tongyeong&page=/member/tongyeong/business01.html&mc=MEM_TNY_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'김해시',
        populationStatus:{
            population:{'2023':533659},
            households:{'2023':226525},
            averageAge:{'2023':42.4},
            forestryPopulation: {'2020':2142},
            forestryHouseholds: {'2020':871}
        },
        regionCharacteristics: {
            population:{'2019':542455,'2020':542338,'2021':537673,'2022':535129,'2023':533659},
            households:{'2019':208189,'2020':214170,'2021':218570,'2022':222179,'2023':226525}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 3844224, medicinalPlants: 47, mountainVegetables: 450, mushrooms: 5009 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 5 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 25 },
            elementarySchools: { '2024': 21 },
            universities: { '2024': 4 },
            privateInstitutes: { '2023': 142 }
        },
        medical: {
            hospitals: { '2024': 578 },
            pharmacies: { '2024': 197 }
        },
        culturalFacilities: {
            cultural: { '2022': 13 },
            socialWelfare: { '2021': 31 },
            seniorLeisureWelfare: { '2023': 574 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'산딸기'}, {rank:2,product:'은행'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=gimhae&page=/member/gimhae/business01.html&mc=MEM_GMH_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'밀양시',
        populationStatus:{
            population:{'2023':102084},
            households:{'2023':49055},
            averageAge:{'2023':51.5},
            forestryPopulation: {'2020':2566},
            forestryHouseholds: {'2020':1223}
        },
        regionCharacteristics: {
            population:{'2019':105552,'2020':104831,'2021':103525,'2022':102945,'2023':102084},
            households:{'2019':45869,'2020':46860,'2021':47675,'2022':48323,'2023':49055}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 3507807, medicinalPlants: 39445, mountainVegetables: 1686310, mushrooms: 36716 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 56 },
            elementarySchools: { '2024': 40 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 443 }
        },
        medical: {
            hospitals: { '2024': 134 },
            pharmacies: { '2024': 43 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 26 },
            seniorLeisureWelfare: { '2023': 445 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'참나물'}, {rank:3,product:'대추'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=miryang&page=/member/miryang/business01.html&mc=MEM_MRN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'거제시',
        populationStatus:{
            population:{'2023':234038},
            households:{'2023':101264},
            averageAge:{'2023':42.5},
            forestryPopulation: {'2020':940},
            forestryHouseholds: {'2020':378}
        },
        regionCharacteristics: {
            population:{'2019':248276,'2020':245754,'2021':241216,'2022':236662,'2023':234038},
            households:{'2019':96257,'2020':98586,'2021':99555,'2022':98991,'2023':101264}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 414650, medicinalPlants: 24476, mountainVegetables: 149579, mushrooms: 68773 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 1 }
        },
        education: {
            kindergartens: { '2024': 69 },
            elementarySchools: { '2024': 41 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 667 }
        },
        medical: {
            hospitals: { '2024': 239 },
            pharmacies: { '2024': 82 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 27 },
            seniorLeisureWelfare: { '2023': 336 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'죽순'}, {rank:2,product:'떫은감'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=geoje&page=/member/geoje/business01.html&mc=MEM_GJE_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'양산시',
        populationStatus:{
            population:{'2023':355122},
            households:{'2023':151459},
            averageAge:{'2023':43.4},
            forestryPopulation: {'2020':727},
            forestryHouseholds: {'2020':294}
        },
        regionCharacteristics: {
            population:{'2019':350759,'2020':352229,'2021':354726,'2022':353792,'2023':355122},
            households:{'2019':136676,'2020':141072,'2021':145465,'2022':148033,'2023':151459}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 1596815, medicinalPlants: 5714, mountainVegetables: 30420, mushrooms: 23640 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 2 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 190 },
            elementarySchools: { '2024': 112 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 2050 }
        },
        medical: {
            hospitals: { '2024': 421 },
            pharmacies: { '2024': 151 }
        },
        culturalFacilities: {
            cultural: { '2022': 10 },
            socialWelfare: { '2021': 34 },
            seniorLeisureWelfare: { '2023': 334 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'산딸기'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=yangsan&page=/member/yangsan/business01.html&mc=MEM_YNS_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'의령군',
        populationStatus:{
            population:{'2023':25475},
            households:{'2023':12844},
            averageAge:{'2023':56.5},
            forestryPopulation: {'2020':649},
            forestryHouseholds: {'2020':312}
        },
        regionCharacteristics: {
            population:{'2019':27168,'2020':26800,'2021':26322,'2022':26061,'2023':25475},
            households:{'2019':12360,'2020':12535,'2021':12739,'2022':12813,'2023':12844}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 3264952, medicinalPlants: 11211, mountainVegetables: 29274, mushrooms: 45115 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 4 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 3 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 10 },
            elementarySchools: { '2024': 12 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 17 }
        },
        medical: {
            hospitals: { '2024': 47 },
            pharmacies: { '2024': 11 }
        },
        culturalFacilities: {
            cultural: { '2022': 8 },
            socialWelfare: { '2021': 10 },
            seniorLeisureWelfare: { '2023': 298 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=uiryeong&page=/member/uiryeong/business01.html&mc=MEM_URN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'함안군',
        populationStatus:{
            population:{'2023':60203},
            households:{'2023':27868},
            averageAge:{'2023':49.8},
            forestryPopulation: {'2020':841},
            forestryHouseholds: {'2020':408}
        },
        regionCharacteristics: {
            population:{'2019':65700,'2020':64182,'2021':62547,'2022':61456,'2023':60203},
            households:{'2019':27491,'2020':27594,'2021':27745,'2022':27705,'2023':27868}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 2387928, medicinalPlants: 506803, mountainVegetables: 30819, mushrooms: 330299 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 18 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 75 }
        },
        medical: {
            hospitals: { '2024': 69 },
            pharmacies: { '2024': 25 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 19 },
            seniorLeisureWelfare: { '2023': 329 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'마'}, {rank:3,product:'생표고'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=haman&page=/member/haman/business01.html&mc=MEM_HMN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'창녕군',
        populationStatus:{
            population:{'2023':57083},
            households:{'2023':27975},
            averageAge:{'2023':53.3},
            forestryPopulation: {'2020':507},
            forestryHouseholds: {'2020':230}
        },
        regionCharacteristics: {
            population:{'2019':62331,'2020':61301,'2021':60129,'2022':58372,'2023':57083},
            households:{'2019':27452,'2020':27754,'2021':27949,'2022':28100,'2023':27975}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 863003, medicinalPlants: 52211, mountainVegetables: 4945, mushrooms: 323691 },
        safety: {
            trafficAccidents: { '2022': 1 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 18 },
            elementarySchools: { '2024': 16 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 49 }
        },
        medical: {
            hospitals: { '2024': 95 },
            pharmacies: { '2024': 30 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 12 },
            seniorLeisureWelfare: { '2023': 401 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'생표고'}, {rank:2,product:'떫은감'}, {rank:3,product:'은행'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=changnyeong&page=/member/changnyeong/business01.html&mc=MEM_CNY_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'고성군',
        populationStatus:{
            population:{'2023':49468},
            households:{'2023':22995},
            averageAge:{'2023':53.4},
            forestryPopulation: {'2020':1026},
            forestryHouseholds: {'2020':506}
        },
        regionCharacteristics: {
            population:{'2019':52276,'2020':51361,'2021':50478,'2022':50448,'2023':49468},
            households:{'2019':22215,'2020':22436,'2021':22669,'2022':22820,'2023':22995}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 469429, medicinalPlants: 7595, mountainVegetables: 221170, mushrooms: 4275 },
        safety: {
            trafficAccidents: { '2022': 2 },
            fires: { '2022': 3 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 18 },
            elementarySchools: { '2024': 18 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 62 }
        },
        medical: {
            hospitals: { '2024': 70 },
            pharmacies: { '2024': 17 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 13 },
            seniorLeisureWelfare: { '2023': 334 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'취나물'}, {rank:3,product:'밤'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=goseong2&page=/member/goseong2/business01.html&mc=MEM_GOS_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'남해군',
        populationStatus:{
            population:{'2023':40780},
            households:{'2023':19909},
            averageAge:{'2023':56.3},
            forestryPopulation: {'2020':1602},
            forestryHouseholds: {'2020':795}
        },
        regionCharacteristics: {
            population:{'2019':43622,'2020':42958,'2021':42266,'2022':41579,'2023':40780},
            households:{'2019':19563,'2020':19721,'2021':19836,'2022':20052,'2023':19909}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 8231599, medicinalPlants: 146478, mountainVegetables: 1112865, mushrooms: 1333 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 4 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 1 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 1 },
            privateInstitutes: { '2023': 35 }
        },
        medical: {
            hospitals: { '2024': 67 },
            pharmacies: { '2024': 19 }
        },
        culturalFacilities: {
            cultural: { '2022': 1 },
            socialWelfare: { '2021': 8 },
            seniorLeisureWelfare: { '2023': 274 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'고사리'}, {rank:2,product:'독활'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=namhae&page=/member/namhae/business01.html&mc=MEM_NMH_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'하동군',
        populationStatus:{
            population:{'2023':41606},
            households:{'2023':19683},
            averageAge:{'2023':56.7},
            forestryPopulation: {'2020':4848},
            forestryHouseholds: {'2020':2354}
        },
        regionCharacteristics: {
            population:{'2019':46574,'2020':44785,'2021':43449,'2022':42465,'2023':41606},
            households:{'2019':19560,'2020':19600,'2021':19610,'2022':19608,'2023':19683}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 21564633, medicinalPlants: 15875, mountainVegetables: 2255685, mushrooms: 6697 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 3 },
            crimes: { '2022': 3 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 3 },
            infectiousDiseases: { '2022': 2 }
        },
        education: {
            kindergartens: { '2024': 14 },
            elementarySchools: { '2024': 15 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 33 }
        },
        medical: {
            hospitals: { '2024': 74 },
            pharmacies: { '2024': 16 }
        },
        culturalFacilities: {
            cultural: { '2022': 4 },
            socialWelfare: { '2021': 10 },
            seniorLeisureWelfare: { '2023': 385 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hadong&page=/member/hadong/business01.html&mc=MEM_HDN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'산청군',
        populationStatus:{
            population:{'2023':33752},
            households:{'2023':16419},
            averageAge:{'2023':57.2},
            forestryPopulation: {'2020':2807},
            forestryHouseholds: {'2020':1338}
        },
        regionCharacteristics: {
            population:{'2019':35417,'2020':34857,'2021':34360,'2022':34028,'2023':33752},
            households:{'2019':15565,'2020':15823,'2021':16063,'2022':16261,'2023':16419}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 18471998, medicinalPlants: 97356, mountainVegetables: 486335, mushrooms: 61941 },
        safety: {
            trafficAccidents: { '2022': 5 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 5 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 11 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 18 }
        },
        medical: {
            hospitals: { '2024': 64 },
            pharmacies: { '2024': 15 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 13 },
            seniorLeisureWelfare: { '2023': 348 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=sancheong&page=/member/sancheong/business01.html&mc=MEM_SNC_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'함양군',
        populationStatus:{
            population:{'2023':36945},
            households:{'2023':17655},
            averageAge:{'2023':55.4},
            forestryPopulation: {'2020':2273},
            forestryHouseholds: {'2020':1094}
        },
        regionCharacteristics: {
            population:{'2019':39637,'2020':39080,'2021':38310,'2022':37708,'2023':36945},
            households:{'2019':17296,'2020':17501,'2021':17704,'2022':17775,'2023':17655}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 6318994, medicinalPlants: 465697, mountainVegetables: 491907, mushrooms: 8315 },
        safety: {
            trafficAccidents: { '2022': 4 },
            fires: { '2022': 3 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 2 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 12 },
            elementarySchools: { '2024': 13 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 41 }
        },
        medical: {
            hospitals: { '2024': 62 },
            pharmacies: { '2024': 20 }
        },
        culturalFacilities: {
            cultural: { '2022': 5 },
            socialWelfare: { '2021': 12 },
            seniorLeisureWelfare: { '2023': 411 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'떫은감'}, {rank:2,product:'밤'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hamyang&page=/member/hamyang/business01.html&mc=MEM_HMY_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'거창군',
        populationStatus:{
            population:{'2023':60047},
            households:{'2023':27348},
            averageAge:{'2023':50.9},
            forestryPopulation: {'2020':1434},
            forestryHouseholds: {'2020':670}
        },
        regionCharacteristics: {
            population:{'2019':62179,'2020':61502,'2021':61073,'2022':60387,'2023':60047},
            households:{'2019':25684,'2020':26054,'2021':26702,'2022':26919,'2023':27348}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 4111875, medicinalPlants: 610542, mountainVegetables: 140590, mushrooms: 153419 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 1 },
            crimes: { '2022': 4 },
            publicSafety: { '2022': 2 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 3 }
        },
        education: {
            kindergartens: { '2024': 16 },
            elementarySchools: { '2024': 17 },
            universities: { '2024': 2 },
            privateInstitutes: { '2023': 88 }
        },
        medical: {
            hospitals: { '2024': 98 },
            pharmacies: { '2024': 33 }
        },
        culturalFacilities: {
            cultural: { '2022': 3 },
            socialWelfare: { '2021': 11 },
            seniorLeisureWelfare: { '2023': 438 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'오미자'}, {rank:3,product:'떫은감'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=geochang&page=/member/geochang/business01.html&mc=MEM_GCN_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    },{
        parent:'경상남도', name:'합천군',
        populationStatus:{
            population:{'2023':41203},
            households:{'2023':20588},
            averageAge:{'2023':58.1},
            forestryPopulation: {'2020':1166},
            forestryHouseholds: {'2020':573}
        },
        regionCharacteristics: {
            population:{'2019':45204,'2020':44006,'2021':42935,'2022':42142,'2023':41203},
            households:{'2019':20312,'2020':20322,'2021':20519,'2022':20649,'2023':20588}
        },
        weather: {
            temperature: {
                '2021-01': 7,
                '2021-02': 11.5,
                '2021-03': 16.1,
                '2021-04': 20.2,
                '2021-05': 23,
                '2021-06': 26.8,
                '2021-07': 30.6,
                '2021-08': 30.1,
                '2021-09': 26.2,
                '2021-10': 22.7,
                '2021-11': 16.4,
                '2021-12': 9.7,
                '2022-01': 7.9,
                '2022-02': 8,
                '2022-03': 15.4,
                '2022-04': 20.9,
                '2022-05': 25.5,
                '2022-06': 27,
                '2022-07': 30.8,
                '2022-08': 30,
                '2022-09': 26.7,
                '2022-10': 21.7,
                '2022-11': 18.2,
                '2022-12': 6.8,
                '2023-01': 7.8,
                '2023-02': 10.8,
                '2023-03': 17.6,
                '2023-04': 19.7,
                '2023-05': 23.2,
                '2023-06': 27.6,
                '2023-07': 29.4,
                '2023-08': 31.4,
                '2023-09': 27.9,
                '2023-10': 22.4,
                '2023-11': 15.7,
                '2023-12': 9.8,
            },
            precipitation: {
                '2021-01': 18.6,
                '2021-02': 39.8,
                '2021-03': 148.1,
                '2021-04': 84.6,
                '2021-05': 136.9,
                '2021-06': 133.3,
                '2021-07': 348,
                '2021-08': 393.5,
                '2021-09': 132.4,
                '2021-10': 36.4,
                '2021-11': 55.8,
                '2021-12': 2.7,
                '2022-01': 0.1,
                '2022-02': 0.3,
                '2022-03': 104.1,
                '2022-04': 98.4,
                '2022-05': 3.7,
                '2022-06': 146.4,
                '2022-07': 159.6,
                '2022-08': 188.2,
                '2022-09': 191.3,
                '2022-10': 19.5,
                '2022-11': 60.1,
                '2022-12': 10.4,
                '2023-01': 63,
                '2023-02': 27.1,
                '2023-03': 52.4,
                '2023-04': 90.1,
                '2023-05': 277.1,
                '2023-06': 236.8,
                '2023-07': 514.7,
                '2023-08': 417.8,
                '2023-09': 250.5,
                '2023-10': 5.9,
                '2023-11': 54.1,
                '2023-12': 94.8
            }
        },
        productsProduction: { fruits: 2949416, medicinalPlants: 34960, mountainVegetables: 129536, mushrooms: 47351 },
        safety: {
            trafficAccidents: { '2022': 3 },
            fires: { '2022': 5 },
            crimes: { '2022': 2 },
            publicSafety: { '2022': 4 },
            suicides: { '2022': 4 },
            infectiousDiseases: { '2022': 4 }
        },
        education: {
            kindergartens: { '2024': 15 },
            elementarySchools: { '2024': 17 },
            universities: { '2024': 0 },
            privateInstitutes: { '2023': 29 }
        },
        medical: {
            hospitals: { '2024': 75 },
            pharmacies: { '2024': 17 }
        },
        culturalFacilities: {
            cultural: { '2022': 0 },
            socialWelfare: { '2021': 8 },
            seniorLeisureWelfare: { '2023': 529 }
        },
        realEstate: {
            landPrice: { '2023': 61598, '2024': 61495 },
            greenZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            },
            nonUrbanZone: {
                highest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0},
                lowest: {'2020': 0,'2021': 0,'2022': 0,'2023': 0,'2024': 0}
            }
        },
        recommendedForestProducts:{year:2022, priority:[{rank:1,product:'밤'}, {rank:2,product:'떫은감'}, {rank:3,product:'고사리'}] },
        supportSystem: {
            organizations: [
                {title:'산림청 임업-in 통합포털',url:'https://foco.go.kr/main'},
                {title:'경상남도 누리집',url:'https://www.gyeongnam.go.kr/gnreturn/eduPolicy/policy/list.es?mid=a10401000000&page_no=2'},
                {title:'지역산림조합',url:'https://member.nfcf.or.kr/forest/user.tdf?a=common.HtmlApp&c=4001&d=hapcheon&page=/member/hapcheon/business01.html&mc=MEM_HPC_BIZ01'}
            ],
            mento:[1, 2, 17 ]
        }
    }
];
