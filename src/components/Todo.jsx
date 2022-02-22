import React, { useState } from 'react';

import { BiTrash, BiPencil, BiInfoCircle } from 'react-icons/bi';

const Todo = () => {
  const [trashColor, setTrashColor] = useState('black');
  const [pencilColor, setPencilColor] = useState('black');
  const [infoColor, setInfoColor] = useState('black');

  return (
    <div className="flex flex-row justify-between items-center px-3 py-3 min-w-[32rem] border-[#B9B7BD] border rounded-md">
      <h1 className="text-xl text-black">Todo title</h1>
      <p className="text-sm text-[#868B8E]">Due: 22.02.2022</p>

      <div className="flex flex-row justify-between items-center">
        <BiInfoCircle
          className="w-7 h-7 hover:cursor-pointer mr-5"
          fill={infoColor}
          onMouseEnter={() => setInfoColor('#7EC8E3')}
          onMouseLeave={() => setInfoColor('black')}
        />
        <BiPencil
          className="w-7 h-7 hover:cursor-pointer mr-5"
          fill={pencilColor}
          onMouseEnter={() => setPencilColor('#B9B7BD')}
          onMouseLeave={() => setPencilColor('black')}
        />
        <BiTrash
          fill={trashColor}
          onMouseEnter={() => setTrashColor('#F51720')}
          onMouseLeave={() => setTrashColor('black')}
          className="w-7 h-7 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Todo;
