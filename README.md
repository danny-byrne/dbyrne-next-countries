This is a simple app that calls the public https://restcountries.com/#rest-countries, and displays a list of all the worlds countries with basic statistics. If you click on a certain country, a modal should pop up with a chart showing the population and area in km/sq. Maybe a cool improvement would be to make a call to OpenAI to display some kind of blurb about the country as well.

Another enhancement that I would make is filtering based on continent, min/max population/area, it could be a useful place to implement useMemo.

For responsive design Tailwind offers this syntax w-96 md:w-1/2 for specificying Country cell width (see CountryCell component). Another improvement that I would have made would be to disable the Chart Modal in mobile implentation and instead have the chart appear on a side drawer.

Summmary:
-I used Next.js because it is easy to bootsrap a simple project.
-Tailwind.css was used for styling because it's simple to whip up a quick project using inline tags that compute to css.
-I used Chart.js to display area and population. Given more time I would have implemented a call to OpenAI to return structured data with certain analytics and display them in D3.

Getting Started
First, install dependencies:

`npm install`

Second, run the development server:

`npm run dev`

Open http://localhost:3000 with your browser to see the result.

`npm run test`

Will run jest and react testing library tests.
