import qrCodeSVG from '../assets/qr-code.svg'
import { useRef, useState } from 'react'
import QRCode from '../qrcode/qrcode'
import imageSizesList from '../constants'

const QRForm = () => {
    const [size, setSize] = useState('300')
    const [urlCode, setUrlCode] = useState("")
    const [showScan, setShowScan] = useState(false);
    const urlInputRef = useRef();
    const qrcodeRef = useRef();

    // Generate QR code
    const generateQRCode = () => {
        new QRCode("qrcode", {
            text: urlInputRef.current.value,
            width: size,
            height: size,
        });
    };

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            setUrlCode(() => "");
            setShowScan(() => false);
            const qr = document.getElementById("qrcode");
            while (qr.firstChild) {
                qr.removeChild(qr.lastChild);
            }
            if (!urlInputRef.current.value) return alert("Please enter a URL")
            generateQRCode()
            setShowScan(() => true);
            const saveUrl = qr.querySelector("canvas").toDataURL();
            setUrlCode(saveUrl);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <main>
            <div
                className="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row"
            >
                <div className="w-full md:w-2/3 mr-24">
                    <h1 className="text-3xl font-bold mb-5 md:text-4xl">QR Code Generator</h1>
                    <p className="mb-4">
                        QR Codes allow smartphone users to access your website simply and
                        quickly.
                    </p>
                    <p>
                        Enter your URL below to generate a QR Code and download the image.
                    </p>

                    <form onSubmit={handleSubmit} id="generate-form" className="mt-4">
                        <input
                            ref={urlInputRef}
                            id="url"
                            type="url"
                            placeholder="Enter a URL"
                            className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none mb-5"
                            required
                        />

                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
                            name="size"
                            id="size"
                        >
                            {imageSizesList.map(sizes => <option key={sizes[0]} value={sizes[0]}>{sizes[1]}</option>)}

                        </select>
                        <button
                            className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black"
                            type="submit"
                        >
                            Generate QR Code
                        </button>
                    </form>
                </div>
                <div className="h-full w-full md:w-1/3 self-center">
                    <img
                        className="w-1/2  m-auto mb-10 md:w-full"
                        src={qrCodeSVG}
                        alt="logo"
                    />
                </div>
            </div>
            <div
                id="generated"
                className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20"
            >
                <div ref={qrcodeRef} id="qrcode" className={`${showScan ? "block" : "hidden"} m-auto`}></div>
                <a
                    // id="save-link" 
                    className={`${urlCode ? "" : "hidden"} bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5`}
                    download="qrcode.png"
                    href={urlCode}
                >Save Image</a>
            </div>
        </main>
    )
}

export default QRForm
