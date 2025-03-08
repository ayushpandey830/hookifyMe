import { Link } from "react-router-dom";

const sidebarStyle = {
    position: "sticky",
    top: "0",
    left: "0",
    height: "95vh",
    width: "20rem",
    backgroundColor: "#222",
    padding: "20px",
    color: "white",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
    overflowY: "auto",
    scrollBehavior: "smooth",

    /* Custom Scrollbar */
    scrollbarWidth: "thin",
    scrollbarColor: "#888 #222",
};

/* For Webkit-based browsers (Chrome, Edge, Safari) */
const customScrollbar = `
    ::-webkit-scrollbar {
        width: 8px;
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
    padding: "12px",
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid #444",
    transition: "background 0.3s, transform 0.2s",
};

const sidebarItemHover = {
    backgroundColor: "#444",
};

const Sidebar = () => {
    return (
        <div style={sidebarStyle}>
            {/* Inject Custom Scrollbar Styles */}
            <style>{customScrollbar}</style>

            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Hooks</h2>

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
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = sidebarItemHover.backgroundColor;
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    {hook.replace("use-", "use").charAt(0).toUpperCase() + hook.replace("use-", "use").slice(1)}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
