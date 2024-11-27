const { nanoid } = require("nanoid");

let mockupData = [
    {
      id: "1",
      title: "Homepage Mockup",
      content: "This is the mockup for the homepage design.",
      createdAt: "2024-11-01T10:00:00.000Z",
      updatedAt: "2024-11-01T10:00:00.000Z",
    },
    {
      id: "2",
      title: "Login Page Mockup",
      content: "This is the mockup for the login page design.",
      createdAt: "2024-11-02T10:00:00.000Z",
      updatedAt: "2024-11-02T10:00:00.000Z",
    },
    {
      id: "3",
      title: "Dashboard Mockup",
      content: "This is the mockup for the dashboard interface.",
      createdAt: "2024-11-03T10:00:00.000Z",
      updatedAt: "2024-11-03T10:00:00.000Z",
    },
  ];
  

// Create a new mockup entry
const createMockup = (request, h) => {
  const { title, content } = request.payload;
  const id = nanoid();
  const newEntry = {
    id,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  mockupData.push(newEntry);

  return h
    .response({
      status: "success",
      message: "Mockup data created successfully.",
      data: newEntry,
    })
    .code(201);
};

// Get all mockup entries
const getAllMockups = (request, h) => {
  return h
    .response({
      status: "success",
      data: mockupData,
    })
    .code(200);
};

// Get a specific mockup entry by ID
const getMockupById = (request, h) => {
  const { id } = request.params;
  const entry = mockupData.find((item) => item.id === id);

  if (!entry) {
    return h
      .response({
        status: "fail",
        message: `Mockup data with ID ${id} not found.`,
      })
      .code(404);
  }

  return h
    .response({
      status: "success",
      data: entry,
    })
    .code(200);
};

// Update a specific mockup entry by ID
const updateMockup = (request, h) => {
  const { id } = request.params;
  const { title, content } = request.payload;
  const index = mockupData.findIndex((item) => item.id === id);

  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: `Mockup data with ID ${id} not found.`,
      })
      .code(404);
  }

  mockupData[index] = {
    ...mockupData[index],
    title,
    content,
    updatedAt: new Date().toISOString(),
  };

  return h
    .response({
      status: "success",
      message: "Mockup data updated successfully.",
      data: mockupData[index],
    })
    .code(200);
};

// Delete a specific mockup entry by ID
const deleteMockup = (request, h) => {
  const { id } = request.params;
  const index = mockupData.findIndex((item) => item.id === id);

  if (index === -1) {
    return h
      .response({
        status: "fail",
        message: `Mockup data with ID ${id} not found.`,
      })
      .code(404);
  }

  mockupData.splice(index, 1);

  return h
    .response({
      status: "success",
      message: `Mockup data with ID ${id} deleted successfully.`,
    })
    .code(200);
};

module.exports = {
  createMockup,
  getAllMockups,
  getMockupById,
  updateMockup,
  deleteMockup,
};
