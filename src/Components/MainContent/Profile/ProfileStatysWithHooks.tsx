import React, {useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks=(props:PropsType)=>{
       let stateWithSetState=useState(false)

        return (<div>
            {true &&
            <div><span >{props.status || 'No status'}</span></div>}

            {false &&
            <div><input  autoFocus={true}
                        /></div>}
        </div>)


}