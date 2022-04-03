import React, {useState, useEffect, useRef} from 'react'
import './dropdown.css'

const Dropdowns = ({options, name, optionsType, }) => {
  const placeholder = "Please choose from the dropdown"
  const [activeOptions, setActiveOptions] = useState([placeholder])
  const [optionsOpen, setOptionsOpen] = useState(false)

  useEffect(() => {
    if(!activeOptions.length){
      setActiveOptions([placeholder])
    } else if(activeOptions.length>1 && activeOptions.includes(placeholder)){
      setActiveOptions(activeOptions => {
        let indx = activeOptions.indexOf(placeholder)
        activeOptions.splice(indx, 1)
        return [...activeOptions]
      })
    }
  });

  const onTitleClick = () => {
    optionsOpen ? setOptionsOpen(false) : setOptionsOpen(true)
  }

  const onMultOptionClick = (e, option) => {
    if(!e.target.checked){
      setActiveOptions(activeOptions => {
        let indx = activeOptions.indexOf(option.title)
        activeOptions.splice(indx, 1)
        return [...activeOptions]
      })
    } else {
      if(activeOptions.indexOf(option.title)<0){
        setActiveOptions(arr => [...arr, option.title]) 
      }
    }
  }

  const onSingleOptionClick = (option) => {
      setActiveOptions([option.title]) 
      onTitleClick()
  }

  const buildOptionList= () => { 
    return options.map((option) => {
        if(optionsType==='multiple'){
          return (
            <li key={option.key} value={option.key} className={activeOptions.includes(option.title) ? 'selected': 'regular'}>
              <label className='checkbox-cont'><span className='title-wrap'>{option.title}</span>
              <input type="checkbox" onChange={(e) => onMultOptionClick(e, option)}/>
              <span className="checkmark"></span>
              </label>
            </li>
          )
        } else {
          return (
          <li className={activeOptions.includes(option.title) ? 'singleLi selected': ' singleLi regular'} key={option.key} value={option.key} onClick={() => onSingleOptionClick(option)}><span className='title-wrap single'>{option.title}</span></li>
          )
        }
    })
  }

  const showTitle = () => {
    if(activeOptions.length > 1){
      return activeOptions.map((actOpt) => <span key={actOpt}>{activeOptions.indexOf(actOpt)===0 ? actOpt : `, ${actOpt}`}</span>)
    }else {
      return activeOptions[0]
    }
  }

  return (
    <div className='select-wrap'>
      <div className='label'>{name}</div>
      <div id="list" onClick={onTitleClick}>
        <div className='list-title'>
        {showTitle()}
        <div className={optionsOpen ? 'openedIcon' : 'd-none'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"/></svg>
        </div>
        <div className={optionsOpen ? 'd-none' : 'closedIcon'} onClick={onTitleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
        </div>
        </div>
      </div>
      <ul className={optionsOpen ? 'open' : 'closed'}>
        {buildOptionList()}
      </ul>
    </div>
  )
}

export default Dropdowns
