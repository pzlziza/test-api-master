CREATE DATABASE gesture_db;

USE gesture_db;

CREATE TABLE gestures (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Primary key
    gesture_name VARCHAR(50) NOT NULL,       -- Nama gesture
    video_url TEXT,                           -- URL video gesture
    video_description TEXT,                   -- Deskripsi video
    detected_gesture VARCHAR(100),            -- Gesture yang terdeteksi
    text_translation TEXT,                    -- Teks hasil translasi
    media_input_type VARCHAR(50),            -- Image / video
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP --Waktu data dimasukkan
);