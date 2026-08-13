// Replace with your WhatsApp number in international format, digits only (e.g. 33612345678)
export const WHATSAPP_NUMBER = "919319028027";

const PREFILLED_MESSAGE =
  "Bonjour French Excel! I'd like to know more about your TEF / TCF / DELF preparation.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-md sm:block">
        Talk to us
      </span>
      <span className="flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="size-8 fill-white" aria-hidden="true">
          <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.75 12.75 0 0 0 6.29 1.64h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.68Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.57 10.57 0 0 1-1.62-5.65c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.62-10.63 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.25 3.43 5.45 4.81.76.33 1.35.53 1.82.68.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}