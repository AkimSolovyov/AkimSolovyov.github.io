Known issues:

1. Form inputs "select course" and "adress" are div's for better appearance and usability. 
There are two hidden inputs with specific id's which get their values from those div's on submit using JavaScript.
"Adress" div has contenteditable attribute, "select course" has commented js-code for future usage.

2. There could be appearance issues concearning hover effects and animations in older browser versions and in 
Safari 6+. (Tests were run under Safari 5.1.7 for OS Windows)

3. First version used .svg for logo, but after discovering it's disappearence in Safari, .png were used instead as
more reliable approach.

4. IE renders inputs differntly, and "adress" div mentioned in first paragraph is displayed without clearing 
content icon on focus. 

5. There are JS code for selecting all content on click for all form inputs. It differs for real inputs and fake ones.

All tests were performed on latest Chrome, Firefox, IE and Safari 5.1.7 for OS Windows.
