import {useState} from 'react';

const SettingsPage = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Tobikun',
    lastName: 'Seve',
    email: 'seller@gmail.com',
    username: 'skye460',
    phone: '+18005551234',
    petName: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  return (
    <div className="transition-all text-gray-900">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Edit Profile</h2>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
        <h3 className="text-lg font-medium mb-4">Personal Information</h3>

        <div className="mb-4 grid gap-4 md:grid-cols-2">
          {[
            {label: 'First Name', name: 'firstName'},
            {label: 'Last Name', name: 'lastName'},
            {label: 'Email', name: 'email'},
            {label: 'Username', name: 'username'},
            {label: 'Phone no.', name: 'phone'},
            {label: 'Pet name', name: 'petName', placeholder: 'Your pet name'}
          ].map(field => (
            <div key={field.name}>
              <label className="block mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ''}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>

      {showNotif && (
        <div className="fixed inset-x-4 bottom-4 rounded bg-green-600 px-4 py-3 text-gray-100 shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6">
          Profile saved successfully!
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
