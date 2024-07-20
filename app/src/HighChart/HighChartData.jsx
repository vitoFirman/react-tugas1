export class HighChartData {
    lineData() {
      return [
        {
            name: 'Installation & Developers',
            data: [
                43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610, 168960, 171558
            ]
        }, {
            name: 'Manufacturing',
            data: [
                24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050, 33099, 33473
            ]
        }, {
            name: 'Sales & Distribution',
            data: [
                11744, 30000, 16005, 19771, 20185, 24377,
                32147, 30912, 29243, 29213, 25663, 28978, 30618
            ]
        },
      ];
    }
  
    areaData() {
      return [
        {
            name: 'USA',
            data: [
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                3750, 3708, 3708, 3708, 3708
            ]
        }, {
            name: 'USSR/Russia',
            data: [
                null, null, null, null, null, null, null, null, null,
                1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
                3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
                14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
                32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
                32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
                13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
                5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
                4310, 4495, 4477, 4489, 4380
            ]
        }
      ];
    }

    barData() {
        return [
            {
                name: 'Year 1990',
                data: [632, 727, 3202, 721]
            }, {
                name: 'Year 2000',
                data: [814, 841, 3714, 726]
            }, {
                name: 'Year 2021',
                data: [1393, 1031, 4695, 745]
            }
        ]
    }

    pieData () {
        return [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Water',
                        y: 55.02
                    },
                    {
                        name: 'Fat',
                        sliced: true,
                        selected: true,
                        y: 26.71
                    },
                    {
                        name: 'Carbohydrates',
                        y: 1.09
                    },
                    {
                        name: 'Protein',
                        y: 15.5
                    },
                    {
                        name: 'Ash',
                        y: 1.68
                    }
                ]
            }
        ]
    }

    bubbleData() {
        return [
            {
                data: [
                    { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
                    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
                    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
                    { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
                    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
                    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
                    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
                    { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
                    {
                        x: 65.5,
                        y: 126.4,
                        z: 35.3,
                        name:
                            'US',
                        country: 'United States'
                    },
                    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
                    { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
                ],
                colorByPoint: true
            }
        ]
    }
  }
  
  