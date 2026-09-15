export function notFoundHandler(req, res) {
  res.status(404).json({ message: "İstenen kaynak bulunamadı." });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.expose ? err.message : "Sunucu tarafında beklenmedik bir hata oluştu.",
  });
}
