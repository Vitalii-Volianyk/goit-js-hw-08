import Player from "@vimeo/player";
import Throttle from "lodash.throttle";
(() => {
	const iframe = document.querySelector("iframe");
    const player = new Player(iframe);

    player.play();
	player.on("loaded", function () {
		if (localStorage.getItem("videoplayer-current-time")) {
			player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
		}
	});
	player.on("timeupdate", Throttle((data)=>{
		localStorage.setItem("videoplayer-current-time", data.seconds);
	}, 1000));
})();