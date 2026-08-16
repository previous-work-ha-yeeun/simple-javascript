# javascript
simple and basic javascript work



### 01_self_introduction
```
REQUIREMENTS
  Write a single HTML document with the following:
  CONTENT: Include information about yourself
  DESIGN: Ensure the page includes:
    - A non-static CSS controlled layout (eg: use flexbox or gridbox for page layout)
    - The layout must be responsive to clients of all sizes (from smartphone to desktop) and at least two CSS media queries must be used to adjust the layout. 
    - Text must use at least one non-standard font (either using a font server such as Google fonts or using CSS @font-face)
    - All HTML content should be semantically marked up.
    - CSS id, class and pseudoclass selectors must be demonstrated.
  SCRIPTING: Include somewhere in the HTML an h2 tag with the id="javascript_message": 
    document.getElementById("javascript_message").innerHTML = "Student Name";

```


### 02_conditional_decisions
```
REQUIREMENTS
  Write a well styled, valid and semantic HTML document with some of its content calculated and provided by JavaScript.
  Use JavaScript variable values to apply the following .innerHTML content:
    - Apply the user’s name to a <h2> element
    - Apply to a <p> element the user’s name as well as including both single and double quotations, eg: Shania Smith says: “It’s the greatest show on earth!”
  Use separate HTML sections for presenting the different ‘phases’ of the processing.
  Use JavaScript variables to display the associated values:
    Display in a section for User Data: Show the user’s Age, Quantity of tickets, and Cash information with each data point applied to one of three <li> in an <ul>
    Display in a section for Concert Data: Show the Minimum age to attend, Cost per ticket, and Tax Rate information with each data point applied to one of three <li> in an <ul>
    Use JavaScript to calculate and then display to the browser the following information:
      Display in a section for ‘Processing’
      - The before-tax cost of the purchase
      - The after-tax cost of the purchase
      - If the user can afford the purchase, display a message indicating so
      - If the user is exactly old enough to purchase, display a statement saying so
      - If the user if more than old enough, display a message saying so
      Display in a section for ‘Results’
      - If the user was not old enough to purchase, display a message saying so. Also display how many years more they would need to be in order to purchase
      - If the user cannot afford to complete the purchase, inform them so. Also display how much more money they would need in order to purchase
      - Display both the above messages if user is both too young and cannot afford it
      - If the user is old enough and can also afford the purchase, display a message confirming the purchase.
```



### 03_arrays
```
REQUIREMENTS
  Write an HTML page styled with CSS that includes a Javascript with the following characteristics:
  PART ONE
    - Use array.push() to add at least three more first names to the 'students' array. One of those three names should be your first name.
    - Display the total number of students in the array.
    - Iterate over the students array and display each student name as a LI tag in an UL
    - If a student name matches the targetName include a ‘target found’ message along with the student name in the LI tag.
    - After displaying the students array, provide a message that summarizes whether the target name was or was not found in the array. 
    - The test for determining if the targetName is found must be case insensitive. Investigate the string.toLowerCase() function.
  PART TWO
    Display the contents of the arrayOfNumbers array in a ul with each number shown in a separate li. After displaying the array data, display information about the contents of the array:
    - The sum of all numbers in the array
    - How many even numbers are in the array
    - How many odd numbers are in the array
    - The number 0 (zero) is neither even or odd, so doesn’t count
  PART THREE
    Use iterative code to display each of the numbers in the arrayOfNumbers array, and also for each number perform a count down or count up from that number to zero. For example, if the number is 4, display 4 3 2 1 0. If the number is -3 display -3 -2 -1 0.
```
