document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector(".nav-menu__btn");
	const mobileMenu = document.querySelector(".nav-menu__mobile");
	const menuIcon = menuButton?.querySelector("i");

	if (!menuButton || !mobileMenu || !menuIcon) {
		return;
	}

	const closeMenu = () => {
		if (mobileMenu.classList.contains("active")) {
			mobileMenu.classList.remove("active");
			menuIcon.classList.remove("fa-xmark");
			menuIcon.classList.add("fa-bars");
			menuButton.setAttribute("aria-expanded", "false");
			menuButton.setAttribute("aria-label", "Abrir menu");
		}
	};

	const toggleMenu = () => {
		const isOpen = mobileMenu.classList.toggle("active");

		menuIcon.classList.toggle("fa-bars", !isOpen);
		menuIcon.classList.toggle("fa-xmark", isOpen);
		menuButton.setAttribute("aria-expanded", String(isOpen));
		menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
	};

	menuButton.addEventListener("click", toggleMenu);
	menuButton.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggleMenu();
		}
	});

	// Fecha ao clicar em qualquer link ou botão dentro do menu móvel
	mobileMenu.querySelectorAll("a, button").forEach((element) => {
		element.addEventListener("click", () => {
			closeMenu();
		});
	});

	// Fecha ao clicar fora do navbar
	document.addEventListener("click", (event) => {
		if (!event.target.closest(".navbar") && mobileMenu.classList.contains("active")) {
			closeMenu();
		}
	});

	// Fecha com a tecla Escape
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
			closeMenu();
			menuButton.focus();
		}
	});

	// Fecha se a janela for redimensionada para tamanho desktop
	window.addEventListener("resize", () => {
		if (window.innerWidth >= 1280 && mobileMenu.classList.contains("active")) {
			closeMenu();
		}
	});
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

	