"use client"


import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

type UploadResult = { 
  info: { 
    public_id: string;

  },

  event: "sucess";
  
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton 
     onUploadAdded ={() => {

      console.log('upload success');

     }} uploadPreset="quqpwcfx" />

     <CldImage
     width="960"
     height="600"
     src="<Public ID>"
     sizes="100vw"
     alt="Description of my image"/>

    </main>
  );
}
