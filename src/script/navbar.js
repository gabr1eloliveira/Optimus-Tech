document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector(".nav-menu__btn");
	const mobileMenu = document.querySelector(".nav-menu__mobile");
	const menuIcon = menuButton?.querySelector("i");

	if (!menuButton || !mobileMenu || !menuIcon) {
		return;
	}

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
});