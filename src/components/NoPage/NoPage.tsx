import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NoPage() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/')
    }, [])
    return ( <div>
    </div> );
}

export default NoPage;