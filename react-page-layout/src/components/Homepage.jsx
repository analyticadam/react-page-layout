import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function Homepage() {
	return (
		<div className="homepage">
			<Header headerTitle="Employee Directory" />
			<SearchBar />
			<EmployeeList />
		</div>
	);
}

export default Homepage;
