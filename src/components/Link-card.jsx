import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { CopyIcon, DeleteIcon, DownloadIcon, TrashIcon } from 'lucide-react'
import useFetch from '@/hooks/use-fetch'
import { deleteUrl } from '@/db/apiUrls'
import { BeatLoader } from 'react-spinners'

const LinkCard = ({url,fetchUrls}) => {


    const downloadImage=()=>{
        const imageUrl=url?.qr;
        const fileName=url?.title;

        const anchor=document.createElement("a")
        anchor.href=imageUrl;
        anchor.download=fileName;

        document.body.appendChild(anchor)

        anchor.click()

        document.body.removeChild(anchor)

    }

    const {loading:loadingDelete,fn:fnDelete}= useFetch(deleteUrl,url?.id)

  return (
    <div className='mx-10 flex flex-col md:flex-row gap-5 border p-4 bg-gray-900 rounded-lg'>
        <img className='h-32 object-contain ring ring-blue-500 self-start' src={url?.qr} alt='qr code'/>

    <Link  to={`/link/${url?.id}`} className="flex flex-col flex-1">
    <span className='text-3xl font-extrabold hover:underline cursor-pointer'>{url?.title}</span>

    <span className='text-2xl text-blue-400 font-bold hover:underline cursor-pointer'> 
        https://trimrr-cyan.vercel.app/{url?.custom_url ? url?.custom_url :url.short_url }
    </span>
    <span className='flex items-center gap-1 hover:underline cursor-pointer'>{url.original_url }</span>
    <span className='flex items-end font-extralight text-sm flex-1'>{new Date(url.created_at).toLocaleString()}</span>
    </Link>


<div className='flex gap-2'>
    <Button variant="ghost" onClick={()=>
        navigator.clipboard.writeText(`https://trimrr-cyan.vercel.app/${url?.short_url}`)
    }>
        <CopyIcon/>
    </Button>
    <Button variant="ghost" onClick={downloadImage}>
        <DownloadIcon/>
    </Button>
    <Button variant="ghost" onClick={()=>fnDelete().then(()=>fetchUrls())}>
      {loadingDelete ? <BeatLoader size={5} color='white'/>:  <TrashIcon/>}
    </Button>
</div>

    </div>
  )
}

export default LinkCard