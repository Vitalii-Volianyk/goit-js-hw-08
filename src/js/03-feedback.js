import Throttle from "lodash.throttle";

(() => {
	const form = document.querySelector(".feedback-form");
	const email = document.querySelector("input");
	const message = document.querySelector("textarea");

	let data = {};

	form.addEventListener("input", Throttle((event) => {
		data[event.target.name] = event.target.value;
		data[event.target.name] = event.target.value;
		if (data) {
			localStorage.setItem("feedback-form-state", JSON.stringify(data));
		}
	}, 500));

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		form.reset();
		localStorage.removeItem("feedback-form-state");
		data = {};
	});

	if (localStorage.getItem("feedback-form-state")) {
		data = JSON.parse(localStorage.getItem("feedback-form-state"));
	}
	email.value = data.email || "";
	message.value = data.message || "";
})();

