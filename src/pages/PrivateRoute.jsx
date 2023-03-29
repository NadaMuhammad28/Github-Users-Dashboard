import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { supabase } from "../client";
import Loader from "../components/Loader";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { setAuthUSer, authUser } = useGlobalContext();
  //see if user is auth
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const checkUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await supabase.auth.getSession();
      if (!data.session) throw Error("not auth");
      setAuthUSer(data.session.user.user_metadata.user_name);
      setIsLoading(false);
    } catch (e) {
      navigate("/login");
      // console.log(e);
    }
  };

  useEffect(() => {
    checkUser();
  }, [authUser]);
  if (isLoading) return <Loader />;

  if (authUser) {
    return children;
  }
};

export default PrivateRoute;
