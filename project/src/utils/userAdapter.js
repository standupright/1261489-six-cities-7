const AuthInfoAdapter = {
  getUserData: (authInfo) => ({
    ...authInfo,
    avatarUrl: authInfo['avatar_url'],
    email: authInfo['email'],
    id: authInfo['id'],
    isPro: authInfo['is_pro'],
    name: authInfo['name'],
  }),
};

export default AuthInfoAdapter;
