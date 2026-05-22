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
    setTimeout(() => setShowNotif(false), 3000); // hide after 3 seconds
  };

  return (
    <div
      className="min-h-screen p-8 transition-all 'bg-gray-100 text-gray-900"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Edit Profile</h2>
      </div>

      <div
        className="rounded-lg shadow-md p-6 bg-white"
      >
        <h3 className="text-lg font-medium mb-4">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
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

        <div className="flex justify-end gap-3">
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
        <div
          className="fixed bottom-6 right-6 px-4 py-3 rounded shadow-lg bg-green-600 text-gray-100"
        >
          Profile saved successfully!
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
