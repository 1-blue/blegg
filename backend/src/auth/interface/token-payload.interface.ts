export interface TokenPayload {
  idx: number;
  /** OAuth를 통해 받은 access token */
  oauthAccessToken?: string;
}
