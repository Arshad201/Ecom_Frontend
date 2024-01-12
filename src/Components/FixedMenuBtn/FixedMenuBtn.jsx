import { useState } from "react";
import "./FixedMenuBtn.css";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const FixedMenuBtn = () => {

    const [viewMenu, setViewMenu] = useState(false);
    
  return (
    <div className="fixedMenuBtn">
      <div className={`wrapper ${viewMenu ? 'open': 'close'}`}>
        <div className="links-wrapper">
            <a href="/" className="link">Home</a>
            <a href="/" className="link">Shop All</a>
        </div>
       {!viewMenu && <button onClick={()=>setViewMenu(!viewMenu)}>
            <HiMiniBars3CenterLeft className='barsIcon' /> MENU
        </button>}
        {viewMenu && <button onClick={()=>setViewMenu(!viewMenu)}>
            <RxCross2 className='barsIcon' />
        </button>}
      </div>
    </div>
  )
}

export default FixedMenuBtn
