function EmployeeListItem({ img, name, title }) {
	return (
		<div className="employee">
			<img src={img} alt="Profile" />
			<div>
				<h4>{name}</h4>
				<p>{title}</p>
			</div>
		</div>
	);
}

export default EmployeeListItem;
