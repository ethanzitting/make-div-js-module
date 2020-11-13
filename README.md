I've built this module primarily for my own use.\
It takes care of several portions of creating div elements in the DOM using JavaScript.

You can use it as follows:\
makeDiv(idOfParentElementYouWantToAppendTo, idOfYourNewDiv, innerHTMLYouWantInYourNewDiv (optional), idOfDivYouWantYourNewDivPlacedAboveInDOM (optional));

If the innerHTML argument is missing, it will simply leave the innerHTML empty.\
If the last argument is missing, it will simply append the new div as the last child of the parent element.
