import React, {useState} from 'react';
import {useRouter} from 'next/router'
import cl from '../styles/index.module.scss'

const Index = () => {


     const router = useRouter();


    const [inputName, setInputName] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const NamesWhoCan = ['алиса', 'егор', "богдан", "илья", "варя", "настя", "арина" ]
    const PasswordCheck = ['кирил', 'кирилл', 'кириешка', 'млемпик', 'тупик']
    function Check(){

        if(inputName === undefined || inputPassword === undefined || inputName === "" || inputPassword === "")  {
            alert('ай ай ай,надо свое имя вводить!)')
            return 0
        }

        if(NamesWhoCan.includes(inputName.toLowerCase()) && PasswordCheck.includes(inputPassword.toLowerCase())){

            router.push(`/users/${inputName}`);


        }else {
            alert('ай ай ай,надо свое имя вводить!) или неверный пароль Example: Кириешка)')
        }


    }


    return (
        <div className={cl.Main}>
            <div className={cl.Container}>
                <div className={cl.Heart}>
                    <h1 style={{color: 'white'}}>Впишите ваше имя</h1>
                    <input value={inputName}   onChange={(e)=>{setInputName(e.target.value)}} className={cl.input}/>
                    <h1 style={{color: 'white'}}>Введите пароль</h1>
                    <h1 className={cl.PostScriptum}>P.S Пароь это имя отправителя валентинки ;)</h1>
                    <input  value={inputPassword}   onChange={(e)=>{setInputPassword(e.target.value)}} className={cl.input}/>
                    <button onClick={Check} className={cl.Button}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Index;