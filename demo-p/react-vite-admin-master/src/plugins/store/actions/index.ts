export type USER = {
  name: string;
}
export type CHANGE_USER_ACTION = {
  type: 'CHANGE_USER',
  user: USER
}

export type CHANGE_TEST_ACTION = {
  type: 'CHANGE_TEST',
  test: string
}

export type USER_MODIFY_ACTION = CHANGE_USER_ACTION | CHANGE_TEST_ACTION
