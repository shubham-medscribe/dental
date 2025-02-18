import { useNavigate } from "react-router-dom";

const useNavigateToContact = () => {
  const navigate = useNavigate();
  
  return () => navigate("/contact");
};

export default useNavigateToContact;