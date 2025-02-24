/* c)
Promise.all() is used to handle multiple promises concurrently and wait for all of them to resolve.
The Promise.allSettled() is used to handle multiple promises but it waits for all the promises to settle before continuing. It returns an array based on the results.
Promise.race() is used to handle multiple promises, but it resolves or rejects as soon as the first promise in the input array settles, either by resolving or rejecting.

Promise.all() is useful when making multiple API requests and waiting for the responses.
Promise.allSettled() is used when you want to know the outcome of all promises even if some fail.
Promise.race() could be used when wanting to implement a timeout for a request.*/

function fetchUserPosts (userIdArray) {
    const fetchPromises = userIdArray.map(userId => {
        return new Promise((resolve, reject) => {
            //Add data here
            const posts = [
                { userId: userId, postId: 1, content: `Post 1 by user ${userId}` },
                { userId: userId, postId: 2, content: `Post 2 by user ${userId}` },
            ];
            resolve(posts);
        });
    });
    return Promise.all(fetchPromises);
};