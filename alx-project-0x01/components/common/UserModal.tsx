import React, { useState } from 'react';
import { UserData, UserModalProps } from '@/interfaces';
import Modal from '@/components/common/Modal'; // Use the reusable modal

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('address.')) {
      const [, field] = name.split('.');
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.includes('geo.')) {
      const [, field] = name.split('.');
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value,
          },
        },
      }));
    } else if (name.includes('company.')) {
      const [, field] = name.split('.');
      setUser(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setUser(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={user.website}
          onChange={handleChange}
          className="input"
        />

        <hr className="my-2" />

        <input
          type="text"
          name="address.street"
          placeholder="Street"
          value={user.address.street}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="address.suite"
          placeholder="Suite"
          value={user.address.suite}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="address.city"
          placeholder="City"
          value={user.address.city}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="address.zipcode"
          placeholder="Zipcode"
          value={user.address.zipcode}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="geo.lat"
          placeholder="Latitude"
          value={user.address.geo.lat}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="geo.lng"
          placeholder="Longitude"
          value={user.address.geo.lng}
          onChange={handleChange}
          className="input"
        />

        <hr className="my-2" />

        <input
          type="text"
          name="company.name"
          placeholder="Company Name"
          value={user.company.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="company.catchPhrase"
          placeholder="Catch Phrase"
          value={user.company.catchPhrase}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="company.bs"
          placeholder="BS"
          value={user.company.bs}
          onChange={handleChange}
          className="input"
        />

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UserModal;
