"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContactAssistanceProps {
  title: string;
}

const ContactAssistance = ({ title }: ContactAssistanceProps) => {
  return (
    <div className="space-y-6 mb-6">
      <h2 className="text-2xl font-bold text-center text-[#080A3C] mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <Button
              className="h-12 w-12 rounded-full bg-[#080A3C] hover:bg-[#080A3C]/90"
              onClick={() =>
                window.open("https://wa.me/+94772705624", "_blank")
              }
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-muted-foreground text-center">
              Chat with us on WhatsApp for quick support
            </p>
            <Button
              className=" bg-[#FF612F] hover:bg-[#FF612F]/90 mt-4"
              onClick={() =>
                window.open("https://wa.me/+94772705624", "_blank")
              }
            >
              Start Chat
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <Button
              className="h-12 w-12 rounded-full bg-[#080A3C] hover:bg-[#080A3C]/90"
              onClick={() => window.open("tel:+94772705624")}
            >
              <Phone className="h-6 w-6 text-white" />
            </Button>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-muted-foreground text-center">
              Call us directly for immediate assistance
            </p>
            <Button
              className=" bg-[#FF612F] hover:bg-[#FF612F]/90 mt-4"
              onClick={() => window.open("tel:+94772705624")}
            >
              Start Call
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <Button
              className="h-12 w-12 rounded-full bg-[#080A3C] hover:bg-[#080A3C]/90"
              onClick={() => window.open("mailto:taxteam@simplebooks.com")}
            >
              <Mail className="h-6 w-6 text-white" />
            </Button>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground text-center">
              Send us an email for detailed inquiries
            </p>
            <Button
              className=" bg-[#FF612F] hover:bg-[#FF612F]/90 mt-4"
              onClick={() => window.open("mailto:taxteam@simplebooks.com")}
            >
              Email Us
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactAssistance;
