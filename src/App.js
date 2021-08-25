import "./App.css";
// import OrganizationGraph from "./components/OrganizationGraph";
import FlowAnalysisGraph from "./components/FlowAnalysisGraph";

function App() {
    return (
        <div className="App">
            <div className="graph-wrapper">
                <div className="graph-item">
                    <FlowAnalysisGraph></FlowAnalysisGraph>
                </div>
                {/* <div className="graph-item">
                    <OrganizationGraph></OrganizationGraph>
                </div> */}
            </div>
        </div>
    );
}

export default App;
