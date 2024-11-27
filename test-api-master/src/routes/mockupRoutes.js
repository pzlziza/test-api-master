const {
    createMockup,
    getAllMockups,
    getMockupById,
    updateMockup,
    deleteMockup,
  } = require("../handler/mockupHandler");
  
  const mockupRoutes = [
    {
      method: "POST",
      path: "/mockup",
      handler: createMockup,
    },
    {
      method: "GET",
      path: "/mockup",
      handler: getAllMockups,
    },
    {
      method: "GET",
      path: "/mockup/{id}",
      handler: getMockupById,
    },
    {
      method: "PUT",
      path: "/mockup/{id}",
      handler: updateMockup,
    },
    {
      method: "DELETE",
      path: "/mockup/{id}",
      handler: deleteMockup,
    },
  ];
  
  module.exports = { mockupRoutes };
  