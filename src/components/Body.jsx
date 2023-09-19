import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [image,setImage] = useState("");
    const handleClick = () =>{
        inputRef.current.click();
    }

    const handleImageChange = (event) =>{
        const file = event.target.files[0]
        console.log(file)
        setImage(event.target.files[0])
    }

  return (
    <div className='w-full h-screen static'>
        <div className='w-1/3 h-56 absolute top-[100px] left-[50px]'> 
            <h1 className='font-sans text-4xl antialiased font-bold text-left indent-5 p-3  text-white leading-relaxed'>ResoLift Your free Image Enhancer</h1>
            <h3 className=' text-white pr-3'>Increase Image quality without loosing its original properties</h3>
            {/* uploading box */}
            <div className='rounded-xl border-2 w-full h-80 border-yellow-100 mt-6 border-dashed cursor-pointer' onClick={handleClick} onChange={handleImageChange}>
                {image ?  <img src={URL.createObjectURL(image)} ></img> : <></> }
                <input type='file' ref={inputRef} onChange={handleImageChange} className='hidden'></input>
                <h5 className='text-white relative top-[170px] left-[160px]'>Drop your image here</h5>
                <button onClick={()=>navigate("/Upload")} className='bg-white rounded-xl h-[40px] 
                w-60 font-bold relative top-[180px] left-[120px] '>Upload</button>
                
            </div>
        </div>
    </div>
  )
}

export default Body