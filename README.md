This is a simple app that calls the public api https://restcountries.com/, and displays a list of all the worlds countries with basic statistics. If you click on a certain country, a modal should pop up with a chart showing the population and area in km/sq.

For responsive design Tailwind offers this syntax `w-96 md:w-1/2` for specificying Country cell width (see CountryCell component).

I have also added a `useMobileView` hook in CountriesContainer, which basically allows me to run a media query in React hook. A simple use case I have is changing the background color for the page once the page width decreases below 767 pixels.
This npm package `react-responsive` was necessary because on a Next.js app, the window object is not available to qeury values from since it is server side rendered.

A more substantial implementation for this would be to instead have the chart appear in a side drawer on mobile.

Summmary:

-I used Next.js because it is easy to bootstrap a simple project.

-Tailwind.css was used for styling because it's simple to whip up a quick project using inline strings that compute to css.

-I used Chart.js to display area and population. Given more time I would have implemented a call to OpenAI to return structured data with certain analytics and display them in D3.

Getting Started
First, install dependencies:

`npm install`

Second, run the development server:

`npm run dev`

Open http://localhost:3000 with your browser to see the result.

`npm run test`

Will run jest and react testing library tests.
