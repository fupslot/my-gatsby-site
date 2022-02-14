import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useLocation } from '@reach/router';

const CookieBar = () => {
    const location = useLocation();

    return (
        <CookieConsent
            buttonClasses="px-4 py-2 bg-green-100 border border-green-500 text-green-700 font-bold rounded-md shadow hover:bg-green-300 hover:text-green-800 transition hover:transition-colors duration-300"
            declineButtonClasses="px-4 py-2 mr-4 bg-white text-stone-600 rounded-md hover:bg-stone-500 hover:text-stone-200"
            containerClasses="container mx-auto fixed inset-x-0 p-4 bg-emerald-100"
            cookieName="cookie-consent"
            buttonId="confirm"
            buttonText="Accept"
            declineButtonId="decline"
            declineButtonText="Decline"
            enableDeclineButton={true}
            disableStyles={true}
            onAccept={() => initializeAndTrack(location)}
        >
            <p>This website uses cookies 🍪 </p>
        </CookieConsent>
    );
}

export default CookieBar