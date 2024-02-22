import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./appbar-style.css";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'; 
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Appbar = () => {
    const [isCollapsed, setisCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    return (
        <div>
            <Sidebar
                className="appbar"
                collapsed={isCollapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                breakPoint="md"
            >
                <div
                    style={{ display: "flex", flexDirection: "column", height: "100%", background: 'white' }}
                >
                    <div style={{ flex: 1, marginBottom: "32px" }}>
                        <Menu>
                            <MenuItem
                                className="d-flex justify-content-end"
                                onClick={() => setisCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            >
                                {!isCollapsed && (
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                    >
                                        <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>
                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        {/* LOGO */}
                                        <img className="logo" src={logo} alt="logo" />
                                    </Box>
                                </Box>
                            )}
                            {/* Link from router. */}
                        
                                <Link to="/customer" className="link">
                                    <MenuItem className="menu-item" icon={<PeopleAltOutlinedIcon />}>
                                    ลูกค้า
                                    </MenuItem>
                                </Link>
                        </Menu>
                    </div>
                </div>
            </Sidebar>
            <main>
                {/* Toggle on Mobile Display. */}
                <div style={{ padding: "16px 2px ", color: "rgba(207, 219, 251, 0.9)" }}>
                    <div style={{ marginBottom: "16px" }}>
                        {broken && (
                            <IconButton onClick={() => setToggled(!toggled)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Appbar;