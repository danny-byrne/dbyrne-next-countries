import CountriesContainer from "./containers/CountriesContainer";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function Home() {
  return (
    <div>
      <main>
        <ErrorBoundary>
          <CountriesContainer />
        </ErrorBoundary>
      </main>
    </div>
  );
}
