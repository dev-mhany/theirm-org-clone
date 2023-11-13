import "./App.css";
import NavTabs from "./NavTabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavTabs />
          <button className="login-button">Log in</button>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Build your career as a risk professional</h1>
          <p>
            Discover our range of essential training courses and build the
            foundations of your risk career.
          </p>
          <button className="enroll-button">Enrol now »</button>
        </section>
        <section className="training-info">
          <h2>Training</h2>
          <p>
            With training courses covering a wide range of enterprise risk
            management topics, we can help build your career as a risk
            professional. All courses are delivered by industry experts so you
            can immediately apply the latest best practice. As well as being
            practical and interactive, the courses allow you to log CPD hours
            and some offer accreditation.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
