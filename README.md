# reactRouterSPA
Small Demonstration of how react-router works with Single Page app and also change meta tags using react helmet.

A live example - http://harkirat-staticpage.s3-website-us-east-1.amazonaws.com/.

So here I used webpack to convert my JSX to a single a JS script and used that in my index.html.

So in webpages it would work like a SPA but in mobile devices About link open in new page( This is mainly because currently in facebook(Also facebook messenger app) and twitter browsers on app the back button does not work for SPA).

Directly landing on the page wont work because there is no server configured and its a static file, this can be done through nginx. So make nginx always proxy to port your index.html is running and return that to react router. The react router sweetly takes care of it to render your page.
