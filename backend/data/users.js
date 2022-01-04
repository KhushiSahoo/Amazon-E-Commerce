import bcrypt from "bcryptjs"

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456' ,10),
        isAdmin:'true'
    },
    {
        name:'John Doe',
        email:'john123@gmail.com',
        password:bcrypt.hashSync('123456' ,10),
    },
    {
        name:'Sheldon Cooper',
        email:'shelly@gmail.com',
        password:bcrypt.hashSync('123456' ,10),
    },
    {
        name:'Amy Farah Falor',
        email:'amy@gmail.com',
        password:bcrypt.hashSync('123456' ,10),
    },
]

export default users;