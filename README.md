## Setup 
Since the project is build with node, all usual node commands work. <br/> You can install and uninstall packages using `npm i <pkg>`, `npm uninstall <pkg>`, etc.. <br /> <br/>
To install the modules needed to run everything, just run `npm install` <br/>

## Creating development Build
To create an optimized production build with fast refresh run: 
`npm run dev` <br /> from within ``mig-site`` <br/> <br/>

To view a locally hosted preview, go to `http://localhost:3000` <br/> <br/>

Generally, you should only need to run `npm run dev` once, as you save the files you are working on, the frontend should update itself automatically (you don't even need to reload the page in your browser). You can read more about the details of fast refresh if interested here: https://nextjs.org/docs/basic-features/fast-refresh

## Project Architecture 

## NextJS Basics

## Conventions
Code: Try to stick to google javascript conventions and docstrings, no worries if we don't completely, just a general rule of thumb. <br/> <br/>

Features and PRs: Nothing crazy, to keep things simple lets do feature branches off `develop` like `john/cool-new-feature`. Put up pull request back into `develop` so that we have another person glance at things and can be most efficient. <br/><br/> For small things like tiny bugfixes and formatting just commit on `develop`, for large features that require complex integrations try to write unit tests where it makes sense, nothing crazy here.

## Timeline
Goal: be done by the start of school
