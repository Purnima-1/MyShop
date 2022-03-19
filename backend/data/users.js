import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@myshop.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Peter Johnson',
        email: 'peter@myshop.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Brandon Lee',
        email: 'Brandon@myshop.com',
        password: bcrypt.hashSync('123456',10)
    },
]
export default users