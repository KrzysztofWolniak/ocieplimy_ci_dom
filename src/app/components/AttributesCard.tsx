import { Card } from '@nextui-org/react';

const AttributesCard = ({ title, description }) => {
  return (
    <Card className="bg-gray-800 text-white p-8 w-80 h-96">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-base">{description}</p>
    </Card>
  );
};

export default AttributesCard;