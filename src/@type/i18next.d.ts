export const defaultNS = "ns1";
export const resources = {
    en: {
        ns1,
        ns2,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["ns1", "ns2"],
    defaultNS,
    resources,
});

import { resources, defaultNS } from "./i18n";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources["en"];
    }
}
