"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function UserDataProtectionPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    // const hasAgreed = localStorage.getItem("userDataProtectionAgreed");
    // if (!hasAgreed) {
      setIsVisible(true);
    // }
  }, []);

  const handleAgree = () => {
    // localStorage.setItem("userDataProtectionAgreed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <Card className="max-w-2xl w-full mx-4 p-8 max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-center text-primary">
            User Information Protection Policy
          </h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-primary">
                💫 Commitment to Protecting Information
              </h2>
              <ul className="space-y-2 text-sm">
                                 <li className="flex items-start gap-2">
                   <span className="text-green-500 mt-1">🔒</span>
                   <span>
                     <strong>Preventing Unauthorized Access:</strong> We implement advanced cybersecurity measures 
                     to safeguard user information from theft or unauthorized access.
                   </span>
                 </li>
                                 <li className="flex items-start gap-2">
                   <span className="text-blue-500 mt-1">🚫</span>
                   <span>
                     <strong>No Selling of Information:</strong> We pledge not to sell, trade, or transfer 
                     users&apos; personal information to any third party for commercial purposes.
                   </span>
                 </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3 text-primary">
                ⚖️ Legal Responsibility
              </h2>
              <div className="text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p>
                  In the unfortunate event of a data breach caused by our fault, resulting in the 
                  leakage of user information, we will take full responsibility and accept all 
                  legal consequences as stipulated by law.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground text-center mb-4">
              By clicking &quot;I Agree&quot;, you confirm that you have read and understood this privacy policy.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={handleAgree}
                className="px-8 py-2 bg-primary hover:bg-primary/90 cursor-pointer"
              >
                ✅ I Agree
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 