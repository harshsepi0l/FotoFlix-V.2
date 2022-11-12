export const getComments = async () => {
    return [
        {
            id: "1",
            body: "First comment",
            username: "Jack",
            userId: "1",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
            likes: 1,
            dislikes: 2,
        },
        {
            id: "2",
            body: "Second comment",
            username: "John",
            userId: "2",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:00",
            likes: 3,
            dislikes: 4,
        },
        {
            id: "3",
            body: "First comment first child",
            username: "John",
            userId: "2",
            parentId: "1",
            createdAt: "2021-08-16T23:00:33.010+02:00",
            likes: 5,
            dislikes: 6,
        },
        {
            id: "4",
            body: "Second comment second child",
            username: "John",
            userId: "2",
            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
            likes: 7,
            dislikes: 8,
        },
    ];
};

export const createComment = async (text: any, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
    };
};

export const updateComment = async (text: any) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};

export const updateLikesDislikes = async () => {
    return {};
}
