import { Box } from "@mui/material";
import "./header-style.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <Box className="header" display="flex" justifyContent="space-between" p={2}>
      {/* headerbar left */}
      <Box display="flex" borderRadius="10px" backgroundColor="#F5EFE7">
        <button onClick={() => navigate(-1)} className="btn-back">Back</button>
      </Box>

      {/* headerbar right */}
      <Box display="flex">
        <Card id="card" className="p-2">
          <div id="card-text">{localStorage.getItem('user_role')}</div>
        </Card>
      </Box>
    </Box>
  );
};

export default Header;