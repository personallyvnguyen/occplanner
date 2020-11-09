Project made for Orange Coast College Fall 2020 CS220 (Software Engineering) taught by Professor Sara Ghadami.

Project Architecture:
- CSS modules. No react-css-modules because it makes it difficult to order classes.
- Created an alias for the shared folder in webpack.
- Containers contain smart components, they hold state and they don't create markup on their own.

Libraries Used:
- Create React App v2 Boilerplate
- React-Redux for State Management
- Store.js for Local Storage

Code Guidelines:
- Order class selectors by generic to specific (e.g. sharedStyles -> landingStyles -> styles).
- The CSS cascade stack for each element needs to be in order (check in Chrome Inspect).
- Order imports based on what makes sense structurally.
- No blank line at end of file.
- Use functional components with arrow functions.
- Max column size of 80.
- Export default use functions to export same line and for sub-components use arrow functions.
- Export is at the top of the file.
- Leave a space before the return if the code before it also has spacing.
- Only import libraries at the component that it's needed. Don't pass down props if not needed.
- No spacing inside same line curly braces.
- Don't use Fragments that often.
- Only nest folders if necessary.
- If a folder has only folder items, then no index.js. If it also has files, then an export index.js is fine.
- Only plain text can be greater than 80 columns and they should be on their own in the line.
- Everything is same line if possible unless it's greater than 80 columns.
- Object destructuring in the parameters list should not have spacing if the value is a string.
- If and arrow functions should be one line too if shorter than 80 columns.
- CSS Rules should not have a line between them if they're of the same component class.
- If it has a pages folder, then put all components in a component folder. Otherwise you can keep components at the same level.
- Non components go before default export. Subcomponents go after the export.
- Just have multiple import lines. It's not worth the annoying file structure.
- But sometimes, you have to follow the standard of the industry, even though it makes it harder to read.
- I'll sacrifice having more imports for a clearer folder structure.
- That's as nested as you go. No more nesting. No more confusing index.js export files.

Notices:
- You can pass props like className to items just by doing {...props}.
- Order styles index.js export files by cascade order.
- If you architect your code correctly, you won't have to import a bunch of components all into a single file. Break it up.
- It's useful to keep the shared folder expanded.

Todo:
- Will returning a value in useEffect break it?
