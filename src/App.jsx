import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ContextExample } from "./hooks/use-context";
import { DeferredValueExample } from "./hooks/use-deferred-value";
import { UseIdExample } from "./hooks/use-id";
import { EffectExample } from "./hooks/use-effect";
import { ImperativeHandleExample } from "./hooks/use-imperative-handle";
import { InsertionEffectExample } from "./hooks/use-insertion-effect";
import { LayoutEffectExample } from "./hooks/use-layout-effect";
import { ReducerExample } from "./hooks/use-reducer";
import { RefExample } from "./hooks/use-ref";
import { SyncExternalStoreExample } from "./hooks/use-sync-external-store";
import { TransitionExample } from "./hooks/use-transition";
import { StateExample } from "./hooks/use-state";
import Home from "./hooks/home";

const appStyle = {
  display: "flex",
};

const mainContentStyle = {
  marginLeft: "1rem", // Adjusted based on sidebar width
  padding: "20px",
  width: "100%", // Ensures content takes available space
  boxSizing: "border-box",
};

export default function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Sidebar />
        <div style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<StateExample />} />
            <Route path="/use-context" element={<ContextExample />} />
            <Route path="/use-deferred-value" element={<DeferredValueExample />} />
            <Route path="/use-id" element={<UseIdExample />} />
            <Route path="/use-effect" element={<EffectExample />} />
            <Route path="/use-imperative-handle" element={<ImperativeHandleExample />} />
            <Route path="/use-insertion-effect" element={<InsertionEffectExample />} />
            <Route path="/use-layout-effect" element={<LayoutEffectExample />} />
            <Route path="/use-reducer" element={<ReducerExample />} />
            <Route path="/use-ref" element={<RefExample />} />
            <Route path="/use-sync-external-store" element={<SyncExternalStoreExample />} />
            <Route path="/use-transition" element={<TransitionExample />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
