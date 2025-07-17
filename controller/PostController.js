import prisma from "../DB/db.config.js";

export const fetchPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        
    });
    return res.json({ status: 200, data: posts, message: 'Fetch Posts' })
};

export const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;

    const newPost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title,
            description,
        },
    });

    return res.json({ status: 200, data: newPost, msg: "Post created." });
};

// * Show user
export const showPost = async (req, res) => {
    const postId = req.params.id;
    const post = await prisma.post.findFirst({
        where: {
            id: Number(postId),
        },
    });

    return res.json({ status: 200, data: post });
};

// * Delete user
export const deletePost = async (req, res) => {
    const postId = req.params.id;
    await prisma.post.delete({
        where: {
            id: Number(postId),
        },
    });

    return res.json({ status: 200, msg: "Post deleted successfully" });
};

// * To Seach the post
export const searchPost = async (req, res) => {
    const query = req.query.q;
    const posts = await prisma.post.findMany({
        where: {
            description: {
                search: query,
            },
        },
    });

    return res.json({ status: 200, data: posts });
};