const { nanoid } = require("nanoid");

//Tempat sementara untuk data sign lang
let signLanguageData = [];

const createSignLanguages = (request, h) => {
  const { gesture, meaning } = request.payload;
  const id = nanoid();
  const newEntry = {
    id,
    gesture,
    meaning,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
  signLanguageData.push(newEntry);
  return h.response(newEntry).code(201);
};

const getAllSignLanguages = (request, h) => {
  const { search, page = 1, limit = 10 } = request.query;

  let filteredData = signLanguageData;
  if (search) {
    filteredData = signLanguageData.filter(
      (item) =>
        item.gesture.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase())
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit, 10);

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return h
    .response({
      totalData: filteredData.length,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      data: paginatedData,
    })
    .code(200);
};

const getSignLanguages = (request, h) => {
  try {
    const { gesture, meaning } = request.query;

    console.log("GET /sign-language called with query:", request.query); // Log query parameters

    // Cek apakah data kosong
    if (!signLanguageData || signLanguageData.length === 0) {
      return h
        .response({
          status: "fail",
          message: "No sign language data found.",
        })
        .code(404);
    }

    // Filter data berdasarkan query parameter (jika diberikan)
    let filteredData = signLanguageData;
    if (gesture) {
      filteredData = filteredData.filter((item) =>
        item.gesture.toLowerCase().includes(gesture.toLowerCase())
      );
    }
    if (meaning) {
      filteredData = filteredData.filter((item) =>
        item.meaning.toLowerCase().includes(meaning.toLowerCase())
      );
    }

    // Cek apakah hasil filter kosong
    if (filteredData.length === 0) {
      return h
        .response({
          status: "fail",
          message: "No matching sign language data found.",
        })
        .code(404);
    }

    // Kembalikan hasil filter
    return h
      .response({
        status: "success",
        data: filteredData,
      })
      .code(200);
  } catch (error) {
    console.error("Error retrieving sign languages:", error);
    return h
      .response({
        status: "error",
        message: "An unexpected error occurred.",
      })
      .code(500);
  }
};

const updateSignLanguages = (request, h) => {
  const { id } = request.params;
  const { gesture, meaning } = request.payload;
  const index = signLanguageData.findIndex((item) => item.id === id);

  if (index !== -1) {
    signLangugesData[index] = {
      ...signLanguageData[index],
      gesture,
      meaning,
      updatedAt: timestamp,
    };
    return h.response(signLanguageData[index].code(200));
  }

  return h.response(signLanguageData[index]).code(200);
};

const deleteSignLnguages = (request, h) => {
  const { id } = request.params;
  const index = signLanguageData.findIndex((item) => item.id === id);

  if (index !== -1) {
    signLanguageData.splice(index, 1);
    return h.response({ msg: "Data deleted" }).code(200);
  }

  return h.response({ msg: "data not found" }).code(404);
};

module.exports = {
  createSignLanguages,
  getAllSignLanguages,
  getSignLanguages,
  updateSignLanguages,
  deleteSignLnguages,
};
