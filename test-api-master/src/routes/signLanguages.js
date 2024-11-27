const {
  createSignLanguages,
  getAllSignLanguages,
  getSignLanguages,
  updateSignLanguages,
  deleteSignLnguages,
} = require("../handler/signLanguages");

const signLanguagesRoutes = [
  {
    method: "POST",
    path: "/sign-language",
    handler: createSignLanguages,
  },
  {
    method: "GET",
    path: "/all-sign-language",
    handler: getAllSignLanguages,
  },
  {
    method: "GET",
    path: "/sign-language",
    handler: getSignLanguages,
  },
  {
    method: "PUT",
    path: "/sign-language/{id}",
    handler: updateSignLanguages,
  },
  {
    method: "DELETE",
    path: "/sign-language/{id}",
    handler: deleteSignLnguages,
  },
];

module.exports = { signLanguagesRoutes };
