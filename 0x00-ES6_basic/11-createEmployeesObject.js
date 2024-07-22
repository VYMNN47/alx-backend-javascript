export default function createEmployeesObject(departmentName, employees) {
  const employ = { [departmentName]: employees };

  return employ;
}
