export const getLocalhost = () => {
  return process.env.LOCALHOST_OVERRIDE || "localhost";
};
