window.onload = function() {
	var elem = document.getElementById('hplogo');
	elem.parentNode.removeChild(elem);

	var search = document.querySelector("input.gLFyf.gsfi");
	search.setAttribute("placeholder", "Subscribe to PewDiePie...")

	var img = document.createElement("img");
	img.src = "https://media.giphy.com/media/oNwtfA16trRv0nSCez/giphy.gif";
	img.setAttribute("id", "custom-g");
	
	var img2 = document.createElement("img");
	img2.src = "https://media.giphy.com/media/lzCY0C6M50jbe29R1B/giphy.gif";
	img2.setAttribute("id", "custom-load");

	var img3 = document.createElement("img");
	img3.src = "https://i.imgur.com/cpeVBCj.png";
	img3.setAttribute("id", "custom-last");

	var parent = document.getElementById("lga");
	parent.appendChild(img);
	parent.appendChild(img2);
	parent.appendChild(img3);
};

