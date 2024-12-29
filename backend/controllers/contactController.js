// backend/controllers/contactController.js
const Contact = require('../models/Contact');

const contactController = {
  // Create new contact inquiry
  createContact: async (req, res) => {
    try {
      const { name, email, phone, message, propertyInterest } = req.body;
      
      const newContact = new Contact({
        name,
        email,
        phone,
        message,
        propertyInterest
      });

      const savedContact = await newContact.save();
      
      res.status(201).json({
        success: true,
        data: savedContact,
        message: 'Contact inquiry submitted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error submitting contact inquiry',
        error: error.message
      });
    }
  },

  // Get all contacts (admin only)
  getAllContacts: async (req, res) => {
    try {
      const contacts = await Contact.find()
        .sort({ createdAt: -1 });
      
      res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving contacts',
        error: error.message
      });
    }
  },

  // Get single contact by ID (admin only)
  getContactById: async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.status(200).json({
        success: true,
        data: contact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving contact',
        error: error.message
      });
    }
  },

  // Update contact status (admin only)
  updateContactStatus: async (req, res) => {
    try {
      const { status } = req.body;
      
      const contact = await Contact.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true, runValidators: true }
      );

      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.status(200).json({
        success: true,
        data: contact,
        message: 'Contact status updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating contact status',
        error: error.message
      });
    }
  }
};

module.exports = contactController;