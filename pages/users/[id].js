import {useRouter} from "next/router";
import cl from '../../styles/ForFrieds.module.scss'
import {useState} from "react";

export  default function (){
    const router = useRouter()
    const {id} = router.query
    const [State, setState] = useState(false)

    const [Range, setrange] = useState(200)
    function RunAway(){
        setrange(Range + 100)
    }

    function RealCheck(){
        setState(true)
        setTimeout(()=>{
            router.push(`/users/realvalentine/${id}`)
        }, 5000)
    }

    return(
        <div className={cl.Main}>
            {State
                ?
                <div style={{fontSize: '50px'}}>хуй</div>
                :
                <div className={cl.YesNo}>
                    <h1>Вам пришла валентинка от Кирилла/кириешки/Кизила и так далее. Открыть?</h1>
                    <button onClick={()=>{RealCheck()}}>Yes</button>
                    <button style={{top: Range}} onMouseOver={RunAway}>no</button>
                </div>

            }
        </div>
    )
}