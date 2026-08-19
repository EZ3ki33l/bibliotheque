const nextConfig = {
  output: "standalone",
  serverExternalPackages: ["shiki"],
  outputFileTracingIncludes: {
    "/*": ["node_modules/@swc/helpers/**/*"],
  },
};

export default nextConfig;
