import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar({ tree }) {
    const location = useLocation();
    const [expanded, setExpanded] = useState({});

    const toggle = (path) => {
        setExpanded((prev) => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    const renderMenu = (node, level = 0) => {
        const hasChildren = node.children && node.children.length > 0;
        const isExpanded = expanded[node.link];

        return (
            <div key={node.link} className={`menu-item level-${level}`}>
                <div className="menu-title">
                    <Link
                        to={node.link}
                        className={`menu-link ${location.pathname === node.link ? "active" : ""
                            }`}
                    >
                        {node.title}
                    </Link>
                    {hasChildren && (
                        <button
                            onClick={() => toggle(node.link)}
                            className={`expand-btn ${isExpanded ? "expanded" : ""}`}
                            aria-label={isExpanded ? "Collapse submenu" : "Expand submenu"}
                        >
                            ►
                        </button>
                    )}
                </div>

                {hasChildren && isExpanded && (
                    <div className="submenu">
                        {node.children.map((child) => renderMenu(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return <aside className="sidebar">{renderMenu(tree)}</aside>;
}

export default Sidebar;
