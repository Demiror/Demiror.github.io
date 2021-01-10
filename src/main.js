import App from './App.svelte';

const isDev = false;

function delay(ms) {
	if (isDev) {
		return
	} else {
		return new Promise((resolve, reject) => setTimeout(resolve, ms));
	}
}

window.onload = async () => {
	let elem = document.querySelector(".loading")
	document.querySelector(".lds-ring").remove()
	await delay(800);
	elem.style.opacity = 0
	await delay(300);
	elem.remove()
}

const app = new App({
	target: document.getElementById("main")
});

export default app;