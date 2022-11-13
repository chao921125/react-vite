const accessTokens = {
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  test: 'test-accessToken'
};

export default [
  {
    url: '/api/publicKey',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          mockServer: true,
          publicKey:
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB'
        }
      };
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: (config) => {
      const { username } = config.body;
      const accessToken = accessTokens[username];
      if (!accessToken) {
        return {
          code: 500,
          msg: '帐户或密码不正确。'
        };
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          accessToken
        }
      };
    }
  },
  {
    url: '/api/register',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟注册成功'
      };
    }
  },
  {
    url: '/api/userInfo',
    type: 'get',
    response(config) {
      const { accessToken } = config.body;
      let permissions = ['admin'];
      let username = 'admin';
      if (accessToken === 'admin-accessToken') {
        permissions = ['admin'];
        username = 'admin';
      }
      if (accessToken === 'editor-accessToken') {
        permissions = ['editor'];
        username = 'editor';
      }
      if (accessToken === 'test-accessToken') {
        permissions = ['admin', 'editor'];
        username = 'test';
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          permissions,
          username,
          'avatar|1': [
            'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
            'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif'
          ]
        }
      };
    }
  },
  {
    url: '/api/logout',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success'
      };
    }
  }
];
