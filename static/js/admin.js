(() => {
    const searchInput = document.querySelector("#buscar-producto");
    const resultCount = document.querySelector("#cantidad-resultados");
    const emptyMessage = document.querySelector("#sin-resultados");

    if (!searchInput || !resultCount || !emptyMessage) {
        return;
    }

    const categories = Array.from(document.querySelectorAll(".admin-category"));
    const products = categories.flatMap((category) =>
        Array.from(category.querySelectorAll("[data-product-row]"), (row) => ({
            category,
            row,
            categoryName: category.querySelector(".admin-category__title")?.textContent ?? "",
        })),
    );

    const normalize = (value) => value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es");

    searchInput.addEventListener("input", () => {
        const query = normalize(searchInput.value.trim());
        let visibleCount = 0;

        for (const product of products) {
            const searchableText = normalize(
                `${product.row.textContent} ${product.categoryName}`,
            );
            const matches = searchableText.includes(query);
            product.row.hidden = !matches;
            if (matches) {
                visibleCount += 1;
            }
        }

        for (const category of categories) {
            const hasVisibleProducts = category.querySelector(
                "[data-product-row]:not([hidden])",
            );
            category.hidden = !hasVisibleProducts;
        }

        resultCount.textContent = query
            ? `${visibleCount} ${visibleCount === 1 ? "resultado" : "resultados"}`
            : `${products.length} productos`;
        emptyMessage.hidden = visibleCount !== 0;
    });
})();
