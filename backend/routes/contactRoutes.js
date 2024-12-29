// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus
} = require('../controllers/contactController');

// Public routes
router.post('/', createContact);

// Protected routes (admin only)
router.get('/', protect, authorize('admin'), getAllContacts);
router.get('/:id', protect, authorize('admin'), getContactById);
router.patch('/:id/status', protect, authorize('admin'), updateContactStatus);

module.exports = router;