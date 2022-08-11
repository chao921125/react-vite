declare namespace NSP {
  export interface VerifyCode {
    error: boolean;
    repCode: string;
    repData: {
      jigsawImageBase64: string;
      originalImageBase64: string;
      result: boolean;
      secretKey: string;
      token: string;
      success?: boolean;
    };
    repMsg?: string;
    success: boolean;
  }

  export interface LoginRes {
    access_token: string;
    token_expiration_time: number;
    refresh_token: string;
    refresh_token_expiration_time: number;
    token_type: string;
  }
}
