Project made for Orange Coast College Fall 2020 CS220 (Software Engineering) taught by Professor Sara Ghadami.

Code style guidelines:
- Use CSS modules. No react-css-modules because it makes it difficult to order classes.
- Order class selectors by generic to specific (e.g. sharedStyles -> landingStyles -> styles)
- The CSS cascade stack for each element needs to be in perfect order (check in Inspect)
- Order imports by libraries -> shared components -> shared styles -> styles -> children components.
- Leave a blank line at the end of each file.
- Use React Fragments (<>) to create non rendering parent elements.
- Use functional components with arrow functions.