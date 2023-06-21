import "./App.css";
import { Button } from "./components/button/button";

function App() {
  return (
    <div className="container">
      <div className="container__button">
        <Button>Default</Button>
        <Button variant="default">Default</Button>
        <Button variant="outline">Default</Button>
        <Button variant="text">Default</Button>
        <Button disabled variant="text">
          Default
        </Button>
      </div>

      <div className="container__button">
        <Button color="primary">Default</Button>
        <Button color="primary" variant="default" startIcon="close">
          Default
        </Button>
        <Button color="primary" variant="outline">
          Default
        </Button>
        <Button color="primary" endIcon="close" startIcon="menu" variant="text">
          Default
        </Button>
        <Button color="primary" disabled variant="text">
          Default
        </Button>
      </div>

      <div className="container__button">
        <Button color="secondary">Default</Button>
        <Button color="secondary" variant="default">
          Default
        </Button>
        <Button color="secondary" variant="outline">
          Default
        </Button>
        <Button color="secondary" variant="text">
          Default
        </Button>
        <Button color="secondary" disabled variant="text">
          Default
        </Button>
      </div>

      <div className="container__button">
        <Button color="danger">Default</Button>
        <Button color="danger" variant="default">
          Default
        </Button>
        <Button color="danger" variant="outline">
          Default
        </Button>
        <Button color="danger" variant="text">
          Default
        </Button>
        <Button color="danger" disabled variant="text">
          Default
        </Button>
      </div>
    </div>
  );
}

export default App;
