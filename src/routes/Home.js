import useFetch from "../scripts/useFetch";
import UserList from "./UserList";

const Home = () => {
    
    const { data: users, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users/');
    
    return (
        <div>
            <div>{ isPending && <h1>Fetching data</h1> }</div>
            <div>{!isPending && !error && users && <UserList users={users}/> }</div>
            <div>{!isPending && error && <h1>{error }</h1> }</div>
        </div>
    );
}
 
export default Home;