import { Link } from "react-router-dom";

const sidebarStyle = {
    position: "sticky",
    top: "0",
    left: "0",
    height: "calc(100vh - 50px)", // Adjust based on navbar height
    width: "20rem",
    backgroundColor: "#222",
    padding: "20px",
    color: "white",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
    overflowY: "auto",
    scrollBehavior: "smooth",
    display: "flex",
    flexDirection: "column",

    /* Custom Scrollbar for Firefox */
    scrollbarWidth: "thin",
    scrollbarColor: "#888 #222",
};


/* WebKit-based browsers (Chrome, Edge, Safari) */
const customScrollbar = `
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #222;
    }
    ::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #888;
    }
`;

const sidebarItemStyle = {
    display: "block",
    padding: "14px",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background 0.3s, transform 0.2s",
    fontSize: "1rem",
    fontWeight: "bold",
    
};

const Sidebar = () => {
    return (
        <div style={sidebarStyle}>
            {/* Inject Custom Scrollbar Styles */}
            <style>{customScrollbar}</style>

            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>React Hooks</h2>

            {[
                "use-state",
                "use-context",
                "use-deferred-value",
                "use-id",
                "use-effect",
                "use-imperative-handle",
                "use-insertion-effect",
                "use-layout-effect",
                "use-reducer",
                "use-ref",
                "use-sync-external-store",
                "use-transition",
            ].map((hook) => (
                <Link
                    key={hook}
                    to={`/${hook}`}
                    style={sidebarItemStyle}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#444";
                        e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.transform = "translateX(0)";
                    }}
                >
                    {hook.replace("use-", "use").charAt(0).toUpperCase() + hook.replace("use-", "use").slice(1)}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
