import mongoose from 'mongoose';
import Contact from '../models/contactModel.js';

export async function getAllContacts() {
  return await Contact.find();
}

export async function getContactById(contactId) {
  // Перевіряємо, чи contactId — це валідний MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    return null;
  }

  return await Contact.findById(contactId);
}
