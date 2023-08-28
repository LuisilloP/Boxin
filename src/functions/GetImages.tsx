// import { collection, onSnapshot } from "firebase/firestore"
import db from "./firebase"
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import Image from "next/image";

import React, { useEffect, useState } from 'react'

type Props = {}

const GetImages = (props: Props) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);


    async function fetchImageUrls() {
        const imagesRef = ref(db, 'gs://boxinclubovalle.appspot.com/Box'); // Cambia a la ruta de tu carpeta de imágenes
        const urls: string[] = [];
        try {
            const files = await listAll(imagesRef);
            for (const file of files.items) {
                const url = await getDownloadURL(file);
                urls.push(url);
            }
            setImageUrls(urls);
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    }

    fetchImageUrls();

    return (
        <>
            {/* <div className=" w-full max-w-5xl columns-3 p-5 pb-10 mx-auto mb-10 gap-5  space-y-5 columns:3 "> */}
            <div className="grid-columns-special px-2 md:px-5 ">
                {imageUrls.map((url, index) => (

                    <Image key={index} width={500} height={0} className="BoxImageGallery" src={url} alt={"BoxImage" + index} ></Image>

                ))}
            </div>
        </>
    )
}

export default GetImages
