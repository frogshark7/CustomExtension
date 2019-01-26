window.onload = function() {
	var elem = document.getElementById('hplogo');
	elem.parentNode.removeChild(elem);

	var search = document.querySelector("input.gLFyf.gsfi");
	search.setAttribute("placeholder", "Search Google or type a URL")

	var img = document.createElement("img");
	img.src = "https://s2.gifyu.com/images/g-logo.gif";
	img.setAttribute("id", "custom-g");
	
	var img2 = document.createElement("img");
	img2.src = "https://s2.gifyu.com/images/load-logo.gif";
	img2.setAttribute("id", "custom-load");

	var img3 = document.createElement("img");
	img3.src = "https://i.imgur.com/STIn8KF.png";
	img3.setAttribute("id", "custom-last");

	var parent = document.getElementById("lga");
	parent.appendChild(img);
	parent.appendChild(img2);
	parent.appendChild(img3);
};

