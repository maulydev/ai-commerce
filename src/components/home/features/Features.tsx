import React from "react";
import {
  Truck,
  CreditCard,
  HandCoins,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import HStack from "../../shared/HStack";

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-yellow-500" />,
      title: "FREE DELIVERY",
      description: "For all orders over $120",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-yellow-500" />,
      title: "SAFE PAYMENT",
      description: "100% secure payment",
    },
    {
      icon: <HandCoins className="h-8 w-8 text-yellow-500" />,
      title: "SHOP WITH CONFIDENCE",
      description: "If goods have problems",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-yellow-500" />,
      title: "24/7 HELP CENTER",
      description: "Dedicated 24/7 support",
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-yellow-500" />,
      title: "FRIENDLY SERVICES",
      description: "30 day satisfaction guarantee",
    },
  ];

  return (
    <Container>
      <Card className="p-8">
        <HStack className="justify-between gap-x-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 border-r last:border-r-0 border-gray-200 pr-6"
            >
              {feature.icon}
              <div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </HStack>
      </Card>
    </Container>
  );
};

export default Features;
