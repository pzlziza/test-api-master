# Mockup API Project

## Deskripsi
Proyek ini adalah API sederhana untuk mengelola data **mockup** menggunakan Node.js dan Hapi.js. API mendukung operasi **CRUD (Create, Read, Update, Delete)** untuk mockup data, seperti desain halaman web atau komponen lainnya.

---

## Fitur
- **Create**: Tambahkan mockup baru.
- **Read**: Lihat semua mockup atau satu mockup berdasarkan ID.
- **Update**: Perbarui mockup berdasarkan ID.
- **Delete**: Hapus mockup berdasarkan ID.

---

## Persyaratan
- **Node.js** versi 14 atau lebih baru.
- **npm** (Node Package Manager).

---

## Langkah-Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/TellMe-Bangkit/test-api
   cd test-api
   ```

2. **Install Dependencies**
   Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   ```bash
   npm install
   ```

3. **Jalankan Server**
   Untuk menjalankan server, gunakan perintah:
   ```bash
   node src/server.js
   ```

   Server akan berjalan di `http://localhost:5000`.

---

## Struktur Folder
```
├── src
│   ├── handler
│   │   └── mockupHandler.js  # Berisi fungsi handler untuk operasi CRUD
│   ├── routes
│   │   └── mockupRoutes.js   # Berisi definisi endpoint dan routing
│   └── server.js             # File utama untuk menjalankan server
├── package.json              # Informasi proyek dan dependensi
├── .gitignore                # Mengabaikan node_modules
└── README.md                 # Dokumentasi proyek
```

---

## Endpoint API

### 1. **Create Mockup**
- **Endpoint:** `POST /mockup`
- **Request Body:**
  ```json
  {
    "title": "Homepage Mockup",
    "content": "This is the mockup for the homepage design."
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Mockup data created successfully.",
    "data": {
      "id": "generated_id",
      "title": "Homepage Mockup",
      "content": "This is the mockup for the homepage design.",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

---

### 2. **Get All Mockups**
- **Endpoint:** `GET /mockup`
- **Response:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "1",
        "title": "Homepage Mockup",
        "content": "This is the mockup for the homepage design.",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  }
  ```

---

### 3. **Get Mockup by ID**
- **Endpoint:** `GET /mockup/{id}`
- **Response (Success):**
  ```json
  {
    "status": "success",
    "data": {
      "id": "1",
      "title": "Homepage Mockup",
      "content": "This is the mockup for the homepage design.",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
- **Response (Not Found):**
  ```json
  {
    "status": "fail",
    "message": "Mockup data with ID 1 not found."
  }
  ```

---

### 4. **Update Mockup**
- **Endpoint:** `PUT /mockup/{id}`
- **Request Body:**
  ```json
  {
    "title": "Updated Homepage Mockup",
    "content": "This is the updated mockup content."
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Mockup data updated successfully.",
    "data": {
      "id": "1",
      "title": "Updated Homepage Mockup",
      "content": "This is the updated mockup content.",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```

---

### 5. **Delete Mockup**
- **Endpoint:** `DELETE /mockup/{id}`
- **Response (Success):**
  ```json
  {
    "status": "success",
    "message": "Mockup data with ID 1 deleted successfully."
  }
  ```
- **Response (Not Found):**
  ```json
  {
    "status": "fail",
    "message": "Mockup data with ID 1 not found."
  }
  ```

---

## Testing
Anda dapat menggunakan **Postman** atau **cURL** untuk menguji API.

### Contoh dengan cURL:
1. **Create Mockup**
   ```bash
   curl -X POST http://localhost:3000/mockup \
   -H "Content-Type: application/json" \
   -d '{"title": "Homepage Mockup", "content": "This is the mockup for the homepage design."}'
   ```

2. **Get All Mockups**
   ```bash
   curl http://localhost:3000/mockup
   ```

3. **Get Mockup by ID**
   ```bash
   curl http://localhost:3000/mockup/1
   ```

4. **Update Mockup**
   ```bash
   curl -X PUT http://localhost:3000/mockup/1 \
   -H "Content-Type: application/json" \
   -d '{"title": "Updated Homepage Mockup", "content": "Updated mockup content."}'
   ```

5. **Delete Mockup**
   ```bash
   curl -X DELETE http://localhost:3000/mockup/1
   ```

---

## Catatan
- Pastikan untuk menginstal **Node.js** sebelum memulai.
- Folder `node_modules` diabaikan oleh Git melalui file `.gitignore`.
- Folder `postman_collection` adalah tempat menyimpan collection postman bisa lsg di import ke postman.