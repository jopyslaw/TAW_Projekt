const config = {
  port: procces.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || "",
  JwtSecret: process.env.JWT_SECRET || "secret",
};

export default config;
