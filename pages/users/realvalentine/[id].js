import {useRouter} from "next/router";
import cl from '../../../styles/RealValentine.module.scss'
import {useState} from "react";

export  default function (){
    const router = useRouter()
    const {id} = router.query

    const [prekol, setprikol] = useState(false)

    setTimeout(()=>{
        setprikol(true)
    }, 10000)

    return(
        <div className={cl.Main}>
            <div>{prekol ? `${id}` : "Саси) тупик"}</div>

            <h1>{prekol ? 'Кароуче броу,эта фигня сделана на коленке,праздник конечно не такой как новый год,но почему бы и нет, хотел бы вам сказать что я вас всех очень ценю ♥ ' : "хуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуйхуй"}</h1>
        </div>
    )
}