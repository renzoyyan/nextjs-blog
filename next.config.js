const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "renz",
        mongodb_password: "1C5ulZ9qNEr2taKG",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "renz",
      mongodb_password: "1C5ulZ9qNEr2taKG",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
