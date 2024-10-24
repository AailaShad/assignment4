









import Card  from"../app/component/Card";

import React from 'react';

export default function Name() {
    return (
        <div>
            <div className='bg-blue-700 w-64 h-52 mr-36 pl-20 text-white px-6 '>
                <Card Name="Eman" Age="13" RollNo="2347" Class="7th" Image="profile.jpg.jpeg" />
            </div>
            <br />
            <div className='bg-slate-500 w-64 h-52 mr-36 pl-20 text-slate-950 px-6'>
                <Card Name="Anabia" Age="15" RollNo="3472" Class="10th" Image="profile.jpg.jpeg" />
            </div>
            <br />
            <div className='bg-neutral-950 w-64 h-52 mr-36 pl-20 text-red-700 px-6'>
                <Card Name="Hoorain" Age="18" RollNo="4897" Class="11th" Image="profile.jpg.jpeg" />
            </div>
        </div>
    );
}








