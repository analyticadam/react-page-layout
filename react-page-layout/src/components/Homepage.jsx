import SearchBar from "./SearchBar";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import EmployeeListItem from "./EmployeeListItem";

function Homepage() {
	return (
		<div className="page">
			<div>
				<Header headerTitle="Employee List" />
				<SearchBar />
				<EmployeeList />
			</div>
			<div>
				<Header headerTitle="Employee" />
				<EmployeeListItem />
			</div>
		</div>
	);
}

export default Homepage;
