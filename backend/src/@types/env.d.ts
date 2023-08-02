declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: "development" | "production";

    // db
    DATABASE_URL: string;

    // auth
    JWT_SECRET: string;

    // riot
    RIOT_API_KEY: string;
    RIOT_VERSION: string;
    RIOT_LANGUAGE: string;

    // AWS
    AWS_S3_BUCKET: string;
    AWS_S3_REGION: string;
    AWS_S3_ACCESS_KEY: string;
    AWS_S3_ACCESS_SECRET_KEY: string;

    // oauth
    FRONT_CALLBACK_URL: string;

    // Google OAuth
    GOOGLE_CLIENT_ID: string;
    GOOGLE_SECRET: string;
    GOOGLE_OAUTH_CALLBACK_URL: string;

    // kakao OAuth
    KAKAO_CLIENT_ID: string;
    KAKAO_SECRET: string;
    KAKAO_OAUTH_CALLBACK_URL: string;

    // naver OAuth
    NAVER_CLIENT_ID: string;
    NAVER_SECRET: string;
    NAVER_OAUTH_CALLBACK_URL: string;
  }
}
