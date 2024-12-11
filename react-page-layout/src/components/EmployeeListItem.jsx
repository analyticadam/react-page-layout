function EmployeeListItem() {
	return (
		<div className="employee">
			<img
				src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
				alt=""
				style={{ width: "100px" }}
			/>
			<h4>Employee Name:</h4>
			<p>Job Title: Software Engineer</p>
			<p>Years of Experience: 5</p>
		</div>
	);
}

export default EmployeeListItem;
