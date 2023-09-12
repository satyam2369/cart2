import { UserGreeting } from "./UserGreeting";
import { GuestGreeting } from "./UserGreeting";
function Greeting(props) {

  //const isLoggedIn
  const isLoggedIn = Boolean(props.isLoggedIn);
  //const isLoggedIn=Boolean(false);
  // console.log("The value of fag is:"+isLoggedIn);
  if (isLoggedIn === false) {
    return <GuestGreeting />;
  }
  //else  //if (isLoggedIn=='false') ;  
    return <UserGreeting />;
}

export default Greeting;