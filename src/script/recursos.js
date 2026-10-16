/* ========================================================
   SCRIPT DA PÁGINA DE RECURSOS - OPTIMUS TECH
   - Accordion de Perguntas Frequentes (FAQ)
   - Filtro de Categorias da Biblioteca
   - Calculadora Interativa de Economia de Tempo & Produtividade
======================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // 1. ACCORDION DE PERGUNTAS FREQUENTES (FAQ)
    // ----------------------------------------------------
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const questionBtn = item.querySelector(".faq-question");

        if (questionBtn) {
            questionBtn.addEventListener("click", () => {
                const isOpen = item.classList.contains("active");

                // Fecha outros itens para comportamento de acordeão limpo
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                        const otherBtn = otherItem.querySelector(".faq-question");
                        if (otherBtn) {
                            otherBtn.setAttribute("aria-expanded", "false");
                        }
                    }
                });

                // Alterna o item atual
                item.classList.toggle("active", !isOpen);
                questionBtn.setAttribute("aria-expanded", String(!isOpen));
            });
        }
    });

    // ----------------------------------------------------
    // 2. FILTRO DE CATEGORIAS DA BIBLIOTECA
    // ----------------------------------------------------
    const filterButtons = document.querySelectorAll(".filter-btn");
    const resourceCards = document.querySelectorAll(".recurso-card");
    const searchInput = document.getElementById("search-resources");

    function filterResources() {
        const activeBtn = document.querySelector(".filter-btn.active");
        const selectedCategory = activeBtn ? activeBtn.getAttribute("data-category") : "todos";
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

        let visibleCount = 0;

        resourceCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            const cardTitle = card.querySelector(".recurso-card__title")?.textContent.toLowerCase() || "";
            const cardDesc = card.querySelector(".recurso-card__desc")?.textContent.toLowerCase() || "";

            const matchesCategory = selectedCategory === "todos" || cardCategory === selectedCategory;
            const matchesSearch = searchTerm === "" || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Feedback caso nenhum resultado seja encontrado
        const noResultsMsg = document.getElementById("no-results-msg");
        if (noResultsMsg) {
            noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
        }
    }

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            filterResources();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", filterResources);
    }

    // ----------------------------------------------------
    // 3. CALCULADORA DE ECONOMIA & PRODUTIVIDADE
    // ----------------------------------------------------
    const calcColabsInput = document.getElementById("calc-colabs");
    const calcHorasInput = document.getElementById("calc-horas");
    const resultHorasEl = document.getElementById("result-horas");
    const resultEconomiaEl = document.getElementById("result-economia");
    const resultEficienciaEl = document.getElementById("result-eficiencia");

    function calcularProdutividade() {
        if (!calcColabsInput || !calcHorasInput) return;

        const colabs = Math.max(1, parseInt(calcColabsInput.value) || 1);
        const horasPerdidasPorSemana = Math.max(1, parseFloat(calcHorasInput.value) || 1);

        // Média de semanas no mês: 4.33
        // Estimativa: a Optimus Tech reduz em média 60% do tempo perdido em tarefas manuais
        const horasTotaisPerdidasMes = colabs * horasPerdidasPorSemana * 4.33;
        const horasEconomizadasMes = Math.round(horasTotaisPerdidasMes * 0.6);

        // Estimativa de custo médio por hora no Brasil em empresas de serviços/tech: R$ 45,00
        const valorEconomizado = Math.round(horasEconomizadasMes * 45);

        // Atualização no DOM
        if (resultHorasEl) {
            resultHorasEl.textContent = `${horasEconomizadasMes}h`;
        }
        if (resultEconomiaEl) {
            resultEconomiaEl.textContent = `R$ ${valorEconomizado.toLocaleString("pt-BR")}`;
        }
        if (resultEficienciaEl) {
            resultEficienciaEl.textContent = `+${Math.min(75, Math.round(horasEconomizadasMes / (colabs * 1.6)))}%`;
        }
    }

    if (calcColabsInput && calcHorasInput) {
        calcColabsInput.addEventListener("input", calcularProdutividade);
        calcHorasInput.addEventListener("input", calcularProdutividade);
        // Cálculo inicial ao carregar a página
        calcularProdutividade();
    }
});

