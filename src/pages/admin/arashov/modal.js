const Modal = ({i}) => {
    return (
        <dialog id={i?._id} className="modal">
            <div className="modal-box">
                <div className="flex items-center gap-2">
                    <img src={i?.image} alt="photo" width={200} height={200} style={{width: "100px", height: "auto"}} />
                    <h3 className="font-bold text-lg">{i?.fullName}</h3>
                </div>
                <p className="py-4 text-lg leading-10 mt-3">
                    {i?.email} <br/>
                    To'lov: {i?.payment ? "Qilingan" : "Qilinmagan"} <br/>
                    To'lov turi: {i?.payment && i?.paymentType} <br/>
                    Tasdiqlanish: {i?.verified ? "Tasdiqlangan" : "Tasdiqlanmagan"} <br/>
                    Referal Code: {i?.referralCode} <br/>
                    Referred Code: {i?.referred_code} <br/>
                    Wallet: {i?.wallet} <br/>
                </p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Modal