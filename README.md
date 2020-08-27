# Delete-Update-Guide


## Getting Started 




# 1. Delete a ticket



# Project 1 Practice Assessment

As a group of 3 or 4, you will be editing the JS file in an HTML/CSS/JS repl to create a functioning app modeled after the demo below.

View a demo of the app we will be building here: https://project-1-assessment-practice-2.cogilvy.repl.co/

---

## Getting Started

1. Fork and clone this repo to your computer
2. Install necessary node modules with ```js npm install```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script defer src="script.js"></script>
  </head>
  <body>
    <div>
      <input id="num1"> + <input id="num2">
    </div>
    <button>=</button>
    <h1>RUNNING TOTAL: <span></span></h1>
  </body>
</html>
```

3. Copy the following code into your CSS file:

```css
html, body {
  height: 100%;
}

html, * {
  box-sizing: border-box;
  outline: none;
}

* {
  font-size: 20px;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}

button, input {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid grey;
}

button:hover {
  background-color: darkgrey;
  color: white;
}

h1 {
  margin: 0;
}
```

4. Edit your JS file to make the app function just like the demo. **DO NOT ALTER THE HTML OR CSS FILES!**

---

## Application Requirements

1. You will need to create three functions. An initialize function, a render function, and a function to handle a user clicking the '=' button.

2. As a user, when I enter two numbers (positive or negative) into the input fields and click the '=' button, the numbers should be added together, and the sum of the two numbers should be added to the running total at the bottom of the page. Once the sum has been added to the running total, the inputs should be cleared.

3. If the running total is greater than or equal to 0, there should be a '+' in front of the number, and they should both be green.

4. If the running total is less than 0, there should be a '-' in front of the number, and they should both be red.

5. If the user has not entered a value into both input fields, the '=' button should not work.

**Make sure to keep looking back at the demo application to check the functionality is the same as your application!**
