import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-600 mb-2">{phone}</p>
      <p className="text-gray-600 mb-2">
        Address: {address.street}, {address.city}
      </p>
      <p className="text-gray-600 mb-2">Website: {website}</p>
      <p className="text-sm italic text-gray-500">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
