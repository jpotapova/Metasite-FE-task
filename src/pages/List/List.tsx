import { Table } from "./Table";
// Sample data - replace with your actual data
const rows = [
    {
        id: 1,
        name: "John Doe",
        city: "New York",
        isActive: true,
        email: "john@example.com",
        phone: "123-456-7890",
    },
    {
        id: 2,
        name: "Jane Smith",
        city: "Los Angeles",
        isActive: false,
        email: "jane@example.com",
        phone: "098-765-4321",
    },
];

export const List = () => {
    return <Table rows={rows} />
};
