(() => {
    const translations = {
        es: {
            pageTitle: 'Cumbre Restobar | Carta',
            metaDescription: 'Carta de Cumbre Restobar en Villa Traful.',
            routeLabel: 'Ruta 65 · Villa Traful', routeLine: 'Ruta 65 / Villa Traful',
            heroTitle: 'Un lugar mágico\nfrente al lago.',
            heroDescription: 'Para disfrutar de la gastronomía al ritmo de la montaña.',
            specialtiesLabel: 'Especialidades', specialtyMountain: 'Cocina de montaña',
            specialtyDrinks: 'Tragos de autor', specialtyCoffee: 'Cafetería y merienda',
            specialtyTraful: 'Un recuerdo de Traful',
            locationEyebrow: 'Gastronomía al ritmo de la montaña',
            locationTitle: 'La naturaleza nos inspira, el sabor te conquista.',
            mapAlt: 'Mapa de Villa Traful y la Ruta 65',
            'chapter.sabores-de-montana.title': 'Sabores de montaña',
            'chapter.sabores-de-montana.description': 'Sándwiches, hamburguesas y algo para compartir.',
            'chapter.delicias-locales.title': 'Delicias locales',
            'chapter.delicias-locales.description': 'Truchas, pastas y clásicos de nuestra cocina.',
            'chapter.pausa-natural.title': 'Una pausa natural',
            'chapter.brindar-frente-al-lago.title': 'Brindar frente al lago',
            'chapter.quedate-un-ratito-mas.title': 'Quedate un ratito más',
            moreToEnjoy: 'Más para disfrutar',
            merchTitle: 'Llevate un poco de Cumbre',
            merchSizesNote: 'consultar por talles y modelos',
            'merch.remeras': 'Remeras', 'merch.gorras': 'Gorras',
            merchCapsNote: 'Consultar colores y diseño',
            footerTagline: 'Gastronomía al ritmo de la montaña.',
            instagramLabel: 'Perfil de Instagram de Cumbre Restobar, @cumbrebar.traful',
            product: 'producto', inUsePhoto: 'foto en uso',
        },
        en: {
            pageTitle: 'Cumbre Restobar | Menu',
            metaDescription: 'Menu at Cumbre Restobar in Villa Traful.',
            routeLabel: 'Route 65 · Villa Traful', routeLine: 'Route 65 / Villa Traful',
            heroTitle: 'A magical place\nby the lake.',
            heroDescription: 'Mountain-inspired food.',
            specialtiesLabel: 'What we offer', specialtyMountain: 'Mountain cooking',
            specialtyDrinks: 'Signature drinks', specialtyCoffee: 'Coffee and afternoon treats',
            specialtyTraful: 'A taste of Traful',
            locationEyebrow: 'Mountain flavours',
            locationTitle: 'Inspired by nature, made to delight.',
            mapAlt: 'Map of Villa Traful and Route 65',
            'chapter.sabores-de-montana.title': 'Mountain flavours',
            'chapter.sabores-de-montana.description': 'Sandwiches, burgers & shareables.',
            'chapter.delicias-locales.title': 'Local favourites',
            'chapter.delicias-locales.description': 'Trout, pasta, and Cumbre kitchen favourites.',
            'chapter.pausa-natural.title': 'A natural pause',
            'chapter.brindar-frente-al-lago.title': 'Raise a glass by the lake',
            'chapter.quedate-un-ratito-mas.title': 'Stay a little longer',
            moreToEnjoy: 'More to enjoy',
            merchTitle: 'Take Cumbre with you',
            merchSizesNote: 'Ask us about sizes and styles.',
            'merch.remeras': 'T-shirts', 'merch.gorras': 'Caps',
            merchCapsNote: 'Ask us about colors and designs.',
            footerTagline: 'Mountain-inspired food',
            instagramLabel: 'Cumbre Restobar on Instagram, @cumbrebar.traful',
            product: 'product', inUsePhoto: 'in-use photo',
        },
        pt: {
            pageTitle: 'Cumbre Restobar | Cardápio',
            metaDescription: 'Cardápio do Cumbre Restobar em Villa Traful.',
            routeLabel: 'Ruta 65 · Villa Traful', routeLine: 'Ruta 65 / Villa Traful',
            heroTitle: 'Um lugar mágico\nà beira do lago.',
            heroDescription: 'Sabores da montanha',
            specialtiesLabel: 'Especialidades', specialtyMountain: 'Cozinha da montanha',
            specialtyDrinks: 'Drinks autorais', specialtyCoffee: 'Café e lanche da tarde',
            specialtyTraful: 'Um sabor de Traful',
            locationEyebrow: 'Sabores da montanha',
            locationTitle: 'Inspirada pela natureza, feita para conquistar.',
            mapAlt: 'Mapa de Villa Traful e da Ruta 65',
            'chapter.sabores-de-montana.title': 'Sabores da montanha',
            'chapter.sabores-de-montana.description': 'Sanduíches, hambúrgueres e pratos para compartilhar.',
            'chapter.delicias-locales.title': 'Sabores da região',
            'chapter.delicias-locales.description': 'Trutas, massas e clássicos da cozinha do Cumbre.',
            'chapter.pausa-natural.title': 'Uma pausa com sabor natural',
            'chapter.brindar-frente-al-lago.title': 'Um brinde à beira do lago',
            'chapter.quedate-un-ratito-mas.title': 'Fique mais um pouquinho',
            moreToEnjoy: 'Mais para aproveitar',
            merchTitle: 'Leve Cumbre com você',
            merchSizesNote: 'Consulte tamanhos e modelos.',
            'merch.remeras': 'Camisetas', 'merch.gorras': 'Bonés',
            merchCapsNote: 'Consulte cores e modelos.',
            footerTagline: 'Sabores da montanha',
            instagramLabel: 'Instagram do Cumbre Restobar, @cumbrebar.traful',
            product: 'produto', inUsePhoto: 'foto em uso',
        },
    };

    const products =     {
        "Tostado de campo": [
            "Tostado de campo",
            "Ham and cheese toasted sandwich",
            "Sanduíche tostado caipira"
        ],
        "Bagle de trucha": [
            "Bagel de trucha",
            "Trout bagel",
            "Bagel de truta"
        ],
        "Low carb": [
            "Low carb",
            "Low-carb",
            "Low carb"
        ],
        "Ciabatta de jamón crudo, queso y tomate cherry": [
            "Ciabatta de jamón crudo, queso y tomate cherry",
            "Ciabatta with cured ham, cheese and cherry tomatoes",
            "Ciabatta de presunto cru, queijo e tomate-cereja"
        ],
        "Osobuco": [
            "Osobuco",
            "Ossobuco",
            "Ossobuco"
        ],
        "Cordero": [
            "Cordero",
            "Lamb",
            "Cordeiro"
        ],
        "Vegetariano": [
            "Vegetariano",
            "Vegetarian",
            "Vegetariano"
        ],
        "Clásica": [
            "Clásica",
            "Classic",
            "Clássico"
        ],
        "Cerro negro": [
            "Cerro Negro",
            "Cerro Negro",
            "Cerro Negro"
        ],
        "Del surco": [
            "Del Surco",
            "Del Surco",
            "Del Surco"
        ],
        "Carne": [
            "Carne",
            "Beef empanadas",
            "Empanadas de carne"
        ],
        "Hongos": [
            "Hongos",
            "Mushroom empanadas",
            "Empanadas de cogumelos"
        ],
        "Jamón y queso": [
            "Jamón y queso",
            "Ham and cheese empanadas",
            "Empanadas de presunto e queijo"
        ],
        "Papas fritas": [
            "Papas fritas",
            "French fries",
            "Batatas fritas"
        ],
        "Papas con cheddar y bacon": [
            "Papas con cheddar y bacon",
            "Fries with cheddar and bacon",
            "Batatas com cheddar e bacon"
        ],
        "Papas con pesto": [
            "Papas con pesto",
            "Fries with pesto",
            "Batatas com pesto"
        ],
        "Papas Cumbre": [
            "Papas Cumbre",
            "Cumbre fries",
            "Batatas Cumbre"
        ],
        "Picada cumbrera": [
            "Picada cumbrera",
            "Cumbre sharing platter",
            "Tábua Cumbre para compartilhar"
        ],
        "Margarita": [
            "Margarita",
            "Margherita",
            "Margherita"
        ],
        "Ahumados patagónicos": [
            "Ahumados patagónicos",
            "Patagonian smoked",
            "Defumados patagônicos"
        ],
        "Vegetales al wok": [
            "Vegetales al wok",
            "Wok vegetables",
            "Vegetais no wok"
        ],
        "Tradicionales": [
            "Tradicionales",
            "Traditional",
            "Tradicionais"
        ],
        "Rúcula y jamón crudo": [
            "Rúcula y jamón crudo",
            "Arugula and cured ham",
            "Rúcula e presunto cru"
        ],
        "Pascualina": [
            "Pascualina",
            "Spinach pie",
            "Torta pascualina"
        ],
        "Empanada gallega de trucha": [
            "Empanada gallega de trucha",
            "Galician-style trout pie",
            "Torta galega de truta"
        ],
        "Quiche sin harina": [
            "Quiche sin harina",
            "Crustless quiche",
            "Quiche sem massa"
        ],
        "Guiso de lentejas": [
            "Guiso de lentejas",
            "Lentil stew",
            "Ensopado de lentilhas"
        ],
        "Osobuco con puré": [
            "Osobuco con puré",
            "Ossobuco with mashed potatoes",
            "Ossobuco com purê"
        ],
        "Trucha al limón": [
            "Trucha al limón",
            "Trout with lemon",
            "Truta ao limão"
        ],
        "Trucha con salsa de hongos de pino": [
            "Trucha con salsa de hongos de pino",
            "Trout with pine mushroom sauce",
            "Truta com molho de cogumelos-do-pinheiro"
        ],
        "Trucha con salsa de queso azul": [
            "Trucha con salsa de queso azul",
            "Trout with blue cheese sauce",
            "Truta com molho de queijo azul"
        ],
        "César": [
            "César",
            "Caesar",
            "Caesar"
        ],
        "Del día": [
            "Del día",
            "Salad of the day",
            "Salada do dia"
        ],
        "Tallarines al huevo": [
            "Tallarines al huevo",
            "Egg noodles",
            "Talharim com ovos"
        ],
        "Sorrentinos de jamón y queso": [
            "Sorrentinos de jamón y queso",
            "Ham and cheese sorrentinos",
            "Sorrentinos de presunto e queijo"
        ],
        "Panzottis de trucha": [
            "Panzottis de trucha",
            "Trout panzotti",
            "Panzottis de truta"
        ],
        "Filetto": [
            "Filetto",
            "Filetto tomato sauce",
            "Molho de tomate filetto"
        ],
        "Mixta": [
            "Mixta",
            "Mixed sauce",
            "Molho misto"
        ],
        "Crema": [
            "Crema",
            "Cream sauce",
            "Molho de creme"
        ],
        "Manteca": [
            "Manteca",
            "Butter",
            "Manteiga"
        ],
        "Hongos de pino": [
            "Hongos de pino",
            "Pine mushrooms",
            "Cogumelos-do-pinheiro"
        ],
        "Queso azul": [
            "Queso azul",
            "Blue cheese",
            "Queijo azul"
        ],
        "Pesto": [
            "Pesto",
            "Pesto",
            "Pesto"
        ],
        "Napolitana": [
            "Napolitana",
            "Neapolitan",
            "Napolitana"
        ],
        "Cumbre": [
            "Cumbre",
            "Cumbre",
            "Cumbre"
        ],
        "Agua con o sin gas": [
            "Agua con o sin gas",
            "Still or sparkling water",
            "Água sem gás ou com gás"
        ],
        "Agua saborizada": [
            "Agua saborizada",
            "Flavored water",
            "Água saborizada"
        ],
        "Jugos naturales Fruggina": [
            "Jugos naturales Fruggina",
            "Fruggina natural juices",
            "Sucos naturais Fruggina"
        ],
        "Gaseosas": [
            "Gaseosas",
            "Soft drinks",
            "Refrigerantes"
        ],
        "Jugo de naranja": [
            "Jugo de naranja",
            "Orange juice",
            "Suco de laranja"
        ],
        "Durazno / ananá / banana": [
            "Durazno / ananá / banana",
            "Peach / pineapple / banana smoothie",
            "Vitamina de pêssego / abacaxi / banana"
        ],
        "Durazno con jugo de naranja": [
            "Durazno con jugo de naranja",
            "Peach and orange juice smoothie",
            "Vitamina de pêssego com suco de laranja"
        ],
        "Frutos rojos": [
            "Frutos rojos",
            "Red berry smoothie",
            "Vitamina de frutas vermelhas"
        ],
        "Frutos rojos y jugo de naranja": [
            "Frutos rojos y jugo de naranja",
            "Red berry and orange juice smoothie",
            "Vitamina de frutas vermelhas com suco de laranja"
        ],
        "Café bajo cero": [
            "Café bajo cero",
            "Cold Coffee with cream",
            "Café gelado com creme"
        ],
        "Tropicalis": [
            "Tropicalis",
            "Tropicalis",
            "Tropicalis"
        ],
        "Chai austral": [
            "Chai austral",
            "Southern Chai",
            "Chai austral"
        ],
        "Limonada con menta y jengibre": [
            "Limonada con menta y jengibre",
            "Mint and ginger lemonade",
            "Limonada com hortelã e gengibre"
        ],
        "Limonada con frutos rojos": [
            "Limonada con frutos rojos",
            "Red berry lemonade",
            "Limonada com frutas vermelhas"
        ],
        "Soda italiana de manzana": [
            "Soda italiana de manzana",
            "Italian apple soda",
            "Soda italiana de maçã"
        ],
        "Cumbre helada": [
            "Cumbre helada",
            "Cumbre Helada",
            "Cumbre Helada"
        ],
        "Huella andina": [
            "Huella andina",
            "Huella Andina",
            "Huella Andina"
        ],
        "Bosque sumergido": [
            "Bosque sumergido",
            "Bosque Sumergido",
            "Bosque Sumergido"
        ],
        "Traful rojo": [
            "Traful rojo",
            "Traful rojo",
            "Traful Rojo"
        ],
        "Cerveza artesanal": [
            "Cerveza artesanal",
            "Craft beer",
            "Cerveja artesanal"
        ],
        "Cerveza Heineken": [
            "Cerveza Heineken",
            "Heineken beer",
            "Cerveja Heineken"
        ],
        "Espumante": [
            "Espumante",
            "Sparkling wine",
            "Espumante"
        ],
        "Copa de vino": [
            "Copa de vino",
            "Glass of wine",
            "Taça de vinho"
        ],
        "Aperol spritz": [
            "Aperol spritz",
            "Aperol Spritz",
            "Aperol Spritz"
        ],
        "Negroni": [
            "Negroni",
            "Negroni",
            "Negroni"
        ],
        "Americano": [
            "Americano",
            "Americano",
            "Americano"
        ],
        "Old fashioned": [
            "Old fashioned",
            "Old Fashioned",
            "Old Fashioned"
        ],
        "Cynar julep": [
            "Cynar julep",
            "Cynar Julep",
            "Cynar Julep"
        ],
        "Gin tonic": [
            "Gin tonic",
            "Gin and tonic",
            "Gin tônica"
        ],
        "Gin tonic con frutos rojos": [
            "Gin tonic con frutos rojos",
            "Gin and tonic with red berries",
            "Gin tônica com frutas vermelhas"
        ],
        "Gin Athos": [
            "Gin Athos",
            "Athos Gin",
            "Gin Athos"
        ],
        "Ice Amarula cream": [
            "Ice Amarula cream",
            "Amarula Cream on Ice",
            "Amarula Cream com gelo"
        ],
        "Manhatan": [
            "Manhattan",
            "Manhattan",
            "Manhattan"
        ],
        "Fernet cola": [
            "Fernet cola",
            "Fernet and cola",
            "Fernet com Coca-Cola"
        ],
        "Campari naranja": [
            "Campari naranja",
            "Campari and orange",
            "Campari com laranja"
        ],
        "Vermouth": [
            "Vermouth",
            "Vermouth",
            "Vermute"
        ],
        "Ferroviario": [
            "Ferroviario",
            "Ferroviario",
            "Ferroviario"
        ],
        "Medida de tequila": [
            "Medida de tequila",
            "Tequila shot",
            "Dose de tequila"
        ],
        "Medida de whisky": [
            "Medida de whisky",
            "Whisky shot",
            "Dose de uísque"
        ],
        "Medida de Jagermeister": [
            "Medida de Jägermeister",
            "Jägermeister shot",
            "Dose de Jägermeister"
        ],
        "Jagertonic": [
            "Jagertonic",
            "Jägermeister and tonic",
            "Jägermeister com tônica"
        ],
        "Café": [
            "Café",
            "Coffee",
            "Café"
        ],
        "Cortado": [
            "Cortado",
            "Cortado",
            "Cortado"
        ],
        "Lágrima": [
            "Lágrima",
            "Lágrima",
            "Lágrima"
        ],
        "Café con leche": [
            "Café con leche",
            "Café au lait",
            "Café com leite"
        ],
        "Capuccino": [
            "Capuccino",
            "Cappuccino",
            "Cappuccino"
        ],
        "Té clásico o saborizado": [
            "Té clásico o saborizado",
            "Classic or flavored tea",
            "Chá clássico ou saborizado"
        ],
        "Té en hebras": [
            "Té en hebras",
            "Loose-leaf tea",
            "Chá em folhas"
        ],
        "Medialunas": [
            "Medialunas",
            "Croissants",
            "Medialunas"
        ],
        "Medialunas con jamón y queso": [
            "Medialunas con jamón y queso",
            "Ham and cheese medialunas",
            "Medialunas com presunto e queijo"
        ],
        "Tostadas": [
            "Tostadas",
            "Toast",
            "Torradas"
        ],
        "Pasta frola de membrillo": [
            "Pasta frola de membrillo",
            "Quince tart",
            "Torta frola de marmelo"
        ],
        "Alfajor del Montañés": [
            "Alfajor del Montañés",
            "Montañés alfajor",
            "Alfajor del Montañés"
        ],
        "Conito de dulce de leche": [
            "Conito de dulce de leche",
            "Dulce de leche cone",
            "Cone de doce de leite"
        ],
        "Brownie": [
            "Brownie",
            "Brownie",
            "Brownie"
        ],
        "Cheesecake de frutos rojos": [
            "Cheesecake de frutos rojos",
            "Red berry cheesecake",
            "Cheesecake de frutas vermelhas"
        ],
        "Flan": [
            "Flan",
            "Flan",
            "Pudim"
        ],
        "Don Pedro": [
            "Don Pedro",
            "Don Pedro",
            "Don Pedro"
        ],
        "Helado artesanal del Montañés": [
            "Helado artesanal del Montañés",
            "Montañés artisanal ice cream",
            "Sorvete artesanal del Montañés"
        ]
    };
    const variants =     {
        "3 unidades": [
            "3 unidades",
            "3 pieces",
            "3 unidades"
        ],
        "Para 2 personas": [
            "para 2 personas",
            "for 2",
            "para 2 pessoas"
        ],
        "Lata": [
            "lata",
            "can",
            "lata"
        ],
        "Pinta": [
            "pinta",
            "pint",
            "pint"
        ],
        "Jarrito": [
            "jarrito",
            "mug",
            "caneca"
        ],
        "Pocillo": [
            "pocillo",
            "small cup",
            "xícara pequena"
        ],
        "Doble": [
            "doble",
            "double",
            "duplo"
        ]
    };
    const productRows =     {
        "Carne::3 unidades": [
            "Carne (3 unidades)",
            "Beef empanadas (3 pieces)",
            "Empanadas de carne (3 unidades)"
        ],
        "Hongos::3 unidades": [
            "Hongos (3 unidades)",
            "Mushroom empanadas (3 pieces)",
            "Empanadas de cogumelos (3 unidades)"
        ],
        "Jamón y queso::3 unidades": [
            "Jamón y queso (3 unidades)",
            "Ham and cheese empanadas (3 pieces)",
            "Empanadas de presunto e queijo (3 unidades)"
        ],
        "Picada cumbrera::Para 2 personas": [
            "Picada cumbrera (para 2 personas)",
            "Cumbre sharing platter (for 2)",
            "Tábua Cumbre para compartilhar (para 2 pessoas)"
        ],
        "Cerveza artesanal::Lata": [
            "Cerveza artesanal (lata)",
            "Craft beer (can)",
            "Cerveja artesanal (lata)"
        ],
        "Cerveza artesanal::Pinta": [
            "Cerveza artesanal (pinta)",
            "Craft beer (pint)",
            "Cerveja artesanal (pint)"
        ],
        "Cerveza Heineken::Lata": [
            "Cerveza Heineken (lata)",
            "Heineken beer (can)",
            "Cerveja Heineken (lata)"
        ],
        "Espumante::Lata": [
            "Espumante (lata)",
            "Sparkling wine (can)",
            "Espumante (lata)"
        ],
        "Fernet cola::Jarrito": [
            "Fernet cola (jarrito)",
            "Fernet and cola (mug)",
            "Fernet com Coca-Cola (caneca)"
        ],
        "Fernet cola::Pinta": [
            "Fernet cola (pinta)",
            "Fernet and cola (pint)",
            "Fernet com Coca-Cola (pint)"
        ],
        "Café::Pocillo": [
            "Café (pocillo)",
            "Coffee (small cup)",
            "Café (xícara pequena)"
        ],
        "Café::Jarrito": [
            "Café (jarrito)",
            "Coffee (mug)",
            "Café (caneca)"
        ],
        "Café::Doble": [
            "Café (doble)",
            "Double coffee",
            "Café duplo"
        ],
        "Cortado::Jarrito": [
            "Cortado (jarrito)",
            "Cortado (mug)",
            "Cortado (caneca)"
        ],
        "Lágrima::Jarrito": [
            "Lágrima (jarrito)",
            "Lágrima (mug)",
            "Lágrima (caneca)"
        ],
        "Lágrima::Doble": [
            "Lágrima (doble)",
            "Double lágrima",
            "Lágrima dupla"
        ],
        "Café con leche::Doble": [
            "Café con leche (doble)",
            "Double café au lait",
            "Café com leite duplo"
        ]
    };
    productRows['Milanesas::Clásica::'] = ['Clásica', 'Classic', 'Clássica'];
    const categories = {
        'Sándwiches': ['Sandwiches', 'Sanduíches'],
        'Hamburguesas': ['Burgers', 'Hambúrgueres'],
        'Empanadas': ['Empanadas', 'Empanadas'],
        'Pizzas': ['Pizzas', 'Pizzas'],
        'Mocktails': ['Mocktails', 'Mocktails'],
        'Para picar': ['Sharing plates', 'Para compartilhar'],
        'Tartas': ['Savoury pies', 'Tortas salgadas'],
        'Platos principales': ['Main courses', 'Pratos principais'],
        'Truchas': ['Trout', 'Trutas'],
        'Ensaladas': ['Salads', 'Saladas'], 'Pastas': ['Pasta', 'Massas'],
        'Salsas': ['Sauces', 'Molhos'], 'Milanesas': ['Breaded cutlets', 'Bifes à milanesa'],
        'Bebidas sin alcohol': ['Non-alcoholic drinks', 'Bebidas sem álcool'],
        'Licuados': ['Smoothies', 'Vitaminas'],
        'Tragos de autor': ['Signature cocktails', 'Coquetéis autorais'],
        'Bebidas con alcohol': ['Alcoholic drinks', 'Bebidas alcoólicas'],
        'Cocktails': ['Cocktails', 'Coquetéis'], 'Cafetería': ['Coffee', 'Cafeteria'],
        'Merienda': ['Afternoon treats', 'Café da tarde'], 'Postres': ['Desserts', 'Sobremesas'],
        'Merchandising · Remeras': ['Merch · T-shirts', 'Produtos · Camisetas'],
        'Merchandising · Gorras': ['Merch · Caps', 'Produtos · Bonés'],
    };
    const subtitles = {
        'Hamburguesas': ['Served with fries', 'Acompanha batatas fritas'],
        'Empanadas': ['3 pieces', '3 unidades'],
        'Tartas': ['Served with salad', 'Acompanha salada'],
        'Truchas': ['Choose fries, wok-fried vegetables, or mashed potatoes.', 'Escolha entre batatas fritas, legumes salteados no wok ou purê.'],
        'Milanesas': ['Choose fries, wok-fried vegetables, or mashed potatoes.', 'Escolha entre batatas fritas, legumes salteados no wok ou purê.'],
        'Licuados': ['Made with water or milk', 'Feito com água ou leite'],
    };
    const localeFor = code => code === 'en' ? 'en' : code === 'pt' ? 'pt' : 'es';

    let savedLanguage = null;
    try { savedLanguage = localStorage.getItem('cumbre-menu-language'); } catch (_) {}
    const supported = ['es', 'en', 'pt'];
    let language = supported.includes(savedLanguage) ? savedLanguage : null;
    if (!language) {
        for (const preference of (navigator.languages || [navigator.language || 'es'])) {
            const code = preference.toLowerCase().split('-')[0];
            if (supported.includes(code)) { language = code; break; }
        }
    }
    if (!language) language = 'es';

    function applyLanguage(code) {
        language = supported.includes(code) ? code : 'es';
        const index = language === 'en' ? 0 : language === 'pt' ? 1 : -1;
        const words = translations[language];
        document.documentElement.lang = localeFor(language);
        document.title = words.pageTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', words.metaDescription);

        document.querySelectorAll('[data-i18n]').forEach(node => {
            const value = words[node.dataset.i18n];
            if (value === undefined) return;
            if (value.includes('\n')) {
                const parts = value.split('\n');
                node.replaceChildren(document.createTextNode(parts[0]), document.createElement('br'), document.createTextNode(parts[1] || ''));
            } else node.textContent = value;
        });
        document.querySelectorAll('[data-i18n-content]').forEach(node => {
            const value = words[node.dataset.i18nContent];
            if (value !== undefined) node.setAttribute('content', value);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(node => {
            const value = words[node.dataset.i18nAria];
            if (value !== undefined) node.setAttribute('aria-label', value);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(node => {
            const value = words[node.dataset.i18nAlt];
            if (value !== undefined) node.alt = value;
        });
        document.querySelectorAll('[data-i18n-category]').forEach(node => {
            const pair = categories[node.dataset.i18nCategory];
            if (pair && index >= 0) node.textContent = pair[index];
            else node.textContent = node.dataset.i18nEs || node.dataset.i18nCategory;
        });
        document.querySelectorAll('[data-i18n-subtitle]').forEach(node => {
            const pair = subtitles[node.dataset.i18nSubtitle];
            if (pair && index >= 0) node.textContent = pair[index];
            else node.textContent = node.dataset.i18nEs || node.dataset.i18nSubtitle;
        });
        document.querySelectorAll('[data-i18n-product]').forEach(node => {
            const productKey = node.dataset.i18nProduct;
            const pair = productRows[node.dataset.i18nProductCategory + '::' + productKey] || productRows[productKey] || products[productKey.split('::')[0]];
            if (pair) node.textContent = pair[index + 1];
        });
        document.querySelectorAll('[data-i18n-variant]').forEach(node => {
            const pair = variants[node.dataset.i18nVariant];
            if (pair) node.textContent = '· ' + pair[index + 1];
        });
        document.querySelectorAll('[data-i18n-merch-alt]').forEach(node => {
            const use = words[node.dataset.i18nMerchAlt];
            const productName = node.alt.split(' — ')[0];
            if (use !== undefined) node.alt = `${productName} — ${use}`;
        });
        document.querySelectorAll('[data-language]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyLanguage(language);
        document.querySelectorAll('[data-language]').forEach(button => {
            button.addEventListener('click', () => {
                const chosen = button.dataset.language;
                try { localStorage.setItem('cumbre-menu-language', chosen); } catch (_) {}
                applyLanguage(chosen);
            });
        });
    });
})();
