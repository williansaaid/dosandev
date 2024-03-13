"use client"
import { FormEvent, useState } from 'react';
import { Button ,message } from 'antd'


const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        console.log("JSON Data to be sent:", JSON.stringify(formData));
        const response = await fetch('https://backend-devrise.vercel.app/send-email', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if(response.status){
            message.success("Email enviado exitosamente")
            setLoading(false)
        }

    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-10 pt-8'
            >
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="text-white w-full rounded-xl py-3 px-4 bg-yellow/20 placeholder-gray/70 border-solid border-2 border-yellow/50 hover:bg-yellow/30 duration-300 focus:bg-yellow/60 placeholder:italic"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tucorreo@email.com"
                    className="text-white w-full rounded-xl py-3 px-4 bg-yellow/20 placeholder-gray/70 border-solid border-2 border-yellow/50 hover:bg-yellow/30 duration-300 focus:bg-yellow/60 placeholder:italic"
                    onChange={handleChange}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Escribe un mensaje..."
                    className="text-white w-full rounded-xl py-3 px-4 bg-yellow/20 placeholder-gray/70 border-solid border-2 border-yellow/50 hover:bg-yellow/30 duration-300 focus:bg-yellow/60 placeholder:italic"
                    onChange={handleChange}
                />
                <Button
                    type='default'
                    htmlType='submit'
                    loading={loading}
                    className='w-full h-auto bg-yellow hover:bg-yellow/80 text-dark font-bold rounded-xl text-xl py-3 px-4 duration-300 italic border-none'
                >
                    Enviar Mensaje
                </Button>
            </form>
        </>
    );
};

export default ContactForm;
