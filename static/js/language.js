(() => {
    const translations = {
        es: {
            pageTitle: 'Cumbre Restobar | Carta',
            metaDescription: 'Carta de Cumbre Restobar en Villa Traful.',
            languageSelectorLabel: 'Idioma', routeLabel: 'Ruta 65 · Villa Traful', routeLine: 'Ruta 65 / Villa Traful',
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
            languageSelectorLabel: 'Choose language', routeLabel: 'Route 65 · Villa Traful', routeLine: 'Route 65 / Villa Traful',
            heroTitle: 'A magical place\nby the lake.',
            heroDescription: 'Mountain-inspired food, best enjoyed at your own pace.',
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
            footerTagline: 'Mountain-inspired food, at its own pace.',
            instagramLabel: 'Cumbre Restobar on Instagram, @cumbrebar.traful',
            product: 'product', inUsePhoto: 'in-use photo',
        },
        pt: {
            pageTitle: 'Cumbre Restobar | Cardápio',
            metaDescription: 'Cardápio do Cumbre Restobar em Villa Traful.',
            languageSelectorLabel: 'Escolha o idioma', routeLabel: 'Ruta 65 · Villa Traful', routeLine: 'Ruta 65 / Villa Traful',
            heroTitle: 'Um lugar mágico\nà beira do lago.',
            heroDescription: 'Sabores da montanha para aproveitar com calma.',
            specialtiesLabel: 'Especialidades', specialtyMountain: 'Cozinha da montanha',
            specialtyDrinks: 'Drinks autorais', specialtyCoffee: 'Café e lanche da tarde',
            specialtyTraful: 'Um sabor de Traful',
            locationEyebrow: 'Sabores da montanha, no ritmo da natureza',
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
            footerTagline: 'Sabores da montanha, sem pressa.',
            instagramLabel: 'Instagram do Cumbre Restobar, @cumbrebar.traful',
            product: 'produto', inUsePhoto: 'foto em uso',
        },
    };

    const categories = {
        'Sándwiches': ['Sandwiches', 'Sanduíches'],
        'Hamburguesas': ['Burgers', 'Hambúrgueres'],
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
