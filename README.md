This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts You'll Need

In your terminal, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run deploy`

Currently configured to deploy the app to [GitHub Pages](https://onlplab.github.io/hexagon-app/). However, GitHub Pages should not be the app's permanent location. One of the reasons for that is that it seems that GitHub Pages doesn't fully support ReactRouter (ReactRouter is used in this app for swiching from page to page.

More info about Create React App deployment: https://facebook.github.io/create-react-app/docs/deployment

## Notes from [Hagar](https://github.com/strayblues)

26/9/2019<br>
Hello, new developer. Here are some notes regarding the current status of some features.

<ol>
<li>
<b>The instructions component in the Align screen/page</b> only contains mock data, hardcoded inside of the Align.js (located in src/components/pages) component. It isn't connected to anything. This feature needs to be further developed.
</li><br>
<li>
<b>Describe screen:</b> Incomplete. Here is some info about <b>design and implementation:</b> This feature requires communication between the DescriptionsForm.js component (src/components/DescriptionsForm.js) and its parent component, namely Describe.js (src/components/pages/Describe.js).

User input should be tracked and updated at least each time the user clicks the Enter key. The input should be split into strings and pushed into an array named "descriptions". The array should update for each new "Enter" sign added or deleted, in order to keep the line numbers correct and up to date.

I have tried two different ways of handling the numbering. You'd be able to see those by switching branch to `split-to-paragraphs`. I suggest you either try to continue one of these solutions or start this feature from the beggining in a new branch.

<ol>
<li>
One way I've tried was to create numbered rows manually (which almost worked properly, but not completely). I wrote some inline comments in Describe.js specifying the order of implementation I had in mind for this functionality. I hope it helps to figure out how to continue this in case you wish to.
</li><br>
<li>
The other method I stated implementing was to use a library for code highlighting named PrismJS. This might work well for you. I tried adding PrismJS and ReactPrism. <a href="https://pathof.dev/blog/code-highlighting-in-react-using-prismjs">The tutorial for regular prismjs in React</a> looks more promising than the documentation for react-prism.<br><br>
On the feature branch, (split-to-paragraphs), the prismjs and react-prism libraries are imported into DescriptionForm.js
</ol>
</li><br>
<li>
<b>Align.js: </b>note that the <b>"Done" and "Next" buttons</b> are not fully implemented (not fully functional). For one, on the Align screen/page the colors of the buttons changes after the user gets the last piece of instructions, yet the buttons' activity doesn't really change from ebabled to disables and vice versa.

There is no mockup for this, but I reckon that by playing with these buttons you'd be able to understand what I was the UX/UI intention in this.

</li>
<li>
<b>Navbar:</b> in the end the app won't need a navbar and you should remove it from use (you can find it at: src/components/UI/Navbar.js along with other UI components like Header and Footer, which we also don't want to show on the screen right now).

The nabvar component is only there for our convenience during development, while the different parts of the app are not yet fully connected to one another.

Eventually, moving from page to page, or step to step, should only be done using "Done" buttons.

</li>
<li>
<b>Color picker:</b> On the right, there's a smaller circle indicating the currently selected color. This was made for testing if the color picker works. It does, and the currently picked color is also marked by a dark shadow. Still, the small circle may be good as an aditional indicator. Consider removing or keeping it. This is totally up to you and the product team, and whatever you think will be clearest to the user(s).
</li><br>
<li><b>Verify</b> is a component for a separate but similar app. It should get its layout from the Describe&Align task, but it shouldn't be on the same url. I think there's a way to do this without creating two different apps. I suggest you try and look it up on Google.
<b>Note:</b> The two apps, Describe&Align and Verify should share a database or at least share the task IDs. <b>Why?</b> For one, because the Verify app will be using tasks (drawings) previously used in the Describe&Align app. 
</li>
</ol>

## Other Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
