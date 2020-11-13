const makeDiv = (parentID, childID, htmlToUse, referenceChild) => {
	const parent = document.querySelector(`${parentID}`);
	const child = document.createElement("div");
	child.setAttribute("id", `${childID}`);
	htmlToUse = htmlToUse || "";
	child.innerHTML = htmlToUse;

	// Default is put it last, otherwise, put it after the included child's ID
	referenceChild = referenceChild || "after";
	if (referenceChild == "after") {
		parent.appendChild(child);
	} else {
		parent.insertBefore(child, referenceChild);
	}
	
}

export {
	makeDiv
}