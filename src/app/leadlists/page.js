import Image from "next/image";
import Link from "next/link";
import image from '../../../public/assets/OBJECTS.svg'

const page = () => {

    return (
        <div className="pt-40 pb-20 px-10 space-y-10">
            <h2 className="text-5xl poppins font-black text-center">You don't have any Lead Lists made</h2>
            <Image src={image} alt="lead-list" className="mx-auto"/>
            <div className="w-fit mx-auto">
                <Link href={'/make-a-list'}><button className="btn bg-primary text-white">Make a Lead List</button></Link>
            </div>
        </div>
    );
};

export default page;