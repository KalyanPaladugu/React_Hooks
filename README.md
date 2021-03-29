### React Hooks:

#### Summary
------------
* Hooks are new feature addition in react 16.8 version
* They allow you to use React features with out having to write a class
* Avoid the confusion of using `this` keyword
* Allow you to reuse statefull logic
* Organize the logic inside a component into resuable isolated units


+ By using `useState` we can initialize state and assign to a variable with usage of array destructuring.To update state we can use callback function (etc. :setCount)

### Rules of Hooks:
-------------------
* Only call Hooks at the Top level in component and not in conditions or loops
* call them from with in functional component not in normal javascript functions

### useState with previous state:
---------------------------------

* If we want to update data by using previous state values we have to pass a function  as argument for the setCount method that return with content of body 

### useState with Object:
-------------------------

* useState doesn't update and merge the object automatically like setState in class component. To overcome this we will use spread operator.