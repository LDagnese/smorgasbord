const { Dish } = require("../models");

const dishdata = [
    {
        name: "Haematopus ater",
        price: 11.53,
        description: "proin eu mi nulla ac enim in tempor turpis nec euismod",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/102x100.png/ff4444/ffffff",
    },
    {
        name: "Coendou prehensilis",
        price: 14.83,
        description:
            "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/245x100.png/cc0000/ffffff",
    },
    {
        name: "Trichosurus vulpecula",
        price: 11.56,
        description: "non mi integer ac neque duis bibendum morbi non quam",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/231x100.png/5fa2dd/ffffff",
    },
    {
        name: "Trachyphonus vaillantii",
        price: 13.63,
        description:
            "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/107x100.png/dddddd/000000",
    },
    {
        name: "Kobus defassa",
        price: 12.24,
        description:
            "cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/110x100.png/cc0000/ffffff",
    },
    {
        name: "Bubalornis niger",
        price: 13.71,
        description:
            "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/141x100.png/cc0000/ffffff",
    },
    {
        name: "Paradoxurus hermaphroditus",
        price: 9.03,
        description:
            "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
    },
    {
        name: "Buteo galapagoensis",
        price: 8.24,
        description:
            "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/173x100.png/ff4444/ffffff",
    },
    {
        name: "Lasiorhinus latifrons",
        price: 12.29,
        description:
            "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
    },
    {
        name: "Alopex lagopus",
        price: 14.33,
        description:
            "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/207x100.png/dddddd/000000",
    },
    {
        name: "Acridotheres tristis",
        price: 11.22,
        description:
            "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/195x100.png/ff4444/ffffff",
    },
    {
        name: "Tragelaphus strepsiceros",
        price: 10.17,
        description:
            "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
    },
    {
        name: "Phoca vitulina",
        price: 10.65,
        description:
            "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/204x100.png/ff4444/ffffff",
    },
    {
        name: "Corvus albicollis",
        price: 10.21,
        description:
            "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
    },
    {
        name: "Acinynox jubatus",
        price: 14.0,
        description:
            "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/211x100.png/ff4444/ffffff",
    },
    {
        name: "Phalacrocorax carbo",
        price: 11.4,
        description:
            "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/224x100.png/cc0000/ffffff",
    },
    {
        name: "Bos taurus",
        price: 14.23,
        description:
            "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/212x100.png/ff4444/ffffff",
    },
    {
        name: "Graspus graspus",
        price: 14.09,
        description:
            "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/156x100.png/dddddd/000000",
    },
    {
        name: "Sceloporus magister",
        price: 8.65,
        description:
            "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    },
    {
        name: "Arctogalidia trivirgata",
        price: 10.16,
        description:
            "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/216x100.png/ff4444/ffffff",
    },
    {
        name: "Sterna paradisaea",
        price: 11.47,
        description:
            "mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/107x100.png/cc0000/ffffff",
    },
    {
        name: "Petaurus norfolcensis",
        price: 8.38,
        description:
            "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/224x100.png/cc0000/ffffff",
    },
    {
        name: "Anser caerulescens",
        price: 11.48,
        description:
            "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/221x100.png/dddddd/000000",
    },
    {
        name: "Bassariscus astutus",
        price: 10.83,
        description:
            "vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/182x100.png/dddddd/000000",
    },
    {
        name: "Zonotrichia capensis",
        price: 14.57,
        description:
            "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/180x100.png/ff4444/ffffff",
    },
    {
        name: "Varanus salvator",
        price: 11.94,
        description:
            "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/218x100.png/ff4444/ffffff",
    },
    {
        name: "Pteronura brasiliensis",
        price: 8.16,
        description:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
    },
    {
        name: "Deroptyus accipitrinus",
        price: 11.72,
        description:
            "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
    },
    {
        name: "Speothos vanaticus",
        price: 12.08,
        description:
            "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
    },
    {
        name: "Porphyrio porphyrio",
        price: 14.02,
        description:
            "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/126x100.png/ff4444/ffffff",
    },
    {
        name: "Geococcyx californianus",
        price: 13.95,
        description:
            "ligula vehicula consequat morbi a ipsum integer a nibh in quis",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/189x100.png/ff4444/ffffff",
    },
    {
        name: "Aegypius occipitalis",
        price: 14.26,
        description:
            "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
    },
    {
        name: "Canis dingo",
        price: 13.61,
        description:
            "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/217x100.png/ff4444/ffffff",
    },
    {
        name: "Phalaropus lobatus",
        price: 11.09,
        description:
            "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/234x100.png/cc0000/ffffff",
    },
    {
        name: "Zosterops pallidus",
        price: 9.18,
        description:
            "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/160x100.png/dddddd/000000",
    },
    {
        name: "Smithopsis crassicaudata",
        price: 14.72,
        description:
            "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/171x100.png/5fa2dd/ffffff",
    },
    {
        name: "Marmota caligata",
        price: 12.3,
        description:
            "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/182x100.png/dddddd/000000",
    },
    {
        name: "Actophilornis africanus",
        price: 9.9,
        description:
            "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/199x100.png/cc0000/ffffff",
    },
    {
        name: "Eudyptula minor",
        price: 14.18,
        description:
            "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/206x100.png/5fa2dd/ffffff",
    },
    {
        name: "Oryx gazella",
        price: 13.28,
        description:
            "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
    },
    {
        name: "Bassariscus astutus",
        price: 10.98,
        description:
            "felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/138x100.png/dddddd/000000",
    },
    {
        name: "Canis lupus",
        price: 10.1,
        description:
            "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
    },
    {
        name: "Haematopus ater",
        price: 13.51,
        description:
            "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/107x100.png/5fa2dd/ffffff",
    },
    {
        name: "Acrantophis madagascariensis",
        price: 11.97,
        description:
            "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/134x100.png/dddddd/000000",
    },
    {
        name: "Canis mesomelas",
        price: 11.59,
        description:
            "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/237x100.png/ff4444/ffffff",
    },
    {
        name: "Sarcophilus harrisii",
        price: 8.39,
        description:
            "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/110x100.png/ff4444/ffffff",
    },
    {
        name: "Suricata suricatta",
        price: 9.67,
        description: "cursus urna ut tellus nulla ut erat id mauris vulputate",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/232x100.png/dddddd/000000",
    },
    {
        name: "Funambulus pennati",
        price: 11.47,
        description:
            "nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/241x100.png/ff4444/ffffff",
    },
    {
        name: "Bucephala clangula",
        price: 14.37,
        description:
            "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
    },
    {
        name: "Oryx gazella callotis",
        price: 11.08,
        description:
            "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/162x100.png/cc0000/ffffff",
    },
    {
        name: "Crotaphytus collaris",
        price: 11.19,
        description:
            "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/111x100.png/cc0000/ffffff",
    },
    {
        name: "Carduelis pinus",
        price: 8.97,
        description:
            "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/209x100.png/dddddd/000000",
    },
    {
        name: "Haematopus ater",
        price: 13.87,
        description:
            "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/171x100.png/dddddd/000000",
    },
    {
        name: "Lycosa godeffroyi",
        price: 8.18,
        description:
            "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/156x100.png/dddddd/000000",
    },
    {
        name: "Sagittarius serpentarius",
        price: 12.47,
        description:
            "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/124x100.png/ff4444/ffffff",
    },
    {
        name: "Pteronura brasiliensis",
        price: 13.26,
        description:
            "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/250x100.png/cc0000/ffffff",
    },
    {
        name: "Taxidea taxus",
        price: 9.73,
        description:
            "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/188x100.png/cc0000/ffffff",
    },
    {
        name: "Ara ararauna",
        price: 10.15,
        description:
            "ante ipsum primis in faucibus orci luctus et ultrices posuere",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/108x100.png/cc0000/ffffff",
    },
    {
        name: "Diceros bicornis",
        price: 13.25,
        description: "sit amet sem fusce consequat nulla nisl nunc nisl duis",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    },
    {
        name: "Thalasseus maximus",
        price: 9.98,
        description:
            "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/135x100.png/5fa2dd/ffffff",
    },
    {
        name: "Ciconia ciconia",
        price: 11.83,
        description:
            "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/201x100.png/ff4444/ffffff",
    },
    {
        name: "Anastomus oscitans",
        price: 8.19,
        description:
            "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
    },
    {
        name: "Vombatus ursinus",
        price: 10.12,
        description:
            "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
    },
    {
        name: "Marmota flaviventris",
        price: 9.87,
        description:
            "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/192x100.png/ff4444/ffffff",
    },
    {
        name: "Pseudalopex gymnocercus",
        price: 13.18,
        description:
            "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/115x100.png/cc0000/ffffff",
    },
    {
        name: "Sciurus vulgaris",
        price: 9.43,
        description:
            "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/105x100.png/ff4444/ffffff",
    },
    {
        name: "Eutamias minimus",
        price: 8.17,
        description:
            "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/120x100.png/cc0000/ffffff",
    },
    {
        name: "Hymenolaimus malacorhynchus",
        price: 12.29,
        description:
            "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/159x100.png/ff4444/ffffff",
    },
    {
        name: "Cercatetus concinnus",
        price: 10.98,
        description:
            "enim sit amet nunc viverra dapibus nulla suscipit ligula in",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/189x100.png/dddddd/000000",
    },
    {
        name: "Francolinus coqui",
        price: 13.95,
        description:
            "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/184x100.png/dddddd/000000",
    },
    {
        name: "Tursiops truncatus",
        price: 13.99,
        description:
            "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/185x100.png/cc0000/ffffff",
    },
    {
        name: "Paraxerus cepapi",
        price: 11.89,
        description:
            "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/151x100.png/ff4444/ffffff",
    },
    {
        name: "Mungos mungo",
        price: 8.02,
        description: "sit amet sem fusce consequat nulla nisl nunc nisl duis",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/206x100.png/cc0000/ffffff",
    },
    {
        name: "Capreolus capreolus",
        price: 12.83,
        description:
            "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/125x100.png/dddddd/000000",
    },
    {
        name: "Agelaius phoeniceus",
        price: 12.04,
        description:
            "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/147x100.png/cc0000/ffffff",
    },
    {
        name: "Cordylus giganteus",
        price: 8.44,
        description:
            "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
    },
    {
        name: "Graspus graspus",
        price: 9.17,
        description:
            "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/165x100.png/ff4444/ffffff",
    },
    {
        name: "Francolinus leucoscepus",
        price: 8.72,
        description:
            "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
    },
    {
        name: "Proteles cristatus",
        price: 8.2,
        description:
            "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    },
    {
        name: "Climacteris melanura",
        price: 13.6,
        description:
            "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/140x100.png/ff4444/ffffff",
    },
    {
        name: "Cyrtodactylus louisiadensis",
        price: 8.17,
        description:
            "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/216x100.png/dddddd/000000",
    },
    {
        name: "Alcelaphus buselaphus cokii",
        price: 8.04,
        description: "in est risus auctor sed tristique in tempus sit amet",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
    },
    {
        name: "Haematopus ater",
        price: 13.17,
        description:
            "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
    },
    {
        name: "Coluber constrictor",
        price: 13.41,
        description:
            "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/160x100.png/cc0000/ffffff",
    },
    {
        name: "Anastomus oscitans",
        price: 10.35,
        description:
            "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    },
    {
        name: "Agkistrodon piscivorus",
        price: 14.56,
        description:
            "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/122x100.png/cc0000/ffffff",
    },
    {
        name: "Acinynox jubatus",
        price: 10.72,
        description:
            "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/249x100.png/cc0000/ffffff",
    },
    {
        name: "Cebus albifrons",
        price: 13.54,
        description:
            "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/175x100.png/ff4444/ffffff",
    },
    {
        name: "Uraeginthus bengalus",
        price: 8.57,
        description:
            "felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    },
    {
        name: "Herpestes javanicus",
        price: 11.89,
        description:
            "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/187x100.png/dddddd/000000",
    },
    {
        name: "Alligator mississippiensis",
        price: 11.81,
        description:
            "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    },
    {
        name: "Dasyurus viverrinus",
        price: 14.55,
        description:
            "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/173x100.png/dddddd/000000",
    },
    {
        name: "Ploceus rubiginosus",
        price: 13.65,
        description:
            "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/244x100.png/5fa2dd/ffffff",
    },
    {
        name: "Eurocephalus anguitimens",
        price: 10.08,
        description:
            "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
    },
    {
        name: "Ephipplorhynchus senegalensis",
        price: 11.45,
        description:
            "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/187x100.png/cc0000/ffffff",
    },
    {
        name: "Merops nubicus",
        price: 10.54,
        description:
            "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/155x100.png/cc0000/ffffff",
    },
    {
        name: "Hymenolaimus malacorhynchus",
        price: 9.32,
        description:
            "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/107x100.png/cc0000/ffffff",
    },
    {
        name: "Centrocercus urophasianus",
        price: 8.47,
        description:
            "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/156x100.png/ff4444/ffffff",
    },
    {
        name: "Ovis canadensis",
        price: 10.2,
        description:
            "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/210x100.png/ff4444/ffffff",
    },
    {
        name: "Sciurus vulgaris",
        price: 9.46,
        description:
            "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/119x100.png/cc0000/ffffff",
    },
    {
        name: "Psittacula krameri",
        price: 13.27,
        description:
            "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    },
    {
        name: "Eubalaena australis",
        price: 9.81,
        description:
            "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
    },
    {
        name: "Uraeginthus granatina",
        price: 10.34,
        description:
            "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/146x100.png/dddddd/000000",
    },
    {
        name: "Hydrochoerus hydrochaeris",
        price: 11.67,
        description:
            "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/184x100.png/ff4444/ffffff",
    },
    {
        name: "unavailable",
        price: 8.01,
        description:
            "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/117x100.png/ff4444/ffffff",
    },
    {
        name: "Nasua nasua",
        price: 12.5,
        description:
            "sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/195x100.png/cc0000/ffffff",
    },
    {
        name: "Eolophus roseicapillus",
        price: 13.27,
        description:
            "augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/150x100.png/cc0000/ffffff",
    },
    {
        name: "Lama glama",
        price: 9.31,
        description:
            "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/113x100.png/cc0000/ffffff",
    },
    {
        name: "Marmota flaviventris",
        price: 13.56,
        description:
            "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/150x100.png/cc0000/ffffff",
    },
    {
        name: "Ursus arctos",
        price: 11.13,
        description:
            "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
    },
    {
        name: "Butorides striatus",
        price: 12.1,
        description:
            "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/205x100.png/dddddd/000000",
    },
    {
        name: "unavailable",
        price: 10.92,
        description:
            "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
    },
    {
        name: "Tamiasciurus hudsonicus",
        price: 11.53,
        description:
            "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/177x100.png/cc0000/ffffff",
    },
    {
        name: "Ciconia ciconia",
        price: 8.38,
        description:
            "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/193x100.png/dddddd/000000",
    },
    {
        name: "Cereopsis novaehollandiae",
        price: 8.76,
        description:
            "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/137x100.png/ff4444/ffffff",
    },
    {
        name: "unavailable",
        price: 12.79,
        description:
            "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/104x100.png/ff4444/ffffff",
    },
    {
        name: "Macropus eugenii",
        price: 11.78,
        description:
            "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/146x100.png/ff4444/ffffff",
    },
    {
        name: "Ardea golieth",
        price: 10.64,
        description:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/227x100.png/dddddd/000000",
    },
    {
        name: "Castor fiber",
        price: 9.36,
        description:
            "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/228x100.png/dddddd/000000",
    },
    {
        name: "Hippotragus equinus",
        price: 11.51,
        description:
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/202x100.png/ff4444/ffffff",
    },
    {
        name: "Catharacta skua",
        price: 10.47,
        description:
            "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/117x100.png/ff4444/ffffff",
    },
    {
        name: "Phalacrocorax varius",
        price: 14.2,
        description:
            "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/210x100.png/dddddd/000000",
    },
    {
        name: "Toxostoma curvirostre",
        price: 9.94,
        description:
            "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/218x100.png/5fa2dd/ffffff",
    },
    {
        name: "Cygnus atratus",
        price: 13.88,
        description:
            "in felis donec semper sapien a libero nam dui proin leo odio",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/152x100.png/cc0000/ffffff",
    },
    {
        name: "Sauromalus obesus",
        price: 13.66,
        description:
            "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
    },
    {
        name: "Panthera onca",
        price: 11.21,
        description:
            "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/168x100.png/cc0000/ffffff",
    },
    {
        name: "Stercorarius longicausus",
        price: 8.92,
        description:
            "vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/238x100.png/cc0000/ffffff",
    },
    {
        name: "Cervus canadensis",
        price: 9.17,
        description:
            "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/107x100.png/5fa2dd/ffffff",
    },
    {
        name: "Spheniscus mendiculus",
        price: 13.85,
        description:
            "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/170x100.png/dddddd/000000",
    },
    {
        name: "Corvus brachyrhynchos",
        price: 10.0,
        description:
            "consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/139x100.png/ff4444/ffffff",
    },
    {
        name: "Alopochen aegyptiacus",
        price: 8.2,
        description:
            "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/228x100.png/ff4444/ffffff",
    },
    {
        name: "Tadorna tadorna",
        price: 11.43,
        description:
            "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/225x100.png/dddddd/000000",
    },
    {
        name: "Naja haje",
        price: 12.92,
        description:
            "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/182x100.png/ff4444/ffffff",
    },
    {
        name: "Myiarchus tuberculifer",
        price: 8.03,
        description:
            "vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    },
    {
        name: "Morelia spilotes variegata",
        price: 9.75,
        description:
            "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/247x100.png/cc0000/ffffff",
    },
    {
        name: "Fratercula corniculata",
        price: 13.87,
        description:
            "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/148x100.png/cc0000/ffffff",
    },
    {
        name: "Crotalus adamanteus",
        price: 13.92,
        description:
            "volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/178x100.png/ff4444/ffffff",
    },
    {
        name: "Rhea americana",
        price: 9.68,
        description: "in felis donec semper sapien a libero nam dui proin",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/227x100.png/ff4444/ffffff",
    },
    {
        name: "Lamprotornis nitens",
        price: 12.89,
        description:
            "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/122x100.png/dddddd/000000",
    },
    {
        name: "Actophilornis africanus",
        price: 12.35,
        description:
            "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/192x100.png/ff4444/ffffff",
    },
    {
        name: "Sarcophilus harrisii",
        price: 14.44,
        description:
            "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
    },
    {
        name: "Tachyglossus aculeatus",
        price: 8.6,
        description:
            "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/142x100.png/5fa2dd/ffffff",
    },
    {
        name: "Dasyurus viverrinus",
        price: 11.67,
        description:
            "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/120x100.png/dddddd/000000",
    },
    {
        name: "Martes americana",
        price: 14.55,
        description:
            "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
    },
    {
        name: "Canis lupus baileyi",
        price: 8.34,
        description:
            "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/153x100.png/dddddd/000000",
    },
    {
        name: "Sylvicapra grimma",
        price: 12.82,
        description:
            "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
    },
    {
        name: "Phalacrocorax niger",
        price: 11.75,
        description:
            "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/230x100.png/ff4444/ffffff",
    },
    {
        name: "Callipepla gambelii",
        price: 8.66,
        description:
            "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/236x100.png/dddddd/000000",
    },
    {
        name: "Cordylus giganteus",
        price: 12.03,
        description:
            "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/215x100.png/ff4444/ffffff",
    },
    {
        name: "Eumetopias jubatus",
        price: 10.82,
        description:
            "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/155x100.png/dddddd/000000",
    },
    {
        name: "Pitangus sulphuratus",
        price: 11.33,
        description:
            "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/241x100.png/ff4444/ffffff",
    },
    {
        name: "Gorilla gorilla",
        price: 13.07,
        description:
            "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/169x100.png/dddddd/000000",
    },
    {
        name: "Agelaius phoeniceus",
        price: 13.04,
        description:
            "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/173x100.png/cc0000/ffffff",
    },
    {
        name: "Centrocercus urophasianus",
        price: 14.36,
        description:
            "turpis enim blandit mi in porttitor pede justo eu massa donec",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/240x100.png/cc0000/ffffff",
    },
    {
        name: "unavailable",
        price: 8.51,
        description:
            "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/212x100.png/dddddd/000000",
    },
    {
        name: "Amblyrhynchus cristatus",
        price: 11.18,
        description:
            "ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/180x100.png/ff4444/ffffff",
    },
    {
        name: "Leprocaulinus vipera",
        price: 14.34,
        description:
            "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/206x100.png/cc0000/ffffff",
    },
    {
        name: "Tragelaphus scriptus",
        price: 11.51,
        description:
            "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
    },
    {
        name: "Agelaius phoeniceus",
        price: 11.63,
        description:
            "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/183x100.png/cc0000/ffffff",
    },
    {
        name: "Alopex lagopus",
        price: 8.45,
        description:
            "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
    },
    {
        name: "Spizaetus coronatus",
        price: 8.73,
        description:
            "sodales sed tincidunt eu felis fusce posuere felis sed lacus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/108x100.png/cc0000/ffffff",
    },
    {
        name: "Aegypius tracheliotus",
        price: 10.02,
        description:
            "ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
    },
    {
        name: "Lorythaixoides concolor",
        price: 8.4,
        description:
            "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/133x100.png/ff4444/ffffff",
    },
    {
        name: "Passer domesticus",
        price: 10.91,
        description:
            "eros elementum pellentesque quisque porta volutpat erat quisque erat eros",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
        picture_url: "http://dummyimage.com/115x100.png/5fa2dd/ffffff",
    },
    {
        name: "Geococcyx californianus",
        price: 12.5,
        description:
            "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/214x100.png/dddddd/000000",
    },
    {
        name: "Sceloporus magister",
        price: 13.77,
        description:
            "sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    },
    {
        name: "Tachyglossus aculeatus",
        price: 13.72,
        description:
            "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 12,
        picture_url: "http://dummyimage.com/181x100.png/cc0000/ffffff",
    },
    {
        name: "Canis lupus baileyi",
        price: 8.7,
        description:
            "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
    },
    {
        name: "Uraeginthus angolensis",
        price: 11.17,
        description:
            "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/202x100.png/dddddd/000000",
    },
    {
        name: "Passer domesticus",
        price: 10.94,
        description:
            "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/239x100.png/cc0000/ffffff",
    },
    {
        name: "Phacochoerus aethiopus",
        price: 8.82,
        description:
            "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/221x100.png/cc0000/ffffff",
    },
    {
        name: "Cacatua tenuirostris",
        price: 11.85,
        description:
            "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    },
    {
        name: "Corvus brachyrhynchos",
        price: 14.07,
        description:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/231x100.png/5fa2dd/ffffff",
    },
    {
        name: "Theropithecus gelada",
        price: 11.93,
        description:
            "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
    },
    {
        name: "Bison bison",
        price: 10.41,
        description:
            "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
    },
    {
        name: "Dasyurus maculatus",
        price: 11.8,
        description:
            "viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
    },
    {
        name: "Laniarius ferrugineus",
        price: 12.26,
        description:
            "vel est donec odio justo sollicitudin ut suscipit a feugiat et",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/169x100.png/dddddd/000000",
    },
    {
        name: "Sciurus vulgaris",
        price: 8.72,
        description:
            "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 4,
        picture_url: "http://dummyimage.com/146x100.png/ff4444/ffffff",
    },
    {
        name: "Capreolus capreolus",
        price: 8.21,
        description:
            "cursus vestibulum proin eu mi nulla ac enim in tempor turpis",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
        picture_url: "http://dummyimage.com/128x100.png/cc0000/ffffff",
    },
    {
        name: "Eurocephalus anguitimens",
        price: 11.09,
        description:
            "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/152x100.png/ff4444/ffffff",
    },
    {
        name: "Climacteris melanura",
        price: 8.3,
        description:
            "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
        picture_url: "http://dummyimage.com/241x100.png/ff4444/ffffff",
    },
    {
        name: "Uraeginthus angolensis",
        price: 14.53,
        description:
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/140x100.png/dddddd/000000",
    },
    {
        name: "Eremophila alpestris",
        price: 10.79,
        description:
            "venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/150x100.png/ff4444/ffffff",
    },
    {
        name: "Arctogalidia trivirgata",
        price: 8.75,
        description:
            "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/195x100.png/ff4444/ffffff",
    },
    {
        name: "Geospiza sp.",
        price: 11.69,
        description:
            "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
    },
    {
        name: "Castor canadensis",
        price: 11.11,
        description: "vivamus in felis eu sapien cursus vestibulum proin eu mi",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
        picture_url: "http://dummyimage.com/110x100.png/cc0000/ffffff",
    },
    {
        name: "Grus rubicundus",
        price: 8.96,
        description:
            "non pretium quis lectus suspendisse potenti in eleifend quam a odio",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
        picture_url: "http://dummyimage.com/107x100.png/dddddd/000000",
    },
    {
        name: "Haematopus ater",
        price: 8.11,
        description:
            "mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/138x100.png/ff4444/ffffff",
    },
    {
        name: "Crax sp.",
        price: 11.97,
        description:
            "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 5,
        picture_url: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    },
    {
        name: "Felis concolor",
        price: 12.94,
        description:
            "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/102x100.png/cc0000/ffffff",
    },
    {
        name: "Felis silvestris lybica",
        price: 13.0,
        description: "donec dapibus duis at velit eu est congue elementum in",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
        picture_url: "http://dummyimage.com/120x100.png/ff4444/ffffff",
    },
    {
        name: "Antilocapra americana",
        price: 14.98,
        description:
            "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
        picture_url: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
    },
    {
        name: "Meles meles",
        price: 14.53,
        description:
            "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/187x100.png/dddddd/000000",
    },
    {
        name: "Canis mesomelas",
        price: 10.23,
        description:
            "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 9,
        picture_url: "http://dummyimage.com/172x100.png/ff4444/ffffff",
    },
    {
        name: "unavailable",
        price: 12.29,
        description:
            "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
    },
    {
        name: "Bassariscus astutus",
        price: 9.74,
        description:
            "maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 3,
        picture_url: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
    },
    {
        name: "Macropus eugenii",
        price: 11.82,
        description:
            "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
        picture_url: "http://dummyimage.com/138x100.png/ff4444/ffffff",
    },
    {
        name: "Paraxerus cepapi",
        price: 9.81,
        description:
            "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
    },
    {
        name: "Hymenolaimus malacorhynchus",
        price: 13.75,
        description:
            "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
        picture_url: "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
    },
    {
        name: "Anser caerulescens",
        price: 9.67,
        description:
            "magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 2,
        picture_url: "http://dummyimage.com/205x100.png/cc0000/ffffff",
    },
];

const seedDishes = () => Dish.bulkCreate(dishdata, { individualHooks: true });

module.exports = seedDishes;
