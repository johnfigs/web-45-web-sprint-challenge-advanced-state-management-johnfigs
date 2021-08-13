# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

-The context API was meant to solve the problem of prop drilling in a component tree and the overhead/complexity that that introduced.  

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Reducers are pure functions that take the previous state and action, and return the new state. Actions, are objects that are taken in by our reducers. Store, holds the whole state tree and can only be changed by dispatching actions.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

-Redux-thunk allows us to return functions, instead of just actions. It allows us to work with promises. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

-The Context state management system is my favorite because it is the simplest to understand and the easiest to implement. It requires little setup unlike Redux. 