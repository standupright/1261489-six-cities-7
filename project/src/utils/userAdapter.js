const AuthInfoAdapter = {
  getUserData: (authInfo) => ({
    ...authInfo,
    avatarUrl: authInfo['avatar_url'],
    isPro: authInfo['is_pro'],
  }),
};

export default AuthInfoAdapter;
