import React from 'react'

const BlogHome = () => {
    const data = [
        {
            id:1,
            titleOne: "You can change the world",
            titleTwo: "Strong Style",
            paraOne: "How woemn are redirection Hollywood",
            paraTwo: "New ways to wear denim",
            name: "By Jasper Nugget",
            subTitle: "How to shop midnfully",
            qrCode: "/images/qrcode.png",
            cover: "images/blog%.jpg",
        },
    ]
    return (
        <>
        <section className='home'>
            <div className='left-content'>
                {data.map((value) => {
                    return (
                        <div className='content'>
                            <div className='logo'>
                                <h1>S</h1>
                                </div>
                                <div className="home-img">
                                    <img src={value.cover} alt=""/>
                                    </div>
                                    <div className='text'>
                                        <h1>{value.titleOne}</h1>
                                        <p>{value.name}</p>
                                        <span>{value.name}</span>
                                        </div>
                                        <div className='text text2'>
                                        <h1>{value.titletwo}</h1>
                                        <span>{value.subTitle}</span>
                                        </div>

                                        
                            </div>
                    )
                }
                )}
            </div>
            <div className='right-content'></div>

        </section>
        </>
    )
}
export default BlogHome; 