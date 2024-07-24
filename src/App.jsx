import Layout from './components/Layout';
import yogaImg from './assets/yoga.png';
import Retreats from './components/Retreats';

function App() {
  return (
    <div className="font-source text-f-primary">
      <Layout>
        <header className="bg-secondary flex flex-col min-h-[50vh] rounded-md px-6 py-4">
          <div
            style={{
              backgroundImage: `url(${yogaImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: '100% 52%'
            }}
            className="flex-1 rounded-md bg-primary"
          ></div>
          <h1 className="text-2xl text-semibold pt-6">
            Discover Your Inner Peace
          </h1>
          <h6 className="py-4">
            Join us for a series of wellness retreats designed to help you find
            tranquility and rejuvenation.
          </h6>
        </header>
        <Retreats />
      </Layout>
    </div>
  );
}

export default App;
