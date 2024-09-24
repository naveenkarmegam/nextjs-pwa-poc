"use client";

import { useEffect, useState } from "react";

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Detect if the device is iOS
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    // Detect if the app is already in standalone mode (PWA installed)
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Listen for the beforeinstallprompt event (Android PWA prompt)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // Prevent the default prompt
      setDeferredPrompt(e); // Save the event to trigger later
      setShowInstallButton(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // Function to show the install prompt when the user clicks the "Add to Home Screen" button
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt(); // Show the install prompt
      const choiceResult = await (deferredPrompt as any).userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Reset the deferred prompt
      setShowInstallButton(false); // Hide the install button after prompt
    }
  };

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div>
      <h3>Install App</h3>
      {showInstallButton && (
        <button onClick={handleInstallClick}>Add to Home Screen (Android)</button>
      )}
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {' '}⎋{' '}
          </span>
          and then "Add to Home Screen"
          <span role="img" aria-label="plus icon">
            {' '}➕{' '}
          </span>.
        </p>
      )}
    </div>
  );
}
