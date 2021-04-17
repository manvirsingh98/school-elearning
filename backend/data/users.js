import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    name: "sunny",
    email: "sunny@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "teacher",
  },
  {
    name: "Rajbir",
    email: "rajbir@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "teacher",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "student",
  },
  {
    name: "Gurri",
    email: "gurri@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "student",
  },
  {
    name: "Garry",
    email: "garry@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "student",
  },
  {
    name: "jeeta",
    email: "jeeta@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "student",
  },
];

export default users;
