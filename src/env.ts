export const isProduction = process.env.NODE_ENV === "production";

export const env = {
  secret: "" + process.env.SECRET,
} as const;
