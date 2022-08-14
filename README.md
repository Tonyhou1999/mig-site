## Setup 
Since the project is build with node, all usual node commands work. <br/> You can install and uninstall packages using `npm i <pkg>`, `npm uninstall <pkg>`, etc.. <br /> <br/>
To install the modules needed to run everything, just run `npm install` <br/>

## Creating development Build
To create an optimized production build with fast refresh run: 
`npm run dev` <br /> from within ``mig-site`` <br/> <br/>

To view a locally hosted preview, go to http://localhost:3000 <br/> <br/>

Generally, you should only need to run `npm run dev` once, as you save the files you are working on, the frontend should update itself automatically (you don't even need to reload the page in your browser). You can read more about the details of fast refresh if interested here: https://nextjs.org/docs/basic-features/fast-refresh



## NextJS Basics
NextJS is a very straightforward and very lightweight react framework, getting up to speed should be quick. It basically builds on top of plain react to give us some dope features that will save us a lot of time. <br/> <br/>
For some useful and quick info check out: 
[https://nextjs.org/docs/getting-started] this tutorial and surrounding pages encapsulates everything you need to know about Next 
<li> NextJS page routing: https://nextjs.org/docs/routing/introduction
<li> Build in CSS support, styled-jsx: https://nextjs.org/docs/basic-features/built-in-css-support
<li> ES6 (extremely useful): https://medium.com/@kavisha.talsania/top-10-es6-features-every-javascript-developer-must-know-4c81ec54bbcd
<li> React components and props: https://reactjs.org/docs/components-and-props.html 


## Flow / Project Structure 
Generally, the project Structure goes like this
```
mig-site
│   README.md
│   global .gitignore
|   node stuff
│   .next/
└───components
│   │
│   └───component1
│       │   component1.jsx // the component and subcomponents needed
│       │   index.js // default exports the react component 
│       │   component1.module.css // styling needed for components
│   
└───layouts
    │   layout1.jsx
    │   layout1.module.css
|
└───pages
    │  
    └───page1
        │  index.js
        |  page1.module.css
    └───page2
        | index.js // can use jsx inline styling 
        └───page3 that lives at migbc.org/page2/page3
           | index.js
```
The pages folder is not a convnetion but is actually how the next linking system works. If you setup things in this manner, next will automatically create all the links based on the directory paths. Since Next optimizes the build based on the structure of pages, don't add anything except page javascript to the `pages/` directory or bad things will happpen :). You can use next/Link to easily create links anywhere. <div />

Flow: Just make use of react and ES6 features to make things as modular and scalable as possible. Balance cost of implementation with cost of having to refactor code in the future.  

## Conventions
Code: Try to stick to google javascript conventions and docstrings, no worries if we don't completely, just a general rule of thumb. <br/> <br/>

Features and PRs: Nothing crazy, to keep things simple lets do feature branches off `develop` like `john/<Jira ticket num eg. MS-1>/cool-new-feature`. Put up pull request back into `develop` so that we have another person glance at things and can be most efficient. <br/><br/> For small things like tiny bugfixes and formatting just commit on `develop`, for large features that require complex integrations try to write unit tests where it makes sense, nothing crazy here. <br /> <br />

Tasklist and keeping on track: Use this

## Timeline
Goal: Serve up static MVP from aws bucket @ migbc.org by start of school.
