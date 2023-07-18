declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    DATABASE_URL: string;

    RIOT_API_KEY: string;

    JWT_SECRET: string;

    PORT: string;

    NODE_ENV: "development" | "production";

    FRONT_CALLBACK_URL: string;

    // AWS
    AWS_S3_BUCKET: string;
    AWS_S3_REGION: string;
    AWS_S3_ACCESS_KEY: string;
    AWS_S3_ACCESS_SECRET_KEY: string;

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
