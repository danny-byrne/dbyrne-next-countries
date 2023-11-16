This is a simple app that calls the public https://restcountries.com/#rest-countries, and displays a list of all the worlds countries with basic statistics. If you click on a certain country, a chart should pop up in a modal and show the population and area in km/sq. Maybe a cool improvement would be to make a call to OpenAI to display some kind of blurb about the country as well.

I had some issues with the jest test runner not playing well with either Nextjs or Node, which I was trying to resolve until I ran out of time. There are three tests, two of them were working, now one fails because of this error. I've bypassed the third for now.

Another improvement that could be made is filtering based on continent, min/max population/area, it could be a useful place to implement useMemo.

For responsive design Tailwind offers this syntax w-96 md:w-1/2 for specificying Country cell width. Another improvement that I would have made would be to disable the Chart Modal in mobile implentation and instead have the chart appear on a side drawer.

Summmary: -I used Next.js because it is easy to bootsrap a simple project. -Tailwind.css was used for styling because it's simple to whip up a quick project using inline tags that compute to css. -I used Chart.js to display

Getting Started
First, install dependencies:

`npm install`

Second, run the development server:

`npm run dev`

Open http://localhost:3000 with your browser to see the result.
