import React from 'react'

//Footer 

const title = "About ShopCart";
const desc = "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: ' Umm Alfahem, Israel.',
    },
    {
        iconName: 'icofont-phone',
        text: ' +972506335404',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]


export const Footer = () => {
    return (
        <footer className='style-2'>
            <div className='footer-top dark-view padding-tb'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-col-1 justify-content-center'>
                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className='content'>
                                            <p>{desc}</p>
                                            <ul className='lab-ul office-address'>
                                                {
                                                    addressList.map((val,i) =>(
                                                        <li key={i}>
                                                         <i className={val.iconName}>{val.text} </i>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                            <ul className='lab-ul social-icons'>
                                                {
                                                    socialList.map((val,i) =>(
                                                        <li key={i}>
                                                         <a href="#" className={val.className}> <i className={val.iconName}>{val.text} </i></a>
                                                        </li>
                                                    ))
                                                }

                                            </ul>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{ItemTitle}</h4>
                                        </div>
                                        <div className='content'>
                                            <ul className='lab-ul office-address'>
                                                {
                                                    ItemList.map((val,i) =>(
                                                        <li key={i}>
                                                         <a href="#">{val.text}</a>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                           

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className='content'>
                                            <ul className='lab-ul office-address'>
                                                {
                                                    quickList.map((val,i) =>(
                                                        <li key={i}>
                                                         <a href="#">{val.text}</a>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                           

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                       
                        
                    </div>

                </div>

            </div>

        </footer>
    )
}
