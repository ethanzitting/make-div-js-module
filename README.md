I've built this module primarily for my own use.\
It takes care of several portions of creating div elements in the DOM using JavaScript.

You can use it as follows:\
makeDiv(parentId, childId, htmlToUse, referenceChild);

parentId = the id of the parent element for your new div.\
childId = the id you want your new div to have.\
htmlToUse (optional) = the html you want inside your new div. If blank, it will not inlude anything.\
referenceChild (optional) = the ID of the child you want to place your new child above in the DOM. If blank, it will place your new child at the bottom.

If the innerHTML argument is missing, it will simply leave the innerHTML empty.\
If the last argument is missing, it will simply append the new div as the last child of the parent element.
