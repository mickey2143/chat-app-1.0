"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MobilePage = dynamic(() => import("@/components/MobilePage"))
const DesktopPage = dynamic(() => import("@/components/DesktopPage"))

function page() {
    const [isMobile, setIsMobile] = useState(false)
    // const [client, setClient] = useState(false)
    useEffect(() => {
        // setClient(true)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    // if (!client) {
    //     return <>Loading</>
    // }

    return (
        <>
            {(isMobile) ? <MobilePage /> : <DesktopPage />}
        </>

    )
}


export default page
