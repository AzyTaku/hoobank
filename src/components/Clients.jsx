import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full `}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
                    <img src={client.logo} alt="client" className=" w-[150px] h-[90px] sm:w-[192px] w-[100px] object-contain cursor-pointer opacity-50 hover:opacity-100" />
                </div>
            ))}
        </div>
    </section>
)

export default Clients