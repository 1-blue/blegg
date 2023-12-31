export default () => ({
  port: parseInt(process.env.PORT, 10) || 3050,
  env: process.env.NODE_ENV || "development",
  database: {
    url: process.env.DATABASE_URL,
  },
  keys: {
    riot: process.env.RIOT_API_KEY,
    jwt: process.env.JWT_SECRET,
    google: process.env.GOOGLE_SECRET,
    kakao: process.env.KAKAO_SECRET,
    naver: process.env.NAVER_SECRET,
  },
  ids: {
    google: process.env.GOOGLE_CLIENT_ID,
    kakao: process.env.KAKAO_CLIENT_ID,
    naver: process.env.NAVER_CLIENT_ID,
  },
  callbacks: {
    front: {
      success: process.env.FRONT_CALLBACK_URL + "/success",
      failure: process.env.FRONT_CALLBACK_URL + "/failure",
    },
    google: process.env.GOOGLE_OAUTH_CALLBACK_URL,
    kakao: process.env.KAKAO_OAUTH_CALLBACK_URL,
    naver: process.env.NAVER_OAUTH_CALLBACK_URL,
  },
  aws: {
    bucket: process.env.AWS_S3_BUCKET,
    region: process.env.AWS_S3_REGION,
    key: process.env.AWS_S3_ACCESS_KEY,
    secretKey: process.env.AWS_S3_ACCESS_SECRET_KEY,
  },
});
