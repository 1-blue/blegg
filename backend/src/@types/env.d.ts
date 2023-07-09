declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    DATABASE_URL: string;

    RIOT_API_KEY: string;

    JWT_SECRET: string;

    PORT: string;

    FRONT_CALLBACK_URL: string;

    // Google OAuth
    GOOGLE_CLIENT_ID: string;
    GOOGLE_SECRET: string;
    GOOGLE_OAUTH_CALLBACK_URL: string;

    // kakao OAuth
    KAKAO_CLIENT_ID: string;
    KAKAO_SECRET: string;
    KAKAO_OAUTH_CALLBACK_URL: string;
  }
}
