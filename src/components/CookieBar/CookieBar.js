import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useLocation } from '@reach/router';

const CookieBar = () => {
    const location = useLocation();

    // When there is more than one tracker it's a best practice let people choose
    // what to opt-out. In this case for each tracking system we need manually set 
    // a tracking cookie name value using "Cookies.set" api inside "onAccept" function 
    // Example:
    // Cookies.set("gatsby-gdpr-google-analytics", "true")
    // 
    // Note: Export "Cookies" from react-cookie-consent
    // import { Cookies } from "react-cookie-consent"
    return (
        <CookieConsent
            buttonClasses="px-4 py-2 bg-green-100 border border-green-500 text-green-700 font-bold rounded-md shadow hover:bg-green-300 hover:text-green-800 transition hover:transition-colors duration-300"
            declineButtonClasses="px-4 py-2 mr-4 bg-white text-stone-600 rounded-md hover:bg-stone-500 hover:text-stone-200"
            containerClasses="container mx-auto fixed inset-x-0 p-4 bg-emerald-100"
            cookieName="gatsby-gdpr-google-analytics"
            buttonId="confirm"
            buttonText="Accept"
            declineButtonId="decline"
            declineButtonText="Decline"
            enableDeclineButton={true}
            disableStyles={true}
            onAccept={() => initializeAndTrack(location) }
        >
            <p>This website uses cookies 🍪 </p>
        </CookieConsent>
    );
}

export default CookieBar