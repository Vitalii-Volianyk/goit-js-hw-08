import Throttle from "lodash.throttle";

(() => {
	const form = document.querySelector(".feedback-form");
	const email = document.querySelector("input");
	const message = document.querySelector("textarea");
	
	let data={"email":"","message":""};

	form.addEventListener("input", Throttle((event) => {
		if (event.target.nodeName==="INPUT") {
			data.email = event.target.value;
		} else if (event.target.nodeName==="TEXTAREA") {
			data.message = event.target.value;
		}
		if (data) {
			localStorage.setItem("feedback-form-state", JSON.stringify(data));
		}
	}, 500));

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log(data);
		form.reset();
		localStorage.removeItem("feedback-form-state");
		data = {"email":"","message":""};
	});
	
	if (localStorage.getItem("feedback-form-state")) { 
		data = JSON.parse(localStorage.getItem("feedback-form-state"));
	}
	email.value = data.email;
	message.value = data.message;
})();

