import Nav from "./Nav";
export default function Header({isAuthenticated}){
    return(
        <header>
            <Nav isAuthenticated={isAuthenticated}/>
        </header>
    );
}