import React from 'react'

export const DownloadButton:React.FC<{store:Icon}> = (props:{store:Icon}) => {
  return (
    <button className='download-button'>
      <img src={props.store.iconUrl} alt={props.store.iconMeaning}></img>
      <div className='flex-column'>
        <p>Get it on</p>
        <h3>{props.store.iconMeaning}</h3>
      </div>
    </button>
  );
}
