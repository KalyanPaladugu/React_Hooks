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

### useState with Array:
------------------------
* useState doesn't update and merge the Array automatically like setState in class component. To overcome this we will use spread operator.





## React component life-cycle:
------------------------------

* The lifecycle of the component is divided into four phases

    1. Initial Phase
    2. Mounting Phase
    3. Updating Phase
    4. Unmounting Phase


1. Initial Phase:
-----------------

+  Here, the component starts its journey on a way to the DOM. In this phase, a component contains the default Props and initial State. These default properties are done in the constructor of a component. The initial phase only occurs once and consists of the following methods.


`getDefaultProps()`

+ It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it.
getInitialState()
+ It is used to specify the default value of this.state. It is invoked before the creation of the component.

2. Mounting Phase:
-----------------

+ In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods

 
`componentWillMount()`

+ This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.

`componentDidMount()`

+ This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.

`render()`

+ This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.

3. Updating Phase:
------------------

+ It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself. Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods.

`componentWillRecieveProps()`

+ It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method.

`shouldComponentUpdate()`

+ It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.

`componentWillUpdate()`

+ It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.

`render()`

+ It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.


`componentDidUpdate()`

+ It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

4. Unmounting Phase:
--------------------

+ It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.

`componentWillUnmount()`

+ This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again



### React lifecycle methods:
---------------------------

* `componentWillMount` is executed before rendering, on both clientside and server side
* `componentDidMount` is executed after first render only on the client side
* `componentWillReceiveProps`  is invoked as soon as the props are updated before another render is called
* `shouldComponentUpdate` returns `true` or `false`which determines if the component will updates or not
* `componentWillUpdate` is called just before rendering
* `componentDidUpdate` is called just after rendering
* `componentWillUnMount` is called when the component is unmount from the DOM


## useEffect:
-------------

+ The Effect hook let's you perform side effects(timers,subscriptions etc...) in functional compnents
+ It is close replacement for componentDidMount,componentDidUpdate and componentWillUnount
+ useEffect runs(calls) after every single render, But in class component at initial render we have to execute code with `componentDidMount` after render we have to execute same code with `componentDidUpdate`

+ To conditionally execute useEffect we have to pass array(either props or state) as second parameter
+ If we want to cleanup code  we have to use componentWillUnmount() in class componet.But in hooks use useEffect() with in this try to return new function which will execute when the component is unmount

### useEffect with incorect dependency:

+ In the useEffect if you don't want to do rerender then give emptylist as second parameter.If you want to do any effects then give particular variable in an array
+ In case if you increment previous variable in setCount there is no need to include variable in array

### Fetching Data from REST API with useEffect:
---------------------------------
+ To fetch data from the api normally we use Ajax call or fetch API. In react we can use axios 'try to install axios by using command `npm install axios` 



## Context:
--------------
+ `Context` api provides a way to pass data through the component tree without having to pass props down manually at every level

    1. Create Context
    ```
    const UserContext=React.createContext()
    ```
    2. Provide value for the context(provide must wrap the children component with the value to be available)

    ```
     <UserContext.Provider value ={'kalyan'}>
          <ComponentC />
       </UserContext.Provider>
      
       ```
    3. Consume the context value in required component


    ```
    <ChanelContext.Consumer>
                                   {
                                       chanel =>{
                                           return (
                                               <h1> User is {user} and Chanel is {chanel}</h1>
                                           )
                                       }
                                   }
     </ChanelContext.Consumer>
                                
    ```

+ When we working on `useContext` the context creation and providing value is same as  context api but in consumption it is simple.

+ We have to pass contexts as argument for the `useContext` and then render in to jsx


## useReducer:
-------------

+ useReducer is a hook that is used for state management
+ useReducer is alternative to useState
+ useState is built using useReducer
+ syntax is `useReducer(reducer,initialSate)`

+ When handling object or array better to use `useReducer()` than `useState()`.If you want to use same code for different vaariables we can use multiple reducers.


### useReducer with useContext:
-------------------------------

+ useReducer state management
+ share state between components -Global state management
+ We can get global state by using useReducer with useContext

### Fetching data with useReducer:
----------------------------------

##### Data fetch with out useReducer( by using `useState()`):

+ To fetch data from REST  API we will use useState(for manage state) and useEffect(for side effects) .For making HTTP cal we use axios
+ Define state variables to fetch data for the components


##### Data fetch with `useReducer()`:

+ Here declare state variables as properties in initial object
+ Include reducer function and initialState object in useReducer
+ With the help useEffect we can dispatch our actions ,whether the data fetching is success or failed
+ In JSX we can include data with state object 
