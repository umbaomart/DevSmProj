import { CSVWriter } from "./index";

interface Employee {
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    {
        id: 1,
        name: 'John',
        role: 'Developer',
        salary: 1000
    },
    {
        id: 2,
        name: 'Jane',
        role: 'Developer',
        salary: 2000
    },
    {
        id: 3,
        name: 'Jack',
        role: 'Developer',
        salary: 3000
    }
])


employeeWriter.save('data/employee.csv')