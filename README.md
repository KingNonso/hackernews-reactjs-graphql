# Hackernews Clone Project - Reactjs/ GraphQL

Note that this app speaks to the GraphQL backend at [http://graphql.kingnonso.com/graphql](http://graphql.kingnonso.com/graphql) using a GraphQL client

## Project Best Practices

In this project, we will try as much as possible to maintain the following guidelines

# SOLID
Try to be as SOLID as possible. Because until we have a solid test framework, these principles will keep us working sanely together so you don't break things when you change them
Models are closed for modification and only open for extension So also are views
 
SOLID is an acronym for 5 important design principles when doing OOP (Object Oriented Programming).
The intention of these principles is to make software designs more understandable, easier to maintain and easier to extend.
## S — Single responsibility principle
In programming, the Single Responsibility Principle states that every module or class should have responsibility over a single part of the functionality provided by the software.
##  O — Open/closed principle
In programming, the open/closed principle states that software entities (classes, modules, functions, etc.) should be open for extensions, but closed for modification.
## L — Liskov substitution principle
More generally it states that objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. This one is probably the hardest one to wrap your head around when being introduced for the first time. Don't worry, if you don't get it. Neither do I. ;)
## I — Interface segregation principle
In programming, the interface segregation principle states that no client should be forced to depend on methods it does not use. Put more simply: Do not add additional functionality to an existing interface by adding new methods. Ummmm... don't get it yet.. OK. Just remember Rule 2. Open/closed - they are related kinda
## D - Dependency inversion principle
In programming, the dependency inversion principle is a way to decouple software modules. This principle states that
- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

## Git - Github - Pull Requests
Feel free to open pull requests before you've finished your code or tests. Opening your pull request soon will allow others to comment on it sooner.
A checklist of things to remember when making a feature:
* Write tests if applicable
* Note important changes in the commit
* Update the README file if needed
* Update the documentation if needed
* Make small commits per time and per PR (Avoid large PRs)

### Code Review Standard
All PRs raised before the Daily Standup - will be closed same day - expect: a merge, a decline or a link for a conversation
If it is declined (don't feel bad), you have till the next Standup to make a fix
Avoid large PRs... it is better you make bitwise pushes every 20-60hrs, than one large PR after 7 days. Your PR should house a cohesive thought (code implementation)
If you have any concerns... let's talk on slack...

Now when you make a PR to dev
Ensure in your PR description you write out everything you worked on and how it is supposed to work (1-2 paragraphs is ok... no long story)
If you did something fishy... explain your thought process - what you want here is insight into how it can be improved

## Developing in React
Here's the link to the full idea on medium
* [Link to Part 1](https://onoufriosm.medium.com/react-best-practices-react-at-scale-part-1-74234290ef19)
* [Link to Part 2](https://onoufriosm.medium.com/react-best-practices-react-at-scale-part-2-11b69b96f5e)

### 1. Think in Components
Components have been a great way to encapsulate logic and that’s why we should strive for small, focused components which are easy to reason about, test and reuse.

__For best results we should delegate any business logic into a nested component if possible. The deeper in the components tree the logic lives the better.__

### 2. Components should have flexible render methods
Components should allow flexibility to render in different shapes. This increases re-usability of components.
