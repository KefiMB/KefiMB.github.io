import React from 'react'

const BlogHome = () => {
    const data = [
        {
            id:1,
            titleOne: "You can change the world",
            titleTwo: "Strong Style",
            paraOne: "How women are redirection Hollywood",
            paraTwo: "New ways to wear denim",
            name: "By Kefilwe Magasa",
            subTitle: "Mindful Thinking",
            qrCode: "/images/qrcode.png",
            cover: "./images/blackwoman.jpg",
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
                                <h1>KM</h1>
                                </div>
                                <div className="home-img">
                                    <img src="/images/blackwoman.jpg" alt=""/>
                                    </div>
                                    <div className='text'>
                                        <h1>{value.titleOne}</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur 
                                        voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto 
                                        fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. 
                                        Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, 
                                        eveniet aliquid culpa officia aut!</p>
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