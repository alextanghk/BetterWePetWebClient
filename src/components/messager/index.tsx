import React from 'react';
// import { Link } from 'react-router-dom';

// Import Icons
import { IcoChatWhite } from '../icons'

// Import Functions
// import { useTranslation } from 'react-i18next';

function MinMessager() {
    // const { t } = useTranslation();
    // const [open, setOpen] = useState<boolean>(false);
    return (<>
      <div className="relative ml-1.5 my-1.5 sm:m-1.5">
        <button className="rounded-full p-1 btn-bwp-green">
          <img src={IcoChatWhite} alt="user" className="w-9 h-9"/>
        </button>
        <span className="rounded-2xl absolute top-1 left-5 px-1.5 py-0.5 text-xs font-semibold bg-bwp-red text-bwp-white">99+</span>
      </div>
    </>)
  }

export { MinMessager }