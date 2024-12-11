import EmployeeListItem from "./EmployeeListItem";

const employees = [
	{ name: "Alice", title: "Software Engineer", experience: 5 },
	{ name: "Bob", title: "Product Manager", experience: 3 },
	// Add more employee objects here
];

function EmployeeList() {
	return (
		<div>
			{employees.map((employee, index) => (
				<EmployeeListItem key={index} {...employee} />
			))}
		</div>
	);
}
export default EmployeeList;
