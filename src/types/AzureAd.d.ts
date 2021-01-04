declare module '@dataTypes/Azure' {
    type TAzureHook = {
        auth: import('@azure/msal-browser').AuthenticationResult;
        msal: import('@azure/msal-react').IMsalContext;
        login: () => void;
    }
}
