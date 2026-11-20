// server/src/middlewares/asyncHandler.js
export const asyncHandler = (controller) => (req, res, next) =>
  Promise.resolve(controller(req, res, next)).catch(next);