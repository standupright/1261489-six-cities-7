const CommentsAdapter = {
  getComment: (comment) => ({
    ...comment,
    user: {
      ...comment.user,
      avatarUrl: comment['user']['avatar_url'],
      isPro: comment['user']['is_pro'],
    },
  }),
  getComments: (comments) => comments.map((comment) => CommentsAdapter.getComment(comment)),
};

export default CommentsAdapter;
