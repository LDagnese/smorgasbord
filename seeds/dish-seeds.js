const sequelize = require("../config/connection");
const { Dish } = require("../models");

const dishdata = [
    {
        name: "nisi",
        price: 2,
        description:
            "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
    },
    {
        name: "nunc purus phasellus",
        price: 10,
        description:
            "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "vestibulum",
        price: 3,
        description:
            "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 5,
    },
    {
        name: "lorem",
        price: 2,
        description:
            "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 11,
    },
    {
        name: "vitae mattis nibh",
        price: 1,
        description:
            "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
    },
    {
        name: "sapien urna pretium",
        price: 5,
        description:
            "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "etiam justo",
        price: 7,
        description:
            "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
    },
    {
        name: "ipsum primis in",
        price: 10,
        description:
            "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 12,
    },
    {
        name: "consequat metus",
        price: 2,
        description:
            "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "erat id",
        price: 4,
        description:
            "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "porttitor lacus",
        price: 4,
        description:
            "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "ut volutpat",
        price: 8,
        description:
            "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "aliquam erat",
        price: 5,
        description:
            "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 3,
    },
    {
        name: "nullam",
        price: 4,
        description:
            "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "nunc vestibulum",
        price: 5,
        description:
            "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 9,
    },
    {
        name: "sapien cum sociis",
        price: 1,
        description:
            "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 12,
    },
    {
        name: "vel augue vestibulum",
        price: 8,
        description:
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 12,
    },
    {
        name: "ligula vehicula consequat",
        price: 1,
        description:
            "ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
    },
    {
        name: "lorem",
        price: 8,
        description:
            "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 2,
    },
    {
        name: "id justo sit",
        price: 3,
        description:
            "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 15,
    },
    {
        name: "consequat morbi a",
        price: 10,
        description:
            "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "imperdiet et commodo",
        price: 6,
        description:
            "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 11,
    },
    {
        name: "a libero",
        price: 10,
        description:
            "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 13,
    },
    {
        name: "justo",
        price: 6,
        description:
            "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 2,
    },
    {
        name: "neque duis bibendum",
        price: 8,
        description:
            "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "congue",
        price: 9,
        description:
            "aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 5,
    },
    {
        name: "tristique",
        price: 8,
        description:
            "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "aliquet ultrices",
        price: 9,
        description:
            "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 9,
    },
    {
        name: "eget massa tempor",
        price: 5,
        description:
            "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
    },
    {
        name: "pellentesque ultrices phasellus",
        price: 8,
        description:
            "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 15,
    },
    {
        name: "magna vestibulum aliquet",
        price: 7,
        description:
            "nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 4,
    },
    {
        name: "ante vestibulum ante",
        price: 1,
        description:
            "in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
    },
    {
        name: "ultrices aliquet",
        price: 10,
        description:
            "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 5,
    },
    {
        name: "odio odio elementum",
        price: 5,
        description:
            "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 13,
    },
    {
        name: "id mauris vulputate",
        price: 3,
        description:
            "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
    },
    {
        name: "id massa id",
        price: 3,
        description:
            "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 3,
    },
    {
        name: "turpis elementum",
        price: 6,
        description:
            "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
    },
    {
        name: "accumsan",
        price: 6,
        description:
            "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 7,
    },
    {
        name: "integer ac neque",
        price: 6,
        description:
            "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 12,
    },
    {
        name: "tortor",
        price: 6,
        description:
            "laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 8,
    },
    {
        name: "viverra dapibus",
        price: 4,
        description:
            "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "duis at",
        price: 9,
        description:
            "sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
    },
    {
        name: "condimentum neque sapien",
        price: 3,
        description:
            "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 4,
    },
    {
        name: "tincidunt",
        price: 3,
        description:
            "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "faucibus cursus urna",
        price: 9,
        description:
            "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
    },
    {
        name: "pulvinar sed",
        price: 1,
        description:
            "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 2,
    },
    {
        name: "ultrices",
        price: 4,
        description:
            "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 12,
    },
    {
        name: "ac",
        price: 4,
        description:
            "accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 15,
    },
    {
        name: "in hac habitasse",
        price: 4,
        description:
            "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "dolor morbi",
        price: 7,
        description:
            "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 12,
    },
    {
        name: "amet lobortis",
        price: 8,
        description:
            "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "tincidunt nulla",
        price: 8,
        description:
            "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 8,
    },
    {
        name: "ut",
        price: 8,
        description:
            "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "fusce",
        price: 9,
        description:
            "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "aliquet",
        price: 1,
        description:
            "sapien ut nunc vestibulum ante ipsum primis in faucibus orci",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 12,
    },
    {
        name: "arcu",
        price: 4,
        description:
            "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "cum sociis",
        price: 10,
        description:
            "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 1,
    },
    {
        name: "primis",
        price: 3,
        description:
            "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 9,
    },
    {
        name: "id consequat",
        price: 8,
        description:
            "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
    },
    {
        name: "ultricies",
        price: 6,
        description:
            "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 5,
    },
    {
        name: "nec",
        price: 6,
        description:
            "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 4,
    },
    {
        name: "nec condimentum neque",
        price: 5,
        description:
            "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
    },
    {
        name: "turpis adipiscing",
        price: 3,
        description:
            "pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "blandit",
        price: 4,
        description:
            "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 9,
    },
    {
        name: "in",
        price: 10,
        description:
            "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
    },
    {
        name: "morbi",
        price: 3,
        description:
            "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
    },
    {
        name: "lacinia nisi",
        price: 6,
        description:
            "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "luctus rutrum",
        price: 1,
        description:
            "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 15,
    },
    {
        name: "luctus ultricies eu",
        price: 4,
        description:
            "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
    },
    {
        name: "gravida nisi",
        price: 8,
        description:
            "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "nisl ut volutpat",
        price: 8,
        description:
            "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
    },
    {
        name: "quis",
        price: 6,
        description:
            "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "suscipit ligula",
        price: 4,
        description:
            "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 8,
    },
    {
        name: "lacinia erat",
        price: 7,
        description:
            "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
    },
    {
        name: "tellus",
        price: 2,
        description:
            "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 6,
    },
    {
        name: "at dolor",
        price: 4,
        description:
            "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 3,
    },
    {
        name: "maecenas tristique est",
        price: 8,
        description:
            "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 14,
    },
    {
        name: "nulla sed vel",
        price: 9,
        description:
            "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 11,
    },
    {
        name: "condimentum curabitur in",
        price: 2,
        description:
            "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 3,
    },
    {
        name: "in faucibus orci",
        price: 7,
        description:
            "sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 7,
    },
    {
        name: "mauris enim",
        price: 6,
        description: "at velit eu est congue elementum in hac habitasse platea",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 14,
    },
    {
        name: "at velit eu",
        price: 6,
        description:
            "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "justo etiam",
        price: 4,
        description:
            "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 6,
    },
    {
        name: "vestibulum",
        price: 6,
        description:
            "sapien cum sociis natoque penatibus et magnis dis parturient montes",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "amet turpis",
        price: 2,
        description:
            "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 14,
    },
    {
        name: "in quam fringilla",
        price: 4,
        description:
            "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 10,
    },
    {
        name: "dolor",
        price: 4,
        description:
            "porttitor pede justo eu massa donec dapibus duis at velit",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 15,
    },
    {
        name: "ultrices posuere",
        price: 10,
        description:
            "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 15,
    },
    {
        name: "a nibh in",
        price: 1,
        description:
            "pellentesque eget nunc donec quis orci eget orci vehicula condimentum",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 1,
    },
    {
        name: "eget rutrum",
        price: 10,
        description:
            "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 14,
    },
    {
        name: "ut dolor morbi",
        price: 1,
        description:
            "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 10,
    },
    {
        name: "amet",
        price: 10,
        description:
            "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 13,
    },
    {
        name: "ultrices enim",
        price: 4,
        description:
            "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 5,
    },
    {
        name: "magnis",
        price: 10,
        description:
            "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
        vegetarian: true,
        gluten_free: true,
        restaurant_id: 2,
    },
    {
        name: "curae",
        price: 2,
        description:
            "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 13,
    },
    {
        name: "pretium nisl",
        price: 7,
        description:
            "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
        vegetarian: false,
        gluten_free: true,
        restaurant_id: 15,
    },
    {
        name: "consequat in",
        price: 4,
        description:
            "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 7,
    },
    {
        name: "vel augue",
        price: 10,
        description:
            "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 6,
    },
    {
        name: "augue",
        price: 8,
        description:
            "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",
        vegetarian: true,
        gluten_free: false,
        restaurant_id: 1,
    },
    {
        name: "quis augue",
        price: 7,
        description:
            "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
        vegetarian: false,
        gluten_free: false,
        restaurant_id: 7,
    },
];

const seedDishes = () => Dish.bulkCreate(dishdata, { individualHooks: true });

module.exports = seedDishes;
