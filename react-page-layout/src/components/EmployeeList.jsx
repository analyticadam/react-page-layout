import EmployeeListItem from "./EmployeeListItem";

const employees = [
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "James King",
		title: "President and CEO",
	},
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "Julie Taylor",
		title: "VP of Marketing",
	},
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "Eugene Lee",
		title: "CFO",
	},
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "John Williams",
		title: "VP of Engineering",
	},
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "Ray Moore",
		title: "VP of Sales",
	},
	{
		img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		name: "Paul Jones",
		title: "QA Manager",
	},
];

function EmployeeList() {
	return (
		<div className="employee-list">
			{employees.map((employee, index) => (
				<EmployeeListItem
					key={index}
					img={employee.img}
					name={employee.name}
					title={employee.title}
				/>
			))}
		</div>
	);
}

export default EmployeeList;
