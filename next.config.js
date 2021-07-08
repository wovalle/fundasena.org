module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://fundasena.sanity.studio",
        permanent: true,
      },
    ];
  },
};
