import { event } from "./analytics";

export const trackWhatsAppClick = (location) => {
  event({
    action: "whatsapp_click",
    category: "Engagement",
    label: location,
  });
};

export const trackPhoneClick = (location) => {
  event({
    action: "phone_call",
    category: "Contact",
    label: location,
  });
};



export const trackBookDemo = () => {
  event({
    action: "book_demo",
    category: "Lead",
    label: "Book Demo",
  });
};



export const trackSocialClick = (platform) => {
  event({
    action: "social_click",
    category: "Social",
    label: platform,
  });
};