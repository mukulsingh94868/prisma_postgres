import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: 'Email Already Exist' })
    }

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    return res.json({ status: 200, data: newUser, message: 'User Created' })
};

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            name,
            email,
            password
        }
    })

    return res.json({ status: 200, message: 'User Updated Successfully' })
};

export const fetchUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        // include: {
        //     post: {
        //         select: {
        //             title: true,
        //             comment_count: true,
        //             comment: true
        //         }
        //     }
        // }

        select: {
            _count: {
                select: {
                    post: true,
                    comment: true
                }
            }
        }
    });
    return res.json({ status: 200, data: users, message: 'Fetch Users' })
}

export const showUser = async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        }
    });
    return res.json({ status: 200, data: user, message: 'Fetch Users' })
}

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.deleteMany({
        where: {
            id: Number(userId)
        }
    });
    return res.json({ status: 200, message: 'Deleted Successfully' })
}