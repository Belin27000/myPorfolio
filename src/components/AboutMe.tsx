import { useTranslation } from "react-i18next";

import Button from "./Button/Button";

const AboutMe = () => {

    const { t } = useTranslation();

    const devStack = t('DEV');

    const more = devStack[0].more;
    const opportunities1 = devStack[0].opportunities1;
    const opportunities2 = devStack[0].opportunities2;
    return (
        <div className='AboutMe text-black dark:text-white my-5'>
            <h3 className="text-3xl mb-5">{more}</h3>
            <p className="text-xl p-10">{opportunities1}</p>
            <p className="text-xl p-10">{opportunities2}</p>
            <Button />
        </div>
    );
};

export default AboutMe;