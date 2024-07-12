'use client'
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Reviews = () => {
    const data = [
        {
            text: "CleanJob transformed our business! We used to struggle with finding consistent work, but now we're busier than ever. The platform is easy to use and the leads are high quality.",
            author: "John Doe",
            rating: 5,
            companyName: "Sparkling Clean Co.",
            authorDesignation: "Owner"
        },
        {
            text: "I was skeptical at first, but CleanJob exceeded my expectations. Within a month, I secured five new contracts and saw a significant increase in revenue. Highly recommend!",
            author: "Jane Smith",
            rating: 5,
            companyName: "Green Clean Solutions",
            authorDesignation: "Manager"
        },
        {
            text: "Thanks to CleanJob, our small cleaning company has grown exponentially. We now have a steady stream of clients and our team is always busy. It's a game-changer!",
            author: "Michael Johnson",
            rating: 5,
            companyName: "Shiny Homes Cleaning",
            authorDesignation: "Director"
        },
        {
            text: "CleanJob has been a lifesaver for our business. The platform is user-friendly and the support team is fantastic. We've doubled our client base in just three months.",
            author: "Emily Brown",
            rating: 5,
            companyName: "Eco-Friendly Cleaners",
            authorDesignation: "Founder"
        },
        {
            text: "We've tried other lead generation services before, but none compare to CleanJob. The quality of leads is top-notch and the return on investment is incredible. Our business has never been better.",
            author: "David Wilson",
            rating: 5,
            companyName: "Spotless Spaces",
            authorDesignation: "CEO"
        },
        {
            text: "CleanJob makes it easy to find new clients and manage our workload. We've seen a consistent flow of opportunities and have been able to grow our business sustainably.",
            author: "Sarah Miller",
            rating: 4,
            companyName: "Premier Cleaning Services",
            authorDesignation: "Manager"
        }
    ];


    return (
        <div className='my-10'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    data?.map((d, i) => {
                        return (
                            <div key={i} className='space-y-[16px] bg-[#f5fcf5] p-6 rounded-lg'>
                                <div>
                                    <h3 className='font-semibold text-lg'>
                                        {d.author}
                                    </h3>
                                    <p className='text-primary text-sm'>{d.authorDesignation}</p>
                                </div>
                                <div>
                                    <Rating
                                        readonly
                                        fullSymbol={<FaStar className="text-blue-500" />}
                                        emptySymbol={<FaStar className="text-gray-400" />}
                                        initialRating={d.rating}
                                        style={{ maxWidth: 120, margin: 'auto' }}
                                    />
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold mb-2'>{d.companyName}</h3>
                                    <p className='text-base text-primary'>{d.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Reviews;